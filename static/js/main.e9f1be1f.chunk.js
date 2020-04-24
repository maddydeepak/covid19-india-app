(this["webpackJsonpcovid19-india-app"]=this["webpackJsonpcovid19-india-app"]||[]).push([[0],{117:function(e,a,t){},119:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(54),r=t.n(l),s=(t(68),t(69),t(10)),o=t(11),i=t(13),m=t(12),d=t(24),p=t(14),u=(t(70),t(71),function(e){Object(i.a)(n,e);var a=Object(m.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"setu-heading"},"Aarogya Setu App"),c.a.createElement("div",{className:"row",style:{maxWidth:"100%"}},c.a.createElement("div",{className:"col-sm-6 setu-icon"},c.a.createElement("img",{src:t(72)})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("p",{className:"setu-note"},"Aarogya Setu is a COVID-19 tracking mobile application developed by the National Informatics Centre that comes under the Ministry of Electronics and Information Technology, Government of India."),c.a.createElement("div",{align:"center"},c.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN",target:"_blank"},c.a.createElement("button",{className:"btn btn-primary app-link"},"Download Android App")),c.a.createElement("a",{href:"https://apps.apple.com/in/app/aarogyasetu/id1505825357",target:"_blank"},c.a.createElement("button",{className:"btn btn-primary app-link"},"Download iOS App"))),c.a.createElement("p",{className:"setu-note"},"I extremely recommend you to download this app. This way not only you will save your life but also your family."))),c.a.createElement("div",{className:"row",style:{maxWidth:"100%"}},c.a.createElement("div",{className:"col-sm-4 setu-row"},c.a.createElement("img",{className:"setu-img",src:t(73)})),c.a.createElement("div",{className:"col-sm-4 setu-row"},c.a.createElement("img",{className:"setu-img",src:t(74)})),c.a.createElement("div",{className:"col-sm-4 setu-row"},c.a.createElement("img",{className:"setu-img",src:t(75)}))))}}]),n}(c.a.Component)),h=t(34),E=t.n(h),v=t(55),f=t(16),g=(t(77),t(35)),N=t.n(g),y=(t(94),t(5)),b=(t(117),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).getConfirmedData=function(){for(var a={},t=[],n=30;n<e.props.data.length;n++)(a={}).x=n,a.y=parseInt(e.props.data[n].dailyconfirmed),t.push(a);return t},e.getRecoveredData=function(){for(var a={},t=[],n=30;n<e.props.data.length;n++)(a={}).x=n,a.y=parseInt(e.props.data[n].dailyrecovered),t.push(a);return t},e.getDeathsData=function(){for(var a={},t=[],n=30;n<e.props.data.length;n++)(a={}).x=n,a.y=parseInt(e.props.data[n].dailydeceased),t.push(a);return t},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.getConfirmedData(),a=this.getRecoveredData(),t=this.getDeathsData();return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h4",{className:"confirmed"},"Confirmed:"),c.a.createElement("div",{className:"Graph"},c.a.createElement(y.c,{height:200,width:300},c.a.createElement(y.d,null),c.a.createElement(y.a,null),c.a.createElement(y.b,{data:e,color:"red"})))),c.a.createElement("div",null,c.a.createElement("h4",{className:"recovered"},"Recovered:"),c.a.createElement("div",{className:"Graph"},c.a.createElement(y.c,{height:200,width:300},c.a.createElement(y.d,null),c.a.createElement(y.a,null),c.a.createElement(y.b,{data:a,color:"green"})))),c.a.createElement("div",null,c.a.createElement("h4",{className:"deaths"},"Deaths:"),c.a.createElement("div",{className:"Graph"},c.a.createElement(y.c,{height:200,width:300},c.a.createElement(y.d,null),c.a.createElement(y.a,null),c.a.createElement(y.b,{data:t,color:"#a0a3a7"})))))}}]),t}(n.Component)),w=t(57),O=t(58),j=(t(118),t(119),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={state:"Click on the Map",confirmed:0,recovered:0,deaths:0,active:0,deltaConfirmed:0,deltaRecovered:0,deltaDeaths:0},e.locationMouseOver=function(a){for(var t=0;t<e.props.data.length;t++)e.props.data[t].statecode===a.currentTarget.id.toUpperCase()&&e.setState({state:e.props.data[t].state,confirmed:e.props.data[t].confirmed,recovered:e.props.data[t].recovered,deaths:e.props.data[t].deaths,active:e.props.data[t].active,deltaConfirmed:e.props.data[t].deltaconfirmed,deltaRecovered:e.props.data[t].deltarecovered,deltaDeaths:e.props.data[t].deltadeaths})},e}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"map-style"},c.a.createElement("div",{className:"state-data"},c.a.createElement("h4",{className:"state-data-heading"},this.state.state),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 col-6 confirmed-data"},c.a.createElement("p",{className:"cases"},"CONFIRMED"),c.a.createElement("p",null,this.state.confirmed," [+",this.state.deltaConfirmed,"]")),c.a.createElement("div",{className:"col-sm-6 col-6 active-data"},c.a.createElement("p",{className:"cases"},"ACTIVE"),c.a.createElement("p",null,this.state.active)),c.a.createElement("div",{className:"col-sm-6 col-6 recovered-data"},c.a.createElement("p",{className:"cases"},"RECOVERED"),c.a.createElement("p",null,this.state.recovered," [+",this.state.deltaRecovered,"]")),c.a.createElement("div",{className:"col-sm-6 col-6 deaths-data"},c.a.createElement("p",{className:"cases"},"DEATHS"),c.a.createElement("p",null,this.state.deaths," [+",this.state.deltaDeaths,"]")))),c.a.createElement(O.SVGMap,{className:"svg-map",locationClassName:"svg-map__location",map:w.a,onLocationMouseOver:this.locationMouseOver}))}}]),t}(c.a.Component)),C=function(e){var a=Object(n.useState)(!1),t=Object(f.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)({}),o=Object(f.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)([]),p=Object(f.a)(d,2),u=p[0],h=p[1],g=Object(n.useState)([]),y=Object(f.a)(g,2),w=y[0],O=y[1],C=Object(n.useState)([]),D=Object(f.a)(C,2),k=D[0],S=D[1],x=Object(n.useState)([]),I=Object(f.a)(x,2),A=I[0],_=I[1];Object(n.useEffect)((function(){l||function(){var e=Object(v.a)(E.a.mark((function e(){var a,t,n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([N.a.get("https://api.covid19india.org/data.json"),N.a.get("https://api.covid19india.org/state_district_wise.json")]);case 2:a=e.sent,t=Object(f.a)(a,2),n=t[0],c=t[1],m(n.data.statewise[0]),h(n.data.statewise.slice(1).sort((function(e,a){return a.confirmed-e.confirmed}))),_(n.data.cases_time_series),O(c.data),r(!0),S(Object.entries(w));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}));var T,R,M,G=function(e){return 0!=e?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-confirmed"},e):""},L=function(e){return 0!=e?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-recovered"},e):""},U=function(e){return 0!=e?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-deaths"},e):""},V=function(e){var a=e.currentTarget.nextElementSibling.firstChild.firstElementChild.classList,t=e.currentTarget.firstElementChild.firstChild.classList;-1!==a.value.indexOf("collapse")?a.remove("collapse"):a.add("collapse"),-1!=t.value.indexOf("chevron-right")?t.replace("glyphicon-chevron-right","glyphicon-chevron-down"):t.replace("glyphicon-chevron-down","glyphicon-chevron-right")};return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 heading"},"Covid 19 - Cases in India"),c.a.createElement("div",{className:"col-sm-12 last-updated"},"Last Updated: ",i.lastupdatedtime," IST")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 col-6 heading-data confirmed"},c.a.createElement("h4",null,"Confirmed"),c.a.createElement("p",{className:"count"},i.confirmed),c.a.createElement("p",{className:"increment"},"[+",i.deltaconfirmed,"]")),c.a.createElement("div",{className:"col-sm-3 col-6 heading-data active"},c.a.createElement("h4",null,"Active Cases"),c.a.createElement("p",{className:"count"},(T=i.confirmed,R=i.recovered,M=i.deaths,T-R-M))),c.a.createElement("div",{className:"col-sm-3 col-6 heading-data recovered"},c.a.createElement("h4",null,"Recovered"),c.a.createElement("p",{className:"count"},i.recovered),c.a.createElement("p",{className:"increment"},"[+",i.deltarecovered,"]")),c.a.createElement("div",{className:"col-sm-3 col-6 heading-data deaths"},c.a.createElement("h4",null,"Deaths"),c.a.createElement("p",{className:"count"},i.deaths),c.a.createElement("p",{className:"increment"},"[+",i.deltadeaths,"]"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(j,{data:u})),c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(b,{data:A})))),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("h4",{className:"affected-states"},"No. of States/UT affected: ",function(){var e=0;return u.map((function(a){0!=a.confirmed&&(e+=1)})),e}()),c.a.createElement("div",{id:"no-more-tables"},c.a.createElement("table",{className:"table table-parent"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"State/UT"),c.a.createElement("th",{scope:"col"},"Confirmed"),c.a.createElement("th",{scope:"col"},"Active"),c.a.createElement("th",{scope:"col"},"Recovered"),c.a.createElement("th",{scope:"col"},"Deaths"))),c.a.createElement("tbody",null,u.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:e.state,onClick:V},c.a.createElement("td",null,c.a.createElement("span",{className:"glyphicon glyphicon-chevron-right plus-minus"})," ",e.state),c.a.createElement("td",null,G(e.deltaconfirmed)," ",e.confirmed),c.a.createElement("td",null,e.active),c.a.createElement("td",null,L(e.deltarecovered)," ",e.recovered),c.a.createElement("td",null,U(e.deltadeaths)," ",e.deaths)),c.a.createElement("tr",{key:e.statecode},c.a.createElement("td",{colSpan:"5",className:"hiddenRow"},c.a.createElement("div",{className:"collapse"},c.a.createElement("h5",{className:"dist-heading"},"Last Updated: ",e.lastupdatedtime," IST"),c.a.createElement("div",null,e.statenotes),c.a.createElement("table",{className:"table-child"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"District"),c.a.createElement("th",null,"Confirmed"))),c.a.createElement("tbody",null,k.map((function(a){if(a[0]===e.state)return Object.entries(a[1].districtData).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",null,e[0]),c.a.createElement("td",null,0!=(a=e[1].delta.confirmed)?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-confirmed"},a):""," ",e[1].confirmed));var a}))}))))))))})),c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Total"),c.a.createElement("th",{scope:"col"},G(i.deltaconfirmed)," ",i.confirmed),c.a.createElement("th",{scope:"col"},i.active),c.a.createElement("th",{scope:"col"},L(i.deltarecovered)," ",i.recovered),c.a.createElement("th",{scope:"col"},U(i.deltadeaths)," ",i.deaths)))),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary float-right go-to-top",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},"TOP")))))),c.a.createElement("footer",{className:"footer"},"This is not an official website and data is taken from ",c.a.createElement("a",{href:"https://api.covid19india.org/",target:"_blank"},"COVID19INDIA")," API. ",c.a.createElement("br",null),"Designed by: ",c.a.createElement("a",{href:"https://www.linkedin.com/in/deepak-maddheshiya/",target:"_blank"},"Deepak Maddheshiya")))},D=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.b,{exact:!0,to:"/",activeClassName:"active"},c.a.createElement("span",{className:"glyphicon glyphicon-home home-icon"})," Home")),c.a.createElement("li",null,c.a.createElement(d.b,{exact:!0,to:"/aarogyaSetu"},c.a.createElement("span",{className:"glyphicon glyphicon-heart setu"})," Aarogya Setu"))),c.a.createElement("div",{className:"message"},"Stay Home & Stay Safe. Follow Social Distancing. #IndiaFightsCorona"),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:C}),c.a.createElement(p.a,{exact:!0,path:"/aarogyaSetu",component:u})))}}]),t}(n.Component);var k=function(){return c.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,a,t){e.exports=t(122)},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){e.exports=t.p+"static/media/setu_logo.a8f80ca1.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/setu_1.188031a1.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/setu_2.0b18dee2.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/setu_3.99764678.jpg"},77:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.e9f1be1f.chunk.js.map