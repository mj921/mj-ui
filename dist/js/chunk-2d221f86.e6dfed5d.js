(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221f86"],{cd2a:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"mj-page-title1"},[n._v("Message 消息提示")]),t("mj-code",{attrs:{title:"基础用法",describe:"基础的消息提示用法",code:n.code1}},[t("mj-button",{on:{click:n.openMsg1}},[n._v("打开消息提示")])],1),t("mj-code",{attrs:{title:"自动消失时间",describe:"消息提示自动消失时间",code:n.code2}},[t("mj-button",{on:{click:function(e){return n.openMsg1(1e4)}}},[n._v("关闭时间10s")]),t("mj-button",{on:{click:function(e){return n.openMsg1(0)}}},[n._v("不自动关闭")])],1),t("mj-code",{attrs:{title:"不同状态",describe:"用来显示「成功、警告、消息、错误」类的操作反馈。",code:n.code3}},[t("mj-button",{on:{click:n.open1}},[n._v("消息")]),t("mj-button",{on:{click:n.open2}},[n._v("成功")]),t("mj-button",{on:{click:n.open3}},[n._v("警告")]),t("mj-button",{on:{click:n.open4}},[n._v("错误")])],1),t("div",{staticClass:"mj-page-title2"},[n._v("Options")]),t("mj-api-table",{attrs:{data:n.messageAttr}})],1)},s=[],c={code1:'\n    <template>\n      <div>\n        <mj-button @click="openMsg1">打开消息提示</mj-button>\n      </div>\n    </template>\n    <script>\n      export default {\n        methods: {\n          openMsg1(duration = 3000) {\n            this.$message({\n              message: "消息提示",\n              duration\n            });\n          }\n        }\n      }\n    <\/script>\n  ',code2:'\n    <template>\n      <div>\n        <mj-button @click="openMsg1(10000)">关闭时间10s</mj-button>\n        <mj-button @click="openMsg1(0)">不自动关闭</mj-button>\n      </div>\n    </template>\n    <script>\n      export default {\n        methods: {\n          openMsg1(duration = 3000) {\n            this.$message({\n              message: "消息提示",\n              duration\n            });\n          }\n        }\n      }\n    <\/script>\n  ',code3:'\n    <template>\n      <div>\n        <mj-button @click="open1">消息</mj-button>\n        <mj-button @click="open2">成功</mj-button>\n        <mj-button @click="open3">警告</mj-button>\n        <mj-button @click="open4">错误</mj-button>\n      </div>\n    </template>\n    <script>\n      export default {\n        methods: {\n          open1() {\n            this.$message("这是一条消息提示");\n          },\n          open2() {\n            this.$message({\n              message: "恭喜你，这是一条成功消息",\n              type: "success"\n            });\n          },\n          open3() {\n            this.$message({\n              message: "警告哦，这是一条警告消息",\n              type: "warning"\n            });\n          },\n          open4() {\n            this.$message.error("错了哦，这是一条错误消息");\n          }\n        }\n      }\n    <\/script>\n  '},i={name:"RadioPage",data:function(){return{code1:c.code1,code2:c.code2,code3:c.code3,messageAttr:[{prop:"message",desc:"消息文字",type:"string",optional:"—",defaultVal:"—"},{prop:"type",desc:"主题",type:"string",optional:"success | warning | info | error",defaultVal:"info"},{prop:"duration",desc:"显示时间, 毫秒。设为 0 则不会自动关闭",type:"number",optional:"—",defaultVal:"3000"}]}},methods:{openMsg1:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;this.$message({message:"消息提示",duration:n})},open1:function(){this.$message("这是一条消息提示")},open2:function(){this.$message({message:"恭喜你，这是一条成功消息",type:"success"})},open3:function(){this.$message({message:"警告哦，这是一条警告消息",type:"warning"})},open4:function(){this.$message.error("错了哦，这是一条错误消息")}}},a=i,p=t("2877"),m=Object(p["a"])(a,o,s,!1,null,"8c7ea10a",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d221f86.e6dfed5d.js.map