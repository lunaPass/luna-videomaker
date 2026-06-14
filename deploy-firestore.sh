#!/bin/bash
set -e

echo "==> Deployando regras do Firestore..."
npx -y firebase-tools@latest deploy --only firestore:rules

echo "==> Deploy concluído!"
