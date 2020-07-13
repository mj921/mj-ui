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
  }
};
export default PopperManage;
