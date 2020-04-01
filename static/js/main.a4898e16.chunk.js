(this.webpackJsonpuber_eats=this.webpackJsonpuber_eats||[]).push([[0],{20:function(e,a,t){e.exports=t(42)},25:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),s=t.n(l),c=(t(25),t(7)),i=t(15),o=t(2),m=t(18),u={START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",SET_LOAD_RETAURANTS_ERROR:"SET_LOAD_RETAURANTS_ERROR",SAVE_RESTAURANTS_LIST:"SAVE_RESTAURANTS_LIST",SET_SEARCH_VALUE:"SET_SEARCH_VALUE",SET_INPUT_VALUE:"SET_INPUT_VALUE"};function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,g=[m.a],p={isLoading:!1,error:null,restaurantsListData:null,inputValues:{address:"",time:"",search:""}};var E=Object(o.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u.SAVE_RESTAURANTS_LIST:return h({},e,{restaurantsListData:a.payload,error:null});case u.SET_SEARCH_VALUE:return h({},e,{searchValue:a.payload});case u.SET_INPUT_VALUE:return h({},e,{inputValues:h({},e.inputValues,Object(i.a)({},a.name,a.payload))});case u.SET_LOAD_RETAURANTS_ERROR:return h({},e,{error:a.payload,restaurantsListData:null});case u.START_LOADING:return h({},e,{isLoading:!0});case u.STOP_LOADING:return h({},e,{isLoading:!1});default:return e}}),d(o.a.apply(void 0,g))),f=t(4),v=t(5),b=t(8),N=t(6),O=t(9),S=(t(31),function(e){var a=e.imageUrl,t=e.etaRange,n=e.title,l=e.categories;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("div",{className:"restaurant-card__img-wrapper"},r.a.createElement("img",{src:a,alt:n,className:"restaurant-card__img"})),r.a.createElement("h2",{className:"restaurant-card__title"},n),r.a.createElement("div",{className:"restaurant-card__categories"},l.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},t))});S.defaultProps={categories:[],etaRange:""};t(32),t(33),t(34);var y=function(e){var a=e.className;return r.a.createElement("div",{className:"".concat(a," lds-ripple")},r.a.createElement("div",null),r.a.createElement("div",null))},k=t(19),A=(t(35),function(e){var a=e.className;return r.a.createElement("div",{className:"".concat(a," loader-text")},Object(k.a)("loading").reverse().map((function(e){return r.a.createElement("div",{className:"loader-text__char",key:e},e)})))}),T=function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement(y,{className:"preloader__spinner"}),r.a.createElement(A,{className:"preloader__loader-text"}))},R=(t(36),function(e){var a=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("h3",{className:"error__heading"},"Oooops!"),r.a.createElement("p",{className:"error__text"},"Something went wrong..."),r.a.createElement("p",{className:"error__massage"},"Happened due to an error: ".concat(a)),r.a.createElement("a",{href:"/",className:"error__link"},"Go Home..."))});R.defaultProps={message:"Failed to fetch"};var j=function(e){function a(){return Object(f.a)(this,a),Object(b.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.loadData()}},{key:"render",value:function(){var e=this.props,a=e.restaurantsData,t=e.error,n=e.isLoading,l=a.map((function(e){var a=e.title,t=e.uuid,n=e.etaRange,l=e.categories,s=e.heroImageUrl;return r.a.createElement(S,{key:t,title:a,uuid:t,etaRange:n.text||"20-30 min",categories:l,imageUrl:s})}));return n?r.a.createElement(T,null):t?r.a.createElement(R,{message:t}):r.a.createElement("div",{className:"restaurants-list"},l)}}]),a}(n.Component);j.defaultProps={restaurantsData:[],error:null,isLoading:!1};var D=t(10),L=function(e){return e},w=Object(D.a)(L,(function(e){var a=e.restaurantsListData,t=e.inputValues;if(a){var n=a.feedItems,r=a.storesMap,l=t.search,s=n.map((function(e){var a=e.uuid;return r[a]}));if(l){return s.filter((function(e){var a=e.title,t=e.categories,n=l.toLowerCase();return a.toLowerCase().startsWith(n)||t.join().toLowerCase().includes(n)}))}return s}return[]})),U=Object(D.a)(L,(function(e){return e.error})),V=Object(D.a)(L,(function(e){return e.isLoading})),C=Object(D.a)(L,(function(e){return e.inputValues}));var P={loadData:function(){return function(e){e({type:u.START_LOADING}),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then((function(e){return e.json()})).then((function(a){var t=a.data;e(function(e){return{type:u.SAVE_RESTAURANTS_LIST,payload:e}}(t))})).catch((function(a){return e(function(e){return{type:u.SET_LOAD_RETAURANTS_ERROR,payload:e}}(a.message))})).finally((function(){return e({type:u.STOP_LOADING})}))}}},I=Object(c.b)((function(e){return{restaurantsData:w(e),error:U(e),isLoading:V(e)}}),P)(j),M=(t(37),t(38),function(e){function a(){var e,t;Object(f.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(t=Object(b.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={isFocused:!1},t.inputRef=Object(n.createRef)(),t.handleFocus=function(){return t.setState({isFocused:!0})},t.handleBlur=function(){return t.setState({isFocused:!1})},t.focusControl=function(){return t.inputRef.current.focus()},t}return Object(O.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.props,a=e.iconUrl,t=e.value,n=e.onChange,l=e.type,s=e.name,c=e.placeholder,i=e.className,o=e.label,m=this.state.isFocused,u="control__input-wrapper ".concat(m?"control__input-wrapper--focused":""," ").concat(i);return r.a.createElement("label",{className:"control__label"},!!o&&r.a.createElement("p",{className:"control__headering"},o),r.a.createElement("div",{className:u,onClick:this.focusControl},!!a&&r.a.createElement("img",{src:a,alt:c,className:"control__icon"}),r.a.createElement("input",{ref:this.inputRef,className:"control__input",type:l,value:t,name:s,onChange:n,onFocus:this.handleFocus,onBlur:this.handleBlur,placeholder:c,autoComplete:"off"})))}}]),a}(n.PureComponent));M.defaultProps={iconUrl:"",type:"text",placeHolder:"",className:"",label:""};var F=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(r)))).state={isMobileSearchVisible:!1,isMobileDeliveryVisible:!1},t.handleChange=function(e){var a=e.target;t.props.changeInputValue(a.name,a.value)},t.toggleSearch=function(){t.setState((function(e){return{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryVisible:!1}}))},t.toggleDelivery=function(){t.setState((function(e){return{isMobileDeliveryVisible:!e.isMobileDeliveryVisible,isMobileSearchVisible:!1}}))},t.closeMobileControls=function(){t.setState({isMobileDeliveryVisible:!1,isMobileSearchVisible:!1})},t}return Object(O.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.props.inputValues,a=e.address,t=e.time,n=e.search,l=this.state,s=l.isMobileDeliveryVisible,c=l.isMobileSearchVisible;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.svg",alt:"UberEats",className:"header__logo"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(M,{name:"address",onChange:this.handleChange,value:a,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(M,{name:"time",onChange:this.handleChange,value:t,placeholder:"Deliver now",iconUrl:"./images/time.svg",type:"time"})),r.a.createElement("div",{className:"header__search"},r.a.createElement(M,{name:"search",onChange:this.handleChange,value:n,placeholder:"Search",iconUrl:"./images/search.svg",className:"header__search-input"})),r.a.createElement("div",{className:"header__toggle-buttons"},r.a.createElement("button",{className:"header__toggle-btn",onClick:this.toggleDelivery},r.a.createElement("img",{src:"./images/place.svg",alt:"location",className:"header__toggle-icon"})),r.a.createElement("button",{className:"header__toggle-btn",onClick:this.toggleSearch},r.a.createElement("img",{src:"./images/search.svg",alt:"search",className:"header__toggle-icon"}))),r.a.createElement("a",{className:"header__link",href:"#"},"Sign In")),(s||c)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},c&&r.a.createElement("div",{className:"header__mobile-search"},r.a.createElement(M,{label:"Find",name:"search",onChange:this.handleChange,value:n,placeholder:"Search",iconUrl:"./images/search.svg",className:"header__search-input"})),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{label:"Where",name:"address",onChange:this.handleChange,value:a,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(M,{label:"To",name:"time",onChange:this.handleChange,value:t,placeholder:"Deliver now",iconUrl:"./images/time.svg",type:"time"})),r.a.createElement("button",{className:"mobile-controls__close",onClick:this.closeMobileControls},r.a.createElement("img",{src:"./images/close.svg",alt:"close",className:"mobile-controls__close-btn"})))))}}]),a}(n.Component);F.defaultProps={inputValues:{}};var G={changeInputValue:function(e,a){return function(t){t(function(e,a){return{type:u.SET_INPUT_VALUE,payload:a,name:e}}(e,a))}}},x=Object(c.b)((function(e){return{inputValues:C(e)}}),G)(F),H=(t(39),t(40),function(e){var a=e.name,t=e.onSelect,n=e.options;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"./images/world.svg",alt:"language select",className:"select__logo"}),r.a.createElement("select",{name:a,onChange:t,className:"select__menu",id:"s"},n.map((function(e){var a=e.value,t=e.label;return r.a.createElement("option",{value:a,className:"select__option",key:a},t)}))))});H.defaultProps={options:[],onSelect:function(){}};var B=[{value:"En",label:"English"},{value:"Jp",label:"Japanese"},{value:"Ua",label:"Ukrainian"}],J=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-lang"},r.a.createElement("img",{className:"footer__logo",src:"./images/logo-white.svg",alt:"uber eats"}),r.a.createElement("div",{className:"select"},r.a.createElement(H,{name:"Language",options:B}))),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/appstore.png",alt:"appstore"})),r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/googleplay.png",alt:"googleplay"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{className:"links__link links__link--weight",href:"#"},"About UberEats"),r.a.createElement("a",{className:"links__link",href:"#"},"Read our blog"),r.a.createElement("a",{className:"links__link",href:"#"},"Sign up to deliver"),r.a.createElement("a",{className:"links__link",href:"#"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{className:"links__link links__link--weight",href:"#"},"Get help"),r.a.createElement("a",{className:"links__link",href:"#"},"Read FAQs"),r.a.createElement("a",{className:"links__link",href:"#"},"View all cities"))),r.a.createElement("div",{className:"footer__separator"}),r.a.createElement("div",{className:"footer__bottom"},r.a.createElement("p",{className:"footer__copyrights"},"\xa9 ",(new Date).getFullYear()," Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{className:"links__link",href:"#"},"Privacy policy"),r.a.createElement("a",{className:"links__link",href:"#"},"Terms of use"),r.a.createElement("a",{className:"links__link",href:"#"},"Pricing")),r.a.createElement("div",{className:"footer__social  social"},r.a.createElement("a",{className:"social__link",href:"#"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{className:"social__link",href:"#"},r.a.createElement("img",{src:"./images/twitter.svg",alt:"twitter"})),r.a.createElement("a",{className:"social__link",href:"#"},r.a.createElement("img",{src:"./images/instagram.svg",alt:"instagram"})))))))},W=function(){return r.a.createElement(c.a,{store:E},r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement("main",{className:"content"},r.a.createElement(I,null)),r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(41);s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a4898e16.chunk.js.map