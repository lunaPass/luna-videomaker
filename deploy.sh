#!/bin/bash
set -e

echo "==> Buildando projeto..."
npm run build

echo "==> Deployando para GitHub Pages..."
npx gh-pages -d dist

echo "==> Deploy concluído!"
