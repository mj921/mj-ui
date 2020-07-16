import MessageBox from "./MessageBox.vue";
import Vue from "vue";
// import PopperManage from "../utils/popper/PoperManage";

const MessageBoxConst = Vue.extend(MessageBox);
const instances = [];
const messageBoxFn = function(options) {
  return new Promise((resolve, reject) => {
    if (typeof options !== "object") {
      options = {};
    }
    const _callback = options.callback || function() {};
    const _onClose = options.onClose;
    options.onClose = function() {
      _onClose && _onClose();
      _callback("close", instance);
      reject({ action: "close", instance });
    };
    const _onCancel = options.onCancel;
    options.onCancel = function() {
      _onCancel && _onCancel();
      _callback("cancel", instance);
      reject({ action: "cancel", instance });
    };
    const _onConfirm = options.onConfirm;
    options.onConfirm = function() {
      _onConfirm && _onConfirm();
      _callback("confirm", instance);
      resolve({ action: "confirm", instance });
    };
    const instance = new MessageBoxConst();
    for (let prop in options) {
      instance[prop] = options[prop];
    }
    instance.$mount();
    instance.visible = true;
    instances.push(instance);
  });
};
messageBoxFn.alert = function(message, title, options) {
  if (typeof title === "object") {
    options = title;
    title = options.title;
  } else if (title === undefined) {
    title = "";
  }
  return messageBoxFn({
    ...options,
    title,
    message,
    showCancelButton: false,
    showConfirmButton: true
  });
};
messageBoxFn.confirm = function(message, title, options = {}) {
  if (typeof title === "object") {
    options = title;
    title = options.title;
  } else if (title === undefined) {
    title = "";
  }
  return messageBoxFn({
    ...options,
    title,
    message,
    showCancelButton: true,
    showConfirmButton: true
  });
};

export default messageBoxFn;
