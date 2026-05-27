# LinkRadar — marketing site (source)

Static pages for the app. **Published from the public repo:**

- Repo: https://github.com/linkradar-app/LinkRadar_public  
- Live: https://linkradar-app.github.io/LinkRadar_public/

App code stays in the private repo [Linkradar](https://github.com/linkradar-app/Linkradar).

After editing here, copy/push to `LinkRadar_public` (see `website-public-deploy/` staging folder or push that repo).

## Local preview

Open `index.html` in a browser, or:

```powershell
cd website
python -m http.server 8080
# http://localhost:8080
```

## Publish to GitHub Pages

1. Edit `js/config.js` if URLs change.
2. Push contents to **LinkRadar_public** (`main`).
3. In that repo: **Settings → Pages → Source: GitHub Actions**, then re-run deploy if needed.
4. **One public APK only:** update asset on tag `app` in **LinkRadar_public** (Releases). Do not link a releases list from the site. Private app code stays in **Linkradar**.

## Pages

- `index.html` — Home
- `download.html` — GitHub APK + Google Play (when listed)
- `privacy.html` / `terms.html` — Legal
- `support.html` — FAQ + contact
