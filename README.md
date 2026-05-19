# FinZolve Frontend

Smart Loans. Simplified. — Marketing site with EN / Tamil / Hindi support.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Live site (GitHub Pages)

After pushing to `main`, enable Pages once:

1. Open **https://github.com/solutions-jpg/FinZolve-Frontend/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Wait for the **Deploy to GitHub Pages** workflow to finish (Actions tab)

Site URL: **https://www.finzolve.com** (after DNS setup below)

Backup URL: **https://solutions-jpg.github.io/FinZolve-Frontend/** (may not load assets after custom-domain switch)

## Custom domain (www.finzolve.com)

### 1. DNS at your registrar (GoDaddy, Namecheap, etc.)

**For `www.finzolve.com`** — add one record:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| CNAME | www  | `solutions-jpg.github.io` |

**For root `finzolve.com` (no www)** — add four A records:

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

Optional: redirect `finzolve.com` → `https://www.finzolve.com` at your registrar.

### 2. GitHub

1. **https://github.com/solutions-jpg/FinZolve-Frontend/settings/pages**
2. **Custom domain** → enter `www.finzolve.com` → Save
3. Wait for DNS check (green) and **Enforce HTTPS** (can take up to 24–48 hours)

### 3. Deploy

Push to `main`; the workflow publishes `public/CNAME` automatically.

If you use **`finzolve.com` only** (no www), change `public/CNAME` to `finzolve.com` and set that domain in GitHub Pages settings instead.

## Git identity (this repo only)

```bash
git config user.name "solutions-jpg"
git config user.email "solutions@finzolve.com"
```

Use **support865** only in RidePro repos — not here.
