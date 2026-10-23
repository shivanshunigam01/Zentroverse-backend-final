#!/usr/bin/env bash
# EC2: fix git pull blocked by .env, then rely on hr/dist copied from your PC (if tsc is Killed)
set -euo pipefail
cd /var/www/zentroverse-backend

if [[ -f .env ]]; then
  cp -a .env /tmp/zentroverse-backend.env.bak
fi

git stash push -u -m "local env backup" -- .env 2>/dev/null || true
git pull origin master

if [[ -f /tmp/zentroverse-backend.env.bak ]]; then
  cp -a /tmp/zentroverse-backend.env.bak .env
fi

if [[ ! -f hr/dist/routes/index.js ]]; then
  echo "ERROR: hr/dist missing. Build on your PC and run:"
  echo "  scp -r hr/dist ubuntu@THIS_SERVER:/var/www/zentroverse-backend/hr/"
  exit 1
fi

pm2 delete zentroverse-api 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo "---"
curl -s http://127.0.0.1:8787/health
echo ""
curl -s http://127.0.0.1:8787/api/v1/health
echo ""
