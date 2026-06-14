# Luna Videomaker

Vue 3 SPA (not Nuxt) — Firebase stack for video production tracking. All UI in Portuguese (pt-BR).

## Commands

```sh
npm run dev       # Vite dev server
npm run build     # vue-tsc typecheck + vite build (run both before committing)
npm run preview   # Vite preview of built output
./deploy.sh       # build + gh-pages deploy (requires GitHub auth)
```

```sh
npm run test       # npx playwright test (requires dev server running in test mode)
npx vite --mode test    # start dev server in test/local mode for tests
```

No lint or format commands exist. No pre-commit hooks.

## Architecture

- **Firestore**: `empresas/{id}/pessoas/{id}/videos/{id}` (3-level nested subcollections)
- **Auth**: Firebase Email/Password — admin-only; no user registration flow
- **Public route** `/v/:slug?token=...` — no auth required, access by token
- **Base path**: `/luna-videomaker/` — set in `vite.config.ts` base and `createWebHistory`
- **Alias**: `@/` → `src/` (configured in both Vite and tsconfig)
- **State**: Composables with module-level refs (singleton pattern), NOT Pinia stores (Pinia is imported in `main.ts` but unused)
- **Styling**: Tailwind CSS via PostCSS, no component library

## Key files

| File | Purpose |
|---|---|
| `src/firebase/init.ts` | Firebase app init, exports `db` + `auth` |
| `src/firebase/db.ts` | All Firestore CRUD (empresas, pessoas, videos, config) |
| `src/firebase/auth.ts` | login, logout, onAuthChange wrappers |
| `src/router/index.ts` | All routes + auth guard |
| `firestore.rules` | Security rules (also deploy separately via Firebase CLI) |
| `.env` (ignored) | `VITE_FIREBASE_*` vars — copy from `.env.example` |
| `.env.test` | Overrides `.env` for `vite --mode test` — sets empty API key for local-mode Playwright tests |
| `e2e/xlsx.spec.ts` | 2 tests: XLSX export content verification + import creates videos |

## Data model conventions

- Each subcollection has `ordem: number` for ordering
- `token` field (nanoid 32) is the public access key, shared via URL `?token=`
- Firestore Timestamps stored as `criadoEm`; converted to JS Date on read
- Video statuses: `gravado | editando | revisao | postado`

## Known quirks

- `useAuth` composable relies on `onMounted` for the auth listener — only works inside components, not in route guards. The router guard in `src/router/index.ts` imports `auth` directly from `firebase/init.ts` instead.
- `getPessoaByToken` scans ALL empresas linearly — no Firestore index needed but O(n) reads.
- XLSX composable uses `readAsBinaryString` (deprecated in some browsers — FileReader API).
- `import('exceljs')` dynamically loaded in XlsxExportButton / XlsxImportButton — keeps bundle small.

## Local development mode (no Firebase)

When `VITE_FIREBASE_API_KEY` is empty/undefined, the app runs in **local mode** using `localStorage` instead of Firebase. No `.env` config needed.

- Login with any email/password — credentials are ignored; app stores `{ email }` in `localStorage`
- All CRUD (empresas, pessoas, videos, config) reads/writes `localStorage`
- **Seed data** (3 empresas, 8 pessoas, 16 videos) auto-creates on first load if `luna_empresas` key is absent
- Clear `localStorage` (`localStorage.clear()` in DevTools) to reset

### How it works

`src/firebase/init.ts` exports `isLocalMode` flag. `auth.ts` and `db.ts` check it on every function call and route to either localStorage or real Firebase SDK.

### Switching back to Firebase

Fill in `VITE_FIREBASE_*` in `.env` → `isLocalMode` becomes `false` → real Firebase SDK used. No code changes needed.
