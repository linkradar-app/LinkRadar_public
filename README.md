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
4. **One public APK only** (tag `app` on **LinkRadar_public**): upload **release** arm64 APK as `LinkRadar.apk`:

```powershell
cd mobile
flutter build apk --release --split-per-abi
# mobile/build/app/outputs/flutter-apk/app-arm64-v8a-release.apk → GitHub release asset
```

Release uses the debug keystore until `key.properties` exists (`docs/RELEASE_BUILD.md`). Do not link a releases list from the site.

## Pages

- `index.html` — Home
- `download.html` — GitHub APK + Google Play (when listed)
- `privacy.html` / `terms.html` — **Full** legal text (same as `mobile/assets/legal/*.md`) — use for **Google Play** privacy URL
- `support.html` — FAQ + contact

### Google Play Console URLs

| Field | URL |
|-------|-----|
| Privacy policy | `https://linkradar-app.github.io/LinkRadar_public/privacy.html` |
| Terms (if requested) | `https://linkradar-app.github.io/LinkRadar_public/terms.html` |

**Legal sync:** edit `mobile/assets/legal/privacy.md` and `terms.md`, then copy to `website/assets/legal/` (site loads the same `.md` files as the app):

```powershell
Copy-Item mobile/assets/legal/*.md website/assets/legal/ -Force
```

`privacy.html` / `terms.html` only render that markdown. Emails: `js/config.js`.

| Field | Email |
|-------|--------|
| `supportEmail` / `privacyEmail` | `linkradar.app@gmail.com` — users, legal, GDPR |
| `developerEmail` | `vibestudio-res@gmail.com` — **Google Play Console developer contact only** |
