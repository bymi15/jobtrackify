(this.webpackJsonpjobtrackify=this.webpackJsonpjobtrackify||[]).push([[7],{322:function(e,t,a){"use strict";var n=a(254),r=a(167),l=a(173),c=a(0),o=a(115),i=Object(r.a)((function(e){return Object(l.a)({sm:{width:e.spacing(3),height:e.spacing(3)},md:{width:e.spacing(5),height:e.spacing(5)},lg:{width:e.spacing(7),height:e.spacing(7)},xl:{width:e.spacing(10),height:e.spacing(10)}})}));t.a=function(e){var t=e.company,a=e.size,r=i(),l=a&&r[a];return"string"===typeof t?c.createElement(o.a,{size:a,name:t,"aria-label":"company-logo"}):t&&t.logo?c.createElement(n.a,{className:l,alt:"companylogo",src:t.logo}):c.createElement(o.a,{size:a,name:t.name,"aria-label":"company-logo"})}},350:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(0),l=a(15),c=a(70),o=a(89),i=a(48),m=a(25),s=a(68),d=a(21),u=a(290),p=a(291),E=a(323),b=a(91),g=a.n(b),f=(a(181),a(286)),h=a(60),y=a(167),v=a(173),x=a(332),C=a.n(x),O=a(301),j=a(305),N=a(303),S=a(302),I=a(317),w=a(6),B=a(352),T=a(247),P=a(14),J=Object(i.a)([c.c.GET_BOARD_COLUMNS]),z=Object(m.a)([c.c.GET_BOARD_COLUMNS]),A=Object(l.connect)((function(e){return{boardColumns:e.boardColumn.boardColumns,loading:J(e),error:z(e)}}),(function(e){return{dispatchGetBoardColumns:function(){return e(c.a.getBoardColumns())},dispatchClearErrors:function(){return e(c.a.clearErrors())}}}))((function(e){var t=e.className,a=e.handleSelect,n=e.defaultValue,l=e.boardColumns,c=e.loading,o=e.error,i=e.dispatchGetBoardColumns,m=e.dispatchClearErrors;return r.useEffect((function(){null===l&&i()}),[l,i]),o&&Object(P.a)("Error",o,"danger",m),r.createElement(B.a,{id:"boardcolumn-select",onChange:function(e,t){a(t)},defaultValue:n,getOptionSelected:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.title},options:l||[],loading:c,renderInput:function(e){return r.createElement(I.a,Object.assign({},e,{className:t,label:"Board Column",variant:"outlined",InputProps:Object(w.a)(Object(w.a)({},e.InputProps),{},{endAdornment:r.createElement(r.Fragment,null,c?r.createElement(T.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))},fullWidth:!0})})),D=a(347),W=a(331),k=a.n(W),U=a(322);function R(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}var _=Object(l.connect)((function(e){return{companies:e.company.companies}}))((function(e){var t=e.className,a=e.onChange,l=e.companies,c=r.useState(null),o=Object(n.a)(c,2),i=o[0],m=o[1],s=r.useState([]),d=Object(n.a)(s,2),u=d[0],p=d[1],E=function(e){var t=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"any";if(""===(e=R(e).toLowerCase().trim()))return[];var r=t.filter((function(t){var a=R(t.name).toLowerCase().trim();return"start"===n?0===a.indexOf(e):a.indexOf(e)>-1}));return r.slice(0,a)}(e,l||[],5,"start");p(t)};return r.createElement(B.a,{id:"company-select",freeSolo:!0,onChange:function(e,t){"string"!==typeof t&&(m(t),a(t))},onInputChange:function(e,t){E(t),m(t),a(t)},getOptionSelected:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.name},options:u,disableClearable:!0,renderInput:function(e){return r.createElement(I.a,Object.assign({},e,{className:t,label:"Company",placeholder:"Enter a company name...",variant:"outlined",InputProps:Object(w.a)(Object(w.a)({},e.InputProps),{},{type:"search",startAdornment:r.createElement(D.a,{position:"start"},i&&"string"!==typeof i?r.createElement(U.a,{company:i}):r.createElement(k.a,null))})}))},fullWidth:!0})})),L=a(26),M=Object(y.a)((function(e){return Object(v.a)({marginTop:{marginTop:e.spacing(3)}})})),F={board:"",title:"",boardColumn:""},G=Object(l.connect)((function(e){return{selectedBoard:e.dashboard.board}}),(function(e){return{dispatchCreateJob:function(t){return e(o.a.createJob(t))}}}))((function(e){var t=e.open,a=e.boardColumn,l=e.onClose,c=e.selectedBoard,o=e.dispatchCreateJob,i=M(),m=Object(L.b)(F),s=Object(n.a)(m,2),d=s[0],u=s[1];r.useEffect((function(){t&&c&&a&&u({board:c.id,boardColumn:a.id})}),[a,t,c,u]);return r.createElement(O.a,{fullWidth:!0,maxWidth:"sm",open:t,onClose:l,"aria-labelledby":"form-dialog-title"},r.createElement(S.a,{id:"form-dialog-title"},"Add Job"),r.createElement(N.a,null,r.createElement(I.a,{autoFocus:!0,margin:"dense",name:"title",label:"Job Title",type:"text",onChange:function(e){Object(L.a)(e,u)},fullWidth:!0}),r.createElement(_,{className:i.marginTop,onChange:function(e){u("string"===typeof e?{company:void 0,companyCustom:e}:{company:e&&e.id||"",companyCustom:void 0})}}),r.createElement(A,{className:i.marginTop,handleSelect:function(e){u({boardColumn:e&&e.id||""})},defaultValue:a})),r.createElement(j.a,null,r.createElement(f.a,{onClick:l,color:"default"},"Cancel"),r.createElement(f.a,{onClick:function(e){e.preventDefault(),o(d),u(F),l()},color:"primary"},"Create")))})),q=Object(y.a)((function(e){return Object(v.a)({title:{fontSize:16},subTitle:{fontSize:14,marginBottom:12},marginTop:{marginTop:e.spacing(1)},column:{height:"65vh"}})})),H=function(e){var t=e.boardColumn,a=e.jobCount,l=e.children,c=r.useState(!1),o=Object(n.a)(c,2),i=o[0],m=o[1],s=q();return r.createElement(r.Fragment,null,r.createElement(G,{open:i,onClose:function(){m(!1)},boardColumn:t}),r.createElement(u.a,null,r.createElement(p.a,null,r.createElement(h.a,{className:s.title,color:"textPrimary"},t.title),r.createElement(h.a,{className:s.subTitle,color:"textSecondary"},a," job",1!==a&&"s"),r.createElement(f.a,{onClick:function(){return m(!0)},variant:"outlined",color:"primary",startIcon:r.createElement(C.a,null),fullWidth:!0},"ADD JOB"),r.createElement(E.c,{droppableId:t.id},(function(e){return r.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:s.marginTop}),r.createElement(g.a,null,r.createElement("div",{className:s.column},l,e.placeholder)))})))))},V=a(16),Y=a(338),K=a(304),Q=a(285),X=a(5),Z=a(297),$=a(334),ee=a.n($),te=a(351),ae=a(348),ne=a(333),re=a(287),le=a(313),ce=Object(X.a)((function(e){return Object(v.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,a=e.classes,n=e.onClose,l=Object(Y.a)(e,["children","classes","onClose"]);return r.createElement(S.a,Object.assign({disableTypography:!0,className:a.root},l),r.createElement(h.a,{variant:"h6"},t),n?r.createElement(Z.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.createElement(ee.a,null)):null)})),oe=function(e){var t=e.children,a=e.value,n=e.index,l=Object(Y.a)(e,["children","value","index"]);return r.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},l),a===n&&r.createElement(r.Fragment,null,t))},ie=function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}},me=Object(y.a)((function(e){return Object(v.a)({dialogPaper:Object(V.a)({minHeight:"75vh",minWidth:"650px"},e.breakpoints.down("sm"),{minHeight:"80vh",minWidth:"80vw"}),root:{marginBottom:e.spacing(2)},modalContent:{paddingBottom:e.spacing(4)},label:{paddingTop:"6px",fontSize:"16px",fontWeight:600},editabletext:{fontSize:"16px",fontWeight:400},textareaWrapper:{paddingTop:"10px !important"},textarea:{padding:e.spacing(1),fontWeight:400},noteTextarea:{width:"100%",fontFamily:"Roboto",padding:e.spacing(1),fontSize:"16px",marginBottom:e.spacing(1)},paddingTop:{paddingTop:"6px",fontSize:"16px",fontWeight:600}})})),se=Object(l.connect)(null,(function(e){return{dispatchUpdateJob:function(t,a){return e(o.a.updateJob(t,a))}}}))((function(e){var t=e.open,a=e.onClose,l=e.job,c=e.dispatchUpdateJob,o=me(),i=r.useState(0),m=Object(n.a)(i,2),s=m[0],d=m[1],u=function(e){var t=e.name,a=e.value;l&&c(l.id,Object(V.a)({},t,a))},p=function(){d(0),a()},E=!!l&&"string"!==typeof l.company,b=null;E&&(b=l&&l.company);var g=l?"string"===typeof l.company?l.company:l.company.name:"";return l&&r.createElement(O.a,{open:t,onClose:p,"aria-labelledby":"job-modal",classes:{paper:o.dialogPaper}},r.createElement(ce,{id:"job-modal",onClose:p},"\xa0"),r.createElement(N.a,{className:o.modalContent,dividers:!0},r.createElement(Q.a,{className:o.root,container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start"},r.createElement(Q.a,{item:!0},r.createElement(U.a,{company:l.company,size:"xl"})),r.createElement(Q.a,{item:!0},r.createElement(h.a,{variant:"h4",color:"textPrimary"},g),r.createElement(h.a,{variant:"h6",color:"textSecondary"},l.title))),r.createElement(te.a,{className:o.root,value:s,onChange:function(e,t){d(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},r.createElement(ae.a,Object.assign({label:"Job Info"},ie(0))),r.createElement(ae.a,Object.assign({label:"Notes"},ie(1))),E&&r.createElement(ae.a,Object.assign({label:"Company"},ie(2)))),r.createElement(oe,{value:s,index:0},r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:3},r.createElement(h.a,{className:o.label},"Company:")),r.createElement(Q.a,{item:!0,sm:9},r.createElement(ne.a,{className:o.editabletext,value:g,readonly:!0}))),r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:3},r.createElement(h.a,{className:o.label},"Job Title:")),r.createElement(Q.a,{item:!0,sm:9},r.createElement(ne.a,{className:o.editabletext,name:"title",value:l.title,placeholder:"Enter a value",onSave:u}))),r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:3},r.createElement(h.a,{className:o.label},"Address:")),r.createElement(Q.a,{item:!0,sm:9},r.createElement(ne.a,{className:o.editabletext,name:"address",value:l.location&&l.location.address,placeholder:"Enter a value",onSave:function(e){var t=e.value;l&&c(l.id,{location:{address:t}})}}))),r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:3},r.createElement(h.a,{className:o.label},"Date Applied:")),r.createElement(Q.a,{item:!0,sm:9},r.createElement(ne.a,{type:"date",className:o.editabletext,name:"dateApplied",value:l.dateApplied,placeholder:"Enter a value",onSave:u}))),r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:3},r.createElement(h.a,{className:o.label},"Post URL:")),r.createElement(Q.a,{item:!0,sm:9},r.createElement(ne.a,{className:o.editabletext,name:"postUrl",value:l.postUrl,placeholder:"Enter a value",onSave:u}))),r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:3},r.createElement(h.a,{className:o.label},"Description:")),r.createElement(Q.a,{item:!0,sm:9,className:o.textareaWrapper},r.createElement(I.a,{InputProps:{className:o.textarea},id:"outlined-multiline-static",multiline:!0,fullWidth:!0,rows:4,value:l.description,placeholder:"Enter a value",variant:"outlined"}))))),r.createElement(oe,{value:s,index:1},r.createElement(K.a,null,r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:12},r.createElement("textarea",{className:o.noteTextarea,rows:4,placeholder:"Enter a note..."}))),r.createElement(Q.a,{container:!0,spacing:1,direction:"column",alignItems:"flex-end"},r.createElement(Q.a,{item:!0,sm:12},r.createElement(f.a,{variant:"contained",color:"primary"},"Save")))))),E&&!!b&&r.createElement(oe,{value:s,index:2},r.createElement(K.a,null,r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{container:!0,spacing:1},r.createElement(le.a,{display:"flex",flexDirection:"row",mt:2,mb:2},r.createElement(U.a,{company:l.company,size:"md"}),r.createElement(le.a,{display:"flex",flexDirection:"column",justifyContent:"center",pl:2},r.createElement(h.a,{color:"textPrimary",variant:"h5"},g)))),b.description&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:12},r.createElement(ne.a,{className:o.editabletext,value:b.description,readonly:!0}))),b.website&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Website:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.website,readonly:!0}))),b.industry&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Industry:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.industry,readonly:!0}))),b.foundedYear&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Founded:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.foundedYear.toString(),readonly:!0}))),b.headquarters&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Headquarters:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.headquarters,readonly:!0}))),b.country&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Country:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.country,readonly:!0}))),b.sizeRange&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Company size:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.sizeRange+" employees",readonly:!0}))),b.currentEmployeeEstimate&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Current employees:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.currentEmployeeEstimate+" employees est.",readonly:!0}))),b.totalEmployeeEstimate&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"Total employees:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(ne.a,{className:o.editabletext,value:b.totalEmployeeEstimate+" employees est.",readonly:!0}))),b.linkedInUrl&&r.createElement(Q.a,{container:!0,spacing:1},r.createElement(Q.a,{item:!0,sm:4},r.createElement(h.a,{color:"textPrimary",className:o.label},"LinkedIn Page:")),r.createElement(Q.a,{item:!0,sm:8},r.createElement(h.a,{className:o.label,style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},r.createElement(re.a,{href:"https://"+b.linkedInUrl,target:"_blank",rel:"noopener noreferrer"},"https://",b.linkedInUrl)))))))))})),de=a(17),ue=a.n(de),pe=a(29),Ee=a(326),be=a.n(Ee),ge=a(349),fe=a(325),he=a.n(fe),ye=a(71),ve=Object(y.a)({root:{cursor:"grab",marginBottom:"5px"},deleteIcon:{opacity:1,transition:"0.3s"},hiddenDeleteIcon:{opacity:0},title:{fontSize:"16px",fontWeight:500},subTitle:{fontSize:"14px"},cardContent:{padding:0},createdAt:{float:"right",fontSize:"12px",color:"#929292",fontWeight:200}}),xe=Object(l.connect)(null,(function(e){return{dispatchDeleteJob:function(t){return e(o.a.deleteJob(t))}}}))((function(e){var t=e.job,a=e.index,l=e.dispatchDeleteJob,c=ve(),o=r.useState(!1),i=Object(n.a)(o,2),m=i[0],s=i[1],d=Object(ye.b)(),b=function(){var e=Object(pe.a)(ue.a.mark((function e(t,a){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.next=3,d({variant:"danger",title:"Are you sure?",description:"Do you wish to delete the job?"});case 3:e.sent&&l(a);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.createElement(E.b,{draggableId:t.id,index:a},(function(e){return r.createElement(u.a,Object.assign({onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},className:c.root,innerRef:e.innerRef},e.draggableProps,e.dragHandleProps),r.createElement(p.a,null,r.createElement(ge.a,{avatar:r.createElement(U.a,{company:t.company}),action:r.createElement(Z.a,{className:m?c.deleteIcon:c.hiddenDeleteIcon,"aria-label":"delete",onClick:function(e){b(e,t)}},r.createElement(be.a,null)),title:r.createElement("span",{className:c.title},"string"===typeof t.company?t.company:t.company.name),subheader:r.createElement("span",{className:c.subTitle},t.title)}),r.createElement(p.a,{className:c.cardContent},r.createElement("span",{className:c.createdAt},"Added ",r.createElement(he.a,{fromNow:!0},t.createdAt)))))}))})),Ce=a(23),Oe=Object(y.a)((function(e){return Object(v.a)({root:{margin:e.spacing(2),marginBottom:0},wrapper:{display:"flex",flexWrap:"nowrap",marginBottom:e.spacing(3)},column:{width:"370px",flex:"0 0 auto",marginRight:e.spacing(2)}})})),je=Object(i.a)([c.c.GET_BOARD_COLUMNS,o.c.GET_JOBS_BOARD]),Ne=Object(m.a)([c.c.GET_BOARD_COLUMNS,o.c.GET_JOBS_BOARD]),Se=Object(l.connect)((function(e){return{selectedBoard:e.dashboard.board,jobs:e.job.groupedJobs,boardColumns:e.boardColumn.boardColumns,loading:je(e),error:Ne(e)}}),(function(e){return{dispatchMoveJob:function(t,a,n){return e(o.a.moveJob(t,a,n))},dispatchMoveJobUI:function(t,a,n,r){return e(o.a.moveJobUI(t,a,n,r))},dispatchClearErrors:function(){return e(c.a.clearErrors())}}}));t.default=Se((function(e){var t=e.selectedBoard,a=e.jobs,l=e.boardColumns,c=e.loading,o=(e.error,e.dispatchMoveJob),i=e.dispatchMoveJobUI,m=(e.dispatchClearErrors,r.useState(null)),u=Object(n.a)(m,2),p=u[0],b=u[1],f=Oe(),h=r.useMemo((function(){return r.createElement(se,{open:Boolean(p),job:p,onClose:function(){b(null)}})}),[p]);return c?r.createElement(s.a,null):null===t?r.createElement(d.a,{to:"/dashboard"}):r.createElement("div",{className:f.root},r.createElement(E.a,{onDragEnd:function(e){var t=e.destination,n=e.source,r=e.draggableId;if(t&&!Object(Ce.isEqual)(n,t)){var l=t.droppableId,c=t.droppableId===n.droppableId?0:-1,m=t.index>0?a[l][t.index+c].id:void 0;i(n.droppableId,t.droppableId,n.index,t.index),o(r,l,m)}}},r.createElement(g.a,null,r.createElement("div",{className:f.wrapper},r.createElement(r.Fragment,null,h),l&&l.length>0&&l.map((function(e){return r.createElement("div",{key:e.id,className:f.column},r.createElement(H,{boardColumn:e,jobCount:a&&a[e.id]?a[e.id].length:0},a&&a[e.id]&&a[e.id].map((function(e,t){return r.createElement("div",{id:e.id,key:e.id,onClick:function(){b(e)}},r.createElement(xe,{job:e,index:t}))}))))}))))))}))}}]);
//# sourceMappingURL=7.a8f81df5.chunk.js.map