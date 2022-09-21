// Copyright (c) 2022 - Max van der Schee; Licensed MIT
var L,d,q,se,N,F,le,T={},z=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function J(t){var e=t.parentNode;e&&e.removeChild(t)}function y(t,e,n){var _,s,o,u={};for(o in e)o=="key"?_=e[o]:o=="ref"?s=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)u[o]===void 0&&(u[o]=t.defaultProps[o]);return M(t,u,_,s,null)}function M(t,e,n,_,s){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++q};return s==null&&d.vnode!=null&&d.vnode(o),o}function O(t){return t.children}function S(t,e){this.props=t,this.context=e}function x(t,e){if(e==null)return t.__?x(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?x(t):null}function K(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return K(t)}}function B(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!P.__r++||F!==d.debounceRendering)&&((F=d.debounceRendering)||setTimeout)(P)}function P(){for(var t;P.__r=N.length;)t=N.sort(function(e,n){return e.__v.__b-n.__v.__b}),N=[],t.some(function(e){var n,_,s,o,u,c;e.__d&&(u=(o=(n=e).__v).__e,(c=n.__P)&&(_=[],(s=k({},o)).__v=o.__v+1,I(c,o,s,n.__n,c.ownerSVGElement!==void 0,o.__h!=null?[u]:null,_,u??x(o),o.__h),Z(_,o),o.__e!=u&&K(o)))})}function Q(t,e,n,_,s,o,u,c,p,f){var r,m,i,l,a,C,h,v=_&&_.__k||z,b=v.length;for(n.__k=[],r=0;r<e.length;r++)if((l=n.__k[r]=(l=e[r])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?M(null,l,null,null,l):Array.isArray(l)?M(O,{children:l},null,null,null):l.__b>0?M(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(i=v[r])===null||i&&l.key==i.key&&l.type===i.type)v[r]=void 0;else for(m=0;m<b;m++){if((i=v[m])&&l.key==i.key&&l.type===i.type){v[m]=void 0;break}i=null}I(t,l,i=i||T,s,o,u,c,p,f),a=l.__e,(m=l.ref)&&i.ref!=m&&(h||(h=[]),i.ref&&h.push(i.ref,null,l),h.push(m,l.__c||a,l)),a!=null?(C==null&&(C=a),typeof l.type=="function"&&l.__k===i.__k?l.__d=p=X(l,p,t):p=Y(t,l,i,v,a,p),typeof n.type=="function"&&(n.__d=p)):p&&i.__e==p&&p.parentNode!=t&&(p=x(i))}for(n.__e=C,r=b;r--;)v[r]!=null&&(typeof n.type=="function"&&v[r].__e!=null&&v[r].__e==n.__d&&(n.__d=x(_,r+1)),te(v[r],v[r]));if(h)for(r=0;r<h.length;r++)ee(h[r],h[++r],h[++r])}function X(t,e,n){for(var _,s=t.__k,o=0;s&&o<s.length;o++)(_=s[o])&&(_.__=t,e=typeof _.type=="function"?X(_,e,n):Y(n,_,_,s,_.__e,e));return e}function Y(t,e,n,_,s,o){var u,c,p;if(e.__d!==void 0)u=e.__d,e.__d=void 0;else if(n==null||s!=o||s.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(s),u=null;else{for(c=o,p=0;(c=c.nextSibling)&&p<_.length;p+=2)if(c==s)break e;t.insertBefore(s,o),u=o}return u!==void 0?u:s.nextSibling}function ae(t,e,n,_,s){var o;for(o in n)o==="children"||o==="key"||o in e||U(t,o,null,n[o],_);for(o in e)s&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||U(t,o,e[o],n[o],_)}function G(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ie.test(e)?n:n+"px"}function U(t,e,n,_,s){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||G(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||G(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_||t.addEventListener(e,o?j:V,o):t.removeEventListener(e,o?j:V,o);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function V(t){this.l[t.type+!1](d.event?d.event(t):t)}function j(t){this.l[t.type+!0](d.event?d.event(t):t)}function I(t,e,n,_,s,o,u,c,p){var f,r,m,i,l,a,C,h,v,b,E,H,w,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,c=e.__e=n.__e,e.__h=null,o=[c]),(f=d.__b)&&f(e);try{e:if(typeof g=="function"){if(h=e.props,v=(f=g.contextType)&&_[f.__c],b=f?v?v.props.value:f.__:_,n.__c?C=(r=e.__c=n.__c).__=r.__E:("prototype"in g&&g.prototype.render?e.__c=r=new g(h,b):(e.__c=r=new S(h,b),r.constructor=g,r.render=ce),v&&v.sub(r),r.props=h,r.state||(r.state={}),r.context=b,r.__n=_,m=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),g.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=k({},r.__s)),k(r.__s,g.getDerivedStateFromProps(h,r.__s))),i=r.props,l=r.state,m)g.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(g.getDerivedStateFromProps==null&&h!==i&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(h,b),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(h,r.__s,b)===!1||e.__v===n.__v){r.props=h,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(D){D&&(D.__=e)}),r.__h.length&&u.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(h,r.__s,b),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(i,l,a)})}if(r.context=b,r.props=h,r.__v=e,r.__P=t,E=d.__r,H=0,"prototype"in g&&g.prototype.render)r.state=r.__s,r.__d=!1,E&&E(e),f=r.render(r.props,r.state,r.context);else do r.__d=!1,E&&E(e),f=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++H<25);r.state=r.__s,r.getChildContext!=null&&(_=k(k({},_),r.getChildContext())),m||r.getSnapshotBeforeUpdate==null||(a=r.getSnapshotBeforeUpdate(i,l)),w=f!=null&&f.type===O&&f.key==null?f.props.children:f,Q(t,Array.isArray(w)?w:[w],e,n,_,s,o,u,c,p),r.base=e.__e,e.__h=null,r.__h.length&&u.push(r),C&&(r.__E=r.__=null),r.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ue(n.__e,e,n,_,s,o,u,p);(f=d.diffed)&&f(e)}catch(D){e.__v=null,(p||o!=null)&&(e.__e=c,e.__h=!!p,o[o.indexOf(c)]=null),d.__e(D,e,n)}}function Z(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(_){_.call(n)})}catch(_){d.__e(_,n.__v)}})}function ue(t,e,n,_,s,o,u,c){var p,f,r,m=n.props,i=e.props,l=e.type,a=0;if(l==="svg"&&(s=!0),o!=null){for(;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!l&&(l?p.localName===l:p.nodeType===3)){t=p,o[a]=null;break}}if(t==null){if(l===null)return document.createTextNode(i);t=s?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,i.is&&i),o=null,c=!1}if(l===null)m===i||c&&t.data===i||(t.data=i);else{if(o=o&&L.call(t.childNodes),f=(m=n.props||T).dangerouslySetInnerHTML,r=i.dangerouslySetInnerHTML,!c){if(o!=null)for(m={},a=0;a<t.attributes.length;a++)m[t.attributes[a].name]=t.attributes[a].value;(r||f)&&(r&&(f&&r.__html==f.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(ae(t,i,m,s,c),r)e.__k=[];else if(a=e.props.children,Q(t,Array.isArray(a)?a:[a],e,n,_,s&&l!=="foreignObject",o,u,o?o[0]:n.__k&&x(n,0),c),o!=null)for(a=o.length;a--;)o[a]!=null&&J(o[a]);c||("value"in i&&(a=i.value)!==void 0&&(a!==t.value||l==="progress"&&!a||l==="option"&&a!==m.value)&&U(t,"value",a,m.value,!1),"checked"in i&&(a=i.checked)!==void 0&&a!==t.checked&&U(t,"checked",a,m.checked,!1))}return t}function ee(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(_){d.__e(_,n)}}function te(t,e,n){var _,s;if(d.unmount&&d.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||ee(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){d.__e(o,e)}_.base=_.__P=null}if(_=t.__k)for(s=0;s<_.length;s++)_[s]&&te(_[s],e,typeof t.type!="function");n||t.__e==null||J(t.__e),t.__e=t.__d=void 0}function ce(t,e,n){return this.constructor(t,n)}function ne(t,e,n){var _,s,o;d.__&&d.__(t,e),s=(_=typeof n=="function")?null:n&&n.__k||e.__k,o=[],I(e,t=(!_&&n||e).__k=y(O,null,[t]),s||T,T,e.ownerSVGElement!==void 0,!_&&n?[n]:s?null:e.firstChild?L.call(e.childNodes):null,o,!_&&n?n:s?s.__e:e.firstChild,_),Z(o,t)}L=z.slice,d={__e:function(t,e,n,_){for(var s,o,u;e=e.__;)if((s=e.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(t)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,_||{}),u=s.__d),u)return s.__E=s}catch(c){t=c}throw t}},q=0,se=function(t){return t!=null&&t.constructor===void 0},S.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},n),this.props)),t&&k(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),B(this))},S.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),B(this))},S.prototype.render=O,N=[],P.__r=0,le=0;var re="https://stcp.deno.dev",A={};var W=0;function oe({stateUpdate:t,stateChange:e,stateSetup:n}){let _=new EventSource(`${re}/listen`);_.addEventListener("open",()=>{W=new Date().valueOf(),n&&n("CONNECTED")}),_.addEventListener("error",()=>{switch(_.readyState){case EventSource.OPEN:e&&e("CONNECTED");break;case EventSource.CONNECTING:e&&e("CONNECTING");break;case EventSource.CLOSED:e&&e("DISCONNECTED");break}}),_.addEventListener("message",s=>{let o=JSON.parse(s.data),[u,c,p]=o.split(":");u==="msg"&&(A[c]?A[c].push({time:W+s.timeStamp,message:p}):A[c]=[{time:W+s.timeStamp,message:p}],t(A,"msg"))})}async function _e({type:t,message:e,name:n}){try{await fetch(`${re}/send?msg=${t}:${n}:${e}`)}catch(_){console.error(_)}}var R=class extends S{state={value:""};onSubmit=e=>{e.preventDefault(),_e({type:"msg",message:this.state.value,name:"Max"}),this.setState({value:""})};onInput=e=>{let{value:n}=e.target;this.setState({value:n})};render(e,{value:n}){return y("form",{class:"message-input",onSubmit:this.onSubmit},y("input",{type:"text",value:n,onInput:this.onInput,autofocus:!0}),y("button",{class:"btn btn--primary",type:"submit"},"Submit"))}};var $=class extends S{state;constructor(){super(),this.state={users:new Map}}updateMessages=(e,n)=>{this.setState({users:e})};timestamp=e=>{let n=new Date(e),_=n.getHours(),s=n.getMinutes();return`${_}:${s<10?"0"+s:s}`};componentDidMount(){oe({stateUpdate:this.updateMessages})}render(){let e=this.state.users.get("Max");return y("main",{class:"main"},y("h1",null,"Secure Chat"),y("ul",{class:"message-group"},e&&e.map(({time:n,message:_})=>y("li",{class:"message-item",key:n},y("small",null,this.timestamp(n)),y("p",null,_)))),y(R,null))}};var pe=document.querySelector("#app"),fe=y($,null);ne(fe,pe);
