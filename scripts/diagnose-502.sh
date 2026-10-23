#!/usr/bin/env bash
# Run on EC2 when nginx shows 502 for backend.zentrosure.com
set -uo pipefail
cd "$(dirname "$0")/.."

echo "========== 1) Port 8787 =========="
ss -tlnp 2>/dev/null | grep 8787 || echo "NOTHING listening on 8787 (this causes nginx 502)"

echo ""
echo "========== 2) PM2 zentroverse-api =========="
pm2 describe zentroverse-api 2>/dev/null | head -30 || echo "PM2 app zentroverse-api not found"

echo ""
echo "========== 3) Last 40 log lines =========="
pm2 logs zentroverse-api --lines 40 --nostream 2>/dev/null || true

echo ""
echo "========== 4) Quick node smoke (5s) =========="
timeout 5 node src/server.js 2>&1 | head -25 || echo "(node exited or timed out — read errors above)"

echo ""
echo "========== 5) Files =========="
ls -la hr/dist/routes/index.js 2>/dev/null || echo "MISSING hr/dist/routes/index.js — run: git fetch && git reset --hard origin/master"
test -f .env && echo ".env exists" || echo "MISSING .env"
test -d node_modules/cookie-parser && echo "cookie-parser OK" || echo "Run: npm install"
test -d hr/node_modules && echo "hr/node_modules OK" || echo "Run: npm install (postinstall runs hr:install)"

echo ""
echo "Fix: bash scripts/ec2-deploy-hr.sh  OR  see DEPLOY_LIVE.md"
