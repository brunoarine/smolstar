(function () {
  "use strict";

  var tooltip = null;
  var currentLink = null;
  var lastX = 0;
  var lastY = 0;

  var MARGIN = 12; // distance from the cursor
  var VIEWPORT_PAD = 8; // keep away from screen edges

  function getTooltip() {
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.className = "footnote-tooltip";
      tooltip.setAttribute("role", "tooltip");
      tooltip.setAttribute("aria-hidden", "true");
      tooltip.style.display = "none";
      document.body.appendChild(tooltip);
    }
    return tooltip;
  }

  function findFootnote(link) {
    var href = link.getAttribute("href") || "";
    var hash = href.slice(href.indexOf("#") + 1);
    if (!hash) return null;
    try {
      return document.getElementById(decodeURIComponent(hash));
    } catch (e) {
      return document.getElementById(hash);
    }
  }

  function show(link) {
    var fn = findFootnote(link);
    if (!fn) return;

    var tip = getTooltip();
    tip.textContent = "";

    // Clone the footnote content, minus the back-link.
    var clone = fn.cloneNode(true);
    clone.removeAttribute("id");
    var back = clone.querySelector(".footnote-backref");
    if (back) back.remove();
    // Trim a trailing "&nbsp;" left behind by the back-link.
    var lastNode = clone.lastChild;
    if (lastNode && lastNode.nodeType === Node.TEXT_NODE) {
      lastNode.nodeValue = lastNode.nodeValue.replace(/[\u00a0\s]+$/, "");
      if (!lastNode.nodeValue) lastNode.remove();
    }

    tip.appendChild(clone);
    tip.style.display = "block";
    currentLink = link;
    position();
  }

  function hide() {
    if (tooltip) tooltip.style.display = "none";
    currentLink = null;
  }

  function position() {
    if (!tooltip || tooltip.style.display === "none") return;

    var rect = tooltip.getBoundingClientRect();
    var x = lastX + MARGIN;
    var y = lastY + MARGIN;

    // Flip above/right when the box would overflow the viewport.
    if (x + rect.width > window.scrollX + document.documentElement.clientWidth - VIEWPORT_PAD) {
      x = Math.max(VIEWPORT_PAD, lastX - rect.width - MARGIN);
    }
    if (y + rect.height > window.scrollY + document.documentElement.clientHeight - VIEWPORT_PAD) {
      y = Math.max(VIEWPORT_PAD, lastY - rect.height - MARGIN);
    }

    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
  }

  function refFromEvent(e) {
    var target = e.target;
    if (!target || typeof target.closest !== "function") return null;
    return target.closest("a.footnote-ref");
  }

  document.addEventListener("mouseover", function (e) {
    var link = refFromEvent(e);
    if (link && link !== currentLink) show(link);
  });

  document.addEventListener("mousemove", function (e) {
    lastX = e.clientX + window.scrollX;
    lastY = e.clientY + window.scrollY;
    position();
  });

  document.addEventListener("mouseout", function (e) {
    var link = refFromEvent(e);
    if (!link || link !== currentLink) return;
    // Hide only when the pointer truly leaves the link (and the box).
    var to = e.relatedTarget;
    if (to && (to === tooltip || (typeof to.nodeType === "number" && tooltip.contains(to)))) return;
    hide();
  });

  // Also show the hint when the footnote link is focused via keyboard.
  document.addEventListener("focusin", function (e) {
    var link = refFromEvent(e);
    if (link) show(link);
  });

  document.addEventListener("focusout", function (e) {
    var link = refFromEvent(e);
    if (link && link === currentLink) hide();
  });
})();
