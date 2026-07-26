# Fix: Priorizados button sizing + remove stat cards

## Problem

1. StatusFilter buttons wrap to 2 lines → Priorizados stretches to 76px (same height)
2. Stat cards at top are redundant now that filters show counts

## Changes

### 1. `src/components/public/StatusFilter.vue` (line 21)
- `flex-nowrap` → `flex-wrap` (restore wrapping)
- Keep `shrink-0` on buttons

### 2. `src/views/public/VerView.vue`

**Add `items-center` to outer filter container** (line 392):
```html
<div class="flex overflow-x-auto gap-2 pb-1 scrollbar-hide items-center">
```

**Remove stat cards block** — delete lines ~334-356:
```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
  <button v-for="s in VIDEO_STATUS_ORDER" ...>
    <div class="text-2xl font-bold">{{ statusCount[s] || 0 }}</div>
    <div class="text-sm text-gray-500 mt-1">{{ t('status.' + s) }}</div>
  </button>
</div>
```

The `statusCount` computed property is still used by StatusFilter (`:counts="statusCount"`), so it stays.

## Result

- StatusFilter wraps naturally on narrow widths
- Priorizados stays at 34px height (no stretch), vertically centered via `items-center`
- Stat cards removed — filters are now the primary filtering mechanism
