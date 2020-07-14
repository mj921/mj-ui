const PopperManage = {
  instances: {},
  onePopper: null,
  zIndex: 1000,
  getZIndex() {
    return this.zIndex++;
  },
  getBoundingClientRect(el) {
    return el.getBoundingClientRect();
  },
  setOnePopper(popperId, popper) {
    if (this.onePopper === popperId) return;
    this.instances[popperId] = popper;
    if (this.onePopper && this.instances[this.onePopper]) {
      this.instances[this.onePopper].closePopper();
      this.instances[this.onePopper] = null;
    }
    this.onePopper = popperId;
  },
  openMask(appendToBody = true, parentEl, mask) {
    if (!mask) {
      mask = document.createElement("div");
      mask.className = "mj-popper__mask";
    }
    mask.style.zIndex = this.zIndex++;
    mask.style.display = "block";
    if (appendToBody || !parentEl) {
      !mask._mj_appendToBody && document.body.appendChild(mask);
      mask._mj_appendToBody = true;
      mask._mj_parentEl = document.body;
    } else {
      parentEl.appendChild(this.mask);
      mask._mj_appendToBody = false;
      mask._mj_parentEl = parentEl;
    }
    return mask;
  },
  closeMask(mask) {
    if (mask) {
      mask.style.display = "none";
    }
  }
};
export default PopperManage;
