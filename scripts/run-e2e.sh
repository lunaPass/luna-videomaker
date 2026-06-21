#!/bin/bash
set -e

export JAVA_HOME="$HOME/java"
export PATH="$JAVA_HOME/bin:$PATH"

# Kill any existing emulator before starting fresh
lsof -ti:8080 -ti:9099 -ti:4000 2>/dev/null | xargs -r kill -9
sleep 1

echo "==> Iniciando Firebase Emulators..."
npx -y firebase-tools@latest emulators:start --only firestore,auth --project test &
EMULATOR_PID=$!

cleanup() {
  echo "==> Parando emulators..."
  kill $EMULATOR_PID 2>/dev/null
  wait $EMULATOR_PID 2>/dev/null || true
  echo "==> Emulators parados."
}
trap cleanup EXIT

echo "==> Aguardando emulators ficarem prontos..."
for i in $(seq 1 30); do
  if curl -s http://localhost:4000 > /dev/null 2>&1; then
    echo "==> Emulators prontos!"
    break
  fi
  if [ $i -eq 30 ]; then
    echo "==> ERRO: Emulators não iniciaram a tempo"
    exit 1
  fi
  sleep 1
done

echo "==> Populando seed data..."
FIRESTORE_EMULATOR_HOST=localhost:8080 \
FIREBASE_AUTH_EMULATOR_HOST=localhost:9099 \
  node scripts/seed.mjs

echo "==> Executando testes..."
npx playwright test "$@"
