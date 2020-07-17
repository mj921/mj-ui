import Notification from "./Notification.vue";
import Vue from "vue";
import PopperManage from "../utils/popper/PoperManage";

const NotificationConst = Vue.extend(Notification);
const instanceMap = {
  "top-right": [],
  "top-left": [],
  "bottom-right": [],
  "bottom-left": []
};
const onCloseHandle = function(instance) {
  instanceMap[instance.position].splice(
    instanceMap[instance.position].indexOf(instance),
    1
  );
  let topOffset = 20;
  instanceMap[instance.position].forEach(item => {
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
  options.onCloseHandle = onCloseHandle;
  if (
    ["top-right", "top-left", "bottom-right", "bottom-left"].indexOf(
      options.position
    ) === -1
  ) {
    options.position = "top-right";
  }
  const instance = new NotificationConst({
    data: options
  });
  instance.$mount();
  let topOffset = 20;
  instanceMap[instance.position].forEach(item => {
    topOffset += item.$el.offsetHeight + 16;
  });
  instance.topOffset = topOffset;
  instance.$el.style.zIndex = PopperManage.getZIndex();
  instance.show();
  instanceMap[instance.position].push(instance);
  return instance;
};

export default messageFn;
