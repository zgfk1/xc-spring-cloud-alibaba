(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Kvyg:function(e,t,r){e.exports={"ant-progress":"ant-progress","ant-progress-line":"ant-progress-line","ant-progress-small":"ant-progress-small","ant-progress-text":"ant-progress-text",anticon:"anticon","ant-progress-outer":"ant-progress-outer","ant-progress-show-info":"ant-progress-show-info","ant-progress-inner":"ant-progress-inner","ant-progress-circle-trail":"ant-progress-circle-trail","ant-progress-circle-path":"ant-progress-circle-path","ant-progress-appear":"ant-progress-appear","ant-progress-bg":"ant-progress-bg","ant-progress-success-bg":"ant-progress-success-bg","ant-progress-status-active":"ant-progress-status-active","ant-progress-active":"ant-progress-active","ant-progress-status-exception":"ant-progress-status-exception","ant-progress-status-success":"ant-progress-status-success","ant-progress-circle":"ant-progress-circle"}},a3w7:function(e,t,r){"use strict";r.r(t);r("+L6B");var a=r("2/Rp"),n=(r("jCWc"),r("kPKH")),s=(r("14J3"),r("BMrR")),o=(r("Q9mQ"),r("q1tI")),i=r.n(o),c=r("3S7+"),l=r("wEI+"),p=r("6CfX");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r},v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,m(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var r=t.getPrefixCls,a=e.props,n=a.prefixCls,s=y(a,["prefixCls"]);delete s.title;var i=r("popover",n);return o.createElement(c.a,f({},s,{prefixCls:i,ref:e.saveTooltip,overlay:e.getOverlay(i)}))},e}var r,a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),r=t,(a=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,r=t.title,a=t.content;return Object(p.a)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),o.createElement("div",null,r&&o.createElement("div",{className:"".concat(e,"-title")},r),o.createElement("div",{className:"".concat(e,"-inner-content")},a))}},{key:"render",value:function(){return o.createElement(l.a,null,this.renderPopover)}}])&&g(r.prototype,a),n&&g(r,n),t}();v.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};r("cIOH"),r("Kvyg");var b=r("17x9"),k=r.n(b),O=r("TSYQ"),w=r.n(O),P=r("CtXQ"),E=r("CWQg");function C(e){return!e||e<0?0:e>100?100:e}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r},N=function(e){var t=e.from,r=void 0===t?"#1890ff":t,a=e.to,n=void 0===a?"#1890ff":a,s=e.direction,o=void 0===s?"to right":s,i=S(e,["from","to","direction"]);if(0!==Object.keys(i).length){var c=function(e){for(var t=[],r=0,a=Object.entries(e);r<a.length;r++){var n=j(a[r],2),s=n[0],o=n[1],i=parseFloat(s.replace(/%/g,""));if(isNaN(i))return{};t.push({key:i,value:o})}return(t=t.sort(function(e,t){return e.key-t.key})).map(function(e){var t=e.key,r=e.value;return"".concat(r," ").concat(t,"%")}).join(", ")}(i);return{backgroundImage:"linear-gradient(".concat(o,", ").concat(c,")")}}return{backgroundImage:"linear-gradient(".concat(o,", ").concat(r,", ").concat(n,")")}},D=function(e){var t,r=e.prefixCls,a=e.percent,n=e.successPercent,s=e.strokeWidth,i=e.size,c=e.strokeColor,l=e.strokeLinecap,p=e.children;t=c&&"string"!=typeof c?N(c):{background:c};var u=x({width:"".concat(C(a),"%"),height:s||("small"===i?6:8),borderRadius:"square"===l?0:"100px"},t),f={width:"".concat(C(n),"%"),height:s||("small"===i?6:8),borderRadius:"square"===l?0:"100px"},g=void 0!==n?o.createElement("div",{className:"".concat(r,"-success-bg"),style:f}):null;return o.createElement("div",null,o.createElement("div",{className:"".concat(r,"-outer")},o.createElement("div",{className:"".concat(r,"-inner")},o.createElement("div",{className:"".concat(r,"-bg"),style:u}),g)),p)},W=r("QbLZ"),M=r.n(W),L=r("jo6Y"),T=r.n(L),I=r("iCc5"),F=r.n(I),R=r("FYw3"),_=r.n(R),z=r("mRg0"),q=r.n(z),A=function(e){return function(e){function t(){return F()(this,t),_()(this,e.apply(this,arguments))}return q()(t,e),t.prototype.componentDidUpdate=function(){var e=this,t=Date.now(),r=!1;Object.keys(this.paths).forEach(function(a){var n=e.paths[a];if(n){r=!0;var s=n.style;s.transitionDuration=".3s, .3s, .3s, .06s",e.prevTimeStamp&&t-e.prevTimeStamp<100&&(s.transitionDuration="0s, 0s")}}),r&&(this.prevTimeStamp=Date.now())},t.prototype.render=function(){return e.prototype.render.call(this)},t}(e)},Q={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},Y=k.a.oneOfType([k.a.number,k.a.string]),K={className:k.a.string,percent:k.a.oneOfType([Y,k.a.arrayOf(Y)]),prefixCls:k.a.string,strokeColor:k.a.oneOfType([k.a.string,k.a.arrayOf(k.a.string)]),strokeLinecap:k.a.oneOf(["butt","round","square"]),strokeWidth:Y,style:k.a.object,trailColor:k.a.string,trailWidth:Y},V=function(e){function t(){var r,a,n;F()(this,t);for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return r=a=_()(this,e.call.apply(e,[this].concat(o))),a.paths={},n=r,_()(a,n)}return q()(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.className,a=t.percent,n=t.prefixCls,s=t.strokeColor,o=t.strokeLinecap,c=t.strokeWidth,l=t.style,p=t.trailColor,u=t.trailWidth,f=T()(t,["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth"]);delete f.gapPosition;var g=Array.isArray(a)?a:[a],d=Array.isArray(s)?s:[s],m=c/2,h="M "+("round"===o?m:0)+","+m+"\n           L "+("round"===o?100-c/2:100)+","+m,y="0 0 100 "+c,v=0;return i.a.createElement("svg",M()({className:n+"-line "+r,viewBox:y,preserveAspectRatio:"none",style:l},f),i.a.createElement("path",{className:n+"-line-trail",d:h,strokeLinecap:o,stroke:p,strokeWidth:u||c,fillOpacity:"0"}),g.map(function(t,r){var a={strokeDasharray:t+"px, 100px",strokeDashoffset:"-"+v+"px",transition:"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},s=d[r]||d[d.length-1];return v+=t,i.a.createElement("path",{key:r,className:n+"-line-path",d:h,strokeLinecap:o,stroke:s,strokeWidth:c,fillOpacity:"0",ref:function(t){e.paths[r]=t},style:a})}))},t}(o.Component);V.propTypes=K,V.defaultProps=Q;A(V);var B=function(e){function t(){var r,a,n;F()(this,t);for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return r=a=_()(this,e.call.apply(e,[this].concat(o))),a.paths={},n=r,_()(a,n)}return q()(t,e),t.prototype.getPathStyles=function(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=50-a/2,o=0,i=-s,c=0,l=-2*s;switch(arguments[5]){case"left":o=-s,i=0,c=2*s,l=0;break;case"right":o=s,i=0,c=-2*s,l=0;break;case"bottom":i=s,l=2*s}var p="M 50,50 m "+o+","+i+"\n     a "+s+","+s+" 0 1 1 "+c+","+-l+"\n     a "+s+","+s+" 0 1 1 "+-c+","+l,u=2*Math.PI*s;return{pathString:p,pathStyle:{stroke:r,strokeDasharray:t/100*(u-n)+"px "+u+"px",strokeDashoffset:"-"+(n/2+e/100*(u-n))+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}}},t.prototype.getStokeList=function(){var e=this,t=this.props,r=t.prefixCls,a=t.percent,n=t.strokeColor,s=t.strokeWidth,o=t.strokeLinecap,c=t.gapDegree,l=t.gapPosition,p=Array.isArray(a)?a:[a],u=Array.isArray(n)?n:[n],f=0;return p.map(function(t,a){var n=u[a]||u[u.length-1],p=e.getPathStyles(f,t,n,s,c,l),g=p.pathString,d=p.pathStyle;return f+=t,i.a.createElement("path",{key:a,className:r+"-circle-path",d:g,strokeLinecap:o,strokeWidth:0===t?0:s,fillOpacity:"0",style:d,ref:function(t){e.paths[a]=t}})})},t.prototype.render=function(){var e=this.props,t=e.prefixCls,r=e.strokeWidth,a=e.trailWidth,n=e.gapDegree,s=e.gapPosition,o=e.trailColor,c=e.strokeLinecap,l=e.style,p=e.className,u=T()(e,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className"]),f=this.getPathStyles(0,100,o,r,n,s),g=f.pathString,d=f.pathStyle;return delete u.percent,delete u.strokeColor,i.a.createElement("svg",M()({className:t+"-circle "+p,viewBox:"0 0 100 100",style:l},u),i.a.createElement("path",{className:t+"-circle-trail",d:g,stroke:o,strokeLinecap:c,strokeWidth:a||r,fillOpacity:"0",style:d}),this.getStokeList())},t}(o.Component);B.propTypes=M()({},K,{gapPosition:k.a.oneOf(["top","bottom","left","right"])}),B.defaultProps=M()({},Q,{gapPosition:"top"});var G=A(B),J={normal:"#108ee9",exception:"#ff5500",success:"#87d068"};var Z=function(e){var t,r,a,n,s=e.prefixCls,i=e.width,c=e.strokeWidth,l=e.trailColor,p=e.strokeLinecap,u=e.gapPosition,f=e.gapDegree,g=e.type,d=e.children,m=i||120,h={width:m,height:m,fontSize:.15*m+6},y=c||6,v=u||"dashboard"===g&&"bottom"||"top",b=f||"dashboard"===g&&75;return o.createElement("div",{className:"".concat(s,"-inner"),style:h},o.createElement(G,{percent:(t=e,r=t.percent,a=t.successPercent,n=C(r),a?[a,C(n-C(a))]:n),strokeWidth:y,trailWidth:y,strokeColor:function(e){var t=e.progressStatus,r=e.successPercent,a=e.strokeColor||J[t];return r?[J.success,a]:a}(e),strokeLinecap:p,trailColor:l,prefixCls:s,gapDegree:b,gapPosition:v}),d)};function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function $(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ee(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ae=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r},ne=Object(E.a)("line","circle","dashboard"),se=Object(E.a)("normal","exception","active","success"),oe=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=ee(this,te(t).apply(this,arguments))).renderProgress=function(t){var r,a,n=t.getPrefixCls,s=e.props,i=s.prefixCls,c=s.className,l=(s.percent,s.status,s.format,s.trailColor,s.size),p=(s.successPercent,s.type),u=(s.strokeWidth,s.width,s.showInfo),f=(s.gapDegree,s.gapPosition,s.strokeColor,s.strokeLinecap,ae(s,["prefixCls","className","percent","status","format","trailColor","size","successPercent","type","strokeWidth","width","showInfo","gapDegree","gapPosition","strokeColor","strokeLinecap"])),g=n("progress",i),d=e.getProgressStatus(),m=e.renderProcessInfo(g,d);"line"===p?a=o.createElement(D,X({},e.props,{prefixCls:g}),m):"circle"!==p&&"dashboard"!==p||(a=o.createElement(Z,X({},e.props,{prefixCls:g,progressStatus:d}),m));var h=w()(g,(U(r={},"".concat(g,"-").concat("dashboard"===p?"circle":p),!0),U(r,"".concat(g,"-status-").concat(d),!0),U(r,"".concat(g,"-show-info"),u),U(r,"".concat(g,"-").concat(l),l),r),c);return o.createElement("div",X({},f,{className:h}),a)},e}var r,a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,o["Component"]),r=t,(a=[{key:"getPercentNumber",value:function(){var e=this.props,t=e.successPercent,r=e.percent,a=void 0===r?0:r;return parseInt(void 0!==t?t.toString():a.toString(),10)}},{key:"getProgressStatus",value:function(){var e=this.props.status;return se.indexOf(e)<0&&this.getPercentNumber()>=100?"success":e||"normal"}},{key:"renderProcessInfo",value:function(e,t){var r,a=this.props,n=a.showInfo,s=a.format,i=a.type,c=a.percent,l=a.successPercent;if(!n)return null;var p="circle"===i||"dashboard"===i?"":"-circle";return s||"exception"!==t&&"success"!==t?r=(s||function(e){return"".concat(e,"%")})(C(c),C(l)):"exception"===t?r=o.createElement(P.a,{type:"close".concat(p),theme:"line"===i?"filled":"outlined"}):"success"===t&&(r=o.createElement(P.a,{type:"check".concat(p),theme:"line"===i?"filled":"outlined"})),o.createElement("span",{className:"".concat(e,"-text"),title:"string"==typeof r?r:void 0},r)}},{key:"render",value:function(){return o.createElement(l.a,null,this.renderProgress)}}])&&$(r.prototype,a),n&&$(r,n),t}();oe.defaultProps={type:"line",percent:0,showInfo:!0,trailColor:"#f3f3f3",size:"default",gapDegree:0,strokeLinecap:"round"},oe.propTypes={status:b.oneOf(se),type:b.oneOf(ne),showInfo:b.bool,percent:b.number,width:b.number,strokeWidth:b.number,strokeLinecap:b.oneOf(["round","square"]),strokeColor:b.oneOfType([b.string,b.object]),trailColor:b.string,format:b.func,gapDegree:b.number};var ie=oe,ce=r("p0pE"),le=r.n(ce),pe=(r("miYZ"),r("tsqr")),ue=r("2Taf"),fe=r.n(ue),ge=r("vZ4D"),de=r.n(ge),me=r("l4Ni"),he=r.n(me),ye=r("ujKo"),ve=r.n(ye),be=r("MhPg"),ke=r.n(be),Oe=(r("5NDa"),r("5rEg")),we=(r("OaEy"),r("2fM7")),Pe=(r("y8nQ"),r("Vl3Y")),Ee=r("MuoO"),Ce=r("Y2fQ"),xe=r("mOP9"),je=r.n(xe),Se=r("vyRF"),Ne=r.n(Se),De=r("usdK"),We=r.n(De),Me=function(e,t,r,a){var n,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(s<3?n(o):s>3?n(t,r,o):n(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o},Le=Pe.a.Item,Te=we.a.Option,Ie=Oe.a.Group,Fe={ok:i.a.createElement("div",{className:Ne.a.success},i.a.createElement(Ce.FormattedMessage,{id:"user-register.strength.strong"})),pass:i.a.createElement("div",{className:Ne.a.warning},i.a.createElement(Ce.FormattedMessage,{id:"user-register.strength.medium"})),poor:i.a.createElement("div",{className:Ne.a.error},i.a.createElement(Ce.FormattedMessage,{id:"user-register.strength.short"}))},Re={ok:"success",pass:"normal",poor:"exception"},_e=function(e){function t(){var e;return fe()(this,t),(e=he()(this,ve()(t).apply(this,arguments))).state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},e.onGetCaptcha=function(){var t=e.props,r=t.form,a=t.dispatch;r.validateFields(["mobile"],{},function(t,r){t||a({type:"user/getSmsCode",payload:{data:{mobile:r.mobile,type:"regist"},resolve:function(t){if(1==t.code){pe.a.success("验证码:"+t.result.code);var r=59;e.setState({count:r}),e.interval=window.setInterval(function(){r-=1,e.setState({count:r}),0===r&&clearInterval(e.interval)},1e3)}}}})})},e.getPasswordStatus=function(){var t=e.props.form.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},e.handleSubmit=function(t){t.preventDefault();var r=e.props,a=r.form,n=r.dispatch;a.validateFields({force:!0},function(t,r){if(!t){e.state.prefix;n({type:"userRegister/regist",payload:le()({},r),callback:function(t){var r=e.props.form.getFieldValue("mobile");1===t.code?(pe.a.success("注册成功！"),We.a.push({pathname:"/user/register-result",state:{account:r}})):t.message&&pe.a.error(t.message)}})}})},e.checkConfirm=function(t,r,a){var n=e.props.form;r&&r!==n.getFieldValue("password")?a(Object(Ce.formatMessage)({id:"user-register.password.twice"})):a()},e.checkPassword=function(t,r,a){var n=e.state,s=n.visible,o=n.confirmDirty;if(r)if(e.setState({help:""}),s||e.setState({visible:!!r}),r.length<6)a("error");else{var i=e.props.form;r&&o&&i.validateFields(["confirm"],{force:!0}),a()}else e.setState({help:Object(Ce.formatMessage)({id:"user-register.password.required"}),visible:!!r}),a("error")},e.changePrefix=function(t){e.setState({prefix:t})},e.renderPasswordProgress=function(){var t=e.props.form.getFieldValue("password"),r=e.getPasswordStatus();return t&&t.length?i.a.createElement("div",{className:Ne.a["progress-".concat(r)]},i.a.createElement(ie,{default:Re[r],status:Re[r],className:Ne.a.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},e}return ke()(t,e),de()(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,o=t.getFieldDecorator,c=this.state,l=c.count,p=c.prefix,u=c.help,f=c.visible;return i.a.createElement("div",{className:Ne.a.main},i.a.createElement("h3",null,i.a.createElement(Ce.FormattedMessage,{id:"user-register.register.register"})),i.a.createElement(Pe.a,{onSubmit:this.handleSubmit},i.a.createElement(Le,null,i.a.createElement(Ie,{compact:!0},i.a.createElement(we.a,{size:"large",value:p,onChange:this.changePrefix,style:{width:"20%"}},i.a.createElement(Te,{value:"86"},"+86"),i.a.createElement(Te,{value:"87"},"+87")),o("mobile",{rules:[{required:!0,message:Object(Ce.formatMessage)({id:"user-register.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(Ce.formatMessage)({id:"user-register.phone-number.wrong-format"})}]})(i.a.createElement(Oe.a,{size:"large",style:{width:"80%"},placeholder:Object(Ce.formatMessage)({id:"user-register.phone-number.placeholder"})})))),i.a.createElement(Le,null,o("nickName",{})(i.a.createElement(Oe.a,{size:"large",placeholder:Object(Ce.formatMessage)({id:"user-register.nickName.placeholder"})}))),i.a.createElement(Le,{help:u},i.a.createElement(v,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:i.a.createElement("div",{style:{padding:"4px 0"}},Fe[this.getPasswordStatus()],this.renderPasswordProgress(),i.a.createElement("div",{style:{marginTop:10}},i.a.createElement(Ce.FormattedMessage,{id:"user-register.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:f},o("password",{rules:[{validator:this.checkPassword}]})(i.a.createElement(Oe.a,{size:"large",type:"password",placeholder:Object(Ce.formatMessage)({id:"user-register.password.placeholder"})})))),i.a.createElement(Le,null,o("confirm",{rules:[{required:!0,message:Object(Ce.formatMessage)({id:"user-register.confirm-password.required"})},{validator:this.checkConfirm}]})(i.a.createElement(Oe.a,{size:"large",type:"password",placeholder:Object(Ce.formatMessage)({id:"user-register.confirm-password.placeholder"})}))),i.a.createElement(Le,null,i.a.createElement(s.a,{gutter:8},i.a.createElement(n.a,{span:16},o("code",{rules:[{required:!0,message:Object(Ce.formatMessage)({id:"user-register.verification-code.required"})}]})(i.a.createElement(Oe.a,{size:"large",placeholder:Object(Ce.formatMessage)({id:"user-register.verification-code.placeholder"})}))),i.a.createElement(n.a,{span:8},i.a.createElement(a.a,{size:"large",disabled:!!l,className:Ne.a.getCaptcha,onClick:this.onGetCaptcha},l?"".concat(l," s"):Object(Ce.formatMessage)({id:"user-register.register.get-verification-code"}))))),i.a.createElement(Le,null,i.a.createElement(a.a,{size:"large",loading:r,className:Ne.a.submit,type:"primary",htmlType:"submit"},i.a.createElement(Ce.FormattedMessage,{id:"user-register.register.register"})),i.a.createElement(je.a,{className:Ne.a.login,to:"/user/login"},i.a.createElement(Ce.FormattedMessage,{id:"user-register.register.sign-in"})))))}}]),t}(o.Component);_e=Me([Object(Ee.connect)(function(e){return{userRegister:e.userRegister,submitting:e.loading.effects["userRegister/submit"]}})],_e);t.default=Pe.a.create()(_e)},vyRF:function(e,t,r){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);