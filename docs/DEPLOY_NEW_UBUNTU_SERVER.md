# Deploy Zentroverse-backend-final on a new Ubuntu server

Example public API URL: **`https://newbackend.zentroverse.com`**  
Repo: `https://github.com/shivanshunigam01/Zentroverse-backend-final`

---

## 1. DNS (at your domain registrar or Cloudflare)

You want **`newbackend.zentroverse.com`** → your **new server’s public IPv4**.

| Type | Name / Host | Value | When to use |
|------|-------------|-------|-------------|
| **A** | `newbackend` | `YOUR.SERVER.PUBLIC.IP` | **Use this** for a VPS/EC2 with a fixed IP |
| **AAAA** | `newbackend` | `your:ipv6:...` | Optional, only if the server has IPv6 |
| **CNAME** | `newbackend` | another **hostname** | Only if you point to a load balancer / CDN hostname — **not** for a raw IP |
| **TXT** | — | — | **Not required** for API hosting (used for email/verification) |

**Registrar UI examples**

- **Name:** `newbackend` (some panels want the full `newbackend.zentroverse.com`)
- **TTL:** 300–3600 seconds
- **Proxy:** If using **Cloudflare**, turn **DNS only** (grey cloud) until Certbot works, or use Cloudflare’s SSL + origin cert

Wait 5–30 minutes, then check:

```bash
dig +short newbackend.zentroverse.com
# should print YOUR.SERVER.PUBLIC.IP
```

---

## 2. New Ubuntu server — base packages

SSH as `ubuntu` (or `root`), then:

```bash
sudo apt update && sudo apt upgrade -y

sudo apt install -y git curl nginx certbot python3-certbot-nginx ufw

# Node.js 20 LTS (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

node -v   # v20.x
npm -v
```

Optional swap (helps `npm install` / small instances):

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

Firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## 3. Clone from GitHub

```bash
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www
cd /var/www

git clone https://github.com/shivanshunigam01/Zentroverse-backend-final.git zentroverse-backend
cd zentroverse-backend
```

Deploy updates later:

```bash
cd /var/www/zentroverse-backend
bash scripts/ec2-deploy-hr.sh
```

---

## 4. Production `.env`

```bash
cd /var/www/zentroverse-backend
cp .env.example .env
nano .env
```

Minimum for production:

```env
NODE_ENV=production
PORT=8787

MONGODB_URI=mongodb+srv://USER:YOUR_PASSWORD@cluster.mongodb.net/zentroverse?retryWrites=true&w=majority
USE_MEMORY_DB=false

CORS_ORIGIN=https://www.zentroverse.com,https://zentroverse.com,https://newbackend.zentroverse.com

ADMIN_EMAIL=admin@zentroverse.in
ADMIN_PASSWORD=your-admin-password
ADMIN_PANEL_TOKEN=your-long-admin-token
JWT_SECRET=your-long-jwt-secret-min-32-chars

JWT_ACCESS_SECRET=your-peopleflow-access-secret-min-32-chars
JWT_REFRESH_SECRET=your-peopleflow-refresh-secret-min-32-chars
PEOPLEFLOW_APP_URL=https://www.zentroverse.com
ALLOW_PUBLIC_REGISTER=true

# Cloudinary / Razorpay — copy from old server if needed
```

**Atlas:** MongoDB Atlas → **Network Access** → add this server’s **public IP** (or temporary `0.0.0.0/0` while testing).

Install dependencies (includes `hr/node_modules` via postinstall):

```bash
npm install
npm run verify:peopleflow
```

Test API locally (Ctrl+C to stop):

```bash
node src/server.js
# expect: Zentroverse API running on port 8787
curl -s http://127.0.0.1:8787/health
curl -s http://127.0.0.1:8787/api/v1/health
```

---

## 5. PM2 (process manager)

```bash
sudo npm install -g pm2

cd /var/www/zentroverse-backend
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
# run the command PM2 prints (sudo env PATH=...)
```

Useful commands:

```bash
pm2 status
pm2 logs zentroverse-api --lines 50
pm2 restart zentroverse-api
bash scripts/diagnose-502.sh
```

**Do not** use `pm2 start npm -- start` on small servers — `prestart` runs `hr:build` and may OOM. Use **`ecosystem.config.cjs`** (`node src/server.js`).

---

## 6. Nginx reverse proxy

```bash
sudo nano /etc/nginx/sites-available/newbackend.zentroverse.com
```

Paste (HTTP first — Certbot adds HTTPS):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name newbackend.zentroverse.com;

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
sudo ln -sf /etc/nginx/sites-available/newbackend.zentroverse.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 7. Certbot (HTTPS / SSL)

```bash
sudo certbot --nginx -d newbackend.zentroverse.com
```

Follow prompts (email, agree, redirect HTTP → HTTPS recommended).

Renewal is automatic; test with:

```bash
sudo certbot renew --dry-run
```

---

## 8. Verify public API

```bash
curl -s https://newbackend.zentroverse.com/health
curl -s https://newbackend.zentroverse.com/api/v1/health
```

Expect JSON with `"service":"zentroverse-api"` and `"peopleflow":true`.

---

## 9. Point the frontend to the new API

After the new backend works, update **create-space** (Vercel):

| Variable | Example |
|----------|---------|
| `VITE_API_BASE_URL` | `https://newbackend.zentroverse.com` |
| `VITE_HR_API_URL` | `/api/v1` (if using Vercel proxy) **or** `https://newbackend.zentroverse.com/api/v1` |

In `vercel.json` rewrites, change destination host from `backend.zentrosure.com` to `newbackend.zentroverse.com` if you proxy `/api/v1`.

Redeploy Vercel.

---

## 10. Seed HR (PeopleFlow) login & demo data

### Admin login

Site **`/admin/login`** and HR **`/hr/login`** are different systems.

**Option A — script (recommended on server):**

```bash
cd /var/www/zentroverse-backend
npm run seed:hr-admin
```

Default credentials (override with `SEED_HR_*` in `.env`):

| Field | Default |
|-------|---------|
| URL | https://www.zentroverse.com/hr/login |
| Email | `hr.admin@zentroverse.in` |
| Password | `Zentro@2026` |

**Option B — register in browser:** https://www.zentroverse.com/hr/register (requires `ALLOW_PUBLIC_REGISTER=true`).

**Option C — API:**

```bash
curl -s -X POST "https://newbackend.zentroverse.com/api/v1/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"name":"HR Admin","email":"you@company.com","password":"YourPass123","organizationName":"My Company"}'
```

### Demo data (all HR modules)

After admin exists, seed sample departments, employees, leave, attendance, clients, mandates, candidates, interviews, offers, etc.:

```bash
cd /var/www/zentroverse-backend
git pull origin master
npm run seed:hr-demo
```

Optional — wipe org HR data and re-seed (keeps super-admin):

```bash
SEED_HR_DEMO_RESET=1 npm run seed:hr-demo
```

Demo logins (password `Zentro@2026` unless `SEED_HR_DEMO_PASSWORD` is set):

| Role | Email |
|------|--------|
| SUPER_ADMIN | `hr.admin@zentroverse.in` |
| MANAGER | `manager.demo@zentroverse.in` |
| HR_ADMIN | `hr.ops@zentroverse.in` |
| EMPLOYEE | `priya.employee@zentroverse.in` |
| EMPLOYEE | `amit.employee@zentroverse.in` |

No PM2 restart needed for seeding (MongoDB only).

---

## 11. Checklist

- [ ] DNS **A** record `newbackend` → new server IP  
- [ ] `dig newbackend.zentroverse.com` resolves correctly  
- [ ] `.env` on server with valid `MONGODB_URI`  
- [ ] Atlas allows server IP  
- [ ] `npm install` + `verify:peopleflow` OK  
- [ ] `pm2 status` → `zentroverse-api` online  
- [ ] `curl 127.0.0.1:8787/health` OK  
- [ ] Nginx + Certbot → `https://newbackend.zentroverse.com/health` OK  
- [ ] Frontend env updated + redeploy  

---

## Troubleshooting

| Symptom | Action |
|---------|--------|
| **502 Bad Gateway** | Node down — `pm2 logs zentroverse-api`, `bash scripts/diagnose-502.sh` |
| **404 on /api/v1** | `peopleflow: false` — `git reset --hard origin/master`, `npm install`, restart PM2 |
| **Mongo bad auth** | Fix password in `.env`, URL-encode special chars in URI |
| **Certbot fails** | DNS not propagated; disable Cloudflare proxy temporarily |

See also: `DEPLOY_LIVE.md`, `scripts/ec2-deploy-hr.sh`.
