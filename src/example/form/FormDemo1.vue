<template>
  <div>
    <mj-form ref="form" v-model="form" label-width="80px">
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
        <mj-checkbox-group v-model="form.hobby">
          <mj-checkbox label="1">篮球</mj-checkbox>
          <mj-checkbox label="2">足球</mj-checkbox>
          <mj-checkbox label="3">游戏</mj-checkbox>
        </mj-checkbox-group>
      </mj-form-item>
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
      }
    };
  }
};
</script>

<style></style>
