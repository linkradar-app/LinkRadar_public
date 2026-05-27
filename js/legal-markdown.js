/**
 * Loads bundled legal markdown (same files as mobile/assets/legal/*.md).
 */
(function () {
  const article = document.getElementById("legal-markdown");
  if (!article) return;

  const path = article.getAttribute("data-legal-src");
  if (!path) return;

  function mailtoLinks(root) {
    const privacy =
      (window.SITE_CONFIG && (window.SITE_CONFIG.privacyEmail || window.SITE_CONFIG.supportEmail)) ||
      "";
    const support = (window.SITE_CONFIG && window.SITE_CONFIG.supportEmail) || privacy;
    const emails = [privacy, support].filter(Boolean);
    const seen = new Set();
    emails.forEach(function (email) {
      if (seen.has(email)) return;
      seen.add(email);
      root.querySelectorAll("p, li").forEach(function (el) {
        if (el.querySelector("a")) return;
        const text = el.textContent || "";
        if (text.indexOf(email) === -1) return;
        el.innerHTML = text.replace(
          email,
          '<a href="mailto:' + email + '">' + email + "</a>"
        );
      });
    });
  }

  fetch(path)
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    })
    .then(function (md) {
      if (typeof marked === "undefined") throw new Error("marked.js missing");
      marked.setOptions({ gfm: true, breaks: false });
      article.innerHTML = marked.parse(md);
      mailtoLinks(article);
    })
    .catch(function () {
      article.innerHTML =
        '<p class="coming-soon">Could not load this document. Please refresh or open the policy in the LinkRadar app (Settings → Legal).</p>';
    });
})();
