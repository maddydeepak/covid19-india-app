(this["webpackJsonpcovid19-india-app"]=this["webpackJsonpcovid19-india-app"]||[]).push([[0],{120:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(55),r=t.n(l),s=(t(69),t(70),t(3)),o=t(16),i=t(12),m=t(13),d=t(15),u=t(14),p=(t(71),t(72),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,"This is NOT an official website and data is taken from different API sources. ",c.a.createElement("br",null),"Designed by: ",c.a.createElement("a",{href:"https://www.linkedin.com/in/deepak-maddheshiya/",rel:"noopener noreferrer",target:"_blank"},"Deepak Maddheshiya"))}}]),t}(n.Component)),E=function(e){Object(d.a)(n,e);var a=Object(u.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",{className:"setu-heading"},"Aarogya Setu App"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 setu-icon"},c.a.createElement("img",{src:t(73),alt:"Setu Logo"})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("p",{className:"setu-note"},"Aarogya Setu is a COVID-19 tracking mobile application developed by the National Informatics Centre that comes under the Ministry of Electronics and Information Technology, Government of India."),c.a.createElement("div",{align:"center"},c.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("button",{className:"btn btn-primary app-link"},"Download Android App")),c.a.createElement("a",{href:"https://apps.apple.com/in/app/aarogyasetu/id1505825357",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("button",{className:"btn btn-primary app-link"},"Download iOS App"))),c.a.createElement("p",{className:"setu-note"},"I extremely recommend you to download this app. This way not only you will save your life but also your family."))),c.a.createElement("div",{className:"row",style:{maxWidth:"100%"}},c.a.createElement("div",{className:"col-sm-4 setu-row"},c.a.createElement("img",{className:"setu-img",src:t(74),alt:"Setu App Screen 1"})),c.a.createElement("div",{className:"col-sm-4 setu-row"},c.a.createElement("img",{className:"setu-img",src:t(75),alt:"Setu App Screen 2"})),c.a.createElement("div",{className:"col-sm-4 setu-row"},c.a.createElement("img",{className:"setu-img",src:t(76),alt:"Setu App Screen 3"}))),c.a.createElement("div",{align:"center"},c.a.createElement(s.b,{exact:!0,to:"/"},c.a.createElement("button",{style:{fontSize:"15px",marginTop:"10px"},className:"btn btn-primary"},"Home")))),c.a.createElement(p,null))}}]),n}(c.a.Component),h=t(37),f=t.n(h),v=t(58),b=t(7),g=(t(82),t(22)),N=t.n(g),y=(t(99),t(6)),w=(t(120),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).getConfirmedData=function(){for(var a={},t=[],n=30;n<e.props.data.length;n++)(a={}).x=n,a.y=parseInt(e.props.data[n].dailyconfirmed),t.push(a);return t},e.getRecoveredData=function(){for(var a={},t=[],n=30;n<e.props.data.length;n++)(a={}).x=n,a.y=parseInt(e.props.data[n].dailyrecovered),t.push(a);return t},e.getDeathsData=function(){for(var a={},t=[],n=30;n<e.props.data.length;n++)(a={}).x=n,a.y=parseInt(e.props.data[n].dailydeceased),t.push(a);return t},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.getConfirmedData(),a=this.getRecoveredData(),t=this.getDeathsData();return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h4",{className:"confirmed"},"Confirmed:"),c.a.createElement("div",{className:"Graph"},c.a.createElement(y.c,{height:200,width:300},c.a.createElement(y.d,null),c.a.createElement(y.a,null),c.a.createElement(y.b,{data:e,color:"red"})))),c.a.createElement("div",null,c.a.createElement("h4",{className:"recovered"},"Recovered:"),c.a.createElement("div",{className:"Graph"},c.a.createElement(y.c,{height:200,width:300},c.a.createElement(y.d,null),c.a.createElement(y.a,null),c.a.createElement(y.b,{data:a,color:"green"})))),c.a.createElement("div",null,c.a.createElement("h4",{className:"deaths"},"Deaths:"),c.a.createElement("div",{className:"Graph"},c.a.createElement(y.c,{height:200,width:300},c.a.createElement(y.d,null),c.a.createElement(y.a,null),c.a.createElement(y.b,{data:t,color:"#a0a3a7"})))))}}]),t}(n.Component)),O=t(60),j=t(61),S=(t(121),t(122),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={state:"Click on the Map",confirmed:0,recovered:0,deaths:0,active:0,deltaConfirmed:0,deltaRecovered:0,deltaDeaths:0},e.locationMouseOver=function(a){for(var t=0;t<e.props.data.length;t++)if(e.props.data[t].statecode===a.currentTarget.id.toUpperCase()){e.setState({state:e.props.data[t].state,confirmed:e.props.data[t].confirmed,recovered:e.props.data[t].recovered,deaths:e.props.data[t].deaths,active:e.props.data[t].active,deltaConfirmed:e.props.data[t].deltaconfirmed,deltaRecovered:e.props.data[t].deltarecovered,deltaDeaths:e.props.data[t].deltadeaths});break}},e}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"map-style"},c.a.createElement("div",{id:"stateData",className:"state-data"},c.a.createElement("h4",{className:"state-data-heading"},this.state.state),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 col-6 confirmed-data"},c.a.createElement("p",{className:"cases"},"CONFIRMED"),c.a.createElement("p",null,this.state.confirmed," [+",this.state.deltaConfirmed,"]")),c.a.createElement("div",{className:"col-sm-6 col-6 active-data"},c.a.createElement("p",{className:"cases"},"ACTIVE"),c.a.createElement("p",null,this.state.active)),c.a.createElement("div",{className:"col-sm-6 col-6 recovered-data"},c.a.createElement("p",{className:"cases"},"RECOVERED"),c.a.createElement("p",null,this.state.recovered," [+",this.state.deltaRecovered,"]")),c.a.createElement("div",{className:"col-sm-6 col-6 deaths-data"},c.a.createElement("p",{className:"cases"},"DEATHS"),c.a.createElement("p",null,this.state.deaths," [+",this.state.deltaDeaths,"]")))),c.a.createElement(j.SVGMap,{className:"svg-map",locationClassName:"svg-map__location",map:O.a,onLocationMouseOver:this.locationMouseOver}))}}]),t}(c.a.Component)),C=function(e){var a=Object(n.useState)(!1),t=Object(b.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)({}),o=Object(b.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)([]),u=Object(b.a)(d,2),E=u[0],h=u[1],g=Object(n.useState)([]),y=Object(b.a)(g,2),O=y[0],j=y[1],C=Object(n.useState)([]),k=Object(b.a)(C,2),I=k[0],D=k[1],x=Object(n.useState)([]),q=Object(b.a)(x,2),A=q[0],T=q[1];Object(n.useEffect)((function(){l||function(){var e=Object(v.a)(f.a.mark((function e(){var a,t,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([N.a.get("https://api.covid19india.org/data.json"),N.a.get("https://api.covid19india.org/state_district_wise.json")]);case 2:a=e.sent,t=Object(b.a)(a,2),n=t[0],c=t[1],m(n.data.statewise[0]),h(n.data.statewise.slice(1).sort((function(e,a){return a.confirmed-e.confirmed}))),T(n.data.cases_time_series),j(c.data),r(!0),D(Object.entries(O));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}));var M,_,R,F=function(e){return 0!=e?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-confirmed"},e):""},H=function(e){return 0!=e?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-recovered"},e):""},W=function(e){return 0!=e?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-deaths"},e):""},G=function(e){var a=e.currentTarget.nextElementSibling.firstChild.firstElementChild.classList,t=e.currentTarget.firstElementChild.firstChild.classList;-1!==a.value.indexOf("collapse")?a.remove("collapse"):a.add("collapse"),-1!=t.value.indexOf("chevron-right")?t.replace("glyphicon-chevron-right","glyphicon-chevron-down"):t.replace("glyphicon-chevron-down","glyphicon-chevron-right")};return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"corona-free"},"Corona Free States: ",function(){var e="";return E.map((function(a){"0"!==a.confirmed&&"0"===a.active&&(e+=", "+a.state)})),e.substr(2)}()),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 heading"},"Covid 19 - Cases in India"),c.a.createElement("div",{className:"col-sm-12 last-updated"},"Last Updated: ",i.lastupdatedtime," IST")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 col-6 heading-data confirmed"},c.a.createElement("h4",null,"Confirmed"),c.a.createElement("p",{className:"count"},i.confirmed),c.a.createElement("p",{className:"increment"},"[+",i.deltaconfirmed,"]")),c.a.createElement("div",{className:"col-sm-3 col-6 heading-data active"},c.a.createElement("h4",null,"Active Cases"),c.a.createElement("p",{className:"count"},(M=i.confirmed,_=i.recovered,R=i.deaths,M-_-R))),c.a.createElement("div",{className:"col-sm-3 col-6 heading-data recovered"},c.a.createElement("h4",null,"Recovered"),c.a.createElement("p",{className:"count"},i.recovered),c.a.createElement("p",{className:"increment"},"[+",i.deltarecovered,"]")),c.a.createElement("div",{className:"col-sm-3 col-6 heading-data deaths"},c.a.createElement("h4",null,"Deaths"),c.a.createElement("p",{className:"count"},i.deaths),c.a.createElement("p",{className:"increment"},"[+",i.deltadeaths,"]"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(S,{data:E})),c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(w,{data:A})))),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("h4",{className:"affected-states"},"No. of States/UT affected: ",function(){var e=0;return E.map((function(a){0!=a.confirmed&&(e+=1)})),e}()),c.a.createElement("div",{id:"no-more-tables"},c.a.createElement("table",{className:"table table-parent"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"State/UT"),c.a.createElement("th",{scope:"col"},"Confirmed"),c.a.createElement("th",{scope:"col"},"Active"),c.a.createElement("th",{scope:"col"},"Recovered"),c.a.createElement("th",{scope:"col"},"Deaths"))),c.a.createElement("tbody",null,E.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:e.state,onClick:G},c.a.createElement("td",null,c.a.createElement("span",{className:"glyphicon glyphicon-chevron-right plus-minus"})," ",e.state),c.a.createElement("td",null,F(e.deltaconfirmed)," ",e.confirmed),c.a.createElement("td",null,e.active),c.a.createElement("td",null,H(e.deltarecovered)," ",e.recovered),c.a.createElement("td",null,W(e.deltadeaths)," ",e.deaths)),c.a.createElement("tr",{key:e.statecode},c.a.createElement("td",{colSpan:"5",className:"hiddenRow"},c.a.createElement("div",{className:"collapse"},c.a.createElement("h5",{className:"dist-heading"},"Last Updated: ",e.lastupdatedtime," IST"),c.a.createElement("div",null,e.statenotes),c.a.createElement("table",{className:"table-child"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"District"),c.a.createElement("th",null,"Confirmed"))),c.a.createElement("tbody",null,I.map((function(a){if(a[0]===e.state)return Object.entries(a[1].districtData).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",null,e[0]),c.a.createElement("td",null,0!=(a=e[1].delta.confirmed)?c.a.createElement("span",{className:"glyphicon glyphicon-arrow-up delta-confirmed"},a):""," ",e[1].confirmed));var a}))}))))))))})),c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Total"),c.a.createElement("th",{scope:"col"},F(i.deltaconfirmed)," ",i.confirmed),c.a.createElement("th",{scope:"col"},i.active),c.a.createElement("th",{scope:"col"},H(i.deltarecovered)," ",i.recovered),c.a.createElement("th",{scope:"col"},W(i.deltadeaths)," ",i.deaths)))))))),c.a.createElement("div",{align:"center"},c.a.createElement("button",{className:"btn btn-primary go-to-top",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},"Go to Top")),c.a.createElement(p,null))},k=function(){return c.a.createElement("div",{align:"center"},c.a.createElement("h1",null,"Oops! Requested page not found."),c.a.createElement("h2",null,"Abort mission and return home. Over!"),c.a.createElement("div",null,c.a.createElement(s.b,{exact:!0,to:"/"},c.a.createElement("button",{style:{fontSize:"20px"},className:"btn btn-primary"},"Home"))))},I=(t(123),function(){var e=Object(n.useState)({}),a=Object(b.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)([]),o=Object(b.a)(r,2),i=o[0],m=o[1],d=Object(n.useState)(!1),u=Object(b.a)(d,2),E=u[0],h=u[1];return Object(n.useEffect)((function(){E||N.a.get("https://api.rootnet.in/covid19-in/contacts").then((function(e){l(e.data.data.contacts.primary),m(e.data.data.contacts.regional),h(!0)}))})),c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",{className:"contact-heading"},"Emergency Contacts"),c.a.createElement("h2",null,"Ministry of Health and Family Welfare, Government of India ",c.a.createElement("strong",null,"(MoHFW)")),c.a.createElement("div",{className:"emer-contact"},c.a.createElement("p",null,"Toll Free Number: ",c.a.createElement("a",{href:"tel:"+t["number-tollfree"]},t["number-tollfree"])),c.a.createElement("p",null,"Phone Number: ",c.a.createElement("a",{href:"tel:"+t.number},t.number)),c.a.createElement("p",null,"Email ID: ",c.a.createElement("a",{href:"mailto:"+t.email},t.email)),c.a.createElement("p",null,"Follow MoHFW Social Media Pages: "),c.a.createElement("a",{href:"https://www.facebook.com/MoHFWIndia",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("button",{className:"btn btn-primary social-media-button"},"Facebook")),c.a.createElement("a",{href:"https://twitter.com/MoHFW_INDIA",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("button",{className:"btn btn-primary social-media-button"},"Twitter"))),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"State/UT"),c.a.createElement("td",null,"Contact"))),c.a.createElement("tbody",null,i.map((function(e){return c.a.createElement("tr",{key:e.loc},c.a.createElement("td",null,e.loc),c.a.createElement("td",null,c.a.createElement("a",{href:"tel:"+e.number},e.number)))}))))),c.a.createElement("div",{align:"center"},c.a.createElement(s.b,{exact:!0,to:"/"},c.a.createElement("button",{style:{fontSize:"15px",marginTop:"10px"},className:"btn btn-primary"},"Home")))),c.a.createElement(p,null))}),D=(t(124),function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",{className:"faq-heading"},"FAQ"),c.a.createElement("div",null,c.a.createElement("div",{className:"faq-question"},"Is this an official website?"),c.a.createElement("div",{className:"faq-answer"},"No, this is not an official website. This is my personal project and I've just deployed the same on GitHub just to spread awareness about the CoronaVirus cases in India."),c.a.createElement("div",{className:"faq-question"},"Who are you?"),c.a.createElement("div",{className:"faq-answer"},"I'm a software engineer working in Bangalore."),c.a.createElement("div",{className:"faq-question"},"What technologies have you used for this project?"),c.a.createElement("div",{className:"faq-answer"},"I've used React JS, BootStrap, HTML, CSS, JavaScript and JQuery. I've used SVG Map and React graphs to display data."),c.a.createElement("div",{className:"faq-question"},"Which sources have you used to collect data for this project?"),c.a.createElement("div",{className:"faq-answer"},"I've taken data from different APIs provided by COVID19INDIA (https://api.covid19india.org/) and Rootnet (https://api.rootnet.in/covid19-in/contacts)."),c.a.createElement("div",{className:"faq-question"},"Why the data shown on the screen is slightly different from other sources?"),c.a.createElement("div",{className:"faq-answer"},"Yes, the data shown here is slightly differnt than the other sources and that's because the API used is updated based on latest local/state news."),c.a.createElement("div",{className:"faq-question"},"How can I contact you?"),c.a.createElement("div",{className:"faq-answer"},"You can contact me by sending me a DM on LinkedIn. (https://www.linkedin.com/in/deepak-maddheshiya/)")),c.a.createElement("div",{align:"center"},c.a.createElement(s.b,{exact:!0,to:"/"},c.a.createElement("button",{style:{fontSize:"15px",marginTop:"10px"},className:"btn btn-primary"},"Home")))),c.a.createElement(p,null))}),x=t(38),q=t.n(x),A=function(){return Object(n.useEffect)((function(){q()(".navbar-collapse a").click((function(){q()(".navbar-collapse")[0].classList.replace("show","hide")}))})),c.a.createElement(s.a,{basename:"/covid19-india-app/"},c.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light",style:{backgroundColor:"#17a2b8"}},c.a.createElement("button",{className:"navbar-toggler menu-button",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},c.a.createElement("span",{className:"glyphicon glyphicon-th-large menu"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{exact:!0,to:"/",activeClassName:"active"},c.a.createElement("span",{className:"glyphicon glyphicon-home home-icon"})," Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/aarogyaSetu"},c.a.createElement("span",{className:"glyphicon glyphicon-heart setu"})," Aarogya Setu")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/emergency"},c.a.createElement("span",{className:"glyphicon glyphicon-plus plus"})," Emergency")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/faq"},c.a.createElement("span",{className:"glyphicon glyphicon-question-sign faq"})," FAQ"))))),c.a.createElement("div",{className:"message"},"Stay Home & Stay Safe. Follow Social Distancing. #IndiaFightsCorona"),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:C}),c.a.createElement(o.a,{path:"/aarogyaSetu",component:E}),c.a.createElement(o.a,{path:"/emergency",component:I}),c.a.createElement(o.a,{path:"/faq",component:D}),c.a.createElement(o.a,{component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,a,t){e.exports=t(125)},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){e.exports=t.p+"static/media/setu_logo.a8f80ca1.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/setu_1.188031a1.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/setu_2.0b18dee2.jpg"},76:function(e,a,t){e.exports=t.p+"static/media/setu_3.99764678.jpg"},82:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.e8eb6493.chunk.js.map