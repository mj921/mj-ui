const PopperManage = {
  zIndex: 1000,
  setZIndex(el) {
    el.style.zIndex = this.zIndex++;
  },
  getBoundingClientRect(el) {
    return el.getBoundingClientRect();
  }
};
export default PopperManage;
