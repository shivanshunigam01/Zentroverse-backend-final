# Fix live Zentroverse admin (`zentroverse.com`)

The live site calls **`https://backend.zentrosure.com`**.  
Admin login fails until that server runs **`Zentroverse-backend-final`** with a working **`MONGODB_URI`**.

## 1. Check current problem (from your PC)

```bash
curl https://backend.zentrosure.com/health
```

**Broken today looks like:**

```json
{ "service": "trader-backend-mvc", "mongo": { "readyState": 0 } }
```

**Fixed should look like:**

```json
{ "service": "zentroverse-api", "mongo": { "readyState": 1 } }
```

---

## 2. SSH into the server (EC2 / VPS for `backend.zentrosure.com`)

Use the same machine where `backend.zentrosure.com` points (Elastic IP / A record).

---

## 3. Install or update the API

```bash
cd /var/www   # or your app folder
git clone https://github.com/shivanshunigam01/Zentroverse-backend-final.git zentroverse-api
# OR if folder exists:
cd zentroverse-api && git pull origin master

npm install
```

---

## 4. Create `.env` on the server (never commit this file)

```bash
nano .env
```

Paste (use your **current** Atlas password after rotation):

```env
NODE_ENV=production
PORT=8787
USE_MEMORY_DB=false
MONGODB_URI=mongodb+srv://manmohanjha2022_db_user:YOUR_PASSWORD@zentroverse.bcq4bws.mongodb.net/zentroverse?retryWrites=true&w=majority&appName=zentroverse

ADMIN_EMAIL=admin@zentroverse.in
ADMIN_PASSWORD=Zentro@2026
ADMIN_PANEL_TOKEN=ZV-ADMIN-2026-DEMO
JWT_SECRET=use-a-long-random-string-here

CORS_ORIGIN=https://zentroverse.com,https://www.zentroverse.com,https://backend.zentrosure.com,http://localhost:8080

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
CLOUDINARY_UPLOAD_FOLDER=zentroverse
```

Save and exit.

---

## 5. MongoDB Atlas

1. [cloud.mongodb.com](https://cloud.mongodb.com) → your cluster  
2. **Network Access** → **Add IP Address**  
3. Add your **server public IP** (or `0.0.0.0/0` only while testing, then restrict)

---

## 6. Run with PM2

```bash
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

If an **old** app (`trader-backend-mvc` / `backend-api` → `/var/www/backend`) is still on port 8787:

```bash
pm2 list
pm2 stop backend-api
pm2 delete backend-api
cd /var/www/zentroverse-backend
git pull origin master
npm install
pm2 start ecosystem.config.cjs --name zentroverse-api
pm2 save
```

Confirm only Zentroverse answers on 8787:

```bash
curl -s http://127.0.0.1:8787/health
# must show "service":"zentroverse-api" and "readyState":1
```

Nginx/reverse proxy must forward `backend.zentrosure.com` → `http://127.0.0.1:8787`.

See `docs/nginx-backend.zentrosure.example.conf` for a minimal site block.

### Browser says “CORS error” but you changed CORS in code

1. From your PC: `curl https://backend.zentrosure.com/health`
   - **502 / HTML** → Node is **down** or nginx points at the **wrong port**. Fix PM2 + `npm install` first; **nginx CORS settings will not help**.
   - **JSON** with `"service":"zentroverse-api"` → API is up; then check browser Network tab for real 401/404 vs CORS.

2. On the server (SSH):

```bash
curl -s http://127.0.0.1:8787/health
pm2 logs zentroverse-api --lines 40
ss -tlnp | grep 8787
```

- If **127.0.0.1:8787 fails** but PM2 says online → read error log (`cookie-parser`, `hr/dist` missing, etc.):

```bash
cd /var/www/zentroverse-backend   # your clone path
git pull origin master
npm install
npm run hr:build
pm2 delete zentroverse-api
pm2 start ecosystem.config.cjs
pm2 save
curl -s http://127.0.0.1:8787/health
```

3. **Nginx** — only verify proxy target (usually `/etc/nginx/sites-enabled/`):

```bash
sudo grep -R "proxy_pass\|server_name.*zentrosure" /etc/nginx/sites-enabled/
```

You want **`proxy_pass http://127.0.0.1:8787`** (or upstream block with that port).  
Do **not** add duplicate `Access-Control-Allow-Origin` in nginx unless Node is removed; Express already sends CORS.

After Node works locally, public URL must match:

```bash
curl -s https://backend.zentrosure.com/health
```

---

## 7. Verify

```bash
curl https://backend.zentrosure.com/health
curl -X POST https://backend.zentrosure.com/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@zentroverse.in","password":"Zentro@2026"}'
```

Then open **https://zentroverse.com/admin** and sign in again.

---

## You do **not** need to redeploy the frontend

`create-space` production build already uses `https://backend.zentrosure.com`.  
Fixing the API server is enough once `/health` shows `readyState: 1`.
