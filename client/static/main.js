// Copyright (c) 2022 - Max van der Schee; Licensed MIT
var U,d,j,re,w,R,se,T={},q=[],le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(t,e){for(var n in e)t[n]=e[n];return t}function z(t){var e=t.parentNode;e&&e.removeChild(t)}function k(t,e,n){var r,s,_,a={};for(_ in e)_=="key"?r=e[_]:_=="ref"?s=e[_]:a[_]=e[_];if(arguments.length>2&&(a.children=arguments.length>3?U.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)a[_]===void 0&&(a[_]=t.defaultProps[_]);return M(t,a,r,s,null)}function M(t,e,n,r,s){var _={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++j};return s==null&&d.vnode!=null&&d.vnode(_),_}function A(t){return t.children}function C(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function J(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return J(t)}}function F(t){(!t.__d&&(t.__d=!0)&&w.push(t)&&!P.__r++||R!==d.debounceRendering)&&((R=d.debounceRendering)||setTimeout)(P)}function P(){for(var t;P.__r=w.length;)t=w.sort(function(e,n){return e.__v.__b-n.__v.__b}),w=[],t.some(function(e){var n,r,s,_,a,u;e.__d&&(a=(_=(n=e).__v).__e,(u=n.__P)&&(r=[],(s=b({},_)).__v=_.__v+1,$(u,_,s,n.__n,u.ownerSVGElement!==void 0,_.__h!=null?[a]:null,r,a??E(_),_.__h),Y(r,_),_.__e!=a&&J(_)))})}function K(t,e,n,r,s,_,a,u,p,f){var o,h,i,l,c,x,m,v=r&&r.__k||q,g=v.length;for(n.__k=[],o=0;o<e.length;o++)if((l=n.__k[o]=(l=e[o])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?M(null,l,null,null,l):Array.isArray(l)?M(A,{children:l},null,null,null):l.__b>0?M(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(i=v[o])===null||i&&l.key==i.key&&l.type===i.type)v[o]=void 0;else for(h=0;h<g;h++){if((i=v[h])&&l.key==i.key&&l.type===i.type){v[h]=void 0;break}i=null}$(t,l,i=i||T,s,_,a,u,p,f),c=l.__e,(h=l.ref)&&i.ref!=h&&(m||(m=[]),i.ref&&m.push(i.ref,null,l),m.push(h,l.__c||c,l)),c!=null?(x==null&&(x=c),typeof l.type=="function"&&l.__k===i.__k?l.__d=p=Q(l,p,t):p=X(t,l,i,v,c,p),typeof n.type=="function"&&(n.__d=p)):p&&i.__e==p&&p.parentNode!=t&&(p=E(i))}for(n.__e=x,o=g;o--;)v[o]!=null&&(typeof n.type=="function"&&v[o].__e!=null&&v[o].__e==n.__d&&(n.__d=E(r,o+1)),ee(v[o],v[o]));if(m)for(o=0;o<m.length;o++)Z(m[o],m[++o],m[++o])}function Q(t,e,n){for(var r,s=t.__k,_=0;s&&_<s.length;_++)(r=s[_])&&(r.__=t,e=typeof r.type=="function"?Q(r,e,n):X(n,r,r,s,r.__e,e));return e}function X(t,e,n,r,s,_){var a,u,p;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(n==null||s!=_||s.parentNode==null)e:if(_==null||_.parentNode!==t)t.appendChild(s),a=null;else{for(u=_,p=0;(u=u.nextSibling)&&p<r.length;p+=2)if(u==s)break e;t.insertBefore(s,_),a=_}return a!==void 0?a:s.nextSibling}function ie(t,e,n,r,s){var _;for(_ in n)_==="children"||_==="key"||_ in e||L(t,_,null,n[_],r);for(_ in e)s&&typeof e[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===e[_]||L(t,_,e[_],n[_],r)}function B(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||le.test(e)?n:n+"px"}function L(t,e,n,r,s){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||B(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||B(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r||t.addEventListener(e,_?V:G,_):t.removeEventListener(e,_?V:G,_);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function G(t){this.l[t.type+!1](d.event?d.event(t):t)}function V(t){this.l[t.type+!0](d.event?d.event(t):t)}function $(t,e,n,r,s,_,a,u,p){var f,o,h,i,l,c,x,m,v,g,S,H,N,y=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=e.__e=n.__e,e.__h=null,_=[u]),(f=d.__b)&&f(e);try{e:if(typeof y=="function"){if(m=e.props,v=(f=y.contextType)&&r[f.__c],g=f?v?v.props.value:f.__:r,n.__c?x=(o=e.__c=n.__c).__=o.__E:("prototype"in y&&y.prototype.render?e.__c=o=new y(m,g):(e.__c=o=new C(m,g),o.constructor=y,o.render=ce),v&&v.sub(o),o.props=m,o.state||(o.state={}),o.context=g,o.__n=r,h=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),y.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=b({},o.__s)),b(o.__s,y.getDerivedStateFromProps(m,o.__s))),i=o.props,l=o.state,h)y.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(y.getDerivedStateFromProps==null&&m!==i&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,g)===!1||e.__v===n.__v){o.props=m,o.state=o.__s,e.__v!==n.__v&&(o.__d=!1),o.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(D){D&&(D.__=e)}),o.__h.length&&a.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(i,l,c)})}if(o.context=g,o.props=m,o.__v=e,o.__P=t,S=d.__r,H=0,"prototype"in y&&y.prototype.render)o.state=o.__s,o.__d=!1,S&&S(e),f=o.render(o.props,o.state,o.context);else do o.__d=!1,S&&S(e),f=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++H<25);o.state=o.__s,o.getChildContext!=null&&(r=b(b({},r),o.getChildContext())),h||o.getSnapshotBeforeUpdate==null||(c=o.getSnapshotBeforeUpdate(i,l)),N=f!=null&&f.type===A&&f.key==null?f.props.children:f,K(t,Array.isArray(N)?N:[N],e,n,r,s,_,a,u,p),o.base=e.__e,e.__h=null,o.__h.length&&a.push(o),x&&(o.__E=o.__=null),o.__e=!1}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ae(n.__e,e,n,r,s,_,a,p);(f=d.diffed)&&f(e)}catch(D){e.__v=null,(p||_!=null)&&(e.__e=u,e.__h=!!p,_[_.indexOf(u)]=null),d.__e(D,e,n)}}function Y(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function ae(t,e,n,r,s,_,a,u){var p,f,o,h=n.props,i=e.props,l=e.type,c=0;if(l==="svg"&&(s=!0),_!=null){for(;c<_.length;c++)if((p=_[c])&&"setAttribute"in p==!!l&&(l?p.localName===l:p.nodeType===3)){t=p,_[c]=null;break}}if(t==null){if(l===null)return document.createTextNode(i);t=s?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,i.is&&i),_=null,u=!1}if(l===null)h===i||u&&t.data===i||(t.data=i);else{if(_=_&&U.call(t.childNodes),f=(h=n.props||T).dangerouslySetInnerHTML,o=i.dangerouslySetInnerHTML,!u){if(_!=null)for(h={},c=0;c<t.attributes.length;c++)h[t.attributes[c].name]=t.attributes[c].value;(o||f)&&(o&&(f&&o.__html==f.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(ie(t,i,h,s,u),o)e.__k=[];else if(c=e.props.children,K(t,Array.isArray(c)?c:[c],e,n,r,s&&l!=="foreignObject",_,a,_?_[0]:n.__k&&E(n,0),u),_!=null)for(c=_.length;c--;)_[c]!=null&&z(_[c]);u||("value"in i&&(c=i.value)!==void 0&&(c!==t.value||l==="progress"&&!c||l==="option"&&c!==h.value)&&L(t,"value",c,h.value,!1),"checked"in i&&(c=i.checked)!==void 0&&c!==t.checked&&L(t,"checked",c,h.checked,!1))}return t}function Z(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){d.__e(r,n)}}function ee(t,e,n){var r,s;if(d.unmount&&d.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Z(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){d.__e(_,e)}r.base=r.__P=null}if(r=t.__k)for(s=0;s<r.length;s++)r[s]&&ee(r[s],e,typeof t.type!="function");n||t.__e==null||z(t.__e),t.__e=t.__d=void 0}function ce(t,e,n){return this.constructor(t,n)}function te(t,e,n){var r,s,_;d.__&&d.__(t,e),s=(r=typeof n=="function")?null:n&&n.__k||e.__k,_=[],$(e,t=(!r&&n||e).__k=k(A,null,[t]),s||T,T,e.ownerSVGElement!==void 0,!r&&n?[n]:s?null:e.firstChild?U.call(e.childNodes):null,_,!r&&n?n:s?s.__e:e.firstChild,r),Y(_,t)}U=q.slice,d={__e:function(t,e,n,r){for(var s,_,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((_=s.constructor)&&_.getDerivedStateFromError!=null&&(s.setState(_.getDerivedStateFromError(t)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,r||{}),a=s.__d),a)return s.__E=s}catch(u){t=u}throw t}},j=0,re=function(t){return t!=null&&t.constructor===void 0},C.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof t=="function"&&(t=t(b({},n),this.props)),t&&b(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),F(this))},C.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),F(this))},C.prototype.render=A,w=[],P.__r=0,se=0;var O=class extends C{constructor(){super();this.state={time:Date.now()}}componentDidMount(){this.timer=setInterval(()=>{this.setState({time:Date.now()})},1e3)}componentWillUnmount(){clearInterval(this.timer)}render(){let n=new Date(this.state.time).toLocaleTimeString();return k("span",null,n)}};var ne="https://stcp.deno.dev",W=new Map;function oe(t){let e=new EventSource(`${ne}/listen`);e.addEventListener("open",()=>console.log("CONNECTED")),e.addEventListener("error",()=>{switch(e.readyState){case EventSource.OPEN:console.log("CONNECTED");break;case EventSource.CONNECTING:console.log("CONNECTING");break;case EventSource.CLOSED:console.log("DISCONNECTED");break}}),e.addEventListener("message",n=>{let r=JSON.parse(n.data),[s,_,a]=r.split(":");s==="msg"&&(W.get(_)?W.get(_).push(a):W.set(_,[a])),t(W)})}async function _e({type:t,message:e,name:n}){try{await fetch(`${ne}/send?msg=${t}:${n}:${e}`)}catch(r){console.error(r)}}var I=class extends C{constructor(){super();this.updateMessage=n=>{this.setState({messages:n.get("Max")})};this.state={messages:[]}}componentDidMount(){oe(this.updateMessage),setInterval(()=>{_e({type:"msg",message:"HelloWorlds",name:"Max"})},3e3)}render(){return k("div",null,k(O,null),k("ul",null,this.state.messages.length?this.state.messages.map(n=>k("li",null,n)):null))}};var pe=document.querySelector("#app"),ue=k(I,null);te(ue,pe);
