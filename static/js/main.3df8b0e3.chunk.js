(this["webpackJsonpmovies-hub"]=this["webpackJsonpmovies-hub"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},176:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},181:function(e,t){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),r=a.n(s),i=(a(106),a(230)),o=a(66),l=a(15),u=(a(107),a(108),a(2)),d=function(){return Object(u.jsxs)("header",{onClick:function(){return window.scroll(0,0)},className:"header",children:["\ud83c\udfa5 Movies Hub \ud83c\udfa5"," "]})},j=a(8),b=a(219),p=a(222),f=a(224),O=a(90),h=a.n(O),m=a(91),v=a.n(m),g=a(62),x=a.n(g),_=a(92),y=a.n(_),w=Object(b.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#222140",zIndex:100}});function S(){var e=w(),t=c.a.useState(0),a=Object(j.a)(t,2),s=a[0],r=a[1],i=Object(l.f)();return Object(n.useEffect)((function(){0===s?i.push("/"):1===s?i.push("/movies"):2===s?i.push("/series"):3===s&&i.push("/search")}),[s,i]),Object(u.jsxs)(p.a,{value:s,onChange:function(e,t){r(t)},showLabels:!0,className:e.root,children:[Object(u.jsx)(f.a,{style:{color:"white"},label:"Trending",icon:Object(u.jsx)(h.a,{})}),Object(u.jsx)(f.a,{style:{color:"white"},label:"Movies",icon:Object(u.jsx)(v.a,{})}),Object(u.jsx)(f.a,{style:{color:"white"},label:"TV Series",icon:Object(u.jsx)(y.a,{})}),Object(u.jsx)(f.a,{style:{color:"white"},label:"Search",icon:Object(u.jsx)(x.a,{})})]})}var k=a(14),N=a.n(k),C=a(20),P=a(21),T=a.n(P),M=a(227),E="https://image.tmdb.org/t/p/w300",U="https://image.tmdb.org/t/p/w500",G="https://www.movienewz.com/img/films/poster-holder.jpg",B=a(234),D=a(225),I=a(186),z=a(226),F=a(94),L=a.n(F),V=a(93),J=a.n(V),q=(a(170),a(171),function(e){return e.preventDefault()}),A=function(e){var t=e.id,a=e.media_type,c=Object(n.useState)([]),s=Object(j.a)(c,2),r=s[0],i=s[1],o=r.map((function(e){return Object(u.jsxs)("div",{className:"carouselItem",children:[Object(u.jsx)("img",{src:e.profile_path?"".concat(E,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:q,className:"carouselItem__img"}),Object(u.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),l=function(){var e=Object(C.a)(N.a.mark((function e(){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(u.jsx)(J.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:o,autoPlay:!0})},H=(a(172),Object(b.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}})));function R(e){var t=e.children,a=e.media_type,c=e.id,s=H(),r=Object(n.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(n.useState)(),b=Object(j.a)(d,2),p=b[0],f=b[1],O=Object(n.useState)(),h=Object(j.a)(O,2),m=h[0],v=h[1],g=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=").concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=").concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US"));case 2:n=e.sent,s=n.data,v(null===(t=s.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g(),x()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"media",type:"button",onClick:function(){l(!0)},children:t}),Object(u.jsx)(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:o,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:D.a,BackdropProps:{timeout:500},children:Object(u.jsx)(I.a,{in:o,children:p&&Object(u.jsx)("div",{className:s.paper,children:Object(u.jsxs)("div",{className:"ContentModal",children:[Object(u.jsx)("img",{src:p.poster_path?"".concat(U,"/").concat(p.poster_path):G,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(u.jsx)("img",{src:p.backdrop_path?"".concat(U,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(u.jsxs)("div",{className:"ContentModal__about",children:[Object(u.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(u.jsx)("i",{className:"tagline",children:p.tagline}),Object(u.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(u.jsx)("div",{children:Object(u.jsx)(A,{id:c,media_type:a})}),Object(u.jsx)(z.a,{variant:"contained",startIcon:Object(u.jsx)(L.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(m),children:"Watch the Trailer"})]})]})})})})]})}a(173);var W=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,s=e.media_type,r=e.vote_average;return Object(u.jsxs)(R,{media_type:s,id:t,children:[Object(u.jsx)(M.a,{badgeContent:r,color:r>8?"primary":"secondary"}),Object(u.jsx)("img",{className:"poster",src:a?"".concat(E,"/").concat(a):G,alt:n}),Object(u.jsx)("b",{className:"title",children:n}),Object(u.jsxs)("span",{className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(u.jsx)("span",{className:"subTitle",children:c})]})]})},K=(a(174),a(95)),Q=a(228),X=a(233),Y=(a(175),a(182),Object(K.a)({palette:{type:"dark"}})),Z=function(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(u.jsx)("div",{className:"style",children:Object(u.jsx)(Q.a,{theme:Y,children:Object(u.jsx)(X.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"primary"})})})},$=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("b389f987a2b2e7da60cac65073689bd4","&page=").concat(a));case 2:t=e.sent,n=t.data,o(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[a]),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(u.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(u.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(u.jsx)(Z,{setPage:c})]})},ee=a(16),te=a(235),ae=(a(183),function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,s=e.setGenres,r=e.type,i=e.setPage,o=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/genre/".concat(r,"/list?api_key=").concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US"));case 2:t=e.sent,a=t.data,s(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){s({})}}),[]),Object(u.jsxs)("div",{className:"genresDivStyle",children:[t.map((function(e){return Object(u.jsx)(te.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(ee.a)(c),[e])),i(1)}(e)}},e.id)})),c.map((function(e){return Object(u.jsx)(te.a,{className:"Unselected-Chip",style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(ee.a)(t),[e])),s(c.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})}),ne=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},ce=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(),d=Object(j.a)(l,2),b=d[0],p=d[1],f=Object(n.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)([]),g=Object(j.a)(v,2),x=g[0],_=g[1],y=ne(h),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,o(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[a,y]),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"pageTitle",children:"Movies"}),Object(u.jsx)(ae,{type:"movie",selectedGenres:h,setSelectedGenres:m,genres:x,setGenres:_,setPage:c}),Object(u.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(u.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),b>1&&Object(u.jsx)(Z,{setPage:c,numOfPages:b})]})},se=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(1),d=Object(j.a)(l,2),b=d[0],p=d[1],f=Object(n.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),g=Object(j.a)(v,2),x=g[0],_=g[1],y=ne(i),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(y));case 2:t=e.sent,a=t.data,m(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[y,b]),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(u.jsx)(ae,{type:"tv",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(u.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(u.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),x>1&&Object(u.jsx)(Z,{setPage:p,numOfPages:x})]})},re=a(231),ie=a(232),oe=a(229),le=(a(184),function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(1),d=Object(j.a)(l,2),b=d[0],p=d[1],f=Object(n.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),g=Object(j.a)(v,2),_=g[0],y=g[1],w=Object(K.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("b389f987a2b2e7da60cac65073689bd4","&language=en-US&query=").concat(i,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,n=t.data,m(n.results),y(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[a,b]),Object(u.jsxs)("div",{children:[Object(u.jsxs)(Q.a,{theme:w,children:[Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)(re.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(u.jsx)(z.a,{onClick:S,variant:"contained",style:{marginLeft:10},children:Object(u.jsx)(x.a,{fontSize:"large"})})]}),Object(u.jsxs)(ie.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(u.jsx)(oe.a,{style:{width:"50%"},label:"Search Movies"}),Object(u.jsx)(oe.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(u.jsxs)("div",{className:"trending",children:[h&&h.map((function(e){return Object(u.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!h&&(a?Object(u.jsx)("h2",{children:"No Series Found"}):Object(u.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(u.jsx)(Z,{setPage:p,numOfPages:_})]})});var ue=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",component:$,exact:!0}),Object(u.jsx)(l.a,{path:"/movies",component:ce}),Object(u.jsx)(l.a,{path:"/series",component:se}),Object(u.jsx)(l.a,{path:"/search",component:le})]})})}),Object(u.jsx)(S,{})]})};r.a.render(Object(u.jsx)(ue,{}),document.getElementById("root"))},85:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=85},86:function(e,t){}},[[185,1,2]]]);
//# sourceMappingURL=main.3df8b0e3.chunk.js.map