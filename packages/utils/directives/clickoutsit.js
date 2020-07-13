const nodeList = [];
const directiveKey = "d_clickoutsit";

document.addEventListener("click", e => {
  nodeList.forEach(node => {
    if (
      !node[directiveKey] ||
      !node[directiveKey].context ||
      !node[directiveKey].methodName ||
      !node[directiveKey].context[node[directiveKey].methodName] ||
      node.contains(e.target)
    )
      return;
    node[directiveKey].context[node[directiveKey].methodName] &&
      node[directiveKey].context[node[directiveKey].methodName]();
  });
});
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    el[directiveKey] = {
      methodName: binding.expression,
      context: vnode.context
    };
  }
};
