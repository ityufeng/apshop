webpackJsonp([36],{TE4p:function(t,e,a){"use strict";function n(t){return Object(i.a)({url:"/custom/list",method:"get",params:t})}function s(t){return Object(i.a)({url:"/custom/status",method:"post",data:t})}Object.defineProperty(e,"__esModule",{value:!0});var i=a("vLgD"),l=a("cAgV"),r=a("0xDb"),u=[{key:"",display_name:"全部"},{key:"0",display_name:"正常"},{key:"C",display_name:"禁用"}],o=function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,t]},c={name:"customList",directives:{waves:l.a},data:function(){return{opBy:this.$store.state.user.name,list:null,total:null,listLoading:!0,dates:o(),listQuery:{page:1,limit:20,username:"",startDate:"",endDate:"",status:""},calendarTypeOptions:u,dialogStatus:"",dialogPvVisible:!1,pvData:[],tableKey:0,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}}},filters:{timeFilter:function(t){return Object(r.b)(t)},statusFilter:function(t){return{0:"success",C:"error"}[t]},userStatusFilter:function(t){return{0:"正常",C:"禁用"}[t]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.listQuery.startDate=this.dates[0],this.listQuery.endDate=this.dates[1],n(this.listQuery).then(function(e){t.list=e.result,t.total=e.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){var a=this;this.$confirm("您确定要操作吗？","提示",{type:"warning"}).then(function(){s({uid:t.uid,status:e,opBy:a.opBy}).then(function(n){a.$message({message:n.msg,type:"success"}),t.status=e})}).catch(function(t){})}}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"用户名"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.username,callback:function(e){t.$set(t.listQuery,"username",e)},expression:"listQuery.username"}}),t._v(" "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"350px"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"状态"},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"用户名",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.username))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"注册时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("timeFilter")(e.row.createTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"登录次数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.loginNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"最后登录时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("timeFilter")(e.row.lastLoginTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.cell))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(t._f("userStatusFilter")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==e.row.status?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleModifyStatus(e.row,"C")}}},[t._v("禁用\n        ")]):t._e(),t._v(" "),"C"==e.row.status?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.handleModifyStatus(e.row,"0")}}},[t._v("启用\n        ")]):t._e()]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},p=[],f={render:d,staticRenderFns:p},m=f,g=a("VU/8"),y=g(c,m,!1,null,null,null);e.default=y.exports}});