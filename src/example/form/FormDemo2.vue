<template>
  <div>
    <mj-form ref="form" v-model="form" label-width="80px" :rules="rules">
      <mj-form-item prop="name" label="姓名">
        <mj-input v-model="form.name" />
      </mj-form-item>
      <mj-form-item prop="sex" label="性别">
        <mj-select v-model="form.sex" clearable>
          <mj-option value="男" label="男"></mj-option>
          <mj-option value="女" label="女"></mj-option>
        </mj-select>
      </mj-form-item>
      <mj-form-item prop="birthday" label="生日">
        <mj-date-picker v-model="form.birthday" />
      </mj-form-item>
      <mj-form-item prop="marriage" label="婚姻">
        <mj-radio v-model="form.marriage" label="1">未婚</mj-radio>
        <mj-radio v-model="form.marriage" label="2">已婚</mj-radio>
      </mj-form-item>
      <mj-form-item prop="hobby" label="爱好">
        <mj-checkbox v-model="form.hobby" label="1">篮球</mj-checkbox>
        <mj-checkbox v-model="form.hobby" label="2">足球</mj-checkbox>
        <mj-checkbox v-model="form.hobby" label="3">游戏</mj-checkbox>
      </mj-form-item>
      <mj-button @click="submit">提交</mj-button>
    </mj-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        birthday: "",
        marriage: "",
        hobby: ""
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [{ required: true, message: "请选择生日" }],
        marriage: [{ required: true, message: "请选择婚姻" }],
        hobby: [{ required: true, message: "请选择爱好" }]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form
        .validate()
        .then(() => {
          this.$message.success("检验成功");
          console.log(this.form);
        })
        .catch(error => {
          console.log(error);
          this.$message.error("校验失败");
        });
    }
  }
};
</script>

<style></style>
