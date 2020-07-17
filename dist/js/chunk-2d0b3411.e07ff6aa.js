(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3411"],{"281f":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"mj-page-title1"},[t._v("MessageBox 弹框")]),e("mj-code",{attrs:{title:"消息提示",describe:"消息提示alert",code:t.code1}},[e("mj-button",{on:{click:t.openAlert}},[t._v("消息提示")])],1),e("mj-code",{attrs:{title:"确认消息",describe:"确认消息confirm",code:t.code2}},[e("mj-button",{on:{click:t.openConfirm}},[t._v("确认消息")])],1),e("div",{staticClass:"mj-page-title2"},[t._v("Options")]),e("mj-api-table",{attrs:{data:t.messageAttr}})],1)},a=[],i={code1:'\n    <template>\n      <div>\n        <mj-button @click="openAlert">消息提示</mj-button>\n      </div>\n    </template>\n    <script>\n      export default {\n        methods: {\n          openAlert() {\n            this.$alert("alert内容", "提示")\n              .then(() => {\n                this.$message.info("确认");\n              })\n              .catch(({ action }) => {\n                this.$message.info(action);\n              });\n          }\n        }\n      }\n    <\/script>\n  ',code2:'\n    <template>\n      <div>\n        <mj-button @click="openConfirm">确认消息</mj-button>\n      </div>\n    </template>\n    <script>\n      export default {\n        methods: {\n          openConfirm() {\n            this.$confirm("confirm内容", "提示")\n              .then(() => {\n                this.$message.info("确认");\n              })\n              .catch(({ action }) => {\n                this.$message.info(action);\n              });\n          }\n        }\n      }\n    <\/script>\n  '},c={name:"RadioPage",data:function(){return{code1:i.code1,code2:i.code2,messageAttr:[{prop:"message",desc:"消息文字",type:"string",optional:"—",defaultVal:"—"},{prop:"title",desc:"标题",type:"string",optional:"—",defaultVal:"—"},{prop:"showCancelButton",desc:"是否显示取消按钮",type:"boolean",optional:"—",defaultVal:"true"},{prop:"showConfirmButton",desc:"是否显示确定按钮",type:"boolean",optional:"—",defaultVal:"true"},{prop:"cancelButtonText",desc:"取消按钮文案",type:"string",optional:"—",defaultVal:"取消"},{prop:"confirmButtonText",desc:"确定按钮文案",type:"string",optional:"—",defaultVal:"确定"},{prop:"callback",desc:"若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调",type:"function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法",optional:"—",defaultVal:"—"}]}},methods:{openAlert:function(){var t=this;this.$alert("alert内容","提示").then((function(){t.$message.info("确认")})).catch((function(n){var e=n.action;t.$message.info(e)}))},openConfirm:function(){var t=this;this.$confirm("confirm内容","提示").then((function(){t.$message.info("确认")})).catch((function(n){var e=n.action;t.$message.info(e)}))}}},s=c,l=e("2877"),r=Object(l["a"])(s,o,a,!1,null,"42ca2180",null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0b3411.e07ff6aa.js.map