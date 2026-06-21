#!/bin/bash
set -e

echo "==> Deployando regras e índices do Firestore..."
npx -y firebase-tools@latest deploy --only firestore

echo "==> Deploy concluído!"
