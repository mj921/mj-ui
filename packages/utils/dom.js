export const getStyle = function(element, styleName) {
  if (getComputedStyle) {
    return getComputedStyle(element)[styleName];
  }
  return element.currentStyle[styleName];
};
export const isScroll = function(el, verical) {
  const overflow =
    typeof verical === "boolean"
      ? verical
        ? getStyle(el, "overflowY")
        : getStyle(el, "overflowX")
      : getStyle(el, "overflow");
  return /(auto|scroll)/.test(overflow);
};
export const getScrollContainer = function(el, verical) {
  let parent = el;
  while (parent) {
    if (
      [window, document, document.documentElement, document.body].includes(
        parent
      )
    ) {
      return window;
    }
    if (isScroll(parent, verical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
export const getScrollBarWidth = function() {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const outerWidth = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const innerWidth = inner.offsetWidth;
  document.body.removeChild(outer);
  return outerWidth - innerWidth;
};
