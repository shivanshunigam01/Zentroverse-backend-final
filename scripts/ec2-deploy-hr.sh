#!/usr/bin/env bash
# One-shot EC2 deploy for HR (/api/v1). Run from /var/www/zentroverse-backend
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Backup .env"
cp -a .env /tmp/zentroverse-backend.env.bak 2>/dev/null || true

echo "==> Git pull (stash local .env if tracked)"
git stash push -m "local-env" -- .env 2>/dev/null || true
git pull origin master
cp -a /tmp/zentroverse-backend.env.bak .env 2>/dev/null || true

echo "==> Install deps + verify hr/dist"
npm install
npm run verify:peopleflow

echo "==> Restart API"
pm2 delete zentroverse-api 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo "==> Health"
curl -s http://127.0.0.1:8787/health | head -c 500
echo ""
curl -s http://127.0.0.1:8787/api/v1/health | head -c 500
echo ""
