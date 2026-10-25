# Deploy `Zentroverse-backend-final` on a new Ubuntu server

Example public API URL: **`https://backend.zentros.com`**  
GitHub: **`https://github.com/shivanshunigam01/Zentroverse-backend-final`**

Replace `backend.zentros.com` with your real subdomain everywhere below.

---

## 1. DNS (at your domain registrar / Cloudflare / Route53)

You want **`backend.zentros.com`** → your new server’s **public IPv4**.

| Record type | Name / host | Value | TTL | When to use |
|-------------|-------------|-------|-----|-------------|
| **A** | `backend` | `YOUR_SERVER_PUBLIC_IP` (e.g. `3.110.x.x`) | 300–3600 | **Recommended** — points subdomain straight to the VPS/EC2 IP |
| **AAAA** | `backend` | `YOUR_SERVER_IPV6` | optional | Only if the server has stable IPv6 |
| **CNAME** | `backend` | `another-hostname.example.com` | 300 | Use if you point to a **load balancer**, Cloudflare proxy hostname, or another DNS name — **not** raw IP |
| **TXT** | `_acme-challenge.backend` | (from Certbot) | auto | **Let’s Encrypt DNS challenge only** — not for normal API traffic |

**Do not** use TXT for routing the API. Browsers and apps use **A** or **CNAME**.

### Cloudflare tip
- **DNS only (grey cloud)** while testing, or ensure SSL mode **Full (strict)** with a valid cert on nginx.
- After DNS propagates: `dig +short backend.zentros.com` should show your IP.

### MongoDB Atlas (required)
Atlas → **Network Access** → add **this server’s public IP** (or your office IP while testing).

---

## 2. New Ubuntu server — base packages

SSH as `ubuntu` (or your user):

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nginx ufw
```

### Node.js 20 LTS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # v20.x
npm -v
```

### PM2 (process manager)

```bash
sudo npm install -g pm2
pm2 -v
```

### Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

App listens on **8787** only on **localhost**; nginx handles **443** publicly.

---

## 3. Clone from GitHub

```bash
sudo mkdir -p /var/www
sudo chown -R "$USER:$USER" /var/www
cd /var/www

git clone https://github.com/shivanshunigam01/Zentroverse-backend-final.git zentroverse-backend
cd /var/www/zentroverse-backend
git checkout master
```

Private repo: use deploy key or `git clone git@github.com:shivanshunigam01/Zentroverse-backend-final.git`.

---

## 4. Environment file (never commit)

```bash
cp .env.example .env
nano .env
```

**Production minimum:**

```env
NODE_ENV=production
PORT=8787

MONGODB_URI=mongodb+srv://USER:URL_ENCODED_PASSWORD@cluster.mongodb.net/zentroverse?retryWrites=true&w=majority
USE_MEMORY_DB=false

CORS_ORIGIN=https://www.zentroverse.com,https://zentroverse.com,https://backend.zentros.com,http://localhost:8080

JWT_SECRET=long-random-string-min-32-chars
JWT_ACCESS_SECRET=long-random-access-secret-min-32-chars
JWT_REFRESH_SECRET=long-random-refresh-secret-min-32-chars

PEOPLEFLOW_APP_URL=https://www.zentroverse.com
ALLOW_PUBLIC_REGISTER=true

ADMIN_EMAIL=admin@zentroverse.in
ADMIN_PASSWORD=your-admin-password
ADMIN_PANEL_TOKEN=your-admin-token

# Cloudinary / Razorpay as needed
```

Test Mongo from the server:

```bash
node -e "import dotenv from 'dotenv'; import mongoose from 'mongoose'; dotenv.config(); mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log('Mongo OK', mongoose.connection.host); process.exit(0)}).catch(e=>{console.error(e.message); process.exit(1)})"
```

---

## 5. Install dependencies & verify HR bundle

`hr/dist` is **in the repo** — you do **not** need `npm run hr:build` on a small VPS.

```bash
cd /var/www/zentroverse-backend
npm install
npm run verify:peopleflow
```

If verify fails: `git fetch origin master && git reset --hard origin/master && npm install`.

**Do not** use `npm start` on the server (`prestart` runs `hr:build` and may OOM). Use PM2 + `node src/server.js` via ecosystem file.

---

## 6. PM2

```bash
cd /var/www/zentroverse-backend
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
# Run the command PM2 prints (sudo env PATH=... pm2 startup systemd -u ubuntu --hp /home/ubuntu)
```

Check:

```bash
pm2 status
pm2 logs zentroverse-api --lines 30
curl -s http://127.0.0.1:8787/health
curl -s http://127.0.0.1:8787/api/v1/health
```

Expect JSON with `"peopleflow": true` and PeopleFlow health on `/api/v1/health`.

One-shot deploy later:

```bash
bash scripts/ec2-deploy-hr.sh
```

---

## 7. Nginx reverse proxy

```bash
sudo nano /etc/nginx/sites-available/backend.zentros.com
```

Paste (adjust `server_name`):

```nginx
server {
    listen 80;
    server_name backend.zentros.com;

    client_max_body_size 25m;

    location / {
        proxy_pass http://127.0.0.1:8787;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 60s;
        proxy_read_timeout 600s;
    }
}
```

Enable site:

```bash
sudo ln -sf /etc/nginx/sites-available/backend.zentros.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Test HTTP: `curl -s http://backend.zentros.com/health`

---

## 8. SSL with Certbot (Let’s Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d backend.zentros.com
```

Follow prompts (email, agree, redirect HTTP→HTTPS optional but recommended).

Renewal is automatic. Test: `sudo certbot renew --dry-run`

---

## 9. Point the frontend to the new API

After **`https://backend.zentros.com/health`** works:

### Vercel (`create-space`)

Update **`vercel.json`** (or Vercel env vars):

- `VITE_API_BASE_URL` → `https://backend.zentros.com`
- Vercel rewrites for `/api/v1` and `/api/hr` → `https://backend.zentros.com/api/v1/...`

Redeploy the frontend.

### CORS

Ensure new API URL is in server `.env`:

`CORS_ORIGIN=...,https://backend.zentros.com`

Restart API: `pm2 restart zentroverse-api`

---

## 10. Smoke tests

```bash
curl -s https://backend.zentros.com/health
curl -s https://backend.zentros.com/api/v1/health
curl -sI -X OPTIONS "https://backend.zentros.com/api/v1/auth/login" \
  -H "Origin: https://www.zentroverse.com" \
  -H "Access-Control-Request-Method: POST"
```

Browser: `https://www.zentroverse.com/hr/register` then `/hr/login`.

---

## 11. Troubleshooting

| Symptom | Command / fix |
|---------|----------------|
| **502 Bad Gateway** | `bash scripts/diagnose-502.sh` — Node not on 8787 |
| **peopleflow: false** | `npm run verify:peopleflow`; `git reset --hard origin/master` |
| **Mongo auth failed** | Fix `MONGODB_URI`; Atlas IP allowlist |
| **PM2 restart loop** | `pm2 logs zentroverse-api`; run `node src/server.js` in foreground |
| **502 after deploy** | `pm2 restart zentroverse-api`; `sudo nginx -t` |

---

## Quick reference

| Item | Value |
|------|--------|
| App directory | `/var/www/zentroverse-backend` |
| Internal port | `8787` (localhost only) |
| PM2 app name | `zentroverse-api` |
| Public URL | `https://backend.zentros.com` |
| HR API | `https://backend.zentros.com/api/v1` |
| Legacy HR alias | `https://backend.zentros.com/api/hr` |
