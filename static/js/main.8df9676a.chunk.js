(this.webpackJsonpuber_eats=this.webpackJsonpuber_eats||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),l=(t(24),t(7)),o=t(14),i=t(2),u=t(17),m={SAVE_RESTAURANTS_LIST:"SAVE_RESTAURANTS_LIST",SET_SEARCH_VALUE:"SET_SEARCH_VALUE",SET_INPUT_VALUE:"SET_INPUT_VALUE"},p=function(e,a){return{type:m.SET_INPUT_VALUE,payload:a,name:e}};function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,d=[u.a],g={restaurantsListData:null,inputValues:{address:"",time:"",search:""}};var E=Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m.SAVE_RESTAURANTS_LIST:return f({},e,{restaurantsListData:a.payload});case m.SET_SEARCH_VALUE:return f({},e,{searchValue:a.payload});case m.SET_INPUT_VALUE:return f({},e,{inputValues:f({},e.inputValues,Object(o.a)({},a.name,a.payload))});default:return e}}),h(i.a.apply(void 0,d))),v=t(4),N=t(5),b=t(8),k=t(6),y=t(9),O=(t(30),function(e){var a=e.imageUrl,t=(e.uuid,e.etaRange),n=e.title,s=e.categories;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("div",{className:"restaurant-card__img-wrapper"},r.a.createElement("img",{src:a,alt:n,className:"restaurant-card__img"})),r.a.createElement("h2",{className:"restaurant-card__title"},n),r.a.createElement("div",{className:"restaurant-card__categories"},s.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},t))});O.defaultProps={categories:[],etaRange:""};t(31);var j=function(e){function a(){return Object(v.a)(this,a),Object(b.a)(this,Object(k.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.loadData()}},{key:"render",value:function(){var e=this.props.restaurantsData.map((function(e){var a=e.title,t=e.uuid,n=e.etaRange,s=e.categories,c=e.heroImageUrl;return r.a.createElement(O,{key:t,title:a,uuid:t,etaRange:n.text||"20-30 min",categories:s,imageUrl:c})}));return r.a.createElement("div",{className:"restaurants-list"},e)}}]),a}(n.Component);j.defaultProps={restaurantsData:[]};var S=t(18),w=Object(S.a)((function(e){return e}),(function(e){var a=e.restaurantsListData,t=e.inputValues;if(a){var n=a.feedItems,r=a.storesMap,s=t.search,c=n.map((function(e){var a=e.uuid;return r[a]}));if(s){return c.filter((function(e){var a=e.title,t=e.categories;return a.toLowerCase().startsWith(s)||t.join().toLowerCase().includes(s)}))}return c}return[]}));var A={loadData:function(){return function(e){fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then((function(e){return e.json()})).then((function(a){var t=a.data;e(function(e){return{type:m.SAVE_RESTAURANTS_LIST,payload:e}}(t))}))}}},T=Object(l.b)((function(e){return{restaurantsData:w(e)}}),A)(j),U=(t(32),t(33),function(e){function a(){var e,t;Object(v.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(s)))).state={isFocused:!1},t.inputRef=Object(n.createRef)(),t.handleFocus=function(){return t.setState({isFocused:!0})},t.handleBlur=function(){return t.setState({isFocused:!1})},t.focusControl=function(){return t.inputRef.current.focus()},t}return Object(y.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e=this.props,a=e.iconUrl,t=e.value,n=e.onChange,s=e.type,c=e.name,l=e.placeholder,o=e.className,i=this.state.isFocused,u="control ".concat(i?"control--focused":""," ").concat(o);return r.a.createElement("div",{className:u,onClick:this.focusControl},!!a&&r.a.createElement("img",{src:a,alt:l,className:"control__icon"}),r.a.createElement("input",{ref:this.inputRef,className:"control__input",type:s,value:t,name:c,onChange:n,onFocus:this.handleFocus,onBlur:this.handleBlur,placeholder:l}))}}]),a}(n.PureComponent));U.defaultProps={iconUrl:"",type:"text",placeHolder:"",className:""};var V=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(b.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(r)))).handleChange=function(e){var a=e.target;t.props.changeInputValue(a.name,a.value)},t}return Object(y.a)(a,e),Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=new Date,a="".concat(e.getHours(),":").concat(e.getMinutes());this.props.changeInputValue("time",a)}},{key:"render",value:function(){var e=this.props.inputValues,a=e.address,t=e.time,n=e.search;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.svg",alt:"UberEats",className:"header__logo"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(U,{name:"address",onChange:this.handleChange,value:a,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(U,{name:"time",onChange:this.handleChange,value:t,placeholder:"Deliver now",iconUrl:"./images/time.svg",type:"time"})),r.a.createElement(U,{name:"search",onChange:this.handleChange,value:n,placeholder:"Search",iconUrl:"./images/search.svg",className:"header__search"}),r.a.createElement("a",{className:"header__link",href:"/sign-in"},"Sign In"))))}}]),a}(n.Component);V.defaultProps={inputValues:{}};var R={changeInputValue:function(e,a){return function(t){t(p(e,a))}}},C=Object(l.b)((function(e){return{inputValues:e.inputValues}}),R)(V),P=(t(34),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-lang"},r.a.createElement("img",{className:"footer__logo",src:"./images/logo-white.svg",alt:"uber eats"}),r.a.createElement("div",{className:"footer__lang"},"Language")),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/appstore.png",alt:"appstore"})),r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/googleplay.png",alt:"googleplay"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{className:"links__link links__link--weight",href:"#"},"About UberEats"),r.a.createElement("a",{className:"links__link",href:"#"},"Read our blog"),r.a.createElement("a",{className:"links__link",href:"#"},"Sign up to deliver"),r.a.createElement("a",{className:"links__link",href:"#"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{className:"links__link links__link--weight",href:"#"},"Get help"),r.a.createElement("a",{className:"links__link",href:"#"},"Read FAQs"),r.a.createElement("a",{className:"links__link",href:"#"},"View all cities"))),r.a.createElement("div",{className:"footer__separator"}),r.a.createElement("div",{className:"footer__bottom"},r.a.createElement("p",{className:"footer__copyrights"},"\xa9 2019 Uber Technologies Inc.a"),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{className:"links__link",href:"#"},"Privacy policy"),r.a.createElement("a",{className:"links__link",href:"#"},"Terms of use"),r.a.createElement("a",{className:"links__link",href:"#"},"Pricing")),r.a.createElement("div",{className:"footer__social  social"},r.a.createElement("a",{className:"social__link",href:"#"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{className:"social__link",href:"#"},r.a.createElement("img",{src:"./images/twitter.svg",alt:"twitter"})),r.a.createElement("a",{className:"social__link",href:"#"},r.a.createElement("img",{src:"./images/instagram.svg",alt:"instagram"})))))))}),D=function(){return r.a.createElement(l.a,{store:E},r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("main",{className:"content"},r.a.createElement(T,null)),r.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(35);c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8df9676a.chunk.js.map