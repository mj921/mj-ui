(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229496"],{dd99:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mj-page"},[a("div",{staticClass:"mj-page-title1"},[t._v("Table 表格")]),t._l(t.demoList,(function(t,e){return a("mj-demo",{key:e,attrs:{title:t.title,describe:t.describe,"demo-url":t.demoUrl}},[a(t.demoComp,{tag:"component"})],1)})),a("div",{staticClass:"mj-page-title2"},[t._v("Table 属性")]),a("mj-api-table",{attrs:{data:t.tableAttr}}),a("div",{staticClass:"mj-page-title2"},[t._v("columns 属性")]),a("mj-api-table",{attrs:{data:t.tableColumnAttr}})],2)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mj-table",{attrs:{data:t.data,columns:t.columns}})],1)},n=[],i={data:function(){return{columns:[{prop:"width",label:"宽"},{prop:"height",label:"高"},{prop:"area",label:"面积"}],data:[{width:100,height:200,area:2e4}]}}},d=i,s=a("2877"),p=Object(s["a"])(d,r,n,!1,null,null,null),u=p.exports,c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mj-table",{attrs:{data:t.data,columns:t.columns}})],1)},m=[],b={data:function(){return{columns:[{prop:"width",label:"宽"},{prop:"height",label:"高"},{prop:"area",label:"面积",formatter:function(t){return t.width*t.height+"平方"}}],data:[{width:100,height:200}]}}},h=b,f=Object(s["a"])(h,c,m,!1,null,null,null),v=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mj-table",{attrs:{data:t.data,columns:t.columns}})],1)},w=[],_={data:function(){return{columns:[{prop:"width",label:"宽"},{prop:"height",label:"高"},{prop:"area",label:"面积",formatter:function(t){return t.width*t.height}}],data:[]}}},y=_,j=Object(s["a"])(y,g,w,!1,null,null,null),T=j.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mj-table",{attrs:{data:t.data,columns:t.columns},scopedSlots:t._u([{key:"heightHeader",fn:function(e){var l=e.column;return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(l.label))])]}},{key:"area",fn:function(e){var a=e.row;return[t._v("\n      "+t._s(a.height*a.width)+"平方米\n    ")]}}])})],1)},C=[],D={data:function(){return{columns:[{prop:"width",label:"宽"},{prop:"height",label:"高",slotHeader:!0},{prop:"area",label:"面积",type:"slot"}],data:[{width:100,height:200}]}}},V=D,k=Object(s["a"])(V,x,C,!1,null,null,null),E=k.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mj-table",{attrs:{data:t.data,columns:t.columns},scopedSlots:t._u([{key:"heightHeader",fn:function(e){var l=e.column;return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(l.label))])]}},{key:"area",fn:function(e){var a=e.row;return[t._v("\n      "+t._s(a.height*a.width)+"平方米\n    ")]}}])})],1)},O=[],U={data:function(){return{columns:[{fixed:"left",prop:"width",label:"宽",width:200},{prop:"height",label:"高",width:200},{prop:"color",label:"颜色",width:200},{prop:"address",label:"地址",width:500},{fixed:"right",prop:"area",label:"面积",type:"slot"}],data:[{width:100,height:200,color:"红色",address:"浙江省杭州市余杭区崇贤街道"}]}}},$=U,A=Object(s["a"])($,H,O,!1,null,null,null),S=A.exports,J={name:"TablePage",components:{TableDemo1:u,TableDemo2:v,TableDemo3:T,TableDemo4:E,TableDemo5:S},data:function(){return{demoList:[{title:"基础用法",describe:"基础的表格用法",demoUrl:"table/TableDemo1.vue",demoComp:u},{title:"自定义列内容",describe:"formatter自定义格式化方法",demoUrl:"table/TableDemo2.vue",demoComp:v},{title:"列表为空",describe:"列表为空时列表展示",demoUrl:"table/TableDemo3.vue",demoComp:T},{title:"slot插槽",describe:"列中使用时 type设为'slot',插槽名称为prop,可以通过slotName设置；设置表头时，slotHeader设为true。插槽名称为porp + 'Header'",demoUrl:"table/TableDemo4.vue",demoComp:E},{title:"固定列",describe:"column 设置 fixed 为 left 或 right 固定列",demoUrl:"table/TableDemo5.vue",demoComp:S}],tableAttr:[{prop:"data",desc:"表格数据",type:"object[]",optional:"—",defaultVal:"—"},{prop:"empty-text",desc:"数据为空时显示的文字",type:"string",optional:"—",defaultVal:"暂无数据"}],tableColumnAttr:[{prop:"prop",desc:"列属性名",type:"string",optional:"—",defaultVal:"—"},{prop:"label",desc:"列名",type:"string",optional:"—",defaultVal:"—"},{prop:"width",desc:"列宽度",type:"string|number",optional:"—",defaultVal:"—"},{prop:"min-width",desc:"列最小宽度",type:"string|number",optional:"—",defaultVal:"—"},{prop:"type",desc:"列类型",type:"string",optional:"slot",defaultVal:"—"},{prop:"slotHeader",desc:"表头是否用slot",type:"boolean",optional:"—",defaultVal:"false"},{prop:"formatter",desc:"自定义格式化方法(row 这一行的数据 index 这一行的索引， 返回字符串)",type:"(row, index) => string",optional:"—",defaultVal:"—"}]}},methods:{fmt:function(t){return t.width*t.height}}},L=J,N=Object(s["a"])(L,l,o,!1,null,"100b91fa",null);e["default"]=N.exports}}]);
//# sourceMappingURL=chunk-2d229496.e9122dc3.js.map