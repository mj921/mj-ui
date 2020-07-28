export default {
  methods: {
    emitParentEvent(parentName, eventName, eventParams) {
      let parent = this.$parent || this.$root;
      while (parent && parentName !== parent.$options.mjComponentName) {
        parent = parent.$parent;
      }
      if (parent) {
        parent.$emit(eventName, eventParams);
      }
    }
  }
};
