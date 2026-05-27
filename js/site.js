(function () {
  const c = window.SITE_CONFIG || {};
  const name = c.projectName || "App";

  document.querySelectorAll("[data-site-name]").forEach((el) => {
    el.textContent = name;
  });
  document.querySelectorAll("[data-company-name]").forEach((el) => {
    el.textContent = c.companyName || name;
  });
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(c.year || new Date().getFullYear());
  });
  document.querySelectorAll("[data-support-email]").forEach((el) => {
    const email = c.supportEmail || "";
    el.textContent = email;
    if (el.tagName === "A") el.href = "mailto:" + email;
  });
  document.querySelectorAll("[data-privacy-email]").forEach((el) => {
    const email = c.privacyEmail || c.supportEmail || "";
    el.textContent = email;
    if (el.tagName === "A") el.href = "mailto:" + email;
  });
  document.querySelectorAll("[data-privacy-updated]").forEach((el) => {
    el.textContent = c.privacyUpdated || "";
  });
  document.querySelectorAll("[data-terms-updated]").forEach((el) => {
    el.textContent = c.termsUpdated || "";
  });
  document.querySelectorAll("[data-location-disclaimer]").forEach((el) => {
    el.textContent = c.locationDisclaimer || "";
  });

  const root = document.documentElement;
  if (c.primaryColor) root.style.setProperty("--primary", c.primaryColor);
  if (c.backgroundColor) root.style.setProperty("--bg", c.backgroundColor);
  if (c.surfaceColor) root.style.setProperty("--surface", c.surfaceColor);
  if (c.textColor) root.style.setProperty("--text", c.textColor);
  if (c.mutedColor) root.style.setProperty("--muted", c.mutedColor);

  const title = document.querySelector("title[data-page-title]");
  if (title) {
    const page = title.getAttribute("data-page-title");
    document.title = page ? page + " · " + name : name;
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && c.description) metaDesc.setAttribute("content", c.description);

  if (c.faviconUrl) {
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = c.faviconUrl;
  }

  const ogImage = c.ogImageUrl;
  const siteUrl = c.siteUrl || "";
  if (ogImage) {
    [["og:image", ogImage], ["og:title", name], ["og:description", c.description || ""]].forEach(
      ([prop, content]) => {
        if (!content) return;
        let tag = document.querySelector('meta[property="' + prop + '"]');
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", prop);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
      }
    );
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl && siteUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      ogUrl.setAttribute("content", siteUrl);
      document.head.appendChild(ogUrl);
    }
  }

  const storeSection = document.getElementById("store-buttons");
  if (storeSection) {
    if (c.storesComingSoon || (!c.playStoreUrl && !c.appStoreUrl)) {
      storeSection.innerHTML =
        '<p class="coming-soon">Coming soon on Google Play.</p>' +
        '<p class="coming-soon-sub">Questions: <a data-support-email href="mailto:' +
        (c.supportEmail || "") +
        '">' +
        (c.supportEmail || "support") +
        "</a></p>";
    } else {
      let html = "";
      if (c.playStoreUrl) {
        html +=
          '<a class="store-badge" href="' +
          c.playStoreUrl +
          '" target="_blank" rel="noopener">Google Play</a>';
      }
      if (c.appStoreUrl) {
        html +=
          '<a class="store-badge" href="' +
          c.appStoreUrl +
          '" target="_blank" rel="noopener">App Store</a>';
      }
      storeSection.innerHTML = html;
    }
  }

  const githubSection = document.getElementById("github-download");
  if (githubSection) {
    const apkUrl = c.githubApkDownloadUrl || "";
    const repoUrl = c.githubRepoUrl || "";
    if (apkUrl) {
      githubSection.innerHTML =
        '<a class="btn btn-download-apk" href="' +
        apkUrl +
        '" download>Download APK for Android</a>' +
        (repoUrl
          ? '<p class="github-releases-link"><a href="' +
            repoUrl +
            '/releases" target="_blank" rel="noopener">All releases on GitHub</a></p>'
          : "");
    } else {
      githubSection.innerHTML =
        '<p class="coming-soon">APK link not configured yet — set <code>githubApkDownloadUrl</code> in <code>js/config.js</code>.</p>';
    }
  }
})();
