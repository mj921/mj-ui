import Message from "./Message.vue";
import Vue from "vue";
import PopperManage from "../utils/popper/PoperManage";

const MessageConst = Vue.extend(Message);
const instances = [];
const onClose = function(instance) {
  instances.splice(instances.indexOf(instance), 1);
  let topOffset = 20;
  instances.forEach(item => {
    item.topOffset = topOffset;
    topOffset += item.$el.offsetHeight + 16;
  });
};
const messageFn = function(message, options) {
  if (typeof message === "object") {
    options = message;
  } else {
    if (typeof options !== "object") {
      options = {};
    }
    if (typeof message !== "string") {
      options.message = options.message || "";
    } else {
      options.message = message;
    }
  }
  const _onClose = options.onClose;
  options.onClose = function(_instance) {
    _onClose && _onClose();
    onClose(_instance);
  };
  const instance = new MessageConst({
    data: options
  });
  instance.$mount();
  let topOffset = 20;
  instances.forEach(item => {
    topOffset += item.$el.offsetHeight + 16;
  });
  instance.topOffset = topOffset;
  instance.$el.style.zIndex = PopperManage.getZIndex();
  instance.show();
  instances.push(instance);
  return instance;
};
["success", "error", "warning", "info"].forEach(type => {
  messageFn[type] = function(message, options = {}) {
    messageFn(message, {
      ...options,
      type
    });
  };
});

export default messageFn;
