# LinkRadar — GitHub Pages site

Static marketing + legal pages for [LinkRadar](https://github.com/YOUR_USER/LinkRadar_v03).

## Local preview

Open `index.html` in a browser, or:

```powershell
cd website
python -m http.server 8080
# http://localhost:8080
```

## Before publishing

1. Edit `js/config.js` — set real `siteUrl`, `githubRepoUrl`, and `githubApkDownloadUrl` (use your GitHub username).
2. Publish an APK on **GitHub → Releases → New release** — attach the file as `LinkRadar-debug.apk` so the “latest download” URL works.
3. Replace `assets/og-image.png` with 1200×630 marketing image.
4. Add real screenshots under `assets/screenshots/` and wire them in `index.html`.
5. Enable **Settings → Pages → GitHub Actions** (workflow in `.github/workflows/deploy-website.yml`).

## Pages

- `index.html` — Home
- `download.html` — GitHub APK + Google Play (when listed)
- `privacy.html` / `terms.html` — Legal
- `support.html` — FAQ + contact
