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
