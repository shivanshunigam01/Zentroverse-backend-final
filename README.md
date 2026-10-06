# Zentroverse Backend

Complete Node.js + Express + MongoDB backend for the Zentroverse website.

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- ES Modules
- Cloudinary signed upload with native `fetch`
- Admin auth using `x-admin-token`
- Optional Razorpay checkout

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

Default server URL:

```bash
http://localhost:8787
```

Frontend env:

```env
VITE_API_BASE_URL=http://localhost:8787
```

## Required ENV

```env
PORT=8787
CORS_ORIGIN=http://localhost:5173,https://zentroverse.com
MONGODB_URI=mongodb://127.0.0.1:27017/zentroverse
ADMIN_PANEL_TOKEN=ZV-ADMIN-2026-DEMO
```

Cloudinary and Razorpay are optional. Their endpoints return `503` when missing.

## API Endpoints

### Health

```http
GET /health
```

### Leads

```http
POST /api/leads
GET /api/leads              # admin
POST /api/leads/update      # admin
POST /api/leads/delete      # admin
```

Admin routes require:

```http
x-admin-token: ZV-ADMIN-2026-DEMO
```

### CMS

```http
GET /api/cms
PUT /api/cms                # admin
```

CMS is stored as a single MongoDB document and seeded automatically on first boot.

### Media

```http
GET /api/media/status       # admin
POST /api/media/upload      # admin
```

### Razorpay

```http
POST /api/razorpay/create-order
POST /api/razorpay/verify-payment
```

### Admin panel (JWT Bearer or `x-admin-token`)

```http
POST /api/admin/auth/login
GET  /api/admin/auth/me
GET  /api/admin/overview
```

Default admin (seeded on boot): `admin@zentroverse.in` / `Zentro@2026` (override with `ADMIN_EMAIL` / `ADMIN_PASSWORD`).

### Pricing plans

```http
GET    /api/plans
PUT    /api/plans/catalog          # admin
POST   /api/plans                  # admin
GET    /api/plans/:id
PUT    /api/plans/:id              # admin
DELETE /api/plans/:id              # admin
PUT    /api/plans/trial            # admin
POST   /api/plans/trial/start
```

### CRM (admin)

`/api/crm/customers`, `/quotations`, `/invoices`, `/receipts`, `/settings`, `/import`

### Bajaj ASD

```http
POST /api/bajaj-asd/apply
GET  /api/bajaj-asd/applications   # admin
POST /api/bajaj-asd/update         # admin
```

### HyOffers / Pulsar

```http
POST /api/hy-offers/referrals
GET  /api/hy-offers/referrals      # admin
POST /api/hy-offers/referrals/update
GET  /api/hy-offers/referrals/lookup/:code
POST /api/hy-offers/track-click
POST /api/hy-offers/customers/import
```

### HR (`{ success, data }` envelope)

`/api/hr/auth/register`, `/auth/login`, `/auth/me`, org/employees/attendance/leave, etc.

### ZentroFlow

`/api/zentroflow/auth/login` — demo: `demo@zentroflow.in` / `Demo@2026`

All tenant routes under `/api/zentroflow/*` (leads, dashboard, integrations, jobs, …).

## Test Commands

```bash
curl http://localhost:8787/health

curl http://localhost:8787/api/cms

curl -X POST http://localhost:8787/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"919999999999","email":"test@test.com","form_type":"contact"}'

curl http://localhost:8787/api/leads \
  -H "x-admin-token: ZV-ADMIN-2026-DEMO"
```

## Folder Structure

```text
src/
  app.js
  server.js
  config/
  middleware/
  models/
  controllers/
  routes/
  services/
  seed/
```

## Deployment

1. Add MongoDB Atlas URI in `MONGODB_URI`.
2. Set `CORS_ORIGIN` to your frontend domains.
3. Change `ADMIN_PANEL_TOKEN` in production and update the frontend token too.
4. Add Cloudinary credentials for admin media uploads.
5. Add Razorpay keys only when payment checkout is needed.
