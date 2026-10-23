#!/usr/bin/env bash
# Run on EC2 after git pull (e.g. /var/www/zentroverse-backend)
set -euo pipefail
cd "$(dirname "$0")/.."

echo "Installing root + hr dependencies..."
npm install

echo "Building PeopleFlow (hr)..."
npm run hr:build

echo "Restarting PM2 app zentroverse-api..."
pm2 restart zentroverse-api || pm2 start src/server.js --name zentroverse-api

echo "Done. Check: curl -s http://127.0.0.1:8787/health"
