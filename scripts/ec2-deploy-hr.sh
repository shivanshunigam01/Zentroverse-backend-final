#!/usr/bin/env bash
# One-shot EC2 deploy for HR (/api/v1). Run from /var/www/zentroverse-backend
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Backup .env (never commit this file)"
if [[ -f .env ]]; then
  cp -a .env /tmp/zentroverse-backend.env.bak
else
  echo "WARN: no .env — copy from .env.example and configure MONGODB_URI"
fi

echo "==> Sync repo to origin/master (discards accidental edits on the server)"
git fetch origin master
git reset --hard origin/master
chmod +x scripts/*.sh 2>/dev/null || true

if [[ -f /tmp/zentroverse-backend.env.bak ]]; then
  cp -a /tmp/zentroverse-backend.env.bak .env
fi

echo "==> Install deps + verify hr/dist"
npm install
npm run verify:peopleflow

echo "==> Restart API"
pm2 delete zentroverse-api 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo "==> Health (peopleflow must be true; /api/v1/health must not 404)"
curl -s http://127.0.0.1:8787/health | head -c 600
echo ""
curl -s http://127.0.0.1:8787/api/v1/health | head -c 600
echo ""
