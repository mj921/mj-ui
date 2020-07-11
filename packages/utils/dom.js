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
