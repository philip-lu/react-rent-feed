(this["webpackJsonprent-feed"]=this["webpackJsonprent-feed"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(4),c=n.n(a),i=(n(14),n(3)),d=n.n(i),o=n(5),l=n(6),u=n(7),h=n(9),p=n(8),j=(n(16),n(0)),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,adds:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dimdim.wrenchtech.io/api/search/9498dc25-3472-4e20-83a9-1d6403dc39e3/list/?offset=0&limit=21&ordering=date",e.next=3,fetch("https://dimdim.wrenchtech.io/api/search/9498dc25-3472-4e20-83a9-1d6403dc39e3/list/?offset=0&limit=21&ordering=date",{headers:{"Accept-Language":"ru"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({adds:n.results,loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.state.loading||!this.state.adds?Object(j.jsx)("h3",{children:"\u0429\u0430 \u0432\u0441\u0451 \u0431\u0443\u0438\u0442..."}):Object(j.jsx)("div",{children:this.state.adds.map((function(e){return Object(j.jsxs)("div",{className:"apartment-card",children:[Object(j.jsxs)("div",{className:"topItems",children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"mapsLink",href:"https://www.google.com/maps/search/?api=1&query="+e.street+","+e.building_no,children:Object(j.jsxs)("p",{className:!0===e.is_owner?"owner":"address",children:[e.street,", ",e.building_no,Object(j.jsx)("span",{className:"owner",style:{display:!0===e.is_owner?"":"none"},children:" (\u043e\u0442 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430)"})]},e.id)}),Object(j.jsxs)("p",{className:"date-time",children:[" ",(t=e.providers[0].created_at,new Date(t).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}))]})]}),Object(j.jsxs)("p",{className:"price",children:[Object(j.jsxs)("span",{className:"price-uah",children:[e.price_uah," \u0433\u0440\u043d."]}),Object(j.jsxs)("span",{className:"price-usd",children:[" / ",e.price_usd," usd"]})]}),Object(j.jsx)("div",{className:"apartment-card-images",children:e.images.map((function(e){return Object(j.jsx)("img",{className:"apartment-card-images-item",src:e,alt:e},e)}))}),Object(j.jsxs)("p",{children:["\u044d\u0442\u0430\u0436 ",e.floor," \u0438\u0437 ",e.floors_total]}),Object(j.jsx)("p",{className:"description",children:e.description}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.providers[0].url,children:e.providers[0].url})]},e.id);var t}))})})}}]),n}(s.a.Component);var b=function(){return Object(j.jsx)(m,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.c93903db.chunk.js.map