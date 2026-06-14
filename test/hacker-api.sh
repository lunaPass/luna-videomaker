#!/usr/bin/env bash
set -euo pipefail

API_KEY="AIzaSyCJ8eQmDW-Yn7uibak9FDtSeI9l5pAD_60"
PROJECT_ID="video-maker-manager-9a47c"
ADMIN_EMAIL="lunaheloisaa82@gmail.com"
ADMIN_PASS="LunaCanto@2026"

FAIL=0
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

pass() { echo -e "  ${GREEN}PASS${NC} $1"; }
fail() { echo -e "  ${RED}FAIL${NC} $1"; FAIL=$((FAIL + 1)); }

echo "=========================================="
echo "  Teste de Seguranca — Simulacao Hacker"
echo "=========================================="
echo ""

# ── Teste 1: Sign-up bloqueado ──────────────────────────────
echo "[1] Criar conta sem autorizacao (sign-up)"
TS=$(date +%s)
RESULT=$(curl -s -X POST "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"hacker-${TS}@evil.com\",\"password\":\"Hack123!\",\"returnSecureToken\":true}")
MSG=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('error',{}).get('message','OK'))" 2>/dev/null)
if echo "$MSG" | grep -q "ADMIN_ONLY_OPERATION"; then
  pass "sign-up bloqueado (${MSG})"
else
  fail "sign-up NAO bloqueado: ${MSG}"
fi
echo ""

# ── Teste 2: Firestore sem token ────────────────────────────
echo "[2] Ler empresas sem autenticacao"
RESULT=$(curl -s "https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/empresas")
MSG=$(echo "$RESULT" | python3 -c "
import sys, json
r = json.load(sys.stdin)
m = r.get('error', {}).get('message', '')
print(m or 'OK (no auth - no error)')
" 2>/dev/null)
if echo "$MSG" | grep -qi "missing\|required authentication\|insufficient permissions\|unauthenticated"; then
  pass "Firestore bloqueou sem auth: ${MSG}"
else
  fail "Firestore respondeu: ${MSG}"
fi
echo ""

# ── Teste 3: Firestore com token invalido ───────────────────
echo "[3] Ler empresas com token falso"
RESULT=$(curl -s "https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/empresas" \
  -H "Authorization: Bearer FAKE_TOKEN_12345")
MSG=$(echo "$RESULT" | python3 -c "
import sys, json
r = json.load(sys.stdin)
m = r.get('error', {}).get('message', '')
print(m or 'OK (fake token - no error)')
" 2>/dev/null)
if echo "$MSG" | grep -qi "invalid\|missing\|unauthenticated\|insufficient"; then
  pass "Firestore rejeitou token falso: ${MSG}"
else
  fail "Firestore respondeu: ${MSG}"
fi
echo ""

# ── Teste 4: Admin consegue logar ───────────────────────────
echo "[4] Admin legitimo consegue autenticar"
RESULT=$(curl -s -X POST "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"${ADMIN_EMAIL}\",\"password\":\"${ADMIN_PASS}\",\"returnSecureToken\":true}")
ID_TOKEN=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('idToken',''))" 2>/dev/null)
if [ -n "$ID_TOKEN" ]; then
  pass "Admin autenticou com sucesso"

  # ── Teste 5: Admin acessa Firestore ───────────────────────
  echo "[5] Admin acessa dados no Firestore"
  RESULT=$(curl -s "https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/empresas" \
    -H "Authorization: Bearer ${ID_TOKEN}")
  MSG=$(echo "$RESULT" | python3 -c "
import sys, json
r = json.load(sys.stdin)
if 'error' in r:
    print('ERROR: ' + r['error']['message'])
else:
    docs = r.get('documents', [])
    count = len(docs)
    print('OK: ' + str(count) + ' empresas retornadas')
" 2>/dev/null)
  if echo "$MSG" | grep -q "^OK"; then
    pass "Admin acessou Firestore: ${MSG}"
  else
    fail "Admin nao conseguiu acessar Firestore: ${MSG}"
  fi
else
  fail "Admin NAO conseguiu autenticar"
fi
echo ""

# ── Resumo ──────────────────────────────────────────────────
echo "=========================================="
if [ "$FAIL" -eq 0 ]; then
  echo -e "  ${GREEN}Todos os testes passaram${NC}"
else
  echo -e "  ${RED}${FAIL} teste(s) falharam${NC}"
fi
echo "=========================================="
exit "$FAIL"
