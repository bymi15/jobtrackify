(this.webpackJsonpjobtrackify=this.webpackJsonpjobtrackify||[]).push([[6],{381:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(0),o=a(21),l=a(114),c=a(107),i=a(63),s=a(64),u=a(113),m=a(17),d=a(292),p=a(293),b=a(322),E=a(331),f=a.n(E),g=(a(332),a(288)),h=a(93),v=a(236),O=a(238),C=a(367),j=a.n(C),y=a(315),x=a(309),N=a(307),S=a(306),B=a(314),I=a(7),A=a(383),J=a(240),T=a(81),w=Object(i.a)([l.c.GET_BOARD_COLUMNS]),D=Object(s.a)([l.c.GET_BOARD_COLUMNS]),k=Object(o.connect)((function(e){return{boardColumns:e.boardColumn.boardColumns,isLoading:w(e),error:D(e)}}),(function(e){return{dispatchGetBoardColumns:function(){return e(l.a.getBoardColumns())},dispatchClearErrors:function(){return e(l.a.clearErrors())}}}))((function(e){var t=e.className,a=e.handleSelect,n=e.defaultValue,o=e.boardColumns,l=e.isLoading,c=e.error,i=e.dispatchGetBoardColumns,s=e.dispatchClearErrors;return r.useEffect((function(){null===o&&i()}),[o,i]),c&&Object(T.a)("Error",c,"danger",s),r.createElement(A.a,{id:"boardcolumn-select",onChange:function(e,t){a(t)},defaultValue:n,getOptionSelected:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.title},options:o||[],loading:l,renderInput:function(e){return r.createElement(B.a,Object.assign({},e,{className:t,label:"Board Column",variant:"outlined",InputProps:Object(I.a)(Object(I.a)({},e.InputProps),{},{endAdornment:r.createElement(r.Fragment,null,l?r.createElement(J.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))},fullWidth:!0})})),G=a(335),L=a(143),P=a(378),W=a(366),z=a.n(W),R=a(316),_=Object(v.a)((function(e){return Object(O.a)({sm:{width:e.spacing(3),height:e.spacing(3)},lg:{width:e.spacing(7),height:e.spacing(7)},xl:{width:e.spacing(10),height:e.spacing(10)}})})),M=function(e){var t=e.name,a=e.color,n=e.size,o=_(),l=n&&o[n];if(t.length<=0)return null;var c=t.charAt(0),i=t.split(" ");i.length>1&&(c=i[0].charAt(0)+i[1].charAt(0));var s=a||function(e){if(!e)return"#1976d2";for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);var n=(16777215&t).toString(16).toUpperCase();return"#"+"00000".substring(0,6-n.length)+n}(t);return r.createElement(R.a,{className:l,style:{backgroundColor:s}},c)},U=Object(v.a)((function(e){return Object(O.a)({sm:{width:e.spacing(3),height:e.spacing(3)},lg:{width:e.spacing(7),height:e.spacing(7)},xl:{width:e.spacing(10),height:e.spacing(10)}})})),F=function(e){var t=e.company,a=e.size,n=U(),o=a&&n[a];return t&&t.logo?r.createElement(R.a,{className:o,alt:"companylogo",src:t.logo}):r.createElement(M,{size:a,name:t.name,"aria-label":"company-logo"})},V=a(365),q=a(343),H=a.n(q),K=a(286),Q=a(302),X=function(e){var t=e.data,a=e.index,n=e.style;return r.cloneElement(t[a],{style:Object(I.a)(Object(I.a)({},n),{},{top:n.top+8})})},Y=r.createContext({}),Z=r.forwardRef((function(e,t){var a=r.useContext(Y);return r.createElement("div",Object.assign({ref:t},e,a))}));var $=r.forwardRef((function(e,t){var a=e.children,n=Object(G.a)(e,["children"]),o=r.Children.toArray(a),l=H()(),c=Object(K.a)(l.breakpoints.up("sm"),{noSsr:!0}),i=o.length,s=c?36:48,u=function(e){return r.isValidElement(e)&&e.type===Q.a?48:s},m=function(e){var t=r.useRef(null);return r.useEffect((function(){null!=t.current&&t.current.resetAfterIndex(0,!0)}),[e]),t}(i);return r.createElement("div",{ref:t},r.createElement(Y.Provider,{value:n},r.createElement(V.a,{itemData:o,height:(i>8?8*s:o.map(u).reduce((function(e,t){return e+t}),0))+16,width:"100%",ref:m,outerElementType:Z,innerElementType:"ul",itemSize:function(e){return u(o[e])},overscanCount:5,itemCount:i},X)))})),ee=function(e){return[r.createElement(Q.a,{key:e.key,component:"div"},e.group),e.children]},te=Object(i.a)([L.c.GET_COMPANIES]),ae=Object(s.a)([L.c.GET_COMPANIES]),ne=Object(o.connect)((function(e){return{companies:e.company.companies,isLoading:te(e),error:ae(e)}}),(function(e){return{dispatchGetCompanies:function(){return e(L.a.getCompanies())},dispatchClearErrors:function(){return e(L.a.clearErrors())}}}))((function(e){var t=e.className,a=e.handleSelect,o=e.companies,l=e.isLoading,c=e.error,i=e.dispatchGetCompanies,s=e.dispatchClearErrors,u=r.useState(null),m=Object(n.a)(u,2),d=m[0],p=m[1];return r.useEffect((function(){null===o&&i()}),[o,i]),c&&Object(T.a)("Error",c,"danger",s),r.createElement(A.a,{id:"company-select",onChange:function(e,t){p(t),a(t)},getOptionSelected:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.name},options:o||[],loading:l,disableListWrap:!0,ListboxComponent:$,renderGroup:ee,renderInput:function(e){return r.createElement(B.a,Object.assign({},e,{className:t,label:"Company",placeholder:"Select a company...",variant:"outlined",InputProps:Object(I.a)(Object(I.a)({},e.InputProps),{},{startAdornment:r.createElement(P.a,{position:"start"},d?r.createElement(F,{company:d}):r.createElement(z.a,null)),endAdornment:r.createElement(r.Fragment,null,l?r.createElement(J.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))},fullWidth:!0})})),re=a(41),oe=Object(v.a)((function(e){return Object(O.a)({marginTop:{marginTop:e.spacing(3)}})})),le={board:"",company:"",title:"",boardColumn:""},ce=Object(o.connect)((function(e){return{selectedBoard:e.dashboard.board}}),(function(e){return{dispatchCreateJob:function(t){return e(c.a.createJob(t))}}}))((function(e){var t=e.open,a=e.boardColumn,o=e.onClose,l=e.selectedBoard,c=e.dispatchCreateJob,i=oe(),s=Object(re.b)(le),u=Object(n.a)(s,2),m=u[0],d=u[1];r.useEffect((function(){t&&l&&a&&d({board:l.id,boardColumn:a.id})}),[a,t,l,d]);return r.createElement(y.a,{fullWidth:!0,maxWidth:"sm",open:t,onClose:o,"aria-labelledby":"form-dialog-title"},r.createElement(S.a,{id:"form-dialog-title"},"Add Job"),r.createElement(N.a,null,r.createElement(B.a,{autoFocus:!0,margin:"dense",name:"title",label:"Job Title",type:"text",onChange:function(e){Object(re.a)(e,d)},fullWidth:!0}),r.createElement(ne,{className:i.marginTop,handleSelect:function(e){d({company:e&&e.id||""})}}),r.createElement(k,{className:i.marginTop,handleSelect:function(e){d({boardColumn:e&&e.id||""})},defaultValue:a})),r.createElement(x.a,null,r.createElement(g.a,{onClick:o,color:"default"},"Cancel"),r.createElement(g.a,{onClick:function(e){e.preventDefault(),c(m),d(le),o()},color:"primary"},"Create")))})),ie=Object(v.a)((function(e){return Object(O.a)({title:{fontSize:16},subTitle:{fontSize:14,marginBottom:12},marginTop:{marginTop:e.spacing(1)},column:{height:"65vh"}})})),se=function(e){var t=e.boardColumn,a=e.jobCount,o=e.children,l=r.useState(!1),c=Object(n.a)(l,2),i=c[0],s=c[1],u=ie();return r.createElement(r.Fragment,null,r.createElement(ce,{open:i,onClose:function(){s(!1)},boardColumn:t}),r.createElement(d.a,null,r.createElement(p.a,null,r.createElement(h.a,{className:u.title,color:"textPrimary"},t.title),r.createElement(h.a,{className:u.subTitle,color:"textSecondary"},a," job",1!==a&&"s"),r.createElement(g.a,{onClick:function(){return s(!0)},variant:"outlined",color:"primary",startIcon:r.createElement(j.a,null),fullWidth:!0},"ADD JOB"),r.createElement(b.c,{droppableId:t.id},(function(e){return r.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:u.marginTop}),r.createElement(f.a,null,r.createElement("div",{className:u.column},o,e.placeholder)))})))))},ue=a(22),me=a(308),de=a(287),pe=a(5),be=a(298),Ee=a(369),fe=a.n(Ee),ge=a(382),he=a(379),ve=a(368),Oe=Object(pe.a)((function(e){return Object(O.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(G.a)(e,["children","classes","onClose"]);return r.createElement(S.a,Object.assign({disableTypography:!0,className:a.root},o),r.createElement(h.a,{variant:"h6"},t),n?r.createElement(be.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.createElement(fe.a,null)):null)})),Ce=function(e){var t=e.children,a=e.value,n=e.index,o=Object(G.a)(e,["children","value","index"]);return r.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},o),a===n&&r.createElement(r.Fragment,null,t))},je=function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}},ye=Object(v.a)((function(e){return Object(O.a)({root:{marginBottom:e.spacing(2)},modalContent:{paddingBottom:e.spacing(4)},label:{paddingTop:"6px",fontSize:"16px",fontWeight:600},editabletext:{fontSize:"16px",fontWeight:400},textareaWrapper:{paddingTop:"10px !important"},textarea:{padding:e.spacing(1),fontWeight:400}})})),xe=Object(o.connect)(null,(function(e){return{dispatchUpdateJob:function(t,a){return e(c.a.updateJob(t,a))}}}))((function(e){var t=e.open,a=e.onClose,o=e.job,l=e.dispatchUpdateJob,c=ye(),i=r.useState(0),s=Object(n.a)(i,2),u=s[0],m=s[1],d=function(e){var t=e.name,a=e.value;o&&l(o.id,Object(ue.a)({},t,a))};return o&&r.createElement(y.a,{open:t,onClose:a,"aria-labelledby":"job-modal"},r.createElement(Oe,{id:"job-modal",onClose:a},o.company.name),r.createElement(N.a,{className:c.modalContent,dividers:!0},r.createElement(de.a,{className:c.root,container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start"},r.createElement(de.a,{item:!0},r.createElement(F,{company:o.company,size:"xl"})),r.createElement(de.a,{item:!0},r.createElement(h.a,{variant:"h4",color:"textPrimary"},o.company.name),r.createElement(h.a,{variant:"h6",color:"textSecondary"},o.title))),r.createElement(ge.a,{className:c.root,value:u,onChange:function(e,t){m(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},r.createElement(he.a,Object.assign({label:"Info"},je(0))),r.createElement(he.a,Object.assign({label:"Notes"},je(1))),r.createElement(he.a,Object.assign({label:"Interviews"},je(2)))),r.createElement(Ce,{value:u,index:0},r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{item:!0,sm:3},r.createElement(h.a,{className:c.label},"Company:")),r.createElement(de.a,{item:!0,sm:9},r.createElement(ve.a,{className:c.editabletext,value:o.company.name,readonly:!0}))),r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{item:!0,sm:3},r.createElement(h.a,{className:c.label},"Job Title:")),r.createElement(de.a,{item:!0,sm:9},r.createElement(ve.a,{className:c.editabletext,name:"title",value:o.title,placeholder:"Enter a value",onSave:d}))),r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{item:!0,sm:3},r.createElement(h.a,{className:c.label},"Location:")),r.createElement(de.a,{item:!0,sm:9},r.createElement(ve.a,{className:c.editabletext,name:"location",value:o.location,placeholder:"Enter a value",onSave:d}))),r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{item:!0,sm:3},r.createElement(h.a,{className:c.label},"Date Applied:")),r.createElement(de.a,{item:!0,sm:9},r.createElement(ve.a,{className:c.editabletext,name:"dateApplied",value:o.dateApplied,placeholder:"Enter a value",onSave:d}))),r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{item:!0,sm:3},r.createElement(h.a,{className:c.label},"Post URL:")),r.createElement(de.a,{item:!0,sm:9},r.createElement(ve.a,{className:c.editabletext,name:"postUrl",value:o.postUrl,placeholder:"Enter a value",onSave:d}))),r.createElement(de.a,{container:!0,spacing:1},r.createElement(de.a,{item:!0,sm:3},r.createElement(h.a,{className:c.label},"Description:")),r.createElement(de.a,{item:!0,sm:9,className:c.textareaWrapper},r.createElement(B.a,{InputProps:{className:c.textarea},id:"outlined-multiline-static",multiline:!0,fullWidth:!0,rows:4,value:o.description,placeholder:"Enter a value",variant:"outlined"}))))),r.createElement(Ce,{value:u,index:1},r.createElement(me.a,null,"Notes section under development")),r.createElement(Ce,{value:u,index:2},r.createElement(me.a,null,"Interviews section under development"))))})),Ne=a(23),Se=a.n(Ne),Be=a(38),Ie=a(330),Ae=a.n(Ie),Je=a(380),Te=a(329),we=a.n(Te),De=a(115),ke=Object(v.a)({root:{cursor:"grab"},deleteIcon:{opacity:1,transition:"0.3s"},hiddenDeleteIcon:{opacity:0},title:{fontSize:"16px",fontWeight:500},subTitle:{fontSize:"14px"},cardContent:{padding:0},createdAt:{float:"right",fontSize:"12px",color:"#929292",fontWeight:200}}),Ge=Object(o.connect)(null,(function(e){return{dispatchDeleteJob:function(t){return e(c.a.deleteJob(t))}}}))((function(e){var t=e.job,a=e.index,o=e.dispatchDeleteJob,l=ke(),c=r.useState(!1),i=Object(n.a)(c,2),s=i[0],u=i[1],m=Object(De.b)(),E=function(){var e=Object(Be.a)(Se.a.mark((function e(t,a){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.next=3,m({variant:"danger",title:"Are you sure?",description:"Do you wish to delete the job?"});case 3:e.sent&&o(a.id);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.createElement(b.b,{draggableId:t.id,index:a},(function(e){return r.createElement(d.a,Object.assign({onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},className:l.root,innerRef:e.innerRef},e.draggableProps,e.dragHandleProps),r.createElement(p.a,null,r.createElement(Je.a,{avatar:r.createElement(F,{company:t.company}),action:r.createElement(be.a,{className:s?l.deleteIcon:l.hiddenDeleteIcon,"aria-label":"delete",onClick:function(e){E(e,t)}},r.createElement(Ae.a,null)),title:r.createElement("span",{className:l.title},t.company.name),subheader:r.createElement("span",{className:l.subTitle},t.title)}),r.createElement(p.a,{className:l.cardContent},r.createElement("span",{className:l.createdAt},"Added ",r.createElement(we.a,{fromNow:!0},t.createdAt)))))}))})),Le=a(20),Pe=Object(v.a)((function(e){return Object(O.a)({root:{margin:e.spacing(2),marginBottom:0},wrapper:{display:"flex",flexWrap:"nowrap",marginBottom:e.spacing(3)},column:{width:"370px",flex:"0 0 auto",marginRight:e.spacing(2)}})})),We=Object(i.a)([l.c.GET_BOARD_COLUMNS,c.c.GET_JOBS_BOARD]),ze=Object(s.a)([l.c.GET_BOARD_COLUMNS,c.c.GET_JOBS_BOARD]),Re=Object(o.connect)((function(e){return{selectedBoard:e.dashboard.board,jobs:e.job.groupedJobs,boardColumns:e.boardColumn.boardColumns,isLoading:We(e),error:ze(e)}}),(function(e){return{dispatchGetJobsByBoard:function(t){return e(c.a.getJobsByBoard(t))},dispatchGetBoardColumns:function(){return e(l.a.getBoardColumns())},dispatchMoveJob:function(t,a,n){return e(c.a.moveJob(t,a,n))},dispatchMoveJobUI:function(t,a,n,r){return e(c.a.moveJobUI(t,a,n,r))},dispatchClearErrors:function(){return e(l.a.clearErrors())}}}));t.default=Re((function(e){var t=e.selectedBoard,a=e.jobs,o=e.boardColumns,l=e.isLoading,c=(e.error,e.dispatchGetBoardColumns),i=e.dispatchGetJobsByBoard,s=e.dispatchMoveJob,d=e.dispatchMoveJobUI,p=(e.dispatchClearErrors,r.useState(null)),E=Object(n.a)(p,2),g=E[0],h=E[1],v=Pe();r.useEffect((function(){t&&(c(),i(t.id))}),[c,i,t]);var O=r.useMemo((function(){return r.createElement(xe,{open:Boolean(g),job:g,onClose:function(){h(null)}})}),[g]);return l?r.createElement(u.a,null):null===t?r.createElement(m.a,{to:"/dashboard"}):r.createElement("div",{className:v.root},r.createElement(b.a,{onDragEnd:function(e){var t=e.destination,n=e.source,r=e.draggableId;if(t&&!Object(Le.isEqual)(n,t)){var o=t.droppableId,l=t.droppableId===n.droppableId?0:-1,c=t.index>0?a[o][t.index+l].id:void 0;d(n.droppableId,t.droppableId,n.index,t.index),s(r,o,c)}}},r.createElement(f.a,null,r.createElement("div",{className:v.wrapper},r.createElement(r.Fragment,null,O),o&&o.length>0&&o.map((function(e){return r.createElement("div",{key:e.id,className:v.column},r.createElement(se,{boardColumn:e,jobCount:a&&a[e.id]?a[e.id].length:0},a&&a[e.id]&&a[e.id].map((function(e,t){return r.createElement("div",{id:e.id,key:e.id,onClick:function(){h(e)}},r.createElement(Ge,{job:e,index:t}))}))))}))))))}))}}]);
//# sourceMappingURL=6.77cd62a6.chunk.js.map