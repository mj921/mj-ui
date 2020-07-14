import ResizeObserver from "resize-observer-polyfill";

const resizeHandler = function(entries) {
  for (let entry of entries) {
    const listeners = entry.target._mj_resizeListeners || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn(entry);
      });
    }
  }
};
export const addResizeListener = function(element, fn) {
  if (!element) return;
  if (!element._mj_resizeListeners) {
    element._mj_resizeListeners = [];
    element._mj_ro = new ResizeObserver(resizeHandler);
    element._mj_ro.observe(element);
  }
  element._mj_resizeListeners.push(fn);
};
export const removeResizeListener = function(element, fn) {
  if (!element || !element._mj_resizeListeners) return;
  element._mj_resizeListeners.splice(
    element._mj_resizeListeners.indexOf(fn),
    1
  );
  if (!element._mj_resizeListeners.length) {
    element._mj_ro.disconnect();
  }
};
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
