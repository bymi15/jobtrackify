(this.webpackJsonpjobtrackify=this.webpackJsonpjobtrackify||[]).push([[4],{340:function(e,t,a){"use strict";var r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(39)).default)(n.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=o},346:function(e,t,a){"use strict";var r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(39)).default)(n.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=o},347:function(e,t,a){"use strict";var r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(39)).default)(n.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},362:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a.n(r),o=a(29),c=a(18),i=a(17),l=a(0),d=a(15),s=a(57),u=a(95),p=a(84),f=a(40),h=a(23),m=a(107),b=a(295),E=a(176),v=a(182),g=a(299),B=a(62),O=a(340),x=a.n(O),y=a(347),j=a.n(y),w=a(27),k=a(16),M=a(122),C=a.n(M),A=a(150),D=a(75),_=a(22),z=a(346),R=a.n(z),T=a(307),S=a(175),N=a(323),I=a(330),P=Object(E.a)((function(e){return Object(v.a)({root:{marginTop:e.spacing(5),flexGrow:1},board:{height:"140px",padding:e.spacing(2),color:e.palette.text.primary,transition:"0.3s",cursor:"pointer","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.4)"},"& .title":{marginTop:e.spacing(2),fontWeight:"500",fontSize:"16px",display:"-webkit-box","-webkit-line-clamp":2,"-webkit-box-orient":"vertical",overflow:"hidden"},"& .dateCreated":{fontSize:"12px",color:"#969696",marginBottom:"0"}},boardAdd:{display:"flex",flexDirection:"column",justifyContent:"center",height:"140px",padding:"5% 0",textAlign:"center",background:"rgba(255, 255, 255, 0.1)",color:"#858585",borderStyle:"dashed",borderColor:"#b3b2b2",borderRadius:"5px",boxShadow:"none",transition:"0.2s",cursor:"pointer","&:hover":{borderColor:"#585858",color:"#585858"}},grid:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},moreIcon:{float:"right",color:"#796a6c",opacity:"0.6",transition:"0.3s","&:hover":{opacity:"1"}},moreIconHidden:{float:"right",opacity:"0"}})})),U=Object(f.a)([p.c.GET_BOARDS_USER,p.c.CREATE_BOARD]),V=Object(h.a)([p.c.GET_BOARDS_USER,p.c.CREATE_BOARD,p.c.DELETE_BOARD]),G=Object(d.connect)((function(e){return{selectedBoard:e.dashboard.board,boards:e.board.boards,loading:U(e),error:V(e)}}),(function(e){return{dispatchGetBoardsByUser:function(){return e(p.a.getBoardsByUser())},dispatchCreateBoard:function(t){return e(p.a.createBoard(t))},dispatchDeleteBoard:function(t){return e(p.a.deleteBoard(t))},dispatchUpdateBoard:function(t,a){return e(p.a.updateBoard(t,a))},dispatchClearErrors:function(){return e(p.a.clearErrors())},dispatchSelectBoard:function(t){return e(u.a.selectBoard(t))}}}));t.default=G((function(e){var t=e.dispatchGetBoardsByUser,a=e.dispatchCreateBoard,r=e.dispatchDeleteBoard,d=e.dispatchUpdateBoard,u=e.dispatchClearErrors,p=e.dispatchSelectBoard,f=e.boards,h=e.loading,E=e.error,v=Object(w.b)({showMoreIcon:{},anchorEl:{}}),O=Object(i.a)(v,2),y=O[0],M=O[1],z=Object(D.b)(),U=Object(A.b)(),V=Object(_.g)(),G=P();l.useEffect((function(){f||t()}),[f,t]),l.useEffect((function(){E&&Object(k.a)("Error",E,"danger",u)}),[u,E]);var H=function(){M({showMoreIcon:{}})},L=function(e){e.stopPropagation(),M({anchorEl:{}})},Y=function(){var e=Object(o.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),L(t),e.next=4,z({variant:"danger",title:"Are you sure?",description:"Do you wish to delete the board?"});case 4:e.sent&&r(a);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(n.a.mark((function e(t,a){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),L(t),e.next=4,U({title:"Edit a board",inputName:"Board Title",defaultValue:a.title});case 4:r=e.sent,o=r.value,r.hasResult&&d(a.id,o);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({title:"Add a board",inputName:"Board Title",okText:"Create"});case 2:t=e.sent,r=t.value,t.hasResult&&a(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return h?l.createElement(s.a,null):l.createElement(g.a,{className:G.root},l.createElement(B.a,{variant:"h5"},"My Boards"),l.createElement(b.a,{className:G.grid,container:!0,spacing:3},f&&f.length>0&&f.map((function(e){return l.createElement(b.a,{key:e.id,item:!0,xs:12,sm:6,md:3},l.createElement(m.a,{elevation:2,className:G.board,onMouseEnter:function(){var t;t=e.id,M({showMoreIcon:Object(c.a)({},t,!0)})},onMouseLeave:H,onClick:function(){!function(e){p(e),V.push("/dashboard/board")}(e)}},l.createElement(T.a,{className:y.showMoreIcon[e.id]?G.moreIcon:G.moreIconHidden,"aria-label":"user account","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(t){return function(e,t){e.stopPropagation(),M({anchorEl:Object(c.a)({},t,e.currentTarget)})}(t,e.id)}},l.createElement(R.a,null)),l.createElement(S.a,{id:"menu-appbar",anchorEl:y.anchorEl[e.id],anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(y.anchorEl[e.id]),onClose:L},l.createElement(N.a,{onClick:function(t){J(t,e)}},l.createElement(j.a,null),l.createElement(I.a,{ml:1},"Edit")),l.createElement(N.a,{onClick:function(t){Y(t,e.id)}},l.createElement(x.a,null),l.createElement(I.a,{ml:1},"Delete"))),l.createElement("p",{className:"title"},e.title),l.createElement("p",{className:"dateCreated"},l.createElement(C.a,{format:"DD/MM/YYYY"},e.createdAt))))})),l.createElement(b.a,{item:!0,xs:12,sm:6,md:3},l.createElement(m.a,{onClick:W,elevation:2,className:G.boardAdd},"+ Add a new board"))))}))}}]);
//# sourceMappingURL=4.e70ac7d4.chunk.js.map