# Sugaring Essential Website

Natural sugaring hair removal studio site. Built with Vite, React, and TypeScript. Includes sections for services, process, aftercare, testimonials, FAQs, and contact/booking.

## Stack
- Vite + React + TypeScript
- CSS with custom theme tokens (no external UI libs)
- ESLint configured for React + TS

## Project structure
- `src/App.tsx` — page layout and sections
- `src/data/content.ts` — copy, service list, FAQs, and contact details
- `src/components/` — small UI pieces (Section, cards, FAQ item)
- `src/index.css` — theme tokens and responsive styles
- `public/` — static assets (favicon)
- `Dockerfile` — containerized build for Cloud Run / other hosts

## How to start (desktop + mobile)
1) Install Node.js 18+ and npm.
2) Install deps:  
```bash
npm install
```
3) Desktop preview:  
```bash
npm run dev
```
- Open http://localhost:5173 to browse the site.
4) Mobile preview in the browser:  
- With the dev server running, open Chrome/Edge devtools and toggle the device toolbar (`Cmd+Shift+M` on macOS).  
- Pick a profile (e.g., iPhone 14), then reload to apply the viewport and device pixel ratio.  
- Use the “Responsive” option to sweep widths down to ~320px and verify layout + tap targets.
5) Mobile on a real device (same Wi‑Fi):  
```bash
npm run dev -- --host --port 4173
```
- Find your machine’s LAN IP (e.g., `ipconfig getifaddr en0` on macOS).  
- On your phone, open `http://YOUR_IP:4173` and accept any “allow local network” prompts.
6) Production build + preview:  
```bash
npm run build
npm run preview -- --host
```
7) Quality check:  
```bash
npm run lint
```

## Customizing content
- Update services, FAQs, testimonials, and contact info in `src/data/content.ts`.
- Adjust theme colors, spacing, and typography in `src/index.css`.
- Hero/CTA wording and flow live in `src/App.tsx`.

## Deployment (GCP)

### Option A: Cloud Run (container, simplest)
Prereqs: gcloud CLI, a GCP project, and billing enabled.
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Build and run locally (optional)
npm install
npm run build

# Build container with Cloud Build
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/sugaring-essential

# Deploy to Cloud Run (public)
gcloud run deploy sugaring-essential \
  --image gcr.io/YOUR_PROJECT_ID/sugaring-essential \
  --platform managed \
  --allow-unauthenticated \
  --region us-central1
```
Cloud Run will output a live URL (e.g., `https://sugaring-essential-xxxx.a.run.app`). Set a custom domain via Cloud Run > Custom Domains in the console.

### Option B: Cloud Storage static site (no servers)
Prereqs: gcloud CLI, GCP project, billing.
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
npm install
npm run build

# Create bucket (must be globally unique)
gsutil mb -l us-central1 gs://YOUR_BUCKET_NAME

# Enable public website hosting
gsutil iam ch allUsers:objectViewer gs://YOUR_BUCKET_NAME
cat > website.json <<'EOF'
{"mainPageSuffix": "index.html", "notFoundPage": "index.html"}
EOF
gsutil web set -m index.html -e index.html gs://YOUR_BUCKET_NAME

# Upload build
gsutil -m rsync -r ./dist gs://YOUR_BUCKET_NAME
```
Access at `https://storage.googleapis.com/YOUR_BUCKET_NAME/index.html` or set a custom domain via HTTPS Load Balancer pointing to the bucket.

## CI / quality
- `npm run lint` runs TypeScript + React lint rules.
- Keep new components typed and colocated with related data.

## Mobile experience updates
- Navigation stacks on small screens with full-width call/book actions for easy tapping.
- Hero, cards, CTA banner, and grids collapse to single columns with adjusted padding.
- Typography uses fluid sizing and chips/pills wrap to keep labels readable on narrow devices.

## Troubleshooting
- If the dev server doesn’t start, confirm Node 18+, reinstall deps, then retry `npm run dev`.
- For Cloud Run 404s, ensure the service is public (`--allow-unauthenticated`) and redeploy after content changes.



