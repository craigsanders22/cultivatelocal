// Mobile menu
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      btn.focus();
    }
  });
})();

// Tally forms: after a successful submit, go to the page's thank-you URL (same site),
// set with data-thanks on the iframe. Works on previews and on the live domain.
(function () {
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://tally.so" || typeof e.data !== "string") return;
    var msg;
    try { msg = JSON.parse(e.data); } catch (err) { return; }
    if (!msg || msg.event !== "Tally.FormSubmitted") return;
    var formId = msg.payload && msg.payload.formId;
    var frame = formId && document.querySelector('iframe[data-tally-form="' + formId + '"][data-thanks]');
    if (frame) window.location.assign(frame.getAttribute("data-thanks"));
  });
})();
