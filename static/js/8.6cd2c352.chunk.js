(this.webpackJsonpjobtrackify=this.webpackJsonpjobtrackify||[]).push([[8],{321:function(e,n,t){"use strict";var a=t(253),o=t(164),c=t(170),r=t(0),i=t(115),l=Object(o.a)((function(e){return Object(c.a)({sm:{width:e.spacing(3),height:e.spacing(3)},md:{width:e.spacing(5),height:e.spacing(5)},lg:{width:e.spacing(7),height:e.spacing(7)},xl:{width:e.spacing(10),height:e.spacing(10)}})}));n.a=function(e){var n=e.company,t=e.size,o=l(),c=t&&o[t];return"string"===typeof n?r.createElement(i.a,{size:t,name:n,"aria-label":"company-logo"}):n&&n.logo?r.createElement(a.a,{className:c,alt:"companylogo",src:n.logo}):r.createElement(i.a,{size:t,name:n.name,"aria-label":"company-logo"})}},353:function(e,n,t){"use strict";t.r(n);var a=t(19),o=t(0),c=t(337),r=t(164),i=t(170),l=t(30),s=t(15),p=t(293),u=t(60),m=t(296),g=t(321),f=Object(r.a)((function(e){return Object(i.a)({typography:{padding:e.spacing(1),display:"inline-block"},popover:{pointerEvents:"none"}})})),b=function(e){var n=e.job,t=(e.lat,e.lng,f()),c=o.useState(null),r=Object(a.a)(c,2),i=r[0],l=r[1],s=function(){l(null)},b="pin"+n.id;return o.createElement("div",{className:"pin"},o.createElement(m.a,{"aria-label":"pin",onClick:function(){},onMouseEnter:function(e){l(e.currentTarget)},onMouseLeave:s},o.createElement(g.a,{company:n.company,size:"md"})),o.createElement(p.a,{className:t.popover,id:b,open:Boolean(i),anchorEl:i,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0},o.createElement(u.a,{className:t.typography},"string"===typeof n.company?n.company:n.company.name)))},h=t(23),y=t.n(h),d=function(e,n,t){return e>=n&&e<=t},j=function(e){return y.a.filter(e,(function(e){return!!e.location&&d(e.location.lat,-90,90)&&d(e.location.lng,-90,90)}))},v=Object(r.a)((function(e){return Object(i.a)({root:{height:"100vh",width:"100%"}})})),E=Object(s.connect)((function(e){return{jobs:e.job.jobs}}));n.default=E((function(e){var n=e.center,t=void 0===n?{lat:51.5,lng:-.1277}:n,r=e.zoom,i=void 0===r?10:r,s=e.jobs,p=o.useState([]),u=Object(a.a)(p,2),m=u[0],g=u[1];o.useEffect((function(){s&&g(j(s))}),[s]);var f=v();return o.createElement("div",{className:f.root},o.createElement(c.a,{options:function(e){return{fullscreenControl:!0,mapTypeControl:!0,mapTypeId:e.MapTypeId.ROADMAP,scaleControl:!0,scrollwheel:!0,streetViewControl:!0}},bootstrapURLKeys:{key:l.a.GOOGLE_API_KEY||""},defaultCenter:t,defaultZoom:i},m?m.map((function(e){return e.location&&o.createElement(b,{key:e.id,job:e,lat:e.location.lat,lng:e.location.lng})})):null))}))}}]);
//# sourceMappingURL=8.6cd2c352.chunk.js.map