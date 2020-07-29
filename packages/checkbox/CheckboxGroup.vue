<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: "MjCheckboxGroup",
  mjComponentName: "MjCheckboxGroup",
  props: {
    value: {
      validator(val) {
        return val instanceof Array || val === "";
      },
      default: ""
    }
  },
  data() {
    return {
      checkboxList: []
    };
  },
  mounted() {
    this.checkboxList.forEach(checkbox => {
      if (this.value !== "" && this.value.indexOf(checkbox.label) > -1) {
        checkbox.setChecked(true);
      } else {
        checkbox.setChecked(false);
      }
    });
  },
  created() {
    this.$on("MjCheckboxGroup.addCheckbox", checkbox => {
      this.checkboxList.push(checkbox);
    });
    this.$on("MjCheckboxGroup.removeCheckbox", checkbox => {
      this.checkboxList.splice(this.checkboxList.indexOf(checkbox), 1);
    });
    this.$on("MjCheckboxGroup.change", () => {
      let value = [];
      this.checkboxList.forEach(checkbox => {
        if (checkbox.mj_checked) {
          value.push(checkbox.label);
        }
      });
      this.$emit("input", value);
    });
  }
};
</script>

<style></style>
