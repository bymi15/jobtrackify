(this.webpackJsonpjobtrackify=this.webpackJsonpjobtrackify||[]).push([[5],{339:function(e,t,a){"use strict";var r=a(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(49)).default)(n.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=o},340:function(e,t,a){"use strict";var r=a(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(49)).default)(n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},377:function(e,t,a){"use strict";a.r(t);var r=a(23),n=a.n(r),o=a(38),c=a(22),i=a(19),d=a(0),s=a(21),l=a(113),u=a(85),p=a(76),f=a(63),h=a(64),m=a(164),b=a(287),E=a(236),g=a(238),v=a(291),B=a(93),x=a(330),O=a.n(x),y=a(340),j=a.n(y),w=a(41),k=a(81),C=a(329),M=a.n(C),A=a(144),D=a(115),R=a(17),T=a(339),S=a.n(T),_=a(298),z=a(162),N=a(320),I=a(319),U=Object(E.a)((function(e){return Object(g.a)({root:{marginTop:e.spacing(5),flexGrow:1},board:{height:"140px",padding:e.spacing(2),color:e.palette.text.primary,transition:"0.3s",cursor:"pointer","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.4)"},"& .title":{marginTop:e.spacing(2),fontWeight:"500",fontSize:"16px",display:"-webkit-box","-webkit-line-clamp":2,"-webkit-box-orient":"vertical",overflow:"hidden"},"& .dateCreated":{fontSize:"12px",color:"#969696",marginBottom:"0"}},boardAdd:{display:"flex",flexDirection:"column",justifyContent:"center",height:"140px",padding:"5% 0",textAlign:"center",background:"rgba(255, 255, 255, 0.1)",color:"#858585",borderStyle:"dashed",borderColor:"#b3b2b2",borderRadius:"5px",boxShadow:"none",transition:"0.2s",cursor:"pointer","&:hover":{borderColor:"#585858",color:"#585858"}},grid:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},moreIcon:{float:"right",color:"#796a6c",opacity:"0.6",transition:"0.3s","&:hover":{opacity:"1"}},moreIconHidden:{float:"right",opacity:"0"}})})),L=Object(f.a)([p.c.GET_BOARDS_USER,p.c.CREATE_BOARD]),P=Object(h.a)([p.c.GET_BOARDS_USER,p.c.CREATE_BOARD,p.c.DELETE_BOARD]),G=Object(s.connect)((function(e){return{selectedBoard:e.dashboard.board,boards:e.board.boards,isLoading:L(e),error:P(e)}}),(function(e){return{dispatchGetBoardsByUser:function(){return e(p.a.getBoardsByUser())},dispatchCreateBoard:function(t){return e(p.a.createBoard(t))},dispatchDeleteBoard:function(t){return e(p.a.deleteBoard(t))},dispatchUpdateBoard:function(t,a){return e(p.a.updateBoard(t,a))},dispatchClearErrors:function(){return e(p.a.clearErrors())},dispatchSelectBoard:function(t){return e(u.a.selectBoard(t))}}}));t.default=G((function(e){var t=e.dispatchGetBoardsByUser,a=e.dispatchCreateBoard,r=e.dispatchDeleteBoard,s=e.dispatchUpdateBoard,u=e.dispatchClearErrors,p=e.dispatchSelectBoard,f=e.boards,h=e.isLoading,E=e.error,g=Object(w.b)({showMoreIcon:{},anchorEl:{}}),x=Object(i.a)(g,2),y=x[0],C=x[1],T=Object(D.b)(),L=Object(A.b)(),P=Object(R.g)(),G=U();d.useEffect((function(){t()}),[t]),d.useEffect((function(){E&&Object(k.a)("Error",E,"danger",u)}),[u,E]);var Y=function(){C({showMoreIcon:{}})},V=function(e){e.stopPropagation(),C({anchorEl:{}})},H=function(){var e=Object(o.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),V(t),e.next=4,T({variant:"danger",title:"Are you sure?",description:"Do you wish to delete the board?"});case 4:e.sent&&r(a);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(n.a.mark((function e(t,a){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),V(t),e.next=4,L({title:"Edit a board",inputName:"Board Title",defaultValue:a.title});case 4:r=e.sent,o=r.value,r.hasResult&&s(a.id,o);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({title:"Add a board",inputName:"Board Title",okText:"Create"});case 2:t=e.sent,r=t.value,t.hasResult&&a(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return h?d.createElement(l.a,null):d.createElement(v.a,{className:G.root},d.createElement(B.a,{variant:"h5"},"My Boards"),d.createElement(b.a,{className:G.grid,container:!0,spacing:3},f&&f.length>0&&f.map((function(e){return d.createElement(b.a,{key:e.id,item:!0,xs:12,sm:6,md:3},d.createElement(m.a,{elevation:2,className:G.board,onMouseEnter:function(){var t;t=e.id,C({showMoreIcon:Object(c.a)({},t,!0)})},onMouseLeave:Y,onClick:function(){!function(e){p(e),P.push("/dashboard/board")}(e)}},d.createElement(_.a,{className:y.showMoreIcon[e.id]?G.moreIcon:G.moreIconHidden,"aria-label":"user account","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){return function(e,t){e.stopPropagation(),C({anchorEl:Object(c.a)({},t,e.currentTarget)})}(t,e.id)}},d.createElement(S.a,null)),d.createElement(z.a,{id:"menu-appbar",anchorEl:y.anchorEl[e.id],anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(y.anchorEl[e.id]),onClose:V},d.createElement(N.a,{onClick:function(t){J(t,e)}},d.createElement(j.a,null),d.createElement(I.a,{ml:1},"Edit")),d.createElement(N.a,{onClick:function(t){H(t,e.id)}},d.createElement(O.a,null),d.createElement(I.a,{ml:1},"Delete"))),d.createElement("p",{className:"title"},e.title),d.createElement("p",{className:"dateCreated"},d.createElement(M.a,{format:"DD/MM/YYYY"},e.createdAt))))})),d.createElement(b.a,{item:!0,xs:12,sm:6,md:3},d.createElement(m.a,{onClick:W,elevation:2,className:G.boardAdd},"+ Add a new board"))))}))}}]);
//# sourceMappingURL=5.ec69124e.chunk.js.map