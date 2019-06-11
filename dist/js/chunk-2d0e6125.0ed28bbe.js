(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6125"],{"96d6":function(t,e,c){"use strict";c.r(e);var i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"mj-page-title1"},[t._v("Switch 开关")]),c("mj-code",{attrs:{title:"基础用法",describe:"基础的单选框用法",code:t.code1}},[c("mj-switch",{model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1),c("mj-code",{attrs:{title:"文字描述",code:t.code2}},[c("mj-switch",{attrs:{notActiveText:"关闭",activeText:"打开"},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}})],1),c("mj-code",{attrs:{title:"禁用",code:t.code3}},[c("mj-switch",{attrs:{disabled:""},model:{value:t.switch3,callback:function(e){t.switch3=e},expression:"switch3"}})],1),c("mj-code",{attrs:{title:"自定义背景色",code:t.code4}},[c("mj-switch",{attrs:{notActiveColor:"#123456",activeColor:"#836e90"},model:{value:t.switch4,callback:function(e){t.switch4=e},expression:"switch4"}})],1),c("div",{staticClass:"mj-page-title2"},[t._v("Switch 属性")]),c("mj-api-table",{attrs:{data:t.switchAttr}})],1)},n=[],a={code1:'\n        <template>\n            <div>\n                <mj-switch v-model="switch1"></mj-switch>\n            </div>\n        </template>\n        <script>\n            export default {\n                data () {\n                    return {\n                        switch1 = true;\n                    }\n                }\n            }\n        <\/script>\n    ',code2:'\n        <template>\n            <div>\n                <mj-switch v-model="switch2" notActiveText="关闭" activeText="打开"></mj-switch>\n            </div>\n        </template>\n        <script>\n            export default {\n                data () {\n                    return {\n                        switch2 = "打开";\n                    }\n                }\n            }\n        <\/script>\n    ',code3:'\n        <template>\n            <div>\n                <mj-switch v-model="switch3" disabled></mj-switch>\n            </div>\n        </template>\n        <script>\n            export default {\n                data () {\n                    return {\n                        switch3 = true;\n                    }\n                }\n            }\n        <\/script>\n    ',code4:'\n        <template>\n            <div>\n                <mj-switch v-model="switch4" notActiveColor="#123456" activeColor="#836e90"></mj-switch>\n            </div>\n        </template>\n        <script>\n            export default {\n                data () {\n                    return {\n                        switch4 = true;\n                    }\n                }\n            }\n        <\/script>\n    '},s={name:"SwitchPage",data:function(){return{switch1:!0,switch2:"打开",switch3:!0,switch4:!0,code1:a.code1,code2:a.code2,code3:a.code3,code4:a.code4,switchAttr:[{prop:"value / v-model",desc:"绑定值",type:"string | number | boolean",optional:"—",defaultVal:"true"},{prop:"disabled",desc:"是否禁用",type:"string | boolean",optional:"—",defaultVal:"false"},{prop:"notActiveText",desc:"switch 关闭时的值",type:"string",optional:"—",defaultVal:"''"},{prop:"activeText",desc:"switch 打开时的值",type:"string",optional:"—",defaultVal:"''"},{prop:"notActiveValue",desc:"switch 关闭时的值",type:"number",optional:"—",defaultVal:"0"},{prop:"activeValue",desc:"switch 打开时的值",type:"number",optional:"—",defaultVal:"0"},{prop:"notActiveColor",desc:"switch 关闭时的背景色",type:"string",optional:"—",defaultVal:"#ee3e3e"},{prop:"activeColor",desc:"switch 打开时的背景色",type:"string",optional:"—",defaultVal:"#3cf603"}]}}},o=s,l=c("2877"),d=Object(l["a"])(o,i,n,!1,null,"6a19d73c",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e6125.0ed28bbe.js.map