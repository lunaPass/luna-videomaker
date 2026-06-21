#!/bin/bash
set -e

echo "==> Buildando projeto..."
npm run build

echo "==> Copiando index.html para 404.html (SPA fallback)..."
cp dist/index.html dist/404.html

echo "==> Deployando para GitHub Pages..."
GH_TOKEN=$(gh auth token) npx gh-pages -d dist

echo "==> Deploy concluído!"
