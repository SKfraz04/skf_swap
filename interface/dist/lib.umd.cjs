(function(tA,uA){typeof exports=="object"&&typeof module<"u"?uA(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],uA):(tA=typeof globalThis<"u"?globalThis:tA||self,uA(tA.Swap={},tA.React,tA.styled))})(this,function(tA,uA,IM){"use strict";var Fz=Object.defineProperty;var fz=(tA,uA,IM)=>uA in tA?Fz(tA,uA,{enumerable:!0,configurable:!0,writable:!0,value:IM}):tA[uA]=IM;var yj=(tA,uA,IM)=>(fz(tA,typeof uA!="symbol"?uA+"":uA,IM),IM);const pI=A=>A&&typeof A=="object"&&"default"in A?A:{default:A};function Bj(A){if(A&&A.__esModule)return A;const M=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(A){for(const I in A)if(I!=="default"){const N=Object.getOwnPropertyDescriptor(A,I);Object.defineProperty(M,I,N.get?N:{enumerable:!0,get:()=>A[I]})}}return M.default=A,Object.freeze(M)}const G=pI(uA),RM=Bj(uA),R=pI(IM);var lA=(A=>(A[A.Solana=501]="Solana",A[A.Ethereum=60]="Ethereum",A))(lA||{}),vI=(A=>(A.ETHEREUM_MAINNET="0x1",A.BINANCE_SMART_CHAIN="0x38",A.POLYGON="0x89",A.AVALANCHE="0xa86a",A.CELO="0xa4ec",A.FANTOM="0xfa",A.OPTIMISM="0xa",A.SOLANA_MAINNET="0x65",A))(vI||{});const LM="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",YM="So11111111111111111111111111111111111111112",WI="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",oj=100,HA="brave-swap-data-theme";var HM={exports:{}},xM={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VI;function Sj(){if(VI)return xM;VI=1;var A=G.default,M=60103;if(xM.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var I=Symbol.for;M=I("react.element"),xM.Fragment=I("react.fragment")}var N=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function c(x,i,n){var Z,U={},E=null,Q=null;n!==void 0&&(E=""+n),i.key!==void 0&&(E=""+i.key),i.ref!==void 0&&(Q=i.ref);for(Z in i)j.call(i,Z)&&!D.hasOwnProperty(Z)&&(U[Z]=i[Z]);if(x&&x.defaultProps)for(Z in i=x.defaultProps,i)U[Z]===void 0&&(U[Z]=i[Z]);return{$$typeof:M,type:x,key:E,ref:Q,props:U,_owner:N.current}}return xM.jsx=c,xM.jsxs=c,xM}var jI={};/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XI;function sj(){return XI||(XI=1,function(A){process.env.NODE_ENV!=="production"&&function(){var M=G.default,I=60103,N=60106;A.Fragment=60107;var j=60108,D=60114,c=60109,x=60110,i=60112,n=60113,Z=60120,U=60115,E=60116,Q=60121,p=60122,t=60117,r=60129,b=60131;if(typeof Symbol=="function"&&Symbol.for){var l=Symbol.for;I=l("react.element"),N=l("react.portal"),A.Fragment=l("react.fragment"),j=l("react.strict_mode"),D=l("react.profiler"),c=l("react.provider"),x=l("react.context"),i=l("react.forward_ref"),n=l("react.suspense"),Z=l("react.suspense_list"),U=l("react.memo"),E=l("react.lazy"),Q=l("react.block"),p=l("react.server.block"),t=l("react.fundamental"),l("react.scope"),l("react.opaque.id"),r=l("react.debug_trace_mode"),l("react.offscreen"),b=l("react.legacy_hidden")}var o=typeof Symbol=="function"&&Symbol.iterator,y="@@iterator";function O(s){if(s===null||typeof s!="object")return null;var v=o&&s[o]||s[y];return typeof v=="function"?v:null}var m=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function H(s){{for(var v=arguments.length,h=new Array(v>1?v-1:0),gA=1;gA<v;gA++)h[gA-1]=arguments[gA];g("error",s,h)}}function g(s,v,h){{var gA=m.ReactDebugCurrentFrame,aA="";if(L){var wA=w(L.type),AA=L._owner;aA+=T(wA,L._source,AA&&w(AA.type))}aA+=gA.getStackAddendum(),aA!==""&&(v+="%s",h=h.concat([aA]));var DA=h.map(function(SA){return""+SA});DA.unshift("Warning: "+v),Function.prototype.apply.call(console[s],console,DA)}}var z=!1;function e(s){return!!(typeof s=="string"||typeof s=="function"||s===A.Fragment||s===D||s===r||s===j||s===n||s===Z||s===b||z||typeof s=="object"&&s!==null&&(s.$$typeof===E||s.$$typeof===U||s.$$typeof===c||s.$$typeof===x||s.$$typeof===i||s.$$typeof===t||s.$$typeof===Q||s[0]===p))}var a=/^(.*)[\\\/]/;function T(s,v,h){var gA="";if(v){var aA=v.fileName,wA=aA.replace(a,"");if(/^index\./.test(wA)){var AA=aA.match(a);if(AA){var DA=AA[1];if(DA){var SA=DA.replace(a,"");wA=SA+"/"+wA}}}gA=" (at "+wA+":"+v.lineNumber+")"}else h&&(gA=" (created by "+h+")");return`
    in `+(s||"Unknown")+gA}var d=1;function B(s){return s._status===d?s._result:null}function C(s,v,h){var gA=v.displayName||v.name||"";return s.displayName||(gA!==""?h+"("+gA+")":h)}function w(s){if(s==null)return null;if(typeof s.tag=="number"&&H("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case A.Fragment:return"Fragment";case N:return"Portal";case D:return"Profiler";case j:return"StrictMode";case n:return"Suspense";case Z:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case x:return"Context.Consumer";case c:return"Context.Provider";case i:return C(s,s.render,"ForwardRef");case U:return w(s.type);case Q:return w(s.render);case E:{var v=s,h=B(v);if(h)return w(h);break}}return null}var S={};m.ReactDebugCurrentFrame;var L=null;function Y(s){L=s}function X(s,v,h,gA,aA){{var wA=Function.call.bind(Object.prototype.hasOwnProperty);for(var AA in s)if(wA(s,AA)){var DA=void 0;try{if(typeof s[AA]!="function"){var SA=Error((gA||"React class")+": "+h+" type `"+AA+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[AA]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw SA.name="Invariant Violation",SA}DA=s[AA](v,AA,gA,h,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(YA){DA=YA}DA&&!(DA instanceof Error)&&(Y(aA),H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",gA||"React class",h,AA,typeof DA),Y(null)),DA instanceof Error&&!(DA.message in S)&&(S[DA.message]=!0,Y(aA),H("Failed %s type: %s",h,DA.message),Y(null))}}}var V=m.ReactCurrentOwner,_=Object.prototype.hasOwnProperty,eA={key:!0,ref:!0,__self:!0,__source:!0},cA,q,jA;jA={};function CA(s){if(_.call(s,"ref")){var v=Object.getOwnPropertyDescriptor(s,"ref").get;if(v&&v.isReactWarning)return!1}return s.ref!==void 0}function qA(s){if(_.call(s,"key")){var v=Object.getOwnPropertyDescriptor(s,"key").get;if(v&&v.isReactWarning)return!1}return s.key!==void 0}function iA(s,v){if(typeof s.ref=="string"&&V.current&&v&&V.current.stateNode!==v){var h=w(V.current.type);jA[h]||(H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(V.current.type),s.ref),jA[h]=!0)}}function xA(s,v){{var h=function(){cA||(cA=!0,H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",v))};h.isReactWarning=!0,Object.defineProperty(s,"key",{get:h,configurable:!0})}}function oA(s,v){{var h=function(){q||(q=!0,H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",v))};h.isReactWarning=!0,Object.defineProperty(s,"ref",{get:h,configurable:!0})}}var _A=function(s,v,h,gA,aA,wA,AA){var DA={$$typeof:I,type:s,key:v,ref:h,props:AA,_owner:wA};return DA._store={},Object.defineProperty(DA._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(DA,"_self",{configurable:!1,enumerable:!1,writable:!1,value:gA}),Object.defineProperty(DA,"_source",{configurable:!1,enumerable:!1,writable:!1,value:aA}),Object.freeze&&(Object.freeze(DA.props),Object.freeze(DA)),DA};function EA(s,v,h,gA,aA){{var wA,AA={},DA=null,SA=null;h!==void 0&&(DA=""+h),qA(v)&&(DA=""+v.key),CA(v)&&(SA=v.ref,iA(v,aA));for(wA in v)_.call(v,wA)&&!eA.hasOwnProperty(wA)&&(AA[wA]=v[wA]);if(s&&s.defaultProps){var YA=s.defaultProps;for(wA in YA)AA[wA]===void 0&&(AA[wA]=YA[wA])}if(DA||SA){var W=typeof s=="function"?s.displayName||s.name||"Unknown":s;DA&&xA(AA,W),SA&&oA(AA,W)}return _A(s,DA,SA,aA,gA,V.current,AA)}}var LA=m.ReactCurrentOwner;m.ReactDebugCurrentFrame;function zA(s){L=s}var VA;VA=!1;function tM(s){return typeof s=="object"&&s!==null&&s.$$typeof===I}function ZM(){{if(LA.current){var s=w(LA.current.type);if(s)return`

Check the render method of \``+s+"`."}return""}}function UM(s){{if(s!==void 0){var v=s.fileName.replace(/^.*[\\\/]/,""),h=s.lineNumber;return`

Check your code at `+v+":"+h+"."}return""}}var $A={};function rM(s){{var v=ZM();if(!v){var h=typeof s=="string"?s:s.displayName||s.name;h&&(v=`

Check the top-level render call using <`+h+">.")}return v}}function AM(s,v){{if(!s._store||s._store.validated||s.key!=null)return;s._store.validated=!0;var h=rM(v);if($A[h])return;$A[h]=!0;var gA="";s&&s._owner&&s._owner!==LA.current&&(gA=" It was passed a child from "+w(s._owner.type)+"."),zA(s),H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',h,gA),zA(null)}}function EM(s,v){{if(typeof s!="object")return;if(Array.isArray(s))for(var h=0;h<s.length;h++){var gA=s[h];tM(gA)&&AM(gA,v)}else if(tM(s))s._store&&(s._store.validated=!0);else if(s){var aA=O(s);if(typeof aA=="function"&&aA!==s.entries)for(var wA=aA.call(s),AA;!(AA=wA.next()).done;)tM(AA.value)&&AM(AA.value,v)}}}function HI(s){{var v=s.type;if(v==null||typeof v=="string")return;var h;if(typeof v=="function")h=v.propTypes;else if(typeof v=="object"&&(v.$$typeof===i||v.$$typeof===U))h=v.propTypes;else return;if(h){var gA=w(v);X(h,s.props,"prop",gA,s)}else if(v.PropTypes!==void 0&&!VA){VA=!0;var aA=w(v);H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",aA||"Unknown")}typeof v.getDefaultProps=="function"&&!v.getDefaultProps.isReactClassApproved&&H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function OM(s){{for(var v=Object.keys(s.props),h=0;h<v.length;h++){var gA=v[h];if(gA!=="children"&&gA!=="key"){zA(s),H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",gA),zA(null);break}}s.ref!==null&&(zA(s),H("Invalid attribute `ref` supplied to `React.Fragment`."),zA(null))}}function XA(s,v,h,gA,aA,wA){{var AA=e(s);if(!AA){var DA="";(s===void 0||typeof s=="object"&&s!==null&&Object.keys(s).length===0)&&(DA+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var SA=UM(aA);SA?DA+=SA:DA+=ZM();var YA;s===null?YA="null":Array.isArray(s)?YA="array":s!==void 0&&s.$$typeof===I?(YA="<"+(w(s.type)||"Unknown")+" />",DA=" Did you accidentally export a JSX literal instead of a component?"):YA=typeof s,H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",YA,DA)}var W=EA(s,v,h,aA,wA);if(W==null)return W;if(AA){var f=v.children;if(f!==void 0)if(gA)if(Array.isArray(f)){for(var NA=0;NA<f.length;NA++)EM(f[NA],s);Object.freeze&&Object.freeze(f)}else H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else EM(f,s)}return s===A.Fragment?OM(W):HI(W),W}}function eM(s,v,h){return XA(s,v,h,!0)}function mI(s,v,h){return XA(s,v,h,!1)}var PI=mI,kI=eM;A.jsx=PI,A.jsxs=kI}()}(jI)),jI}(function(A){process.env.NODE_ENV==="production"?A.exports=Sj():A.exports=sj()})(HM);const bA=HM.exports.Fragment,u=HM.exports.jsx,P=HM.exports.jsxs,hI=uA.createContext(void 0),bj=A=>{const{children:M,assetsList:I,network:N,account:j,supportedNetworks:D,exchanges:c,walletAccounts:x,defaultBaseCurrency:i,isWalletConnected:n,isReady:Z,connectWallet:U,disconnectWallet:E,switchAccount:Q,switchNetwork:p,getLocale:t,getBalance:r,getTokenBalance:b,getTokenBalances:l,getTokenPrice:o,getNetworkFeeEstimate:y,ethWalletAdapter:O,solWalletAdapter:m,swapService:H}=A;return u(hI.Provider,{value:{assetsList:I,network:N,account:j,supportedNetworks:D,exchanges:c,walletAccounts:x,defaultBaseCurrency:i,isWalletConnected:n,isReady:Z,connectWallet:U,disconnectWallet:E,switchAccount:Q,switchNetwork:p,getLocale:t,getBalance:r,getTokenBalance:b,getTokenBalances:l,getTokenPrice:o,getNetworkFeeEstimate:y,ethWalletAdapter:O,solWalletAdapter:m,swapService:H},children:M})},nA=()=>{const A=G.default.useContext(hI);if(A===void 0)throw new Error("useSwap must be used within a SwapProvider");return A};function Qj(A,...M){return(...I)=>A(...M,...I)}function dM(A){return function(...M){var I=M.pop();return A.call(this,M,I)}}var Gj=typeof queueMicrotask=="function"&&queueMicrotask,FI=typeof setImmediate=="function"&&setImmediate,fI=typeof process=="object"&&typeof process.nextTick=="function";function JI(A){setTimeout(A,0)}function KI(A){return(M,...I)=>A(()=>M(...I))}var yM;Gj?yM=queueMicrotask:FI?yM=setImmediate:fI?yM=process.nextTick:yM=JI;var zM=KI(yM);function gI(A){return BM(A)?function(...M){const I=M.pop(),N=A.apply(this,M);return qI(N,I)}:dM(function(M,I){var N;try{N=A.apply(this,M)}catch(j){return I(j)}if(N&&typeof N.then=="function")return qI(N,I);I(null,N)})}function qI(A,M){return A.then(I=>{_I(M,null,I)},I=>{_I(M,I&&I.message?I:new Error(I))})}function _I(A,M,I){try{A(M,I)}catch(N){zM(j=>{throw j},N)}}function BM(A){return A[Symbol.toStringTag]==="AsyncFunction"}function Zj(A){return A[Symbol.toStringTag]==="AsyncGenerator"}function Uj(A){return typeof A[Symbol.asyncIterator]=="function"}function IA(A){if(typeof A!="function")throw new Error("expected a function");return BM(A)?gI(A):A}function MA(A,M=A.length){if(!M)throw new Error("arity is undefined");function I(...N){return typeof N[M-1]=="function"?A.apply(this,N):new Promise((j,D)=>{N[M-1]=(c,...x)=>{if(c)return D(c);j(x.length>1?x:x[0])},A.apply(this,N)})}return I}function $I(A){return function(I,...N){return MA(function(D){var c=this;return A(I,(x,i)=>{IA(x).apply(c,N.concat(i))},D)})}}function DI(A,M,I,N){M=M||[];var j=[],D=0,c=IA(I);return A(M,(x,i,n)=>{var Z=D++;c(x,(U,E)=>{j[Z]=E,n(U)})},x=>{N(x,j)})}function mM(A){return A&&typeof A.length=="number"&&A.length>=0&&A.length%1===0}const PM={};function NM(A){function M(...I){if(A!==null){var N=A;A=null,N.apply(this,I)}}return Object.assign(M,A),M}function rj(A){return A[Symbol.iterator]&&A[Symbol.iterator]()}function Oj(A){var M=-1,I=A.length;return function(){return++M<I?{value:A[M],key:M}:null}}function Rj(A){var M=-1;return function(){var N=A.next();return N.done?null:(M++,{value:N.value,key:M})}}function Yj(A){var M=A?Object.keys(A):[],I=-1,N=M.length;return function j(){var D=M[++I];return D==="__proto__"?j():I<N?{value:A[D],key:D}:null}}function Hj(A){if(mM(A))return Oj(A);var M=rj(A);return M?Rj(M):Yj(A)}function jM(A){return function(...M){if(A===null)throw new Error("Callback was already called.");var I=A;A=null,I.apply(this,M)}}function AN(A,M,I,N){let j=!1,D=!1,c=!1,x=0,i=0;function n(){x>=M||c||j||(c=!0,A.next().then(({value:E,done:Q})=>{if(!(D||j)){if(c=!1,Q){j=!0,x<=0&&N(null);return}x++,I(E,i,Z),i++,n()}}).catch(U))}function Z(E,Q){if(x-=1,!D){if(E)return U(E);if(E===!1){j=!0,D=!0;return}if(Q===PM||j&&x<=0)return j=!0,N(null);n()}}function U(E){D||(c=!1,j=!0,N(E))}n()}var mA=A=>(M,I,N)=>{if(N=NM(N),A<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!M)return N(null);if(Zj(M))return AN(M,A,I,N);if(Uj(M))return AN(M[Symbol.asyncIterator](),A,I,N);var j=Hj(M),D=!1,c=!1,x=0,i=!1;function n(U,E){if(!c)if(x-=1,U)D=!0,N(U);else if(U===!1)D=!0,c=!0;else{if(E===PM||D&&x<=0)return D=!0,N(null);i||Z()}}function Z(){for(i=!0;x<A&&!D;){var U=j();if(U===null){D=!0,x<=0&&N(null);return}x+=1,I(U.value,U.key,jM(n))}i=!1}Z()};function mj(A,M,I,N){return mA(M)(A,IA(I),N)}var kM=MA(mj,4);function Pj(A,M,I){I=NM(I);var N=0,j=0,{length:D}=A,c=!1;D===0&&I(null);function x(i,n){i===!1&&(c=!0),c!==!0&&(i?I(i):(++j===D||n===PM)&&I(null))}for(;N<D;N++)M(A[N],N,jM(x))}function kj(A,M,I){return kM(A,1/0,M,I)}function pj(A,M,I){var N=mM(A)?Pj:kj;return N(A,IA(M),I)}var PA=MA(pj,3);function vj(A,M,I){return DI(PA,A,M,I)}var cI=MA(vj,3),Wj=$I(cI);function Vj(A,M,I){return kM(A,1,M,I)}var FA=MA(Vj,3);function Xj(A,M,I){return DI(FA,A,M,I)}var MN=MA(Xj,3),hj=$I(MN);const uM=Symbol("promiseCallback");function lM(){let A,M;function I(N,...j){if(N)return M(N);A(j.length>1?j:j[0])}return I[uM]=new Promise((N,j)=>{A=N,M=j}),I}function IN(A,M,I){typeof M!="number"&&(I=M,M=null),I=NM(I||lM());var N=Object.keys(A).length;if(!N)return I(null);M||(M=N);var j={},D=0,c=!1,x=!1,i=Object.create(null),n=[],Z=[],U={};Object.keys(A).forEach(o=>{var y=A[o];if(!Array.isArray(y)){E(o,[y]),Z.push(o);return}var O=y.slice(0,y.length-1),m=O.length;if(m===0){E(o,y),Z.push(o);return}U[o]=m,O.forEach(H=>{if(!A[H])throw new Error("async.auto task `"+o+"` has a non-existent dependency `"+H+"` in "+O.join(", "));p(H,()=>{m--,m===0&&E(o,y)})})}),b(),Q();function E(o,y){n.push(()=>r(o,y))}function Q(){if(!c){if(n.length===0&&D===0)return I(null,j);for(;n.length&&D<M;){var o=n.shift();o()}}}function p(o,y){var O=i[o];O||(O=i[o]=[]),O.push(y)}function t(o){var y=i[o]||[];y.forEach(O=>O()),Q()}function r(o,y){if(!x){var O=jM((H,...g)=>{if(D--,H===!1){c=!0;return}if(g.length<2&&([g]=g),H){var z={};if(Object.keys(j).forEach(e=>{z[e]=j[e]}),z[o]=g,x=!0,i=Object.create(null),c)return;I(H,z)}else j[o]=g,t(o)});D++;var m=IA(y[y.length-1]);y.length>1?m(j,O):m(O)}}function b(){for(var o,y=0;Z.length;)o=Z.pop(),y++,l(o).forEach(O=>{--U[O]===0&&Z.push(O)});if(y!==N)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function l(o){var y=[];return Object.keys(A).forEach(O=>{const m=A[O];Array.isArray(m)&&m.indexOf(o)>=0&&y.push(O)}),y}return I[uM]}var Fj=/^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/,fj=/^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/,Jj=/,/,Kj=/(=.+)?(\s*)$/;function qj(A){let M="",I=0,N=A.indexOf("*/");for(;I<A.length;)if(A[I]==="/"&&A[I+1]==="/"){let j=A.indexOf(`
`,I);I=j===-1?A.length:j}else if(N!==-1&&A[I]==="/"&&A[I+1]==="*"){let j=A.indexOf("*/",I);j!==-1?(I=j+2,N=A.indexOf("*/",I)):(M+=A[I],I++)}else M+=A[I],I++;return M}function _j(A){const M=qj(A.toString());let I=M.match(Fj);if(I||(I=M.match(fj)),!I)throw new Error(`could not parse args in autoInject
Source:
`+M);let[,N]=I;return N.replace(/\s/g,"").split(Jj).map(j=>j.replace(Kj,"").trim())}function $j(A,M){var I={};return Object.keys(A).forEach(N=>{var j=A[N],D,c=BM(j),x=!c&&j.length===1||c&&j.length===0;if(Array.isArray(j))D=[...j],j=D.pop(),I[N]=D.concat(D.length>0?i:j);else if(x)I[N]=j;else{if(D=_j(j),j.length===0&&!c&&D.length===0)throw new Error("autoInject task functions require explicit parameters.");c||D.pop(),I[N]=D.concat(i)}function i(n,Z){var U=D.map(E=>n[E]);U.push(Z),IA(j)(...U)}}),IN(I,M)}class Ag{constructor(){this.head=this.tail=null,this.length=0}removeLink(M){return M.prev?M.prev.next=M.next:this.head=M.next,M.next?M.next.prev=M.prev:this.tail=M.prev,M.prev=M.next=null,this.length-=1,M}empty(){for(;this.head;)this.shift();return this}insertAfter(M,I){I.prev=M,I.next=M.next,M.next?M.next.prev=I:this.tail=I,M.next=I,this.length+=1}insertBefore(M,I){I.prev=M.prev,I.next=M,M.prev?M.prev.next=I:this.head=I,M.prev=I,this.length+=1}unshift(M){this.head?this.insertBefore(this.head,M):NN(this,M)}push(M){this.tail?this.insertAfter(this.tail,M):NN(this,M)}shift(){return this.head&&this.removeLink(this.head)}pop(){return this.tail&&this.removeLink(this.tail)}toArray(){return[...this]}*[Symbol.iterator](){for(var M=this.head;M;)yield M.data,M=M.next}remove(M){for(var I=this.head;I;){var{next:N}=I;M(I)&&this.removeLink(I),I=N}return this}}function NN(A,M){A.length=1,A.head=A.tail=M}function iI(A,M,I){if(M==null)M=1;else if(M===0)throw new RangeError("Concurrency must not be zero");var N=IA(A),j=0,D=[];const c={error:[],drain:[],saturated:[],unsaturated:[],empty:[]};function x(l,o){c[l].push(o)}function i(l,o){const y=(...O)=>{n(l,y),o(...O)};c[l].push(y)}function n(l,o){if(!l)return Object.keys(c).forEach(y=>c[y]=[]);if(!o)return c[l]=[];c[l]=c[l].filter(y=>y!==o)}function Z(l,...o){c[l].forEach(y=>y(...o))}var U=!1;function E(l,o,y,O){if(O!=null&&typeof O!="function")throw new Error("task callback must be a function");b.started=!0;var m,H;function g(e,...a){if(e)return y?H(e):m();if(a.length<=1)return m(a[0]);m(a)}var z=b._createTaskItem(l,y?g:O||g);if(o?b._tasks.unshift(z):b._tasks.push(z),U||(U=!0,zM(()=>{U=!1,b.process()})),y||!O)return new Promise((e,a)=>{m=e,H=a})}function Q(l){return function(o,...y){j-=1;for(var O=0,m=l.length;O<m;O++){var H=l[O],g=D.indexOf(H);g===0?D.shift():g>0&&D.splice(g,1),H.callback(o,...y),o!=null&&Z("error",o,H.data)}j<=b.concurrency-b.buffer&&Z("unsaturated"),b.idle()&&Z("drain"),b.process()}}function p(l){return l.length===0&&b.idle()?(zM(()=>Z("drain")),!0):!1}const t=l=>o=>{if(!o)return new Promise((y,O)=>{i(l,(m,H)=>{if(m)return O(m);y(H)})});n(l),x(l,o)};var r=!1,b={_tasks:new Ag,_createTaskItem(l,o){return{data:l,callback:o}},*[Symbol.iterator](){yield*b._tasks[Symbol.iterator]()},concurrency:M,payload:I,buffer:M/4,started:!1,paused:!1,push(l,o){return Array.isArray(l)?p(l)?void 0:l.map(y=>E(y,!1,!1,o)):E(l,!1,!1,o)},pushAsync(l,o){return Array.isArray(l)?p(l)?void 0:l.map(y=>E(y,!1,!0,o)):E(l,!1,!0,o)},kill(){n(),b._tasks.empty()},unshift(l,o){return Array.isArray(l)?p(l)?void 0:l.map(y=>E(y,!0,!1,o)):E(l,!0,!1,o)},unshiftAsync(l,o){return Array.isArray(l)?p(l)?void 0:l.map(y=>E(y,!0,!0,o)):E(l,!0,!0,o)},remove(l){b._tasks.remove(l)},process(){if(!r){for(r=!0;!b.paused&&j<b.concurrency&&b._tasks.length;){var l=[],o=[],y=b._tasks.length;b.payload&&(y=Math.min(y,b.payload));for(var O=0;O<y;O++){var m=b._tasks.shift();l.push(m),D.push(m),o.push(m.data)}j+=1,b._tasks.length===0&&Z("empty"),j===b.concurrency&&Z("saturated");var H=jM(Q(l));N(o,H)}r=!1}},length(){return b._tasks.length},running(){return j},workersList(){return D},idle(){return b._tasks.length+j===0},pause(){b.paused=!0},resume(){b.paused!==!1&&(b.paused=!1,zM(b.process))}};return Object.defineProperties(b,{saturated:{writable:!1,value:t("saturated")},unsaturated:{writable:!1,value:t("unsaturated")},empty:{writable:!1,value:t("empty")},drain:{writable:!1,value:t("drain")},error:{writable:!1,value:t("error")}}),b}function Mg(A,M){return iI(A,1,M)}function Ig(A,M,I){return iI(A,M,I)}function Ng(A,M,I,N){N=NM(N);var j=IA(I);return FA(A,(D,c,x)=>{j(M,D,(i,n)=>{M=n,x(i)})},D=>N(D,M))}var oM=MA(Ng,4);function jN(...A){var M=A.map(IA);return function(...I){var N=this,j=I[I.length-1];return typeof j=="function"?I.pop():j=lM(),oM(M,I,(D,c,x)=>{c.apply(N,D.concat((i,...n)=>{x(i,n)}))},(D,c)=>j(D,...c)),j[uM]}}function jg(...A){return jN(...A.reverse())}function gg(A,M,I,N){return DI(mA(M),A,I,N)}var pM=MA(gg,4);function Dg(A,M,I,N){var j=IA(I);return pM(A,M,(D,c)=>{j(D,(x,...i)=>x?c(x):c(x,i))},(D,c)=>{for(var x=[],i=0;i<c.length;i++)c[i]&&(x=x.concat(...c[i]));return N(D,x)})}var vM=MA(Dg,4);function cg(A,M,I){return vM(A,1/0,M,I)}var gN=MA(cg,3);function ig(A,M,I){return vM(A,1,M,I)}var DN=MA(ig,3);function zg(...A){return function(...M){var I=M.pop();return I(null,...A)}}function fA(A,M){return(I,N,j,D)=>{var c=!1,x;const i=IA(j);I(N,(n,Z,U)=>{i(n,(E,Q)=>{if(E||E===!1)return U(E);if(A(Q)&&!x)return c=!0,x=M(!0,n),U(null,PM);U()})},n=>{if(n)return D(n);D(null,c?x:M(!1))})}}function eg(A,M,I){return fA(N=>N,(N,j)=>j)(PA,A,M,I)}var cN=MA(eg,3);function xg(A,M,I,N){return fA(j=>j,(j,D)=>D)(mA(M),A,I,N)}var iN=MA(xg,4);function ug(A,M,I){return fA(N=>N,(N,j)=>j)(mA(1),A,M,I)}var zN=MA(ug,3);function eN(A){return(M,...I)=>IA(M)(...I,(N,...j)=>{typeof console=="object"&&(N?console.error&&console.error(N):console[A]&&j.forEach(D=>console[A](D)))})}var lg=eN("dir");function wg(A,M,I){I=jM(I);var N=IA(A),j=IA(M),D;function c(i,...n){if(i)return I(i);i!==!1&&(D=n,j(...n,x))}function x(i,n){if(i)return I(i);if(i!==!1){if(!n)return I(null,...D);N(c)}}return x(null,!0)}var zI=MA(wg,3);function Cg(A,M,I){const N=IA(M);return zI(A,(...j)=>{const D=j.pop();N(...j,(c,x)=>D(c,!x))},I)}function xN(A){return(M,I,N)=>A(M,N)}function ag(A,M,I){return PA(A,xN(IA(M)),I)}var uN=MA(ag,3);function ng(A,M,I,N){return mA(M)(A,xN(IA(I)),N)}var eI=MA(ng,4);function Tg(A,M,I){return eI(A,1,M,I)}var xI=MA(Tg,3);function lN(A){return BM(A)?A:function(...M){var I=M.pop(),N=!0;M.push((...j)=>{N?zM(()=>I(...j)):I(...j)}),A.apply(this,M),N=!1}}function tg(A,M,I){return fA(N=>!N,N=>!N)(PA,A,M,I)}var wN=MA(tg,3);function Eg(A,M,I,N){return fA(j=>!j,j=>!j)(mA(M),A,I,N)}var CN=MA(Eg,4);function Lg(A,M,I){return fA(N=>!N,N=>!N)(FA,A,M,I)}var aN=MA(Lg,3);function dg(A,M,I,N){var j=new Array(M.length);A(M,(D,c,x)=>{I(D,(i,n)=>{j[c]=!!n,x(i)})},D=>{if(D)return N(D);for(var c=[],x=0;x<M.length;x++)j[x]&&c.push(M[x]);N(null,c)})}function yg(A,M,I,N){var j=[];A(M,(D,c,x)=>{I(D,(i,n)=>{if(i)return x(i);n&&j.push({index:c,value:D}),x(i)})},D=>{if(D)return N(D);N(null,j.sort((c,x)=>c.index-x.index).map(c=>c.value))})}function WM(A,M,I,N){var j=mM(M)?dg:yg;return j(A,M,IA(I),N)}function Bg(A,M,I){return WM(PA,A,M,I)}var nN=MA(Bg,3);function og(A,M,I,N){return WM(mA(M),A,I,N)}var TN=MA(og,4);function Sg(A,M,I){return WM(FA,A,M,I)}var tN=MA(Sg,3);function sg(A,M){var I=jM(M),N=IA(lN(A));function j(D){if(D)return I(D);D!==!1&&N(j)}return j()}var bg=MA(sg,2);function Qg(A,M,I,N){var j=IA(I);return pM(A,M,(D,c)=>{j(D,(x,i)=>x?c(x):c(x,{key:i,val:D}))},(D,c)=>{for(var x={},{hasOwnProperty:i}=Object.prototype,n=0;n<c.length;n++)if(c[n]){var{key:Z}=c[n],{val:U}=c[n];i.call(x,Z)?x[Z].push(U):x[Z]=[U]}return N(D,x)})}var uI=MA(Qg,4);function Gg(A,M,I){return uI(A,1/0,M,I)}function Zg(A,M,I){return uI(A,1,M,I)}var Ug=eN("log");function rg(A,M,I,N){N=NM(N);var j={},D=IA(I);return mA(M)(A,(c,x,i)=>{D(c,x,(n,Z)=>{if(n)return i(n);j[x]=Z,i(n)})},c=>N(c,j))}var lI=MA(rg,4);function Og(A,M,I){return lI(A,1/0,M,I)}function Rg(A,M,I){return lI(A,1,M,I)}function Yg(A,M=I=>I){var I=Object.create(null),N=Object.create(null),j=IA(A),D=dM((c,x)=>{var i=M(...c);i in I?zM(()=>x(null,...I[i])):i in N?N[i].push(x):(N[i]=[x],j(...c,(n,...Z)=>{n||(I[i]=Z);var U=N[i];delete N[i];for(var E=0,Q=U.length;E<Q;E++)U[E](n,...Z)}))});return D.memo=I,D.unmemoized=A,D}var VM;fI?VM=process.nextTick:FI?VM=setImmediate:VM=JI;var Hg=KI(VM),wI=MA((A,M,I)=>{var N=mM(M)?[]:{};A(M,(j,D,c)=>{IA(j)((x,...i)=>{i.length<2&&([i]=i),N[D]=i,c(x)})},j=>I(j,N))},3);function mg(A,M){return wI(PA,A,M)}function Pg(A,M,I){return wI(mA(M),A,I)}function EN(A,M){var I=IA(A);return iI((N,j)=>{I(N[0],j)},M,1)}class kg{constructor(){this.heap=[],this.pushCount=Number.MIN_SAFE_INTEGER}get length(){return this.heap.length}empty(){return this.heap=[],this}percUp(M){let I;for(;M>0&&CI(this.heap[M],this.heap[I=LN(M)]);){let N=this.heap[M];this.heap[M]=this.heap[I],this.heap[I]=N,M=I}}percDown(M){let I;for(;(I=pg(M))<this.heap.length&&(I+1<this.heap.length&&CI(this.heap[I+1],this.heap[I])&&(I=I+1),!CI(this.heap[M],this.heap[I]));){let N=this.heap[M];this.heap[M]=this.heap[I],this.heap[I]=N,M=I}}push(M){M.pushCount=++this.pushCount,this.heap.push(M),this.percUp(this.heap.length-1)}unshift(M){return this.heap.push(M)}shift(){let[M]=this.heap;return this.heap[0]=this.heap[this.heap.length-1],this.heap.pop(),this.percDown(0),M}toArray(){return[...this]}*[Symbol.iterator](){for(let M=0;M<this.heap.length;M++)yield this.heap[M].data}remove(M){let I=0;for(let N=0;N<this.heap.length;N++)M(this.heap[N])||(this.heap[I]=this.heap[N],I++);this.heap.splice(I);for(let N=LN(this.heap.length-1);N>=0;N--)this.percDown(N);return this}}function pg(A){return(A<<1)+1}function LN(A){return(A+1>>1)-1}function CI(A,M){return A.priority!==M.priority?A.priority<M.priority:A.pushCount<M.pushCount}function vg(A,M){var I=EN(A,M),{push:N,pushAsync:j}=I;I._tasks=new kg,I._createTaskItem=({data:c,priority:x},i)=>({data:c,priority:x,callback:i});function D(c,x){return Array.isArray(c)?c.map(i=>({data:i,priority:x})):{data:c,priority:x}}return I.push=function(c,x=0,i){return N(D(c,x),i)},I.pushAsync=function(c,x=0,i){return j(D(c,x),i)},delete I.unshift,delete I.unshiftAsync,I}function Wg(A,M){if(M=NM(M),!Array.isArray(A))return M(new TypeError("First argument to race must be an array of functions"));if(!A.length)return M();for(var I=0,N=A.length;I<N;I++)IA(A[I])(M)}var Vg=MA(Wg,2);function dN(A,M,I,N){var j=[...A].reverse();return oM(j,M,I,N)}function aI(A){var M=IA(A);return dM(function(N,j){return N.push((D,...c)=>{let x={};if(D&&(x.error=D),c.length>0){var i=c;c.length<=1&&([i]=c),x.value=i}j(null,x)}),M.apply(this,N)})}function Xg(A){var M;return Array.isArray(A)?M=A.map(aI):(M={},Object.keys(A).forEach(I=>{M[I]=aI.call(this,A[I])})),M}function nI(A,M,I,N){const j=IA(I);return WM(A,M,(D,c)=>{j(D,(x,i)=>{c(x,!i)})},N)}function hg(A,M,I){return nI(PA,A,M,I)}var Fg=MA(hg,3);function fg(A,M,I,N){return nI(mA(M),A,I,N)}var Jg=MA(fg,4);function Kg(A,M,I){return nI(FA,A,M,I)}var qg=MA(Kg,3);function yN(A){return function(){return A}}const TI=5,BN=0;function tI(A,M,I){var N={times:TI,intervalFunc:yN(BN)};if(arguments.length<3&&typeof A=="function"?(I=M||lM(),M=A):(_g(N,A),I=I||lM()),typeof M!="function")throw new Error("Invalid arguments for async.retry");var j=IA(M),D=1;function c(){j((x,...i)=>{x!==!1&&(x&&D++<N.times&&(typeof N.errorFilter!="function"||N.errorFilter(x))?setTimeout(c,N.intervalFunc(D-1)):I(x,...i))})}return c(),I[uM]}function _g(A,M){if(typeof M=="object")A.times=+M.times||TI,A.intervalFunc=typeof M.interval=="function"?M.interval:yN(+M.interval||BN),A.errorFilter=M.errorFilter;else if(typeof M=="number"||typeof M=="string")A.times=+M||TI;else throw new Error("Invalid arguments for async.retry")}function $g(A,M){M||(M=A,A=null);let I=A&&A.arity||M.length;BM(M)&&(I+=1);var N=IA(M);return dM((j,D)=>{(j.length<I-1||D==null)&&(j.push(D),D=lM());function c(x){N(...j,x)}return A?tI(A,c,D):tI(c,D),D[uM]})}function AD(A,M){return wI(FA,A,M)}function MD(A,M,I){return fA(Boolean,N=>N)(PA,A,M,I)}var oN=MA(MD,3);function ID(A,M,I,N){return fA(Boolean,j=>j)(mA(M),A,I,N)}var SN=MA(ID,4);function ND(A,M,I){return fA(Boolean,N=>N)(FA,A,M,I)}var sN=MA(ND,3);function jD(A,M,I){var N=IA(M);return cI(A,(D,c)=>{N(D,(x,i)=>{if(x)return c(x);c(x,{value:D,criteria:i})})},(D,c)=>{if(D)return I(D);I(null,c.sort(j).map(x=>x.value))});function j(D,c){var x=D.criteria,i=c.criteria;return x<i?-1:x>i?1:0}}var gD=MA(jD,3);function DD(A,M,I){var N=IA(A);return dM((j,D)=>{var c=!1,x;function i(){var n=A.name||"anonymous",Z=new Error('Callback function "'+n+'" timed out.');Z.code="ETIMEDOUT",I&&(Z.info=I),c=!0,D(Z)}j.push((...n)=>{c||(D(...n),clearTimeout(x))}),x=setTimeout(i,M),N(...j)})}function cD(A){for(var M=Array(A);A--;)M[A]=A;return M}function EI(A,M,I,N){var j=IA(I);return pM(cD(A),M,j,N)}function iD(A,M,I){return EI(A,1/0,M,I)}function zD(A,M,I){return EI(A,1,M,I)}function eD(A,M,I,N){arguments.length<=3&&typeof M=="function"&&(N=I,I=M,M=Array.isArray(A)?[]:{}),N=NM(N||lM());var j=IA(I);return PA(A,(D,c,x)=>{j(M,D,c,x)},D=>N(D,M)),N[uM]}function xD(A,M){var I=null,N;return xI(A,(j,D)=>{IA(j)((c,...x)=>{if(c===!1)return D(c);x.length<2?[N]=x:N=x,I=c,D(c?null:{})})},()=>M(I,N))}var uD=MA(xD);function lD(A){return(...M)=>(A.unmemoized||A)(...M)}function wD(A,M,I){I=jM(I);var N=IA(M),j=IA(A),D=[];function c(i,...n){if(i)return I(i);D=n,i!==!1&&j(x)}function x(i,n){if(i)return I(i);if(i!==!1){if(!n)return I(null,...D);N(c)}}return j(x)}var LI=MA(wD,3);function CD(A,M,I){const N=IA(A);return LI(j=>N((D,c)=>j(D,!c)),M,I)}function aD(A,M){if(M=NM(M),!Array.isArray(A))return M(new Error("First argument to waterfall must be an array of functions"));if(!A.length)return M();var I=0;function N(D){var c=IA(A[I++]);c(...D,jM(j))}function j(D,...c){if(D!==!1){if(D||I===A.length)return M(D,...c);N(c)}}N([])}var nD=MA(aD),TD={apply:Qj,applyEach:Wj,applyEachSeries:hj,asyncify:gI,auto:IN,autoInject:$j,cargo:Mg,cargoQueue:Ig,compose:jg,concat:gN,concatLimit:vM,concatSeries:DN,constant:zg,detect:cN,detectLimit:iN,detectSeries:zN,dir:lg,doUntil:Cg,doWhilst:zI,each:uN,eachLimit:eI,eachOf:PA,eachOfLimit:kM,eachOfSeries:FA,eachSeries:xI,ensureAsync:lN,every:wN,everyLimit:CN,everySeries:aN,filter:nN,filterLimit:TN,filterSeries:tN,forever:bg,groupBy:Gg,groupByLimit:uI,groupBySeries:Zg,log:Ug,map:cI,mapLimit:pM,mapSeries:MN,mapValues:Og,mapValuesLimit:lI,mapValuesSeries:Rg,memoize:Yg,nextTick:Hg,parallel:mg,parallelLimit:Pg,priorityQueue:vg,queue:EN,race:Vg,reduce:oM,reduceRight:dN,reflect:aI,reflectAll:Xg,reject:Fg,rejectLimit:Jg,rejectSeries:qg,retry:tI,retryable:$g,seq:jN,series:AD,setImmediate:zM,some:oN,someLimit:SN,someSeries:sN,sortBy:gD,timeout:DD,times:iD,timesLimit:EI,timesSeries:zD,transform:eD,tryEach:uD,unmemoize:lD,until:CD,waterfall:nD,whilst:LI,all:wN,allLimit:CN,allSeries:aN,any:oN,anyLimit:SN,anySeries:sN,find:cN,findLimit:iN,findSeries:zN,flatMap:gN,flatMapLimit:vM,flatMapSeries:DN,forEach:uN,forEachSeries:xI,forEachLimit:eI,forEachOf:PA,forEachOfSeries:FA,forEachOfLimit:kM,inject:oM,foldl:oM,foldr:dN,select:nN,selectLimit:TN,selectSeries:tN,wrapSync:gI,during:LI,doDuring:zI};const tD=[{label:"braveSwapToAccount",name:"to-account"},{label:"braveSwapToAddress",name:"to-address"}],bN=[{id:"slow",name:"braveSwapSlow",icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi42MTU0IDAuNTYyNTQ1QzE2LjY0NDIgMC42MzM1MyAxNi42NjM2IDAuNzA3ODYzIDE2LjY2NjMgMC43ODQ4NzVDMTYuNjY2OSAwLjc4ODg5MyAxNi42NjQ5IDAuNzkzNTgxIDE2LjY2NDkgMC43OTc1OTlDMTYuNjY2MyAwLjg1NTg2IDE2LjY2MjMgMC45MTM0NTEgMTYuNjQ3NSAwLjk3MTA0M0wxMy4zMTQyIDE0LjMwOTVDMTMuMjYzMyAxNC41MTExIDEzLjEyMjcgMTQuNjc3MiAxMi45MzI2IDE0Ljc2MDJDMTIuODQ3NiAxNC43OTcgMTIuNzU3MiAxNC44MTUxIDEyLjY2NzUgMTQuODE1MUMxMi41NTUgMTQuODE1MSAxMi40NDM5IDE0Ljc4NyAxMi4zNDM1IDE0LjczMDdMOS4yODU5OSAxMy4wMzE4QzkuMjY0NTcgMTMuMDkyNyA5LjI0NDQ4IDEzLjE1NDMgOS4yMDQzMSAxMy4yMDg2TDcuMjQ4NzggMTUuODc1OUM3LjEyMDkxIDE2LjA1MDcgNi45MTk0IDE2LjE0ODQgNi43MTExOSAxNi4xNDg0QzYuNjQyOSAxNi4xNDg0IDYuNTczOTUgMTYuMTM4NCA2LjUwNyAxNi4xMTYzQzYuMjMzODUgMTYuMDI4NiA2LjA0NzA3IDE1Ljc3NTQgNi4wNDQzOSAxNS40ODgxTDYuMDAwMjEgMTAuODE5OUM2LjAwMDIxIDEwLjgwNjUgNi4wMDY5IDEwLjc5NTEgNi4wMDc1NyAxMC43ODI0QzYuMDA4MjQgMTAuNzYzIDYuMDE0MjcgMTAuNzQ0MiA2LjAxODI4IDEwLjcyNDhDNi4wMjY5OSAxMC42NjA1IDYuMDQxMDUgMTAuNTk4OSA2LjA2ODQ5IDEwLjUzODZDNi4wNzA1IDEwLjUzNDYgNi4wNzA1IDEwLjUyOTkgNi4wNzI1MSAxMC41MjUyQzYuMDc4NTQgMTAuNTEzOCA2LjA3Nzg3IDEwLjUwMTEgNi4wODM4OSAxMC40ODk3QzYuMDk3OTUgMTAuNDY1IDYuMTIwMDQgMTAuNDQ5NSA2LjEzNjc4IDEwLjQyNzRDNi4xNTI4NSAxMC40MDUzIDYuMTYwMjEgMTAuMzc5MiA2LjE3OTYzIDEwLjM1ODVMMTIuOTg2MiAzLjA2MzA5TDIuODIzNTUgOC4xNDU4OEw0Ljc1NDk4IDkuMTExNTVDNS4wODUwNCA5LjI3NjI5IDUuMjE4MjYgOS42NzY3NSA1LjA1MzU3IDEwLjAwNjJDNC44ODg4OCAxMC4zMzU3IDQuNDg4NTMgMTAuNDY5NiA0LjE1OTE1IDEwLjMwNDlMMS4wMzQ3MSA4Ljc0MTg5QzAuODA5MTAyIDguNjI5MzkgMC42NjY1MDQgOC4zOTgzNSAwLjY2NjUwNCA4LjE0NTg4QzAuNjY2NTA0IDcuODkzNDIgMC44MDkxMDIgNy42NjIzOCAxLjAzNDcxIDcuNTQ5MjFMMTUuNzAyMiAwLjIxMjk3N0MxNS43MDc2IDAuMjEwOTY4IDE1LjcxMzYgMC4yMTAyOTggMTUuNzE4MyAwLjIwNzYyQzE1LjczNSAwLjIwMDI1MyAxNS43NTE4IDAuMTk3NTc1IDE1Ljc2ODUgMC4xOTE1NDdDMTUuODI2MSAwLjE3MDExOCAxNS44ODQzIDAuMTU2MDU1IDE1Ljk0MzkgMC4xNTA2OThDMTUuOTY3MyAwLjE0ODY4OSAxNS45ODg4IDAuMTQ4MDE5IDE2LjAxMjIgMC4xNDg2ODlDMTYuMDc1MSAwLjE0OTM1OCAxNi4xMzY3IDAuMTU5NDAzIDE2LjE5NyAwLjE3ODE1NEMxNi4yMTEgMC4xODIxNzIgMTYuMjI1MSAwLjE4MzUxMSAxNi4yMzkyIDAuMTg4ODY5QzE2LjMwMjggMC4yMTI5NzcgMTYuMzYzIDAuMjQ1NzkxIDE2LjQxNzkgMC4yODkzMTlDMTYuNDI1OSAwLjI5NjAxNiAxNi40MzA2IDAuMzA0NzIyIDE2LjQzODcgMC4zMTE0MThDMTYuNDQ0IDAuMzE2MTA2IDE2LjQ1MDcgMC4zMTc0NDUgMTYuNDU1NCAwLjMyMjEzM0MxNi40NjYxIDAuMzMxNTA4IDE2LjQ2OTUgMC4zNDQ5MDIgMTYuNDc4OCAwLjM1NDk0N0MxNi41MjIzIDAuNDAxMTU0IDE2LjU1ODUgMC40NTA3MSAxNi41ODY2IDAuNTA1NjIzQzE2LjU5NjcgMC41MjUwNDMgMTYuNjA3NCAwLjU0MjQ1NCAxNi42MTU0IDAuNTYyNTQ1Wk0xMi4yMzE3IDEzLjE0M0wxNC43MjgxIDMuMTUwODJMNy43MzYxNiAxMC42NDQ0TDEyLjIzMTcgMTMuMTQzWk03LjM1OTI0IDEzLjQ3MDRMOC4xMjkxNCAxMi40MTk3QzguMTM1MTYgMTIuNDExNyA4LjE0Mzg3IDEyLjQwODMgOC4xNDk4OSAxMi40MDFMNy4zNDQ1MSAxMS45NTNMNy4zNTkyNCAxMy40NzA0WiIgZmlsbD0iIzczN0FERSIvPgo8L3N2Zz4K"},{id:"average",name:"braveSwapAverage",icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAxODMyIDEuNDI2ODdDOC40MDIzOCAwLjUzNDQyOSAxMC4zNjggMC42Nzc2NjYgMTEuODc5NCAxLjQ0OTE0QzEyLjcxNzggMS44NzcwOSAxMy42MjA5IDIuNTA1MzUgMTQuMzkwNyAzLjA0MDc4QzE0LjQyMzcgMy4wNjM3MyAxNC40NTY0IDMuMDg2NTEgMTQuNDg4OSAzLjEwOTFDMTQuODkxIDMuMzg4NjMgMTUuMjUxIDMuNjM3MyAxNS41NTY3IDMuODI2ODVDMTUuODc4IDQuMDI2MTQgMTYuMDgxIDQuMTIyMTYgMTYuMTgzOCA0LjE0NTI2QzE2LjM2ODQgNC4xODY3IDE2Ljc2OTIgNC4yNDIzIDE3LjI2MDkgNC4zMTA0OEMxNy41MjA2IDQuMzQ2NTEgMTcuODA1NyA0LjM4NjA0IDE4LjA5NzYgNC40Mjg4N0MxOC41MDY2IDQuNDg4ODcgMTguOTE5NyA0LjU1NDM0IDE5LjI2NDMgNC42MjMxNUMxOS40MzYzIDQuNjU3NTEgMTkuNTk3MyA0LjY5Mzg4IDE5LjczNTMgNC43MzIzNUMxOS44NjM3IDQuNzY4MTkgMjAuMDA2NCA0LjgxNDg0IDIwLjEyMTYgNC44Nzk1NUMyMC43NTggNS4yMzY4OSAyMS4yMDI5IDUuNzUzNjIgMjEuNDQ3OCA2LjM1NTJDMjEuNzA0NCA2Ljk4NTM3IDIxLjcyNjkgNy42NzM0NiAyMS41NjA0IDguMzAyMTFDMjEuMzUxNCA5LjA5MDY2IDIwLjg0NSA5Ljc4OTM5IDIwLjEyMTYgMTAuMTk1NkMyMC4wNDk4IDEwLjIzNTkgMTkuOTcwNSAxMC4yNTY5IDE5Ljg5MDIgMTAuMjU2OUgxOC4yMTQ3QzE3LjkyOSAxMC4yNTY5IDE3LjY5NzMgOS45OTY3NSAxNy42OTczIDkuNjc1NzlDMTcuNjk3MyA5LjM1NDgzIDE3LjkyOSA5LjA5NDYzIDE4LjIxNDcgOS4wOTQ2M0gxOS43NjAzQzE5LjkyMzEgOC45ODkwMyAyMC4wNjQ4IDguODYwOTUgMjAuMTgzOSA4LjcxNzUxSDE5LjgxNEMxOS4xNDk3IDguNzE3NTEgMTguNjExMiA4LjExMjY5IDE4LjYxMTIgNy4zNjY2QzE4LjYxMTIgNi42MjA1MSAxOS4xNDk3IDYuMDE1NjggMTkuODE0IDYuMDE1NjhIMTkuODE2MUMxOS43NjY0IDUuOTgyMzcgMTkuNzE0IDUuOTUwMTUgMTkuNjU4OCA1LjkxOTE2QzE5LjY1ODkgNS45MTkyMSAxOS42NTkgNS45MTkyNSAxOS42NTg4IDUuOTE5MTZDMTkuNjU3MSA1LjkxODMzIDE5LjY0MzUgNS45MTE1IDE5LjYxMyA1LjkwMDMyQzE5LjU4MSA1Ljg4ODY0IDE5LjUzODkgNS44NzUyMSAxOS40ODU4IDUuODYwNEMxOS4zNzkzIDUuODMwNjkgMTkuMjQzNCA1Ljc5OTUzIDE5LjA4MzEgNS43Njc1MUMxOC43NjI4IDUuNzAzNTQgMTguMzY4OSA1LjY0MDg1IDE3Ljk2MzUgNS41ODEzOUMxNy43MTM0IDUuNTQ0NjkgMTcuNDU0NSA1LjUwODc0IDE3LjIwNzIgNS40NzQ0QzE2LjY3ODkgNS40MDEwNCAxNi4yMDM4IDUuMzM1MDYgMTUuOTgwOSA1LjI4NUMxNS43MDI5IDUuMjIyNTYgMTUuMzcyOCA1LjA0MDYxIDE1LjA1NjMgNC44NDQzMkMxNC43MjQyIDQuNjM4MjkgMTQuMzQxNyA0LjM3Mzc5IDEzLjk0NDEgNC4wOTczN0MxMy45MTkxIDQuMDc5OTQgMTMuODkzOSA0LjA2MjQ2IDEzLjg2ODcgNC4wNDQ5M0MxMy4wODA2IDMuNDk2ODUgMTIuMjI3NCAyLjkwMzU1IDExLjQ1MTEgMi41MDcyOEMxMC4yMjA4IDEuODc5MjggOC41MzA5NCAxLjcxMTQ4IDYuMzQ1NTkgMi41Mjk1NEM1LjU1MTU5IDIuODI2NzcgNS4wMTgzNSAzLjM1NzM3IDQuNjAyMjggMy45Mjg1MkM0LjM5MTUxIDQuMjE3ODQgNC4yMTM1IDQuNTEzNjcgNC4wNDIyIDQuODAyMjhDNC4wMzA4IDQuODIxNDcgNC4wMTkzNyA0Ljg0MDc2IDQuMDA3ODkgNC44NjAxMkMzLjg1NDM4IDUuMTE5MTEgMy42OTM3OCA1LjM5MDA1IDMuNTI4NTggNS42MDY1MUMzLjQzMDI2IDUuNzM1MzIgMy4yODY3NCA1LjgwOTQ1IDMuMTM1NjggNS44MDk0NUgzLjA0MjU5QzIuMTE3OTkgNS44MDk0NSAxLjM2ODQ1IDYuNjUxMjMgMS4zNjg0NSA3LjY4OTYyQzEuMzY4NDUgOC4xMTAxIDEuNDc3MzggOC40MjcwMyAxLjY2NDg4IDguNjAyODhDMS45Njc1MyA4Ljg4NjcgMi4zMjY5NiA5LjA5NDYzIDIuNjc4NzQgOS4wOTQ2M0MyLjk2NDUzIDkuMDk0NjMgMy4xOTYyMSA5LjM1NDgzIDMuMTk2MjEgOS42NzU3OUMzLjE5NjIxIDkuOTk2NzUgMi45NjQ1MyAxMC4yNTY5IDIuNjc4NzQgMTAuMjU2OUMxLjk4MTgyIDEwLjI1NjkgMS4zOTIzMyA5Ljg2MTU0IDEuMDAxNTIgOS40OTUwM0MwLjQ4Nzc5MiA5LjAxMzI2IDAuMzMzNDk2IDguMjk1MTQgMC4zMzM0OTYgNy42ODk2MkMwLjMzMzQ5NiA2LjA3MDUxIDEuNDU5NjYgNC43NDY3OSAyLjg4MDI5IDQuNjUyNTFDMi45NjM4MyA0LjUyMzYxIDMuMDU0ODMgNC4zNzAyNiAzLjE2Mjg4IDQuMTg4MTlDMy4xNjg4OCA0LjE3ODA4IDMuMTc0OTMgNC4xNjc4OCAzLjE4MTA0IDQuMTU3NTlDMy4zNTI0IDMuODY4ODkgMy41NTUxMiAzLjUzMDQgMy44MDEyNSAzLjE5MjUyQzQuMjk4OTkgMi41MDkyNyA0Ljk4NDI2IDEuODEzOTYgNi4wMTgzMiAxLjQyNjg3Wk0yMC42MDQ2IDcuMTc3OTlIMTkuODE0QzE5LjcyMTMgNy4xNzc5OSAxOS42NDYxIDcuMjYyNDMgMTkuNjQ2MSA3LjM2NjZDMTkuNjQ2MSA3LjQ3MDc2IDE5LjcyMTMgNy41NTUyIDE5LjgxNCA3LjU1NTJIMjAuNjMwN0MyMC42MzUzIDcuNDI4NDQgMjAuNjI2NyA3LjMwMiAyMC42MDQ2IDcuMTc3OTlaTTYuNzQ0ODQgMi43NDg1N0M2Ljg0MDQzIDIuNjQ5NDggNi45NjU3NSAyLjU5NDQ1IDcuMDk1ODQgMi41OTQ0NUgxMS4yMDgzQzExLjMyNTggMi41OTQ0NSAxMS40Mzk4IDIuNjM5MzcgMTEuNTMxNiAyLjcyMThMMTMuODE2MyA0Ljc3NDQ5QzEzLjk4NzkgNC45Mjg2NyAxNC4wNTQxIDUuMTg3NzcgMTMuOTgxMyA1LjQyMDY3QzEzLjkwODYgNS42NTM1NiAxMy43MTI4IDUuODA5NDUgMTMuNDkzIDUuODA5NDVINS4xMTU3NkM0LjkwMjY5IDUuODA5NDUgNC43MTE0IDUuNjYyNzggNC42MzM4MSA1LjQzOTkyQzQuNTU2MjIgNS4yMTcwNiA0LjYwODIgNC45NjM1NyA0Ljc2NDc2IDQuODAxMjZMNi43NDQ4NCAyLjc0ODU3Wk03LjI5ODE2IDMuNzU2NzdMNi40MzkyOCA0LjY0NzE0SDguNzEwNzZWMy43NTY3N0g3LjI5ODE2Wk05Ljc0NTcxIDMuNzU2NzdWNC42NDcxNEgxMi4wMTc4TDExLjAyNjggMy43NTY3N0g5Ljc0NTcxWk02LjEyMTQyIDkuNjc1NzlDNi4xMjE0MiA5LjM1NDgzIDYuMzUzMSA5LjA5NDYzIDYuNjM4OSA5LjA5NDYzSDE0LjU1OTJDMTQuODQ1IDkuMDk0NjMgMTUuMDc2NyA5LjM1NDgzIDE1LjA3NjcgOS42NzU3OUMxNS4wNzY3IDkuOTk2NzUgMTQuODQ1IDEwLjI1NjkgMTQuNTU5MiAxMC4yNTY5SDYuNjM4OUM2LjM1MzEgMTAuMjU2OSA2LjEyMTQyIDkuOTk2NzUgNi4xMjE0MiA5LjY3NTc5WiIgZmlsbD0iIzczN0FERSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuODQ2MiAxMC45OTgxQzUuNDI5MjUgMTAuOTk4MSA1LjkwMTkgMTAuNDU0MSA1LjkwMTkgOS43ODI5OUM1LjkwMTkgOS4xMTE4OCA1LjQyOTI1IDguNTY3ODMgNC44NDYyIDguNTY3ODNDNC4yNjMxNiA4LjU2NzgzIDMuNzkwNTEgOS4xMTE4OCAzLjc5MDUxIDkuNzgyOTlDMy43OTA1MSAxMC40NTQxIDQuMjYzMTYgMTAuOTk4MSA0Ljg0NjIgMTAuOTk4MVpNNC44NDYyIDEyLjE0NDFDNS45NzkxIDEyLjE0NDEgNi44OTc0OSAxMS4wODcgNi44OTc0OSA5Ljc4Mjk5QzYuODk3NDkgOC40Nzg5OCA1Ljk3OTEgNy40MjE4OCA0Ljg0NjIgNy40MjE4OEMzLjcxMzMxIDcuNDIxODggMi43OTQ5MiA4LjQ3ODk4IDIuNzk0OTIgOS43ODI5OUMyLjc5NDkyIDExLjA4NyAzLjcxMzMxIDEyLjE0NDEgNC44NDYyIDEyLjE0NDFaIiBmaWxsPSIjNzM3QURFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMzMzNSAxMC45OTgxQzE2LjkxNjYgMTAuOTk4MSAxNy4zODkyIDEwLjQ1NDEgMTcuMzg5MiA5Ljc4Mjk5QzE3LjM4OTIgOS4xMTE4OCAxNi45MTY2IDguNTY3ODMgMTYuMzMzNSA4LjU2NzgzQzE1Ljc1MDUgOC41Njc4MyAxNS4yNzc4IDkuMTExODggMTUuMjc3OCA5Ljc4Mjk5QzE1LjI3NzggMTAuNDU0MSAxNS43NTA1IDEwLjk5ODEgMTYuMzMzNSAxMC45OTgxWk0xNi4zMzM1IDEyLjE0NDFDMTcuNDY2NCAxMi4xNDQxIDE4LjM4NDggMTEuMDg3IDE4LjM4NDggOS43ODI5OUMxOC4zODQ4IDguNDc4OTggMTcuNDY2NCA3LjQyMTg4IDE2LjMzMzUgNy40MjE4OEMxNS4yMDA2IDcuNDIxODggMTQuMjgyMiA4LjQ3ODk4IDE0LjI4MjIgOS43ODI5OUMxNC4yODIyIDExLjA4NyAxNS4yMDA2IDEyLjE0NDEgMTYuMzMzNSAxMi4xNDQxWiIgZmlsbD0iIzczN0FERSIvPgo8L3N2Zz4K"},{id:"fast",name:"braveSwapFast",icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzgyMzNfMjU4ODUwKSI+CjxwYXRoIGQ9Ik0xMS41NDY0IDEyLjM1MTRDMTEuNjcwNiAxMi4yMDIxIDExLjY5NTIgMTEuOTcwMSAxMS42Mjg3IDExLjc0NjRMMTEuMjU0OSAxMC42NzhDMTEuOTQyMSAxMC4xNTUzIDEyLjc1MzUgOS40ODM0NiAxMy41Mzk3IDguNTM4MThDMTYuMzQ1NCA1LjA2Mzk2IDE1LjA5MDQgMC45MDU3NjkgMTUuMDMyMyAwLjc3MzI1M0MxNC45NjU4IDAuNTQ5NjA0IDE0LjcxNzEgMC4zNDI2OTQgMTQuNDg1IDAuMzE4MDUxQzE0LjM0NDEgMC4yODUwMzggMTEuODQxNyAwLjA1NTM0MTcgOS4zOTA0IDEuMzgzMjhMOS4zNDkwMiAxLjQzMzAzQzguNTYyMjkgMS44NzI4OSA3LjgzMzY5IDIuNDQ1MjYgNy4xMzAyIDMuMjkxMDRDNi4zNDM5NCA0LjIzNjMxIDUuNzgxMzMgNS4xMTUxIDUuNDAwOTkgNS45NzcxNEw0LjMyMzY2IDUuNzU0NDJDNC4wOTE2NCA1LjcyOTc4IDMuODY3OTkgNS43OTYyNyAzLjc0Mzg1IDUuOTQ1NTJMMC44MzgyNzEgOC44MzE1NkMwLjY3Mjc0MiA5LjAzMDU3IDAuNjA2NzE3IDkuMzEyMzQgMC42NzMyMDcgOS41MzU5OUMwLjY4MTU3NyA5LjYyNzEyIDAuNzgxMDc4IDkuNzA5ODkgMC44ODA1ODEgOS43OTI2NUMwLjk4MDA4NCA5Ljg3NTQxIDEuMTcwNzIgOS45NDk4MSAxLjI2MTg1IDkuOTQxNDRMNS4xNjQzMSA5LjkwNDcxQzUuMTY0MzEgOS45MDQ3MSA1LjE2NDMxIDkuOTA0NzEgNS4yNTU0NSA5Ljg5NjM0QzUuMjU1NDUgOS44OTYzNCA1LjI1NTQ1IDkuODk2MzQgNS4zMDUyIDkuOTM3NzJDNS4zMDUyIDkuOTM3NzIgNS44NTIgOS44ODc1MSA2LjQ5ODc3IDEwLjQyNTVDNy4xOTUyOCAxMS4wMDQ4IDcuMjM3MTMgMTEuNDYwNSA3LjIzNzEzIDExLjQ2MDVDNy4yNDU1IDExLjU1MTYgNy4yNTM4NyAxMS42NDI4IDcuMzExOTkgMTEuNzc1M0w4LjAxOTY2IDE1LjQ3ODNDOC4wMzY0IDE1LjY2MDUgOC4xMzU5IDE1Ljc0MzMgOC4yMzU0MSAxNS44MjYxQzguMzM0OTEgMTUuOTA4OCA4LjM4NDY2IDE1Ljk1MDIgOC41MjU1NSAxNS45ODMyQzguODA3MzIgMTYuMDQ5MiA5LjA3MjM1IDE1LjkzMyA5LjE4ODEyIDE1LjY5MjZMMTEuNTQ2NCAxMi4zNTE0Wk0xMy44NjQ4IDEuNTY5NzRDMTMuOTY0NyAyLjE1NzkyIDE0LjExNDkgMy4yOTI5IDEzLjgyNjIgNC42NTJMMTAuODQxMSAyLjE2OTA4QzEyLjEyNDkgMS42Mzc2MiAxMy4yNjgyIDEuNTc4NTcgMTMuODY0OCAxLjU2OTc0Wk00LjQ0MDgzIDcuMDMwMjlMNC45MDQ4NyA3LjA3OTU4QzQuNzMxNDMgNy42OTI4NyA0LjY0MDc2IDguMjA2NjUgNC41ODMxMSA4LjU3OTU2TDIuODM0ODMgOC41NTYzMUw0LjQ0MDgzIDcuMDMwMjlaTTUuODg0MDggOC43MzU3OUM1Ljk5MTAyIDcuODk4ODUgNi4zODcxOCA2LjIwODIzIDguMTI1MjIgNC4xMTg2OEM4LjU4MDQzIDMuNTcxNDEgOS4wOTM3NSAzLjE1NjY2IDkuNjU2ODIgMi43ODMzTDEzLjUzNzQgNi4wMTEwOUMxMy4zMTQyIDYuNTgzIDEyLjk5OTkgNy4xNjMyOCAxMi41MDMzIDcuNzYwM0MxMC43NjUzIDkuODQ5ODUgOS4xNzUxMSAxMC41NDczIDguMzcxNjUgMTAuODA0OUM4LjE5NzI5IDEwLjQwNzMgNy44ODIwNCA5Ljk3Njc4IDcuMzM0NzcgOS41MjE1OEM2Ljc4NzUxIDkuMDY2MzggNi4yNTY5OCA4Ljc5MzQ0IDUuODg0MDggOC43MzU3OVpNOC42MjEzMyAxMi4wMjI2QzguOTc3NSAxMS44OTggOS40NjYxOCAxMS43MTUzIDEwLjAzNzYgMTEuNDMzMUwxMC4yMjA0IDExLjkyMTdMOC45MjEyMyAxMy43ODcyTDguNjIxMzMgMTIuMDIyNlpNMi4yMTg3NSAxNC4zNTY4QzEuOTIwMjQgMTQuMTA4NSAxLjg4Njc2IDEzLjc0MzkgMi4xMzUwNiAxMy40NDU0TDQuMjg2OTIgMTAuODU4NEM0LjUzNTIxIDEwLjU1OTggNC44OTk3NSAxMC41MjY0IDUuMTk4MjUgMTAuNzc0N0M1LjQ5Njc2IDExLjAyMyA1LjUzMDI0IDExLjM4NzUgNS4yODE5NSAxMS42ODZMMy4xMzAwOCAxNC4yNzMxQzIuOTIzMTcgMTQuNTIxOCAyLjQ2NzUgMTQuNTYzNyAyLjIxODc1IDE0LjM1NjhaTTQuNTM4NDYgMTQuMDk3OEM0LjIzOTk2IDEzLjg0OTUgNC4yMDY0OCAxMy40ODQ5IDQuNDU0NzcgMTMuMTg2NEw1LjUzMDcgMTEuODkyOUM1Ljc3OSAxMS41OTQ0IDYuMTQzNTMgMTEuNTYwOSA2LjQ0MjA0IDExLjgwOTJDNi43NDA1NSAxMi4wNTc1IDYuNzc0MDIgMTIuNDIyIDYuNTI1NzMgMTIuNzIwNUw1LjQ0OTggMTQuMDE0MUM1LjI0Mjg5IDE0LjI2MjggNC44MzY5NyAxNC4zNDYxIDQuNTM4NDYgMTQuMDk3OFoiIGZpbGw9IiM3MzdBREUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF84MjMzXzI1ODg1MCI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4xNDg0MzgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}],QN=uA.createContext(void 0),GN=uA.createContext(void 0),ED={tokenBalances:{},spotPrices:{makerAsset:"",takerAsset:"",nativeAsset:""},userSelectedExchanges:[],networkFeeEstimates:{}},LD=(A,M)=>{switch(M.type){case"updateTokenBalances":return{...A,tokenBalances:{...A.tokenBalances,...M.payload}};case"updateSpotPrices":return{...A,spotPrices:{...A.spotPrices,...M.payload}};case"updateUserSelectedExchanges":return{...A,userSelectedExchanges:M.payload};default:return A}},dD=A=>{const{children:M}=A,[I,N]=uA.useReducer(LD,ED);return u(QN.Provider,{value:{state:I},children:u(GN.Provider,{value:{dispatch:N},children:M})})},wM=()=>{const A=uA.useContext(QN);if(A===void 0)throw new Error("useWalletState must be used within a WalletStateProvider");return A},ZN=()=>{const A=uA.useContext(GN);if(A===void 0)throw new Error("useWalletDispatch must be used within a WalletStateDispatchProvider");return A};var yD=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,dI=Math.ceil,vA=Math.floor,QA="[BigNumber Error] ",UN=QA+"Number primitive has more than 15 significant digits: ",kA=1e14,$=14,yI=9007199254740991,BI=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],gM=1e7,dA=1e9;function rN(A){var M,I,N,j=l.prototype={constructor:l,toString:null,valueOf:null},D=new l(1),c=20,x=4,i=-7,n=21,Z=-1e7,U=1e7,E=!1,Q=1,p=0,t={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},r="0123456789abcdefghijklmnopqrstuvwxyz",b=!0;function l(g,z){var e,a,T,d,B,C,w,S,L=this;if(!(L instanceof l))return new l(g,z);if(z==null){if(g&&g._isBigNumber===!0){L.s=g.s,!g.c||g.e>U?L.c=L.e=null:g.e<Z?L.c=[L.e=0]:(L.e=g.e,L.c=g.c.slice());return}if((C=typeof g=="number")&&g*0==0){if(L.s=1/g<0?(g=-g,-1):1,g===~~g){for(d=0,B=g;B>=10;B/=10,d++);d>U?L.c=L.e=null:(L.e=d,L.c=[g]);return}S=String(g)}else{if(!yD.test(S=String(g)))return N(L,S,C);L.s=S.charCodeAt(0)==45?(S=S.slice(1),-1):1}(d=S.indexOf("."))>-1&&(S=S.replace(".","")),(B=S.search(/e/i))>0?(d<0&&(d=B),d+=+S.slice(B+1),S=S.substring(0,B)):d<0&&(d=S.length)}else{if(TA(z,2,r.length,"Base"),z==10&&b)return L=new l(g),m(L,c+L.e+1,x);if(S=String(g),C=typeof g=="number"){if(g*0!=0)return N(L,S,C,z);if(L.s=1/g<0?(S=S.slice(1),-1):1,l.DEBUG&&S.replace(/^0\.0*|\./,"").length>15)throw Error(UN+g)}else L.s=S.charCodeAt(0)===45?(S=S.slice(1),-1):1;for(e=r.slice(0,z),d=B=0,w=S.length;B<w;B++)if(e.indexOf(a=S.charAt(B))<0){if(a=="."){if(B>d){d=w;continue}}else if(!T&&(S==S.toUpperCase()&&(S=S.toLowerCase())||S==S.toLowerCase()&&(S=S.toUpperCase()))){T=!0,B=-1,d=0;continue}return N(L,String(g),C,z)}C=!1,S=I(S,z,10,L.s),(d=S.indexOf("."))>-1?S=S.replace(".",""):d=S.length}for(B=0;S.charCodeAt(B)===48;B++);for(w=S.length;S.charCodeAt(--w)===48;);if(S=S.slice(B,++w)){if(w-=B,C&&l.DEBUG&&w>15&&(g>yI||g!==vA(g)))throw Error(UN+L.s*g);if((d=d-B-1)>U)L.c=L.e=null;else if(d<Z)L.c=[L.e=0];else{if(L.e=d,L.c=[],B=(d+1)%$,d<0&&(B+=$),B<w){for(B&&L.c.push(+S.slice(0,B)),w-=$;B<w;)L.c.push(+S.slice(B,B+=$));B=$-(S=S.slice(B)).length}else B-=w;for(;B--;S+="0");L.c.push(+S)}}else L.c=[L.e=0]}l.clone=rN,l.ROUND_UP=0,l.ROUND_DOWN=1,l.ROUND_CEIL=2,l.ROUND_FLOOR=3,l.ROUND_HALF_UP=4,l.ROUND_HALF_DOWN=5,l.ROUND_HALF_EVEN=6,l.ROUND_HALF_CEIL=7,l.ROUND_HALF_FLOOR=8,l.EUCLID=9,l.config=l.set=function(g){var z,e;if(g!=null)if(typeof g=="object"){if(g.hasOwnProperty(z="DECIMAL_PLACES")&&(e=g[z],TA(e,0,dA,z),c=e),g.hasOwnProperty(z="ROUNDING_MODE")&&(e=g[z],TA(e,0,8,z),x=e),g.hasOwnProperty(z="EXPONENTIAL_AT")&&(e=g[z],e&&e.pop?(TA(e[0],-dA,0,z),TA(e[1],0,dA,z),i=e[0],n=e[1]):(TA(e,-dA,dA,z),i=-(n=e<0?-e:e))),g.hasOwnProperty(z="RANGE"))if(e=g[z],e&&e.pop)TA(e[0],-dA,-1,z),TA(e[1],1,dA,z),Z=e[0],U=e[1];else if(TA(e,-dA,dA,z),e)Z=-(U=e<0?-e:e);else throw Error(QA+z+" cannot be zero: "+e);if(g.hasOwnProperty(z="CRYPTO"))if(e=g[z],e===!!e)if(e)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))E=e;else throw E=!e,Error(QA+"crypto unavailable");else E=e;else throw Error(QA+z+" not true or false: "+e);if(g.hasOwnProperty(z="MODULO_MODE")&&(e=g[z],TA(e,0,9,z),Q=e),g.hasOwnProperty(z="POW_PRECISION")&&(e=g[z],TA(e,0,dA,z),p=e),g.hasOwnProperty(z="FORMAT"))if(e=g[z],typeof e=="object")t=e;else throw Error(QA+z+" not an object: "+e);if(g.hasOwnProperty(z="ALPHABET"))if(e=g[z],typeof e=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(e))b=e.slice(0,10)=="0123456789",r=e;else throw Error(QA+z+" invalid: "+e)}else throw Error(QA+"Object expected: "+g);return{DECIMAL_PLACES:c,ROUNDING_MODE:x,EXPONENTIAL_AT:[i,n],RANGE:[Z,U],CRYPTO:E,MODULO_MODE:Q,POW_PRECISION:p,FORMAT:t,ALPHABET:r}},l.isBigNumber=function(g){if(!g||g._isBigNumber!==!0)return!1;if(!l.DEBUG)return!0;var z,e,a=g.c,T=g.e,d=g.s;A:if({}.toString.call(a)=="[object Array]"){if((d===1||d===-1)&&T>=-dA&&T<=dA&&T===vA(T)){if(a[0]===0){if(T===0&&a.length===1)return!0;break A}if(z=(T+1)%$,z<1&&(z+=$),String(a[0]).length==z){for(z=0;z<a.length;z++)if(e=a[z],e<0||e>=kA||e!==vA(e))break A;if(e!==0)return!0}}}else if(a===null&&T===null&&(d===null||d===1||d===-1))return!0;throw Error(QA+"Invalid BigNumber: "+g)},l.maximum=l.max=function(){return y(arguments,j.lt)},l.minimum=l.min=function(){return y(arguments,j.gt)},l.random=function(){var g=9007199254740992,z=Math.random()*g&2097151?function(){return vA(Math.random()*g)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(e){var a,T,d,B,C,w=0,S=[],L=new l(D);if(e==null?e=c:TA(e,0,dA),B=dI(e/$),E)if(crypto.getRandomValues){for(a=crypto.getRandomValues(new Uint32Array(B*=2));w<B;)C=a[w]*131072+(a[w+1]>>>11),C>=9e15?(T=crypto.getRandomValues(new Uint32Array(2)),a[w]=T[0],a[w+1]=T[1]):(S.push(C%1e14),w+=2);w=B/2}else if(crypto.randomBytes){for(a=crypto.randomBytes(B*=7);w<B;)C=(a[w]&31)*281474976710656+a[w+1]*1099511627776+a[w+2]*4294967296+a[w+3]*16777216+(a[w+4]<<16)+(a[w+5]<<8)+a[w+6],C>=9e15?crypto.randomBytes(7).copy(a,w):(S.push(C%1e14),w+=7);w=B/7}else throw E=!1,Error(QA+"crypto unavailable");if(!E)for(;w<B;)C=z(),C<9e15&&(S[w++]=C%1e14);for(B=S[--w],e%=$,B&&e&&(C=BI[$-e],S[w]=vA(B/C)*C);S[w]===0;S.pop(),w--);if(w<0)S=[d=0];else{for(d=-1;S[0]===0;S.splice(0,1),d-=$);for(w=1,C=S[0];C>=10;C/=10,w++);w<$&&(d-=$-w)}return L.e=d,L.c=S,L}}(),l.sum=function(){for(var g=1,z=arguments,e=new l(z[0]);g<z.length;)e=e.plus(z[g++]);return e},I=function(){var g="0123456789";function z(e,a,T,d){for(var B,C=[0],w,S=0,L=e.length;S<L;){for(w=C.length;w--;C[w]*=a);for(C[0]+=d.indexOf(e.charAt(S++)),B=0;B<C.length;B++)C[B]>T-1&&(C[B+1]==null&&(C[B+1]=0),C[B+1]+=C[B]/T|0,C[B]%=T)}return C.reverse()}return function(e,a,T,d,B){var C,w,S,L,Y,X,V,_,eA=e.indexOf("."),cA=c,q=x;for(eA>=0&&(L=p,p=0,e=e.replace(".",""),_=new l(a),X=_.pow(e.length-eA),p=L,_.c=z(JA(rA(X.c),X.e,"0"),10,T,g),_.e=_.c.length),V=z(e,a,T,B?(C=r,g):(C=g,r)),S=L=V.length;V[--L]==0;V.pop());if(!V[0])return C.charAt(0);if(eA<0?--S:(X.c=V,X.e=S,X.s=d,X=M(X,_,cA,q,T),V=X.c,Y=X.r,S=X.e),w=S+cA+1,eA=V[w],L=T/2,Y=Y||w<0||V[w+1]!=null,Y=q<4?(eA!=null||Y)&&(q==0||q==(X.s<0?3:2)):eA>L||eA==L&&(q==4||Y||q==6&&V[w-1]&1||q==(X.s<0?8:7)),w<1||!V[0])e=Y?JA(C.charAt(1),-cA,C.charAt(0)):C.charAt(0);else{if(V.length=w,Y)for(--T;++V[--w]>T;)V[w]=0,w||(++S,V=[1].concat(V));for(L=V.length;!V[--L];);for(eA=0,e="";eA<=L;e+=C.charAt(V[eA++]));e=JA(e,S,C.charAt(0))}return e}}(),M=function(){function g(a,T,d){var B,C,w,S,L=0,Y=a.length,X=T%gM,V=T/gM|0;for(a=a.slice();Y--;)w=a[Y]%gM,S=a[Y]/gM|0,B=V*w+S*X,C=X*w+B%gM*gM+L,L=(C/d|0)+(B/gM|0)+V*S,a[Y]=C%d;return L&&(a=[L].concat(a)),a}function z(a,T,d,B){var C,w;if(d!=B)w=d>B?1:-1;else for(C=w=0;C<d;C++)if(a[C]!=T[C]){w=a[C]>T[C]?1:-1;break}return w}function e(a,T,d,B){for(var C=0;d--;)a[d]-=C,C=a[d]<T[d]?1:0,a[d]=C*B+a[d]-T[d];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(a,T,d,B,C){var w,S,L,Y,X,V,_,eA,cA,q,jA,CA,qA,iA,xA,oA,_A,EA=a.s==T.s?1:-1,LA=a.c,zA=T.c;if(!LA||!LA[0]||!zA||!zA[0])return new l(!a.s||!T.s||(LA?zA&&LA[0]==zA[0]:!zA)?NaN:LA&&LA[0]==0||!zA?EA*0:EA/0);for(eA=new l(EA),cA=eA.c=[],S=a.e-T.e,EA=d+S+1,C||(C=kA,S=UA(a.e/$)-UA(T.e/$),EA=EA/$|0),L=0;zA[L]==(LA[L]||0);L++);if(zA[L]>(LA[L]||0)&&S--,EA<0)cA.push(1),Y=!0;else{for(iA=LA.length,oA=zA.length,L=0,EA+=2,X=vA(C/(zA[0]+1)),X>1&&(zA=g(zA,X,C),LA=g(LA,X,C),oA=zA.length,iA=LA.length),qA=oA,q=LA.slice(0,oA),jA=q.length;jA<oA;q[jA++]=0);_A=zA.slice(),_A=[0].concat(_A),xA=zA[0],zA[1]>=C/2&&xA++;do{if(X=0,w=z(zA,q,oA,jA),w<0){if(CA=q[0],oA!=jA&&(CA=CA*C+(q[1]||0)),X=vA(CA/xA),X>1)for(X>=C&&(X=C-1),V=g(zA,X,C),_=V.length,jA=q.length;z(V,q,_,jA)==1;)X--,e(V,oA<_?_A:zA,_,C),_=V.length,w=1;else X==0&&(w=X=1),V=zA.slice(),_=V.length;if(_<jA&&(V=[0].concat(V)),e(q,V,jA,C),jA=q.length,w==-1)for(;z(zA,q,oA,jA)<1;)X++,e(q,oA<jA?_A:zA,jA,C),jA=q.length}else w===0&&(X++,q=[0]);cA[L++]=X,q[0]?q[jA++]=LA[qA]||0:(q=[LA[qA]],jA=1)}while((qA++<iA||q[0]!=null)&&EA--);Y=q[0]!=null,cA[0]||cA.splice(0,1)}if(C==kA){for(L=1,EA=cA[0];EA>=10;EA/=10,L++);m(eA,d+(eA.e=L+S*$-1)+1,B,Y)}else eA.e=S,eA.r=+Y;return eA}}();function o(g,z,e,a){var T,d,B,C,w;if(e==null?e=x:TA(e,0,8),!g.c)return g.toString();if(T=g.c[0],B=g.e,z==null)w=rA(g.c),w=a==1||a==2&&(B<=i||B>=n)?hM(w,B):JA(w,B,"0");else if(g=m(new l(g),z,e),d=g.e,w=rA(g.c),C=w.length,a==1||a==2&&(z<=d||d<=i)){for(;C<z;w+="0",C++);w=hM(w,d)}else if(z-=B,w=JA(w,d,"0"),d+1>C){if(--z>0)for(w+=".";z--;w+="0");}else if(z+=d-C,z>0)for(d+1==C&&(w+=".");z--;w+="0");return g.s<0&&T?"-"+w:w}function y(g,z){for(var e,a=1,T=new l(g[0]);a<g.length;a++)if(e=new l(g[a]),e.s)z.call(T,e)&&(T=e);else{T=e;break}return T}function O(g,z,e){for(var a=1,T=z.length;!z[--T];z.pop());for(T=z[0];T>=10;T/=10,a++);return(e=a+e*$-1)>U?g.c=g.e=null:e<Z?g.c=[g.e=0]:(g.e=e,g.c=z),g}N=function(){var g=/^(-?)0([xbo])(?=\w[\w.]*$)/i,z=/^([^.]+)\.$/,e=/^\.([^.]+)$/,a=/^-?(Infinity|NaN)$/,T=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(d,B,C,w){var S,L=C?B:B.replace(T,"");if(a.test(L))d.s=isNaN(L)?null:L<0?-1:1;else{if(!C&&(L=L.replace(g,function(Y,X,V){return S=(V=V.toLowerCase())=="x"?16:V=="b"?2:8,!w||w==S?X:Y}),w&&(S=w,L=L.replace(z,"$1").replace(e,"0.$1")),B!=L))return new l(L,S);if(l.DEBUG)throw Error(QA+"Not a"+(w?" base "+w:"")+" number: "+B);d.s=null}d.c=d.e=null}}();function m(g,z,e,a){var T,d,B,C,w,S,L,Y=g.c,X=BI;if(Y){A:{for(T=1,C=Y[0];C>=10;C/=10,T++);if(d=z-T,d<0)d+=$,B=z,w=Y[S=0],L=w/X[T-B-1]%10|0;else if(S=dI((d+1)/$),S>=Y.length)if(a){for(;Y.length<=S;Y.push(0));w=L=0,T=1,d%=$,B=d-$+1}else break A;else{for(w=C=Y[S],T=1;C>=10;C/=10,T++);d%=$,B=d-$+T,L=B<0?0:w/X[T-B-1]%10|0}if(a=a||z<0||Y[S+1]!=null||(B<0?w:w%X[T-B-1]),a=e<4?(L||a)&&(e==0||e==(g.s<0?3:2)):L>5||L==5&&(e==4||a||e==6&&(d>0?B>0?w/X[T-B]:0:Y[S-1])%10&1||e==(g.s<0?8:7)),z<1||!Y[0])return Y.length=0,a?(z-=g.e+1,Y[0]=X[($-z%$)%$],g.e=-z||0):Y[0]=g.e=0,g;if(d==0?(Y.length=S,C=1,S--):(Y.length=S+1,C=X[$-d],Y[S]=B>0?vA(w/X[T-B]%X[B])*C:0),a)for(;;)if(S==0){for(d=1,B=Y[0];B>=10;B/=10,d++);for(B=Y[0]+=C,C=1;B>=10;B/=10,C++);d!=C&&(g.e++,Y[0]==kA&&(Y[0]=1));break}else{if(Y[S]+=C,Y[S]!=kA)break;Y[S--]=0,C=1}for(d=Y.length;Y[--d]===0;Y.pop());}g.e>U?g.c=g.e=null:g.e<Z&&(g.c=[g.e=0])}return g}function H(g){var z,e=g.e;return e===null?g.toString():(z=rA(g.c),z=e<=i||e>=n?hM(z,e):JA(z,e,"0"),g.s<0?"-"+z:z)}return j.absoluteValue=j.abs=function(){var g=new l(this);return g.s<0&&(g.s=1),g},j.comparedTo=function(g,z){return CM(this,new l(g,z))},j.decimalPlaces=j.dp=function(g,z){var e,a,T,d=this;if(g!=null)return TA(g,0,dA),z==null?z=x:TA(z,0,8),m(new l(d),g+d.e+1,z);if(!(e=d.c))return null;if(a=((T=e.length-1)-UA(this.e/$))*$,T=e[T])for(;T%10==0;T/=10,a--);return a<0&&(a=0),a},j.dividedBy=j.div=function(g,z){return M(this,new l(g,z),c,x)},j.dividedToIntegerBy=j.idiv=function(g,z){return M(this,new l(g,z),0,1)},j.exponentiatedBy=j.pow=function(g,z){var e,a,T,d,B,C,w,S,L,Y=this;if(g=new l(g),g.c&&!g.isInteger())throw Error(QA+"Exponent not an integer: "+H(g));if(z!=null&&(z=new l(z)),C=g.e>14,!Y.c||!Y.c[0]||Y.c[0]==1&&!Y.e&&Y.c.length==1||!g.c||!g.c[0])return L=new l(Math.pow(+H(Y),C?g.s*(2-XM(g)):+H(g))),z?L.mod(z):L;if(w=g.s<0,z){if(z.c?!z.c[0]:!z.s)return new l(NaN);a=!w&&Y.isInteger()&&z.isInteger(),a&&(Y=Y.mod(z))}else{if(g.e>9&&(Y.e>0||Y.e<-1||(Y.e==0?Y.c[0]>1||C&&Y.c[1]>=24e7:Y.c[0]<8e13||C&&Y.c[0]<=9999975e7)))return d=Y.s<0&&XM(g)?-0:0,Y.e>-1&&(d=1/d),new l(w?1/d:d);p&&(d=dI(p/$+2))}for(C?(e=new l(.5),w&&(g.s=1),S=XM(g)):(T=Math.abs(+H(g)),S=T%2),L=new l(D);;){if(S){if(L=L.times(Y),!L.c)break;d?L.c.length>d&&(L.c.length=d):a&&(L=L.mod(z))}if(T){if(T=vA(T/2),T===0)break;S=T%2}else if(g=g.times(e),m(g,g.e+1,1),g.e>14)S=XM(g);else{if(T=+H(g),T===0)break;S=T%2}Y=Y.times(Y),d?Y.c&&Y.c.length>d&&(Y.c.length=d):a&&(Y=Y.mod(z))}return a?L:(w&&(L=D.div(L)),z?L.mod(z):d?m(L,p,x,B):L)},j.integerValue=function(g){var z=new l(this);return g==null?g=x:TA(g,0,8),m(z,z.e+1,g)},j.isEqualTo=j.eq=function(g,z){return CM(this,new l(g,z))===0},j.isFinite=function(){return!!this.c},j.isGreaterThan=j.gt=function(g,z){return CM(this,new l(g,z))>0},j.isGreaterThanOrEqualTo=j.gte=function(g,z){return(z=CM(this,new l(g,z)))===1||z===0},j.isInteger=function(){return!!this.c&&UA(this.e/$)>this.c.length-2},j.isLessThan=j.lt=function(g,z){return CM(this,new l(g,z))<0},j.isLessThanOrEqualTo=j.lte=function(g,z){return(z=CM(this,new l(g,z)))===-1||z===0},j.isNaN=function(){return!this.s},j.isNegative=function(){return this.s<0},j.isPositive=function(){return this.s>0},j.isZero=function(){return!!this.c&&this.c[0]==0},j.minus=function(g,z){var e,a,T,d,B=this,C=B.s;if(g=new l(g,z),z=g.s,!C||!z)return new l(NaN);if(C!=z)return g.s=-z,B.plus(g);var w=B.e/$,S=g.e/$,L=B.c,Y=g.c;if(!w||!S){if(!L||!Y)return L?(g.s=-z,g):new l(Y?B:NaN);if(!L[0]||!Y[0])return Y[0]?(g.s=-z,g):new l(L[0]?B:x==3?-0:0)}if(w=UA(w),S=UA(S),L=L.slice(),C=w-S){for((d=C<0)?(C=-C,T=L):(S=w,T=Y),T.reverse(),z=C;z--;T.push(0));T.reverse()}else for(a=(d=(C=L.length)<(z=Y.length))?C:z,C=z=0;z<a;z++)if(L[z]!=Y[z]){d=L[z]<Y[z];break}if(d&&(T=L,L=Y,Y=T,g.s=-g.s),z=(a=Y.length)-(e=L.length),z>0)for(;z--;L[e++]=0);for(z=kA-1;a>C;){if(L[--a]<Y[a]){for(e=a;e&&!L[--e];L[e]=z);--L[e],L[a]+=kA}L[a]-=Y[a]}for(;L[0]==0;L.splice(0,1),--S);return L[0]?O(g,L,S):(g.s=x==3?-1:1,g.c=[g.e=0],g)},j.modulo=j.mod=function(g,z){var e,a,T=this;return g=new l(g,z),!T.c||!g.s||g.c&&!g.c[0]?new l(NaN):!g.c||T.c&&!T.c[0]?new l(T):(Q==9?(a=g.s,g.s=1,e=M(T,g,0,3),g.s=a,e.s*=a):e=M(T,g,0,Q),g=T.minus(e.times(g)),!g.c[0]&&Q==1&&(g.s=T.s),g)},j.multipliedBy=j.times=function(g,z){var e,a,T,d,B,C,w,S,L,Y,X,V,_,eA,cA,q=this,jA=q.c,CA=(g=new l(g,z)).c;if(!jA||!CA||!jA[0]||!CA[0])return!q.s||!g.s||jA&&!jA[0]&&!CA||CA&&!CA[0]&&!jA?g.c=g.e=g.s=null:(g.s*=q.s,!jA||!CA?g.c=g.e=null:(g.c=[0],g.e=0)),g;for(a=UA(q.e/$)+UA(g.e/$),g.s*=q.s,w=jA.length,Y=CA.length,w<Y&&(_=jA,jA=CA,CA=_,T=w,w=Y,Y=T),T=w+Y,_=[];T--;_.push(0));for(eA=kA,cA=gM,T=Y;--T>=0;){for(e=0,X=CA[T]%cA,V=CA[T]/cA|0,B=w,d=T+B;d>T;)S=jA[--B]%cA,L=jA[B]/cA|0,C=V*S+L*X,S=X*S+C%cA*cA+_[d]+e,e=(S/eA|0)+(C/cA|0)+V*L,_[d--]=S%eA;_[d]=e}return e?++a:_.splice(0,1),O(g,_,a)},j.negated=function(){var g=new l(this);return g.s=-g.s||null,g},j.plus=function(g,z){var e,a=this,T=a.s;if(g=new l(g,z),z=g.s,!T||!z)return new l(NaN);if(T!=z)return g.s=-z,a.minus(g);var d=a.e/$,B=g.e/$,C=a.c,w=g.c;if(!d||!B){if(!C||!w)return new l(T/0);if(!C[0]||!w[0])return w[0]?g:new l(C[0]?a:T*0)}if(d=UA(d),B=UA(B),C=C.slice(),T=d-B){for(T>0?(B=d,e=w):(T=-T,e=C),e.reverse();T--;e.push(0));e.reverse()}for(T=C.length,z=w.length,T-z<0&&(e=w,w=C,C=e,z=T),T=0;z;)T=(C[--z]=C[z]+w[z]+T)/kA|0,C[z]=kA===C[z]?0:C[z]%kA;return T&&(C=[T].concat(C),++B),O(g,C,B)},j.precision=j.sd=function(g,z){var e,a,T,d=this;if(g!=null&&g!==!!g)return TA(g,1,dA),z==null?z=x:TA(z,0,8),m(new l(d),g,z);if(!(e=d.c))return null;if(T=e.length-1,a=T*$+1,T=e[T]){for(;T%10==0;T/=10,a--);for(T=e[0];T>=10;T/=10,a++);}return g&&d.e+1>a&&(a=d.e+1),a},j.shiftedBy=function(g){return TA(g,-yI,yI),this.times("1e"+g)},j.squareRoot=j.sqrt=function(){var g,z,e,a,T,d=this,B=d.c,C=d.s,w=d.e,S=c+4,L=new l("0.5");if(C!==1||!B||!B[0])return new l(!C||C<0&&(!B||B[0])?NaN:B?d:1/0);if(C=Math.sqrt(+H(d)),C==0||C==1/0?(z=rA(B),(z.length+w)%2==0&&(z+="0"),C=Math.sqrt(+z),w=UA((w+1)/2)-(w<0||w%2),C==1/0?z="5e"+w:(z=C.toExponential(),z=z.slice(0,z.indexOf("e")+1)+w),e=new l(z)):e=new l(C+""),e.c[0]){for(w=e.e,C=w+S,C<3&&(C=0);;)if(T=e,e=L.times(T.plus(M(d,T,S,1))),rA(T.c).slice(0,C)===(z=rA(e.c)).slice(0,C))if(e.e<w&&--C,z=z.slice(C-3,C+1),z=="9999"||!a&&z=="4999"){if(!a&&(m(T,T.e+c+2,0),T.times(T).eq(d))){e=T;break}S+=4,C+=4,a=1}else{(!+z||!+z.slice(1)&&z.charAt(0)=="5")&&(m(e,e.e+c+2,1),g=!e.times(e).eq(d));break}}return m(e,e.e+c+1,x,g)},j.toExponential=function(g,z){return g!=null&&(TA(g,0,dA),g++),o(this,g,z,1)},j.toFixed=function(g,z){return g!=null&&(TA(g,0,dA),g=g+this.e+1),o(this,g,z)},j.toFormat=function(g,z,e){var a,T=this;if(e==null)g!=null&&z&&typeof z=="object"?(e=z,z=null):g&&typeof g=="object"?(e=g,g=z=null):e=t;else if(typeof e!="object")throw Error(QA+"Argument not an object: "+e);if(a=T.toFixed(g,z),T.c){var d,B=a.split("."),C=+e.groupSize,w=+e.secondaryGroupSize,S=e.groupSeparator||"",L=B[0],Y=B[1],X=T.s<0,V=X?L.slice(1):L,_=V.length;if(w&&(d=C,C=w,w=d,_-=d),C>0&&_>0){for(d=_%C||C,L=V.substr(0,d);d<_;d+=C)L+=S+V.substr(d,C);w>0&&(L+=S+V.slice(d)),X&&(L="-"+L)}a=Y?L+(e.decimalSeparator||"")+((w=+e.fractionGroupSize)?Y.replace(new RegExp("\\d{"+w+"}\\B","g"),"$&"+(e.fractionGroupSeparator||"")):Y):L}return(e.prefix||"")+a+(e.suffix||"")},j.toFraction=function(g){var z,e,a,T,d,B,C,w,S,L,Y,X,V=this,_=V.c;if(g!=null&&(C=new l(g),!C.isInteger()&&(C.c||C.s!==1)||C.lt(D)))throw Error(QA+"Argument "+(C.isInteger()?"out of range: ":"not an integer: ")+H(C));if(!_)return new l(V);for(z=new l(D),S=e=new l(D),a=w=new l(D),X=rA(_),d=z.e=X.length-V.e-1,z.c[0]=BI[(B=d%$)<0?$+B:B],g=!g||C.comparedTo(z)>0?d>0?z:S:C,B=U,U=1/0,C=new l(X),w.c[0]=0;L=M(C,z,0,1),T=e.plus(L.times(a)),T.comparedTo(g)!=1;)e=a,a=T,S=w.plus(L.times(T=S)),w=T,z=C.minus(L.times(T=z)),C=T;return T=M(g.minus(e),a,0,1),w=w.plus(T.times(S)),e=e.plus(T.times(a)),w.s=S.s=V.s,d=d*2,Y=M(S,a,d,x).minus(V).abs().comparedTo(M(w,e,d,x).minus(V).abs())<1?[S,a]:[w,e],U=B,Y},j.toNumber=function(){return+H(this)},j.toPrecision=function(g,z){return g!=null&&TA(g,1,dA),o(this,g,z,2)},j.toString=function(g){var z,e=this,a=e.s,T=e.e;return T===null?a?(z="Infinity",a<0&&(z="-"+z)):z="NaN":(g==null?z=T<=i||T>=n?hM(rA(e.c),T):JA(rA(e.c),T,"0"):g===10&&b?(e=m(new l(e),c+T+1,x),z=JA(rA(e.c),e.e,"0")):(TA(g,2,r.length,"Base"),z=I(JA(rA(e.c),T,"0"),10,g,a,!0)),a<0&&e.c[0]&&(z="-"+z)),z},j.valueOf=j.toJSON=function(){return H(this)},j._isBigNumber=!0,j[Symbol.toStringTag]="BigNumber",j[Symbol.for("nodejs.util.inspect.custom")]=j.valueOf,A!=null&&l.set(A),l}function UA(A){var M=A|0;return A>0||A===M?M:M-1}function rA(A){for(var M,I,N=1,j=A.length,D=A[0]+"";N<j;){for(M=A[N++]+"",I=$-M.length;I--;M="0"+M);D+=M}for(j=D.length;D.charCodeAt(--j)===48;);return D.slice(0,j+1||1)}function CM(A,M){var I,N,j=A.c,D=M.c,c=A.s,x=M.s,i=A.e,n=M.e;if(!c||!x)return null;if(I=j&&!j[0],N=D&&!D[0],I||N)return I?N?0:-x:c;if(c!=x)return c;if(I=c<0,N=i==n,!j||!D)return N?0:!j^I?1:-1;if(!N)return i>n^I?1:-1;for(x=(i=j.length)<(n=D.length)?i:n,c=0;c<x;c++)if(j[c]!=D[c])return j[c]>D[c]^I?1:-1;return i==n?0:i>n^I?1:-1}function TA(A,M,I,N){if(A<M||A>I||A!==vA(A))throw Error(QA+(N||"Argument")+(typeof A=="number"?A<M||A>I?" out of range: ":" not an integer: ":" not a primitive number: ")+String(A))}function XM(A){var M=A.c.length-1;return UA(A.e/$)==M&&A.c[M]%2!=0}function hM(A,M){return(A.length>1?A.charAt(0)+"."+A.slice(1):A)+(M<0?"e":"e+")+M}function JA(A,M,I){var N,j;if(M<0){for(j=I+".";++M;j+=I);A=j+A}else if(N=A.length,++M>N){for(j=I,M-=N;--M;j+=I);A+=j}else M<N&&(A=A.slice(0,M)+"."+A.slice(M));return A}var FM=rN(),ON=(A=>(A.AED="\u062F.\u0625",A.ARS="$",A.AUD="$",A.AWG="\u0192",A.BDT="\u09F3",A.BHD=".\u062F.\u0628",A.BMD="$",A.BRL="R$",A.CAD="$",A.CHF="CHF",A.CLP="$",A.CZK="K\u010D",A.DJF="Fdj",A.DKK="kr",A.EUR="\u20AC",A.GBP="\xA3",A.HKD="$",A.HUF="Ft",A.IDR="Rp",A.ILS="\u20AA",A.INR="\u20B9",A.JPY="\xA5",A.KRW="\u20A9",A.KWD="KD",A.LKR="\u20A8",A.MMK="K",A.MXN="$",A.MYR="RM",A.NGN="\u20A6",A.NOK="kr",A.NZD="$",A.PHP="\u20B1",A.PKR="\u20A8",A.PLN="z\u0142",A.RUB="\u20BD",A.SAR="\uFDFC",A.SEK="kr",A.SGD="S$",A.THB="\u0E3F",A.TRY="\u20BA",A.TWD="NT$",A.UAH="\u20B4",A.USD="$",A.VEF="Bs",A.VND="\u20AB",A.XAG="XAG",A.XAU="XAU",A.XDR="XDR",A.ZAR="R",A))(ON||{});class k{constructor(M){yj(this,"value");this.value=M===""?void 0:new FM(M)}static zero(){return new k("0")}static empty(){return new k("")}plus(M){return M instanceof k?this.plus(M.value||""):M===""?this:this.value===void 0?new k(M):new k(this.value.plus(M))}minus(M){return M instanceof k?this.minus(M.value||""):M===""?this:this.value===void 0?new k(M):new k(this.value.minus(M))}times(M){return M instanceof k?this.times(M.value||""):M===""||this.value===void 0?k.empty():new k(this.value.times(M))}div(M){return M instanceof k?this.div(M.value||""):M===""||this.value===void 0||new FM(M).isZero()?k.empty():new k(this.value.div(M))}divideByDecimals(M){return this.value===void 0?k.empty():new k(this.value.dividedBy(10**M))}multiplyByDecimals(M){return this.value===void 0?k.empty():new k(this.value.multipliedBy(10**M))}gt(M){return this.value===void 0?!1:M instanceof k?this.gt(M.value||""):M===""?!1:this.value.gt(M)}gte(M){return this.gt(M)||this.eq(M)}lt(M){return M===""?!1:M instanceof k?this.lt(M.value||""):this.value===void 0?!1:this.value.lt(M)}lte(M){return this.lt(M)||this.eq(M)}eq(M){return M instanceof k?this.eq(M.value||""):this.value===void 0&&M===""?!0:this.value!==void 0&&M!==""?this.value.eq(M):!1}static normalize(M){if(M==="")return"";const I=new k(M);return I.value!==void 0&&I.value.isNaN()?"":I.isZero()?"0":I.format()}static formatAmountWithCommas(M,I){const N=M.replace(/\.0*$|(\.\d*[1-9])0+$/,"$1");return I?N.replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),","):N}format(M,I=!1){if(this.value===void 0||this.value.isNaN())return"";if(M===void 0)return k.formatAmountWithCommas(this.value.toFixed(),I);const N=2;return this.value.isGreaterThanOrEqualTo(10**(M-N))?k.formatAmountWithCommas(this.value.toFixed(N),I):k.formatAmountWithCommas(this.value.precision(M).toFixed(),I)}formatAsAsset(M,I){const N=this.format(M,!0);return I?N===""?"":`${N} ${I}`:N}formatAsFiat(M){let I,N;if(this.value===void 0||this.value.isNaN())return"";this.value.decimalPlaces()<2||this.value.isGreaterThanOrEqualTo(10)?(I=2,N=this.value.toNumber()):this.value.isGreaterThanOrEqualTo(1)?(I=3,N=this.value.toNumber()):N=new FM(this.format(4)).toNumber();const j={style:"decimal",minimumFractionDigits:I||0,maximumFractionDigits:I||20};return M&&ON[M]&&(j.style="currency",j.currency=M,j.currencyDisplay="narrowSymbol"),Intl.NumberFormat(navigator.language,j).format(N)}toHex(){return this.value===void 0?"":this.value.isNaN()?"0x0":`0x${this.value.toString(16)}`}toNumber(){return this.value===void 0||this.value.isNaN()?0:this.value.toNumber()}isUndefined(){return this.value===void 0}isNaN(){return this.value!==void 0&&this.value.isNaN()}isZero(){return this.value!==void 0&&this.value.isZero()}isPositive(){return this.value!==void 0&&this.value.isPositive()}isNegative(){return this.value!==void 0&&this.value.isNegative()}parseInteger(){return this.value===void 0?k.empty():new k(this.value.integerValue(FM.ROUND_DOWN))}abbreviate(M,I,N){const j={trillion:Math.pow(10,12),billion:Math.pow(10,9),million:Math.pow(10,6),thousand:Math.pow(10,3)},D={thousand:"k",million:"M",billion:"B",trillion:"T"};if(this.value===void 0)return"";const c=Intl.NumberFormat(navigator.language,{style:I?"currency":"decimal",currency:I,currencyDisplay:"narrowSymbol",minimumFractionDigits:M,maximumFractionDigits:M}),x=this.value.absoluteValue().toNumber();let i=this.value.toNumber(),n="";return N&&D[N]&&j[N]?(n=D[N],i=i/j[N],c.format(i)+n):(x>=j.trillion||Math.round(x/j.trillion)===1?(n=D.trillion,i=i/j.trillion):x<j.trillion&&x>=j.billion?(n=D.billion,i=i/j.billion):x<j.billion&&x>=j.million?(n=D.million,i=i/j.million):x<j.million&&x>=j.thousand&&(n=D.thousand,i=i/j.thousand),c.format(i)+n)}}const RN=new k("0.000005");function BD(A){const[M,I]=G.default.useState(void 0),[N,j]=G.default.useState(void 0),[D,c]=G.default.useState(!1),[x,i]=G.default.useState(void 0),[n,Z]=G.default.useState(void 0),[U,E]=G.default.useState(void 0),{swapService:Q,solWalletAdapter:p,account:t,network:r,defaultBaseCurrency:b}=nA(),{state:{spotPrices:l}}=wM(),o=G.default.useCallback(async H=>{I(void 0),j(void 0),c(!1),i(void 0),Z(void 0),U&&U.abort(),H&&await H()},[U]),y=G.default.useCallback(async function(H={}){const g={...A,...H};if(r.coin!==lA.Solana||!g.fromToken||!g.toToken)return;if(!g.fromAmount&&!g.toAmount){await o();return}const z=new k(g.fromAmount),e=new k(g.toAmount),a=z.isZero()||z.isNaN()||z.isUndefined(),T=e.isZero()||e.isNaN()||e.isUndefined();if(a&&T){await o();return}if(!g.fromAddress)return;const d=new AbortController;E(d),c(!0);try{const C=await Q.getBraveFeeForAsset(g.toToken);Z(C)}catch{console.log(`Error getting Brave fee (Jupiter): ${g.toToken.symbol}`)}let B;try{B=await Q.getJupiterQuote({inputMint:g.fromToken.contractAddress||YM,outputMint:g.toToken.contractAddress||YM,amount:a?new k(g.toAmount).multiplyByDecimals(g.toToken.decimals).format():new k(g.fromAmount).multiplyByDecimals(g.fromToken.decimals).format(),slippageBps:new k(g.slippageTolerance).times(100).parseInteger().toNumber(),userPublicKey:g.fromAddress})}catch(C){console.log(`Error getting Jupiter quote: ${C}`)}if(d.signal.aborted){c(!1),E(void 0);return}return B!=null&&B.response&&I(B.response),B!=null&&B.errorResponse&&j(B.errorResponse),c(!1),E(void 0),B==null?void 0:B.response},[r.coin,A,o,Q]),O=G.default.useCallback(async function(H){if(!M||(M==null?void 0:M.routes.length)===0||r.coin!==lA.Solana||!A.toToken||!t)return;c(!0);let g;try{g=await Q.getJupiterTransactionsPayload({userPublicKey:t.address,route:x||M.routes[0],outputMint:A.toToken.contractAddress||YM})}catch(e){console.log(`Error getting Jupiter swap transactions: ${e}`)}if(g!=null&&g.errorResponse&&j(g.errorResponse),!(g!=null&&g.response)){c(!1);return}const{swapTransaction:z}=g.response;try{await p.sendTransaction({encodedTransaction:z,from:t.address,sendOptions:{skipPreflight:!0,maxRetries:2}}),await o(H)}catch(e){console.error(`Error creating Solana transaction: ${e}`),c(!1)}},[M,r.coin,A.toToken,t,Q,x,p,o]),m=G.default.useMemo(()=>!A.fromToken||!A.toToken?[]:M===void 0?[]:M.routes.map(H=>({label:H.marketInfos.map(g=>g.label).join(" x "),fromAmount:new k(H.inAmount.toString()).divideByDecimals(A.fromToken.decimals),toAmount:new k(H.outAmount.toString()).divideByDecimals(A.toToken.decimals),minimumToAmount:new k(H.otherAmountThreshold.toString()).divideByDecimals(A.toToken.decimals),fromToken:A.fromToken,toToken:A.toToken,rate:new k(H.outAmount.toString()).divideByDecimals(A.toToken.decimals).div(new k(H.inAmount.toString()).divideByDecimals(A.fromToken.decimals)),impact:new k(H.priceImpactPct),sources:H.marketInfos.flatMap(g=>g.label.split("+").map(z=>{const e=z.match(/(.*)\s+\((\d+)%\)/);return e&&e.length===3?{name:e[1].trim(),proportion:new k(e[2]).div(100)}:{name:z.trim(),proportion:new k(1)}})),routing:H.marketInfos.length>1?"flow":"split",networkFee:RN.times(l.nativeAsset).formatAsFiat(b),braveFee:n})),[M,A.fromToken,A.toToken,b,l.nativeAsset,n]);return{quote:M,error:N,loading:D,exchange:O,refresh:y,reset:o,selectedRoute:x,setSelectedRoute:i,quoteOptions:m,networkFee:RN}}const YN=A=>{if(!A)return[];const M=A.startsWith("0x")?A.slice(2):A,I=[];for(let N=0;N<M.length;N+=2)I.push(parseInt(M.substr(N,2),16));return I};function oD(A){const[M,I]=G.default.useState(void 0),[N,j]=G.default.useState(void 0),[D,c]=G.default.useState(!1),[x,i]=G.default.useState(!1),[n,Z]=G.default.useState(void 0),[U,E]=G.default.useState(void 0),{swapService:Q,ethWalletAdapter:p,account:t,network:r,defaultBaseCurrency:b}=nA(),{state:{spotPrices:l}}=wM(),o=G.default.useCallback(async z=>{I(void 0),j(void 0),i(!1),Z(void 0),U&&U.abort(),z&&await z()},[U]),y=G.default.useCallback(async function(z={}){const e={...A,...z};if(r.coin!==lA.Ethereum||!e.fromToken||!e.toToken)return;if(!e.fromAmount&&!e.toAmount){await o();return}const a=new k(e.fromAmount),T=new k(e.toAmount),d=a.isZero()||a.isNaN()||a.isUndefined(),B=T.isZero()||T.isNaN()||T.isUndefined();if(d&&B){await o();return}if(!e.fromAddress)return;const C=new AbortController;E(C),i(!0);try{const L=await Q.getBraveFeeForAsset(e.toToken);Z(L)}catch{console.log(`Error getting Brave fee (Jupiter): ${e.toToken.symbol}`)}let w;try{w=await Q.getZeroExPriceQuote({takerAddress:e.fromAddress,sellAmount:e.fromAmount&&new k(e.fromAmount).multiplyByDecimals(e.fromToken.decimals).format(),sellToken:e.fromToken.contractAddress||LM,buyAmount:e.toAmount&&new k(e.toAmount).multiplyByDecimals(e.toToken.decimals).format(),buyToken:e.toToken.contractAddress||LM,slippagePercentage:new k(e.slippageTolerance).div(100).toNumber(),gasPrice:""})}catch(L){console.log(`Error getting 0x quote: ${L}`)}let S=!1;if(e.fromToken.isToken||(S=!0),t||(S=!0),t&&(w==null?void 0:w.response)&&e.fromToken.isToken)try{const L=await p.getERC20Allowance(w.response.sellTokenAddress,t.address,w.response.allowanceTarget);S=new k(L).gte(w.response.sellAmount)}catch(L){console.log(`Error getting ERC20 allowance: ${L}`)}if(C.signal.aborted){i(!1),E(void 0);return}return w!=null&&w.response&&I(w.response),w!=null&&w.errorResponse&&j(w.errorResponse),c(S),i(!1),E(void 0),w==null?void 0:w.response},[A,r.coin,t,o,Q,p]),O=G.default.useCallback(async function(z={},e){const a={...A,...z};if(r.coin!==lA.Ethereum||!t||!a.fromToken||!a.toToken||!a.fromAmount&&!a.toAmount)return;const T=new k(a.fromAmount),d=new k(a.toAmount),B=T.isZero()||T.isNaN()||T.isUndefined(),C=d.isZero()||d.isNaN()||d.isUndefined();if(B&&C||!a.fromAddress)return;i(!0);let w;try{w=await Q.getZeroExTransactionPayload({takerAddress:a.fromAddress,sellAmount:new k(a.fromAmount).multiplyByDecimals(a.fromToken.decimals).format(),sellToken:a.fromToken.contractAddress||LM,buyAmount:new k(a.toAmount).multiplyByDecimals(a.toToken.decimals).format(),buyToken:a.toToken.contractAddress||LM,slippagePercentage:new k(a.slippageTolerance).div(100).toNumber(),gasPrice:""})}catch(V){console.log(`Error getting 0x swap quote: ${V}`)}if(w!=null&&w.errorResponse&&j(w==null?void 0:w.errorResponse),!(w!=null&&w.response)){i(!1);return}const{data:S,to:L,value:Y,estimatedGas:X}=w.response;try{await p.sendTransaction({from:t.address,to:L,value:new k(Y).toHex(),gas:new k(X).toHex(),data:YN(S)}),await o(e)}catch(V){console.error(`Error creating 0x transaction: ${V}`),i(!1)}},[A,r.coin,t,Q,p,o]),m=G.default.useCallback(async()=>{if(!M||D||!t)return;const{allowanceTarget:z,sellTokenAddress:e}=M;try{const a=await p.getERC20ApproveData({contractAddress:e,spenderAddress:z,allowance:new k(WI).toHex()});await p.sendTransaction({from:t.address,to:e,value:"0x0",data:a})}catch(a){console.error(`Error creating ERC20 approve transaction: ${a}`)}},[M,D,t,p]),H=G.default.useMemo(()=>M?new k(M.gasPrice).times(M.gas).divideByDecimals(r.decimals):k.empty(),[M,r.decimals]),g=G.default.useMemo(()=>!A.fromToken||!A.toToken?[]:M===void 0?[]:[{label:"",fromAmount:new k(M.sellAmount).divideByDecimals(A.fromToken.decimals),toAmount:new k(M.buyAmount).divideByDecimals(A.toToken.decimals),minimumToAmount:void 0,fromToken:A.fromToken,toToken:A.toToken,rate:new k(M.buyAmount).divideByDecimals(A.toToken.decimals).div(new k(M.sellAmount).divideByDecimals(A.fromToken.decimals)),impact:new k(M.estimatedPriceImpact),sources:M.sources.map(z=>({name:z.name,proportion:new k(z.proportion)})).filter(z=>z.proportion.gt(0)),routing:"split",networkFee:H.isUndefined()?"":H.times(l.nativeAsset).formatAsFiat(b),braveFee:n}],[A.fromToken,A.toToken,M,b,H,l.nativeAsset,n]);return{quote:M,error:N,hasAllowance:D,loading:x,exchange:O,refresh:y,reset:o,approve:m,quoteOptions:g,networkFee:H}}const fM=A=>({contractAddress:"",name:A.symbolName,symbol:A.symbol,logo:A.logo,isToken:!1,decimals:A.decimals,visible:!0,coingeckoId:"",chainId:A.chainId,coin:A.coin}),HN=A=>`${A.coin}-${A.chainId}-${A.contractAddress.toLowerCase()}`,SD=(A,M,I)=>`${A}-${M}-${I.toLowerCase()}`,sD=()=>{const{network:A}=nA();return G.default.useMemo(()=>fM(A),[A.chainId,A.coin,A.symbol,A.symbolName,A.logo,A.decimals])};function JM(A,M){const I=uA.useRef(),N=uA.useRef(),j=uA.useCallback(()=>{N.current&&clearTimeout(N.current)},[N]);return uA.useEffect(()=>j,[j]),uA.useCallback(async function(...c){I.current=c,j(),N.current=setTimeout(async()=>{I.current&&await A(...I.current)},M)},[I,N,j,A,M])}const mN=(A,M)=>{if(!M)return!1;const I=new k(A).multiplyByDecimals(M.decimals);if(!I.value)return!1;const N=I.value.decimalPlaces();return N!==null&&N>0},bD=()=>{const{state:{tokenBalances:A,spotPrices:M}}=wM(),{getLocale:I,getTokenPrice:N,getTokenBalance:j,getTokenBalances:D,getBalance:c,assetsList:x,network:i,account:n,defaultBaseCurrency:Z,walletAccounts:U}=nA(),{dispatch:E}=ZN(),[Q,p]=G.default.useState(void 0),[t,r]=G.default.useState(void 0),[b,l]=G.default.useState(""),[o,y]=G.default.useState(""),[O,m]=G.default.useState(void 0),[H,g]=G.default.useState(0),[z,e]=G.default.useState(tD[0].name),[a,T]=G.default.useState(!1),[d,B]=G.default.useState(""),[C,w]=G.default.useState(!1),[S,L]=G.default.useState(n),[Y,X]=G.default.useState(!1),[V,_]=G.default.useState("0.5"),[eA,cA]=G.default.useState(bN[1]),[q,jA]=G.default.useState(!1),CA=sD(),qA=G.default.useCallback(()=>{p(CA),r(void 0),l(""),y("")},[CA]);G.default.useEffect(qA,[qA]);const iA=BD({fromToken:Q,toToken:t,fromAmount:b,toAmount:"",slippageTolerance:V,fromAddress:n==null?void 0:n.address}),xA=oD({fromAmount:b,toAmount:"",fromToken:Q,toToken:t,slippageTolerance:V,fromAddress:n==null?void 0:n.address}),oA=G.default.useMemo(()=>i.coin===lA.Solana?iA.quoteOptions:xA.quoteOptions,[i.coin,iA.quoteOptions,xA.quoteOptions]),_A=G.default.useCallback(W=>{const f=oA[W];if(i.coin===lA.Solana){if(iA.quote&&iA.quote.routes.length>W&&t){const NA=iA.quote.routes[W];iA.setSelectedRoute(NA),y(f.toAmount.format(6))}}else i.coin===lA.Ethereum&&xA.quote&&t&&y(f.toAmount.format(6));g(W)},[oA,i.coin,iA,t,xA.quote]),EA=G.default.useCallback(async W=>{var II;const f={nativeAsset:fM(i),fromAsset:Q,toAsset:t,...W},NA=f.fromAsset&&await N(f.fromAsset),hA=f.toAsset&&await N(f.toAsset),MM=(II=f.fromAsset)!=null&&II.isToken?await N(f.nativeAsset):NA;await E({type:"updateSpotPrices",payload:{nativeAsset:k.normalize(MM||""),makerAsset:k.normalize(NA||""),takerAsset:k.normalize(hA||"")}})},[i,Q,t,N,E]),LA=JM(async W=>{await EA(W)},0),zA=G.default.useCallback(W=>[fM(W),...x].filter(NA=>NA.coin===W.coin&&NA.chainId===W.chainId),[x]),VA=G.default.useCallback((W,f)=>async NA=>{const hA=HN(NA);try{const MM=NA.isToken?await j(NA.contractAddress,W.address,W.coin,NA.chainId):await c(W.address,f.coin,f.chainId);return{key:hA,value:k.normalize(MM)}}catch(MM){return console.log(`Error querying balance: error=${MM} asset=`,JSON.stringify(NA)),{key:hA,value:""}}},[c,j]),tM=G.default.useCallback(async W=>{var Lj;let f={network:i,account:n,...W};if(((Lj=f.account)==null?void 0:Lj.coin)!==f.network.coin&&(f={...f,account:U.find(GA=>GA.coin===f.network.coin)||f.account}),!f.account)return;const NA=VA(f.account,f.network),hA=await NA(fM(f.network));E({type:"updateTokenBalances",payload:{[hA.key]:hA.value}});const MM=zA(f.network).filter(GA=>GA.isToken);try{const GA=await D(MM.filter(cM=>cM.isToken).map(cM=>cM.contractAddress),f.account.address,f.account.coin,f.network.chainId),NI=Object.entries(GA).map(([cM,iM])=>[SD(f.network.coin,f.network.chainId,cM),iM]).filter(([cM,iM])=>new k(iM).isPositive());E({type:"updateTokenBalances",payload:Object.fromEntries(NI)});return}catch(GA){console.log(`Error calling getTokenBalances(): error=${GA}`)}async function II(GA){const cM=(await TD.mapLimit(GA,10,NA)).filter(iM=>new k(iM.value).isPositive()).reduce((iM,dj)=>(iM[dj.key]=dj.value,iM),{});E({type:"updateTokenBalances",payload:cM})}const Ej=10;for(let GA=0;GA<MM.length;GA+=Ej){const NI=MM.slice(GA,GA+Ej);await II(NI)}},[i,n,zA,VA,U,D,E]),ZM=JM(async W=>{await tM(W)},0);G.default.useEffect(()=>{(async()=>x.length!==0&&(q||(await ZM({}),await LA({}),jA(!0))))()},[ZM,LA,q,x]);const UM=G.default.useCallback(async W=>{const f=await iA.refresh(W);if(!!f){if(W.fromAmount===""){const NA=W.fromToken||Q;NA&&f.routes.length>0&&l(new k(f.routes[0].inAmount.toString()).divideByDecimals(NA.decimals).format(6))}if(W.toAmount===""){const NA=W.toToken||t;NA&&f.routes.length>0&&y(new k(f.routes[0].outAmount.toString()).divideByDecimals(NA.decimals).format(6))}}},[iA,t,Q]),$A=JM(async W=>{await UM(W)},700),rM=G.default.useCallback(async W=>{const f=await xA.refresh(W);if(!!f){if(W.fromAmount===""){const NA=W.fromToken||Q;NA&&l(new k(f.sellAmount).divideByDecimals(NA.decimals).format(6))}if(W.toAmount===""){const NA=W.toToken||t;NA&&y(new k(f.buyAmount).divideByDecimals(NA.decimals).format(6))}}},[xA,t,Q]),AM=JM(async W=>{await rM(W)},700),EM=G.default.useCallback(async W=>{l(W),W||y(""),i.coin===lA.Solana?await $A({fromAmount:W,toAmount:""}):await AM({fromAmount:W,toAmount:""})},[i.coin,$A,AM]),HI=G.default.useCallback(async W=>{y(W),W||l(""),i.coin===lA.Solana?await $A({fromAmount:"",toAmount:W}):await AM({fromAmount:"",toAmount:W})},[i.coin,AM,$A]),OM=G.default.useCallback(W=>{var NA;const f=HN(W);return A?new k((NA=A[f])!=null?NA:"0"):k.zero()},[A]),XA=Q&&OM(Q),eM=OM(CA),mI=G.default.useCallback(async()=>{if(p(t),r(Q),await EM(""),t&&n){const W=await VA(n,i)(t);E({type:"updateTokenBalances",payload:{[W.key]:W.value}})}await EA({fromAsset:t,toAsset:Q})},[t,Q,EM,n,EA,VA,i,E]),PI=G.default.useCallback(async W=>{r(W),m(void 0),y(""),i.coin===lA.Solana?(await iA.reset(),await UM({toToken:W,toAmount:""})):i.coin===lA.Ethereum&&(await xA.reset(),await rM({toToken:W,toAmount:""})),await EA({toAsset:W})},[i.coin,EA,iA,UM,xA,rM]),kI=G.default.useCallback(async W=>{if(p(W),m(void 0),l(""),y(""),i.coin===lA.Solana?await iA.reset():i.coin===lA.Ethereum&&await xA.reset(),n){const f=await VA(n,i)(W);E({type:"updateTokenBalances",payload:{[f.key]:f.value}})}await EA({fromAsset:W})},[E,EA,VA,n,i,xA,iA]),s=G.default.useCallback(W=>{W==="to-account"&&B(""),e(W)},[]),v=G.default.useCallback(W=>{B(W)},[]),h=G.default.useCallback((W,f)=>{w(f)},[]),gA=G.default.useMemo(()=>{if(b&&M.makerAsset)return new k(b).times(M.makerAsset).formatAsFiat(Z)},[M.makerAsset,b,Z]),aA=G.default.useMemo(()=>({gasFee:"0.0034",gasFeeGwei:"36",gasFeeFiat:"17.59",time:"1 min"}),[]),wA=G.default.useMemo(()=>i.coin===lA.Ethereum?xA.networkFee.isUndefined()?k.zero():xA.networkFee:i.coin===lA.Solana?iA.networkFee.isUndefined()?k.zero():iA.networkFee:k.zero(),[i.coin,xA.networkFee,iA.networkFee]),AA=G.default.useMemo(()=>{var f,NA,hA;if(!b&&!o)return;if(Q&&b&&mN(b,Q))return"fromAmountDecimalsOverflow";if(t&&o&&mN(o,t))return"toAmountDecimalsOverflow";if(!XA||!eM||!Q)return;const W=new k(b).multiplyByDecimals(Q.decimals);if(W.gt(XA))return"insufficientBalance";if(wA.gt(eM)||Q.symbol===i.symbol&&W.plus(wA).gt(XA))return"insufficientFundsForGas";if(i.coin===lA.Ethereum)return Q.isToken&&!xA.hasAllowance?"insufficientAllowance":xA.error===void 0?void 0:xA.error.isInsufficientLiquidity?"insufficientLiquidity":"unknownError";if(i.coin===lA.Solana)return((f=iA.error)==null?void 0:f.isInsufficientLiquidity)||((hA=(NA=iA.quote)==null?void 0:NA.routes)==null?void 0:hA.length)===0?"insufficientLiquidity":iA.error===void 0?void 0:"unknownError"},[Q,b,t,o,i,wA,xA,iA,XA,eM]),DA=G.default.useCallback(async()=>{i.coin===lA.Ethereum?xA.hasAllowance?await xA.exchange({},async function(){l(""),y("")}):await xA.approve():i.coin===lA.Solana&&await iA.exchange(async function(){l(""),y("")})},[i.coin,xA,iA]),SA=G.default.useMemo(()=>n?Q?AA==="insufficientBalance"?I("braveSwapInsufficientBalance").replace("$1",Q.symbol):AA==="insufficientFundsForGas"?I("braveSwapInsufficientBalance").replace("$1",i.symbol):i.coin===lA.Ethereum&&AA==="insufficientAllowance"?I("braveSwapApproveToken").replace("$1",Q.symbol):I(AA==="insufficientLiquidity"?"braveSwapInsufficientLiquidity":"braveSwapReviewOrder"):I("braveSwapReviewOrder"):I("braveSwapConnectWallet"),[n,Q,AA,i,I]),YA=G.default.useMemo(()=>xA.loading||iA.loading||i.coin===lA.Ethereum&&xA.quote===void 0||i.coin===lA.Solana&&iA.quote===void 0||Q===void 0||t===void 0||new k(o).isUndefined()||new k(o).isZero()||new k(b).isUndefined()||new k(b).isZero()||eM===void 0||XA===void 0||AA&&i.coin===lA.Ethereum&&AA!=="insufficientAllowance"||AA&&i.coin===lA.Solana,[xA.loading,iA.loading,xA.quote,iA.quote,i.coin,Q,t,b,o,eM,XA,AA]);return G.default.useEffect(()=>{const W=setInterval(async()=>{i.coin===lA.Solana?await $A({}):await AM({})},1e4);return()=>{clearInterval(W)}},[i.coin,$A,AM]),{fromToken:Q,toToken:t,fromAmount:b,toAmount:o,fromAssetBalance:XA||k.zero(),fiatValue:gA,isFetchingQuote:xA.loading||iA.loading,quoteOptions:oA,selectedQuoteOptionIndex:H,selectingFromOrTo:O,swapAndSendSelected:a,selectedSwapAndSendOption:z,selectedSwapSendAccount:S,toAnotherAddress:d,userConfirmedAddress:C,selectedGasFeeOption:eA,slippageTolerance:V,useDirectRoute:Y,gasEstimates:aA,onSelectFromToken:kI,onSelectToToken:PI,getCachedAssetBalance:OM,onSelectQuoteOption:_A,setSelectingFromOrTo:m,handleOnSetFromAmount:EM,handleOnSetToAmount:HI,onClickFlipSwapTokens:mI,setSwapAndSendSelected:T,handleOnSetToAnotherAddress:v,onCheckUserConfirmedAddress:h,onSetSelectedSwapAndSendOption:s,setSelectedSwapSendAccount:L,setSelectedGasFeeOption:cA,setSlippageTolerance:_,setUseDirectRoute:X,onSubmit:DA,submitButtonText:SA,isSubmitButtonDisabled:YA,swapValidationError:AA,refreshBlockchainState:tM,getNetworkAssetsList:zA}},SM=(A,M,I)=>{G.default.useEffect(()=>{const N=j=>{!A.current||A.current.contains((j==null?void 0:j.target)||null)||M(j)};if(I)return document.addEventListener("mousedown",N),document.addEventListener("touchstart",N),()=>{document.removeEventListener("mousedown",N),document.removeEventListener("touchstart",N)};document.removeEventListener("mousedown",N),document.removeEventListener("touchstart",N)},[A,I,M])},QD="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSAyMC43NTg3TDExIDFDMTEgMC40NDc3MTUgMTEuNDQ3NyAwIDEyIDBDMTIuNTUyMyAwIDEzIDAuNDQ3NzE1IDEzIDFMMTMgMjAuNzU4N0wxOS4yNjUyIDEzLjk3MTJDMTkuNjM5OCAxMy41NjU0IDIwLjI3MjQgMTMuNTQwMSAyMC42NzgzIDEzLjkxNDdDMjEuMDg0MSAxNC4yODkzIDIxLjEwOTQgMTQuOTIyIDIwLjczNDggMTUuMzI3OEwxMy4yMjQ4IDIzLjQ2MzhDMTIuNTY0OCAyNC4xNzg3IDExLjQzNTIgMjQuMTc4NyAxMC43NzUyIDIzLjQ2MzhMMy4yNjUxOSAxNS4zMjc4QzIuODkwNTkgMTQuOTIyIDIuOTE1OSAxNC4yODkzIDMuMzIxNzIgMTMuOTE0N0MzLjcyNzU1IDEzLjU0MDEgNC4zNjAyMSAxMy41NjU0IDQuNzM0ODEgMTMuOTcxMkwxMSAyMC43NTg3WiIgZmlsbD0iIzQ5NTA1NyIvPgo8L3N2Zz4K",F=R.default.span`
  --text01: ${A=>A.theme.color.legacy.text01};
  --text02: ${A=>A.theme.color.legacy.text02};
  --text03: ${A=>A.theme.color.legacy.text03};
  --error: ${A=>A.theme.color.red40};
  --success: ${A=>A.theme.color.green30};
  --warning: ${A=>A.theme.color.yellow30};
  font-family: 'Poppins';
  color: ${A=>A.textColor?`var(--${A.textColor})`:A.theme.color.legacy.text01};
  font-size: ${A=>A.textSize?A.textSize:"18px"};
  font-weight: ${A=>A.isBold?500:400};
  height: ${A=>A.maintainHeight?"20px":"unset"};
  line-height: ${A=>A.textSize==="12px"?"18px":"20px"};
  letter-spacing: 0.02em;
  text-align: ${A=>A.textAlign?A.textAlign:"center"};
  @media screen and (max-width: 570px) {
    font-size: ${A=>A.responsiveTextSize?A.responsiveTextSize:A.textSize?A.textSize:"18px"};
  }
`,K=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Poppins';
  color: ${A=>A.theme.color.legacy.text01};
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.02em;
`,J=R.default(K)`
  --vertical-padding: ${A=>{var M;return(M=A.verticalPadding)!=null?M:0}}px;
  --horizontal-padding: ${A=>{var M;return(M=A.horizontalPadding)!=null?M:0}}px;
  @media screen and (max-width: 570px) {
    --vertical-padding: ${A=>{var M,I;return(I=(M=A.verticalPaddingResponsive)!=null?M:A.verticalPadding)!=null?I:0}}px;
  }
  box-sizing: border-box;
  flex-direction: row;
  align-items: ${A=>{var M;return(M=A.verticalAlign)!=null?M:"center"}};
  justify-content: ${A=>{var M;return(M=A.horizontalAlign)!=null?M:"space-between"}};
  margin-bottom: ${A=>{var M;return(M=A.marginBottom)!=null?M:0}}px;
  padding: var(--vertical-padding) var(--horizontal-padding);
  width: ${A=>A.rowWidth==="full"?"100%":"unset"};
  height: ${A=>A.rowHeight==="full"?"100%":"unset"};
`,yA=R.default(K)`
  --vertical-padding: ${A=>{var M;return(M=A.verticalPadding)!=null?M:0}}px;
  --horizontal-padding: ${A=>{var M;return(M=A.horizontalPadding)!=null?M:0}}px;
  align-items: ${A=>{var M;return(M=A.horizontalAlign)!=null?M:"center"}};
  box-sizing: border-box;
  height: ${A=>A.columnHeight==="full"?"100%":"unset"};
  justify-content: ${A=>{var M;return(M=A.verticalAlign)!=null?M:"center"}};
  margin-bottom: ${A=>{var M;return(M=A.marginBottom)!=null?M:0}}px;
  padding: var(--vertical-padding) var(--horizontal-padding);
  width: ${A=>A.columnWidth==="full"?"100%":"unset"};
`,sA=R.default(K)`
  height: 100%;
  width: ${A=>A.size}px;
`,KA=R.default(K)`
  height: ${A=>A.size}px;
  width: 100%;
`,sM=R.default(K)`
  background-color: ${A=>A.dividerTheme==="darker"?A.theme.color.legacy.interactive08:A.theme.color.legacy.divider01};
  height: ${A=>A.height?`${A.height}px`:"100%"};
  margin-left: ${A=>{var M;return(M=A.marginLeft)!=null?M:0}}px;
  margin-right: ${A=>{var M;return(M=A.marginRight)!=null?M:0}}px;
  width: 2px;
  @media screen and (max-width: 570px) {
    margin-left: ${A=>{var M,I;return(I=(M=A.marginLeftResponsive)!=null?M:A.marginLeft)!=null?I:0}}px;
  }
`,oI=R.default(K)`
  background-color: ${A=>A.theme.color.legacy.divider01};
  height: 2px;
  margin-top: ${A=>{var M;return(M=A.marginTop)!=null?M:0}}px;
  margin-bottom: ${A=>{var M;return(M=A.marginBottom)!=null?M:0}}px;
  width: ${A=>A.width?`${A.width}px`:"100%"};
`,OA=R.default.div`
  height: ${A=>A.size}px;
  width: ${A=>A.size}px;
  mask-image: url(${A=>A.icon});
  mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(${A=>A.icon});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
`,GD=R.default(K)`
  animation: spin 0.75s linear infinite;
  border: 2px solid transparent;
  border-top: 2px solid ${A=>A.theme.color.legacy.text03};
  border-radius: 50%;
  height: 10px;
  margin-right: 6px;
  width: 10px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,BA=R.default.button`
  display: flex;
  font-family: 'Poppins';
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${A=>A.theme.color.legacy.text01};
  :disabled {
    cursor: not-allowed;
  }
`,WA=R.default(BA)`
  padding: 0px;
  background-color: ${A=>A.theme.color.legacy.text02};
  height: ${A=>A.size?A.size:16}px;
  width: ${A=>A.size?A.size:16}px;
  mask-image: url(${A=>A.icon});
  mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(${A=>A.icon});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
`,pA=R.default(J)`
  display: flex;
  @media screen and (max-width: ${A=>A.maxWidth?A.maxWidth:800}px) {
    display: ${A=>A.dontHide?"flex":"none"};
  }
`,bM=R.default(J)`
  display: none;
  @media screen and (max-width: ${A=>A.maxWidth?A.maxWidth:800}px) {
    display: flex;
  }
`,DM=R.default.input`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  background-image: none;
  box-shadow: none;
  border: none;
  color: ${A=>A.theme.color.legacy.text01};
  padding: 0px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  background-color: transparent;
  letter-spacing: 0.02em;
  ::placeholder {
    color: ${A=>A.theme.color.legacy.text01};
  }
  :focus {
    outline: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,KM=R.default.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${A=>A.theme.color.legacy.text01};
`,ZD=A=>{const{onClick:M}=A;return u(UD,{children:u(rD,{onClick:M,children:u(OD,{icon:QD,size:24})})})},UD=R.default(K)`
  height: 8px;
  width: 100%;
`,rD=R.default(BA)`
  --icon-color: ${A=>A.theme.color.legacy.text02};
  background-color: ${A=>A.theme.color.legacy.background01};
  border-radius: 100%;
  box-shadow: var(--flip-tokens-button-shadow);
  height: 40px;
  position: absolute;
  width: 40px;
  z-index: 10;
  padding: 0px;
  &:hover {
    --icon-color: var(--flip-tokens-button-icon-color-hover);
    background-color: var(--flip-tokens-button-background-hover);
  }
`,OD=R.default(OA)`
  background-color: var(--icon-color);
`,QM="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgNy40NjU1M0wxMC45MDY1IDMuMzc2NzZDMTEuMTg5NCAzLjE0MTA1IDExLjYwOTggMy4xNzkyNiAxMS44NDU1IDMuNDYyMTFDMTIuMDgxMiAzLjc0NDk3IDEyLjA0MyA0LjE2NTM0IDExLjc2MDEgNC40MDEwNUw2LjQyNjc5IDguODQ1NDhDNi4xNzk1NiA5LjA1MTUxIDUuODIwNDQgOS4wNTE1MSA1LjU3MzIxIDguODQ1NDhMMC4yMzk4OTMgNC40MDEwNUMtMC4wNDI5NTc0IDQuMTY1MzQgLTAuMDgxMTczMyAzLjc0NDk3IDAuMTU0NTM1IDMuNDYyMTFDMC4zOTAyNDQgMy4xNzkyNiAwLjgxMDYyIDMuMTQxMDUgMS4wOTM0NyAzLjM3Njc2TDYgNy40NjU1M1oiIGZpbGw9IiMyMTI1MjkiLz4KPC9zdmc+Cg==",PN="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjQ0MDY4IDIuODQ3NDRDMi40NDA2OCAyLjI4NTggMi44OTU5OSAxLjgzMDQ5IDMuNDU3NjMgMS44MzA0OUg1LjQ5MTU0QzYuMDUzMTggMS44MzA0OSA2LjUwODQ4IDIuMjg1OCA2LjUwODQ4IDIuODQ3NDRWNC4yNzExN0M2LjUwODQ4IDQuODMyODIgNi4wNTMxOCA1LjI4ODEyIDUuNDkxNTQgNS4yODgxMkgzLjQ1NzYzQzIuODk1OTkgNS4yODgxMiAyLjQ0MDY4IDQuODMyODIgMi40NDA2OCA0LjI3MTE3VjIuODQ3NDRaTTUuNDkxNTQgMi44NDc0NEwzLjQ1NzYzIDIuODQ3NDRWNC4yNzExN0g1LjQ5MTU0TDUuNDkxNTQgMi44NDc0NFoiIGZpbGw9IiM0OTUwNTciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjEzNTYgMEMxLjI5MzEzIDAgMC42MTAxNzEgMC42ODI5NTUgMC42MTAxNzEgMS41MjU0MlY4LjgxMDc3QzAuNjEwMTcxIDguODg5NzEgMC41OTE3OTIgOC45Njc1NyAwLjU1NjQ4OSA5LjAzODE3TDAuMTU3OTExIDkuODM1MzNDMC4wNTQwNjM5IDEwLjA0MyAwIDEwLjI3MiAwIDEwLjUwNDJDMCAxMS4zMzAzIDAuNjY5NjcxIDEyIDEuNDk1NzUgMTJINy40NTM0MkM4LjI3OTUgMTIgOC45NDkxNyAxMS4zMzAzIDguOTQ5MTcgMTAuNTA0MkM4Ljk0OTE3IDEwLjI3MiA4Ljg5NTEgMTAuMDQzIDguNzkxMjYgOS44MzUzM0w4LjM5MjY4IDkuMDM4MTdDOC4zNTczOCA4Ljk2NzU3IDguMzM5IDguODg5NzEgOC4zMzkgOC44MTA3N1Y0LjY3ODQ5TDguNzkxOTcgNC42Nzg5N0M4Ljk5MTE4IDQuNjc5MTggOS4xNTI1NiA0Ljg0MDczIDkuMTUyNTYgNS4wMzk5NFY4LjE3NzgzQzkuMTUyNTYgOC45NjQxMyA5Ljc4OTk4IDkuNjAxNTYgMTAuNTc2MyA5LjYwMTU2QzExLjM2MjYgOS42MDE1NiAxMiA4Ljk2NDEzIDEyIDguMTc3ODNWMy45Njg0M0MxMiAzLjYwNDQzIDExLjg2OTkgMy4yNTI0MyAxMS42MzMgMi45NzZMMTEuNDkwNSAyLjgwOTU5QzExLjM1ODkgMi41ODk0MSAxMS4xOTk5IDIuNDA2OTMgMTEuMDMyNiAyLjI3NTE1TDEwLjM4OTYgMS41MjQ1MkMxMC4yMDY5IDEuMzExMjUgOS44ODU4NyAxLjI4NjQ4IDkuNjcyNiAxLjQ2OTE4QzkuNDU5MzQgMS42NTE4OCA5LjQzNDU3IDEuOTcyODcgOS42MTcyNyAyLjE4NjE0TDkuOTA4NjkgMi41MjYzMUM5LjgyNjQgMi44NDI2MSA5Ljg3OTIgMy4yNzM1IDEwLjA3OTMgMy42OTY4NUMxMC4zMDIxIDQuMTY4NDMgMTAuNjUwOSA0LjUxMDM2IDEwLjk4MzEgNC42MjU1N1Y4LjE3NzgzQzEwLjk4MzEgOC40MDI0OSAxMC44MDA5IDguNTg0NjEgMTAuNTc2MyA4LjU4NDYxQzEwLjM1MTYgOC41ODQ2MSAxMC4xNjk1IDguNDAyNDkgMTAuMTY5NSA4LjE3NzgzVjUuMDM5OTRDMTAuMTY5NSA0LjI3OTUgOS41NTM0OCAzLjY2MjgyIDguNzkzMDQgMy42NjIwMkw4LjMzOSAzLjY2MTU0VjEuNTI1NDJDOC4zMzkgMC42ODI5NTUgNy42NTYwNCAwIDYuODEzNTcgMEgyLjEzNTZaTTEuNjI3MTIgMS41MjU0MkMxLjYyNzEyIDEuMjQ0NiAxLjg1NDc3IDEuMDE2OTUgMi4xMzU2IDEuMDE2OTVINi44MTM1N0M3LjA5NDQgMS4wMTY5NSA3LjMyMjA1IDEuMjQ0NiA3LjMyMjA1IDEuNTI1NDJWOC44MTA3N0M3LjMyMjA1IDkuMDQ3NTkgNy4zNzcxOCA5LjI4MTE1IDcuNDgzMDkgOS40OTI5Nkw3Ljg4MTY3IDEwLjI5MDFDNy45MTQ5MSAxMC4zNTY2IDcuOTMyMjIgMTAuNDI5OSA3LjkzMjIyIDEwLjUwNDJDNy45MzIyMiAxMC43Njg3IDcuNzE3ODUgMTAuOTgzMSA3LjQ1MzQyIDEwLjk4MzFIMS40OTU3NUMxLjIzMTMyIDEwLjk4MzEgMS4wMTY5NSAxMC43Njg3IDEuMDE2OTUgMTAuNTA0MkMxLjAxNjk1IDEwLjQyOTkgMS4wMzQyNiAxMC4zNTY2IDEuMDY3NSAxMC4yOTAxTDEuNDY2MDggOS40OTI5NkMxLjU3MTk4IDkuMjgxMTUgMS42MjcxMiA5LjA0NzU5IDEuNjI3MTIgOC44MTA3N1YxLjUyNTQyWiIgZmlsbD0iIzQ5NTA1NyIvPgo8L3N2Zz4K";var GM={exports:{}};(function(A){(function(){var M=new Array(4),I=["#5B5C63","#151E9A","#2197F9","#1FC3DC","#086582","#67D4B4","#AFCE57","#F0CB44","#F28A29","#FC798F","#C1226E","#FAB5EE","#9677EE","#5433B0"];function N(E){for(var Q=0;Q<M.length;Q++)M[Q]=0;for(var Q=0;Q<E.length;Q++)M[Q%4]=(M[Q%4]<<5)-M[Q%4]+E.charCodeAt(Q)}function j(){var E=M[0]^M[0]<<11;return M[0]=M[1],M[1]=M[2],M[2]=M[3],M[3]=M[3]^M[3]>>19^E^E>>8,(M[3]>>>0)/(1<<31>>>0)}function D(){return I[Math.floor(j()*100)%I.length]}function c(E){for(var Q=E,p=E,t=Math.ceil(Q/2),r=Q-t,b=[],l=0;l<p;l++){for(var o=[],y=0;y<t;y++)o[y]=Math.floor(j()*2.3);var O=o.slice(0,r);O.reverse(),o=o.concat(O);for(var m=0;m<o.length;m++)b.push(o[m])}return b}function x(E){var Q={};return Q.seed=E.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),N(Q.seed),Q.size=E.size||8,Q.scale=E.scale||4,Q.color=E.color||D(),Q.bgcolor=E.bgcolor||D(),Q.spotcolor=E.spotcolor||D(),Q}function i(E,Q){E=x(E||{});var p=c(E.size),t=Math.sqrt(p.length);Q.width=Q.height=E.size*E.scale;var r=Q.getContext("2d");r.fillStyle=E.bgcolor,r.fillRect(0,0,Q.width,Q.height),r.fillStyle=E.color;for(var b=0;b<p.length;b++)if(p[b]){var l=Math.floor(b/t),o=b%t;r.fillStyle=p[b]==1?E.color:E.spotcolor,r.filter="blur(17px)",r.fillRect(o*E.scale,l*E.scale,E.scale,E.scale)}return Q}function n(E){var Q=document.createElement("canvas");return i(E,Q),Q}function Z(E){return E=x(E||{}),"100% 100% linear-gradient(to bottom, "+E.bgcolor+" 0%, "+E.spotcolor+" 100%) no-repeat"}var U={create:n,background:Z,render:i};A.exports=U,typeof window<"u"&&(window.blockies=U)})()})(GM);const kN=A=>(A==null?void 0:A.endsWith(".jpg"))||(A==null?void 0:A.endsWith(".jpeg"))||(A==null?void 0:A.endsWith(".png"))||(A==null?void 0:A.endsWith(".svg"))||(A==null?void 0:A.endsWith(".gif")),SI=A=>{const{size:M,marginRight:I,asset:N,network:j,isHeader:D}=A,c=RM.useMemo(()=>N!==void 0?!kN(N.logo):j!==void 0?!kN(j.logo):!0,[j,N]),x=RM.useMemo(()=>{if(c){if(N!==void 0)return GM.exports.background({seed:N.contractAddress?N.contractAddress.toLowerCase():N.name});if(j!==void 0)return GM.exports.background({seed:j.chainName})}return""},[c,N,j]),i=RM.useMemo(()=>{if(c){if(N!==void 0)return N.symbol.charAt(0);if(j!==void 0)return j.chainName.charAt(0)}return""},[c,N,j]),n=RM.useMemo(()=>{if(!c){if(N!==void 0)return N.logo;if(j!==void 0)return j.logo}return""},[c,N,j]);return c?u(RD,{size:M,panelBackground:x,marginRight:I,children:u(YD,{children:i})}):u(HD,{isHeader:D,size:M,src:n,marginRight:I})},RD=R.default(K)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${A=>A.size}px;
  width: ${A=>A.size}px;
  border-radius: 100%;
  margin-right: ${A=>A.marginRight?A.marginRight:0}px;
  background: ${A=>A.panelBackground?A.panelBackground:"none"};
`,YD=R.default(F)`
  color: ${A=>A.theme.color.white};
`,HD=R.default.img`
  height: ${A=>A.size}px;
  width: ${A=>A.size}px;
  margin-right: ${A=>A.marginRight?A.marginRight:0}px;
  @media screen and (max-width: 570px) {
    height: ${A=>A.isHeader?40:A.size}px;
    width: ${A=>A.isHeader?40:A.size}px;
  }
`,qM=A=>{const{onClick:M,buttonType:I,buttonSize:N,text:j,disabled:D,hasBackground:c,hasShadow:x,networkFeeFiatValue:i,isHeader:n,networkNotSupported:Z,asset:U,network:E}=A,{getLocale:Q}=nA(),p=G.default.useMemo(()=>j?j.length>3:!0,[j]);return P(mD,{onClick:M,buttonType:I,moreRightPadding:p,buttonSize:N,disabled:D,hasBackground:c,hasShadow:x,networkNotSupported:Z,children:[!Z&&P(bA,{children:[P(J,{children:[j&&u(SI,{asset:U,network:E,size:N==="small"||N==="medium"?24:40,marginRight:8}),u(pA,{dontHide:!n,children:u(F,{isBold:j!==void 0,textColor:j?"text01":"text03",textSize:N==="small"||N==="medium"?"14px":"18px",children:j!=null?j:Q("braveSwapSelectToken")})})]}),P(pA,{dontHide:!n,children:[i&&P(bA,{children:[u(sA,{size:8}),P(pD,{children:[u(kD,{icon:PN,size:12}),u(F,{textSize:"14px",textColor:"text01",children:i})]})]}),N!=="small"&&u(sA,{size:8})]})]}),Z&&P(bA,{children:[u(vD,{isBold:!0,textSize:"14px",children:Q("braveSwapSwitchNetwork")}),u(sA,{size:8})]}),u(PD,{networkNotSupported:Z,size:12,icon:QM})]})},mD=R.default(BA)`
  /* Variables */
  --big-padding: 10px ${A=>A.moreRightPadding?12:10}px 10px 12px;
  --medium-padding: 8px 16px;
  --small-padding: 4px 12px 4px 4px;

  @media screen and (max-width: 570px) {
    --big-padding: 10px ${A=>A.moreRightPadding?10:8}px 10px 8px;
    --medium-padding: 4px 16px 4px 8px;
    --small-padding: 4px 16px 4px 8px;
  }

  /* Styles */
  background-color: ${A=>A.hasBackground?A.networkNotSupported?A.theme.color.red40:A.theme.color.legacy.background01:"transparent"};
  border-radius: 100px;
  box-shadow: ${A=>A.hasShadow?"0px 0px 10px rgba(0, 0, 0, 0.05)":"none"};
  justify-content: ${A=>A.buttonSize==="small"?"space-between":"center"};
  padding: ${A=>A.buttonSize==="small"?"var(--small-padding)":A.buttonSize==="medium"?"var(--medium-padding)":"var(--big-padding)"};
  white-space: nowrap;
  width: ${A=>A.buttonSize==="small"?"140px":"unset"};
  :disabled {
    opacity: 0.3;
  }
  &:hover:not([disabled]) {
    background-color: ${A=>A.networkNotSupported?A.theme.color.red40:A.buttonType==="secondary"||A.buttonSize==="small"?"var(--token-or-network-button-background-hover-secondary)":"var(--token-or-network-button-background-hover-primary)"};
  }
`,PD=R.default(OA)`
  background-color: ${A=>A.networkNotSupported?A.theme.color.white:A.theme.color.legacy.text01};
`,kD=R.default(OA)`
  background-color: ${A=>A.theme.color.legacy.text02};
  margin-right: 6px;
`,pD=R.default(J)`
  padding: 2px 8px;
  border-radius: 8px;
  background-color: var(--token-or-network-bubble-background);
`,vD=R.default(F)`
  color: ${A=>A.theme.color.white};
`,sI=A=>{const{isSelected:M,buttonSize:I,buttonStyle:N,buttonText:j,buttonType:D,buttonWidth:c,disabled:x,horizontalMargin:i,marginRight:n,onClick:Z,verticalMargin:U}=A;return u(WD,{buttonStyle:N,buttonType:D,buttonWidth:c,disabled:x,horizontalMargin:i,onClick:Z,verticalMargin:U,buttonSize:I,isSelected:M,marginRight:n,children:j})},WD=R.default(BA)`
  --button-background: ${A=>A.buttonStyle==="square"?A.theme.color.legacy.divider01:A.buttonType==="secondary"?A.theme.color.legacy.background01:A.theme.color.legacy.interactive05};
  --button-background-hover: ${A=>A.buttonStyle==="square"?A.theme.color.legacy.interactive05:A.theme.color.legacy.interactive04};
  --vertical-margin: ${A=>{var M;return(M=A.verticalMargin)!=null?M:0}}px;
  --horizontal-margin: ${A=>{var M;return(M=A.horizontalMargin)!=null?M:0}}px;
  background-color: var(--button-background);
  border-radius: ${A=>A.buttonStyle==="square"?"0px":"48px"};
  border: ${A=>A.buttonType==="secondary"?A.isSelected?"1px solid var(--standard-button-border-secondary-selected)":`1px solid ${A.theme.color.legacy.interactive08}`:"none"};
  color: ${A=>A.buttonType==="secondary"?A.isSelected?"var(--standard-button-border-secondary-selected)":A.theme.color.legacy.text03:A.buttonStyle==="square"?A.theme.color.legacy.text02:A.theme.color.white};
  font-size: ${A=>A.buttonStyle==="square"||A.buttonSize==="small"?"14px":"16px"};
  margin: var(--vertical-margin) var(--horizontal-margin);
  margin-right: ${A=>{var M;return(M=A.marginRight)!=null?M:0}}px;
  padding: ${A=>A.buttonSize==="small"?"6px 15px":"18px"};
  width: ${A=>A.buttonWidth==="dynamic"?"unset":A.buttonWidth==="full"?"100%":`${A.buttonWidth}px`};
  &:hover:not([disabled]) {
    background-color: ${A=>A.buttonType==="secondary"?A.theme.color.legacy.background01:"var(--button-background-hover)"};
    border: ${A=>A.buttonType==="secondary"?"1px solid var(--standard-button-border-secondary-selected)":"none"};
    color: ${A=>A.buttonType==="secondary"?A.isSelected?"var(--standard-button-border-secondary-selected)":A.theme.color.legacy.text03:A.theme.color.white};
  }
  :disabled {
    background-color: ${A=>A.theme.color.legacy.disabled};
    color: var(--standard-button-color-disabled);
  }
`,pN=A=>{const{buttonText:M,onClick:I}=A;return u(VD,{onClick:I,children:M})},VD=R.default(BA)`
  background-color: var(--preset-button-background);
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  padding: 1px 6px;
  text-transform: uppercase;
  &:hover:not([disabled]) {
    background-color: var(--preset-button-background-hover);
  }
`,XD=A=>{const{onClick:M,token:I,balance:N,disabled:j,isWalletConnected:D}=A,c=G.default.useCallback(()=>{M(I)},[I,M]);return P(hD,{onClick:c,disabled:j,children:[P(J,{children:[u(SI,{asset:I,size:40,marginRight:12}),P(FD,{horizontalAlign:"flex-start",children:[u(F,{isBold:!0,textColor:"text01",textSize:"14px",textAlign:"left",children:I.name}),u(F,{textColor:"text03",textSize:"14px",textAlign:"left",children:I.symbol})]})]}),D&&u(F,{isBold:!0,textColor:"text01",textSize:"14px",children:N.divideByDecimals(I.decimals).formatAsAsset(6,I.symbol)})]})},hD=R.default(BA)`
  background-color: none;
  border-radius: 8px;
  justify-content: space-between;
  padding: 16px 8px;
  white-space: nowrap;
  width: calc(100% - 24px);
  margin-left: 12px;
  :disabled {
    opacity: 0.3;
  }
  &:hover:not([disabled]) {
    box-shadow: var(--token-list-button-shadow);
    background-color: ${A=>A.theme.color.legacy.background01};
  }
`,FD=R.default(yA)`
  @media screen and (max-width: 570px) {
    width: 40vw;
    overflow: hidden;
    white-space: pre-line;
  }
`,fD=A=>{const{onClick:M,option:I,isSelected:N,isBest:j,spotPrice:D}=A,{defaultBaseCurrency:c,getLocale:x}=nA(),i=G.default.useCallback(()=>{M(I)},[I,M]),n=G.default.useMemo(()=>I.toAmount.times(D||0).formatAsFiat(c),[D,I,c]);return P(JD,{onClick:i,isSelected:N,children:[j&&u(KD,{isSelected:N,children:x("braveSwapBest")}),u(F,{isBold:!0,textColor:"text01",textSize:"14px",textAlign:"left",children:I.label}),P(yA,{horizontalAlign:"flex-end",children:[u(F,{isBold:!0,textColor:"text01",textSize:"14px",textAlign:"right",children:I.toAmount.formatAsAsset(6,I.toToken.symbol)}),P(F,{textColor:"text03",textSize:"14px",textAlign:"right",children:["~",n]})]})]})},JD=R.default(BA)`
  --best-background: ${A=>A.isSelected?A.theme.color.legacy.interactive05:A.theme.color.legacy.focusBorder};
  background-color: var(--select-quote-button-background);
  border-radius: 8px;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
  margin: 0px 0px 10px 10px;
  position: relative;
  box-sizing: border-box;
  box-shadow: ${A=>A.isSelected?`0px 0px 0px 1px ${A.theme.color.legacy.interactive05} inset`:"none"};
  &:hover {
    --best-background: ${A=>A.theme.color.legacy.interactive05};
    box-shadow: 0px 0px 0px 1px ${A=>A.theme.color.legacy.interactive05} inset;
  }
`,KD=R.default(K)`
  font-size: 12px;
  line-height: 20px;
  color: ${A=>A.theme.color.white};
  border-radius: 7px 7px 7px 0px;
  background-color: var(--best-background);
  padding: 0px 16px;
  position: absolute;
  z-index: 5;
  top: -9px;
  left: 0px;
`,vN=()=>{const{defaultBaseCurrency:A}=nA(),{state:{spotPrices:M,networkFeeEstimates:I}}=wM();return{getNetworkFeeFiatEstimate:G.default.useCallback(j=>!I[j.chainId]||M.nativeAsset===""?"":new k(M.nativeAsset).times(I[j.chainId].gasFee).formatAsFiat(A),[M,I,A])}},qD=A=>{const{network:M,isHeader:I,onClick:N}=A,{getNetworkFeeFiatEstimate:j}=vN(),D=G.default.useCallback(()=>{N(M)},[M,N]);return P(_D,{onClick:D,isHeader:I,children:[P(J,{children:[u(SI,{size:24,marginRight:8,network:M,isHeader:I}),u(F,{isBold:!0,textSize:"14px",children:M.chainName})]}),u(F,{textSize:"14px",children:j(M)})]})},_D=R.default(BA)`
  justify-content: space-between;
  padding: 8px 12px;
  white-space: nowrap;
  width: 100%;
  color: ${A=>A.theme.color.legacy.text03};
  &:hover {
    color: ${A=>A.theme.color.legacy.text01};
  }
  @media screen and (max-width: 570px) {
    padding: ${A=>A.isHeader?"8px 20px":"8px 12px"};
  }
`,WN=A=>{const M=A.slice(0,4),I=A.slice(-4);return M.concat("...",I)};R.default(BA)`
  border-radius: 4px;
  justify-content: space-between;
  padding: 5px 18px;
  white-space: nowrap;
  width: 100%;
  background-color: none;
  margin-bottom: 2px;
  &:hover {
    background-color: var(--account-list-button-hover-background);
  }
`;const $D=A=>{const{onClick:M}=A;return u(Ac,{onClick:M,children:u(Mc,{})})},Ac=R.default(BA)`
  background-color: ${A=>A.theme.color.legacy.background01};
  border-radius: 100%;
  box-shadow: var(--theme-button-box-shadow);
  height: 40px;
  width: 40px;
  margin-right: 16px;
  &:hover {
    background-color: var(--theme-button-background-hover);
  }
`,Mc=R.default(K)`
  height: 20px;
  width: 20px;
  background-image: var(--theme-button-icon);
  background-size: cover;
`,Ic=A=>{const{onClick:M}=A,{getLocale:I,account:N}=nA(),j=G.default.useMemo(()=>{if(!!N)return GM.exports.create({seed:N.address.toLowerCase()||"",size:8,scale:16}).toDataURL()},[N]);return u(Nc,{onClick:M,isConnected:N!==void 0,children:N?P(bA,{children:[j&&u(jc,{orb:j})," ",P(pA,{children:[u(F,{textSize:"14px",textColor:"text01",isBold:!0,children:N.name}),u(sA,{size:4})]}),u(F,{textSize:"14px",textColor:"text02",isBold:!0,responsiveTextSize:"12px",children:WN(N.address)}),u(sA,{size:7}),u(gc,{size:12,icon:QM})]}):I("braveSwapConnectWallet")})},Nc=R.default(BA)`
  background-color: ${A=>A.isConnected?"var(--connect-wallet-button-background-connected)":"var(--connect-wallet-button-background-disconnected)"};
  border-radius: 48px;
  color: ${A=>A.isConnected?A.theme.color.legacy.text01:A.theme.color.white};
  font-size: 14px;
  padding: ${A=>A.isConnected?"8px 16px":"10px 22px"};
  box-shadow: ${A=>A.isConnected?"0px 0px 10px rgba(0, 0, 0, 0.05)":"none"};
  @media screen and (max-width: 570px) {
    font-size: 12px;
    padding: ${A=>A.isConnected?"4px 8px":"6px 16px"};
  }
`,jc=R.default(K)`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-image: url(${A=>A.orb});
  background-size: cover;
  margin-right: 8px;
`,gc=R.default(OA)`
  display: none;
  background-color: ${A=>A.theme.color.legacy.text01};
  @media screen and (max-width: 570px) {
    display: block;
  }
`,_M=A=>{const{boxType:M,children:I}=A;return u(Dc,{boxType:M,children:I})},Dc=R.default(K)`
  background-color: ${A=>A.boxType==="primary"?"var(--box-background-primary)":"var(--box-background-secondary)"};
  box-sizing: border-box;
  border-radius: 16px;
  border: ${A=>A.boxType==="secondary"?`1px solid ${A.theme.color.legacy.divider01}`:"none"};
  height: ${A=>A.boxType==="primary"?"122px":"unset"};
  min-height: ${A=>A.boxType==="secondary"?"88px":"114px"};
  padding: 14px 16px 14px 8px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 570px) {
    min-height: ${A=>A.boxType==="secondary"?"114px":"122px"};
  }
`,VN=A=>{const{onChange:M,value:I,autoFocus:N,hasError:j,disabled:D}=A,c=G.default.useCallback(x=>{M(x.target.value)},[M]);return u(cc,{placeholder:"0.0",type:"number",spellCheck:!1,autoFocus:N,value:I,hasError:j,onChange:c,disabled:D!=null?D:!1})},cc=R.default(DM)`
  color: ${A=>A.hasError?A.theme.color.red40:"inherit"};
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  text-align: right;
  width: 100%;
  ::placeholder {
    color: ${A=>A.theme.color.legacy.text03};
  }
`,ic="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjIgMTQuNEMzLjIyMzY2IDE0LjQgMCAxMS4xNzYzIDAgNy4xOTk1N0MwIDMuMjIzNTkgMy4yMjM4MSAwIDcuMiAwQzExLjE3NjIgMCAxNC40IDMuMjIzNTkgMTQuNCA3LjE5OTU3QzE0LjQgOS4wNDI1OSAxMy43MDc2IDEwLjcyMzkgMTIuNTY4NyAxMS45OTc1TDE3Ljc2NTggMTYuNzQ4NkMxOC4wNTkzIDE3LjAxNjkgMTguMDc5NyAxNy40NzIzIDE3LjgxMTQgMTcuNzY1OEMxNy41NDMxIDE4LjA1OTMgMTcuMDg3NyAxOC4wNzk3IDE2Ljc5NDIgMTcuODExNEwxMS41MDIzIDEyLjk3MzZDMTAuMzAyIDEzLjg2OTYgOC44MTI5MiAxNC40IDcuMiAxNC40Wk0xMS4xMzY5IDExLjQwNDRDMTEuMDgzMyAxMS40MzgxIDExLjAzMzMgMTEuNDc5NSAxMC45ODg2IDExLjUyODVDMTAuOTc2OSAxMS41NDEyIDEwLjk2NTkgMTEuNTU0MiAxMC45NTUzIDExLjU2NzVDOS45NDY5NCAxMi40MzU0IDguNjM0NjkgMTIuOTYgNy4xOTk5NyAxMi45NkM0LjAxODkzIDEyLjk2IDEuNDM5OTcgMTAuMzgxIDEuNDM5OTcgNy4xOTk1N0MxLjQzOTk3IDQuMDE4OSA0LjAxOTA1IDEuNDQgNy4xOTk5NyAxLjQ0QzEwLjM4MDkgMS40NCAxMi45NiA0LjAxODkgMTIuOTYgNy4xOTk1N0MxMi45NiA4Ljg1ODMzIDEyLjI1ODkgMTAuMzUzMyAxMS4xMzY5IDExLjQwNDRaIiBmaWxsPSIjODY4RTk2Ii8+Cjwvc3ZnPgo=",zc=A=>{const{onChange:M,value:I,autoFocus:N,placeholder:j}=A,D=G.default.useCallback(c=>{M(c.target.value)},[M]);return P(bA,{children:[u(xc,{icon:ic,size:18}),u(ec,{placeholder:j,spellCheck:!1,autoFocus:N,value:I,onChange:D})]})},ec=R.default(DM)`
  flex: 1;
  ::placeholder {
    color: ${A=>A.theme.color.legacy.text03};
  }
`,xc=R.default(OA)`
  background-color: ${A=>A.theme.color.legacy.text03};
  margin-right: 10px;
`;R.default(DM)`
  width: 100%;
  height: 32px;
  border: 1px solid ${A=>A.theme.color.legacy.interactive08};
  border-radius: 4px;
  padding-left: 12px;
  font-weight: 200;
  ::placeholder {
    color: ${A=>A.theme.color.legacy.text03};
    font-size: 14px;
    font-weight: 200;
  }
  :disabled {
    border: 1px solid ${A=>A.theme.color.legacy.disabled};
    ::placeholder {
      color: ${A=>A.theme.color.legacy.disabled};
    }
  }
`;const uc=A=>{const{onChange:M,value:I}=A,N=G.default.useCallback(j=>{M(j.target.value)},[M]);return P(lc,{children:[u(wc,{type:"number",value:I,onChange:N,placeholder:"0"}),u(F,{textSize:"14px",textColor:"text03",isBold:!0,children:"%"})]})},lc=R.default(K)`
  display: flex;
  width: 94px;
  height: 32px;
  background-color: ${A=>A.theme.color.legacy.background01};
  border: 1px solid ${A=>A.theme.color.legacy.interactive08};
  border-radius: 4px;
  flex-direction: row;
  padding: 0px 12px;
  justify-content: space-between;
  box-sizing: border-box;
  &:focus-within {
    border: 1px solid var(--slippage-input-border-selected);
  }
`,wc=R.default(DM)`
  width: 50px;
  border: none;
  font-weight: 400;
  ::placeholder {
    color: ${A=>A.theme.color.legacy.text03};
    font-size: 14px;
    font-weight: 200;
  }
  :disabled {
    ::placeholder {
      color: ${A=>A.theme.color.legacy.disabled};
    }
  }
`,Cc=A=>{const{token:M,onClickSelectToken:I,onInputChange:N,hasInputError:j,inputValue:D,tokenBalance:c,fiatValue:x}=A,{getLocale:i,isWalletConnected:n,account:Z}=nA(),U=()=>{!M||N(c.div(2).parseInteger().divideByDecimals(M.decimals).format(6))},E=()=>{!M||N(c.divideByDecimals(M.decimals).format())};return u(_M,{boxType:"primary",children:P(yA,{columnWidth:"full",columnHeight:"full",children:[u(J,{rowWidth:"full",horizontalAlign:"flex-end",children:M&&u(F,{textSize:"14px",textColor:j?"error":"text02",maintainHeight:!0,children:!c.isUndefined()&&n?`${i("braveSwapBalance")} ${c.divideByDecimals(M.decimals).format(6)}`:""})}),P(J,{rowWidth:"full",verticalAlign:"center",children:[P(J,{children:[u(qM,{onClick:I,asset:M,text:M==null?void 0:M.symbol,buttonType:"primary"}),M&&Z!==void 0&&P(J,{children:[u(sM,{height:28,marginLeft:8,marginLeftResponsive:6,marginRight:8}),u(pA,{maxWidth:570,children:u(pN,{buttonText:i("braveSwapHalf"),onClick:U})}),u(pN,{buttonText:i("braveSwapMax"),onClick:E})]})]}),u(VN,{onChange:N,value:D,hasError:j,autoFocus:!0})]}),u(J,{rowWidth:"full",horizontalAlign:"flex-end",children:M&&u(F,{textSize:"14px",textColor:"text03",maintainHeight:!0,children:x})})]})})},ac=A=>{const{onClickSelectToken:M,onInputChange:I,token:N,inputValue:j,hasInputError:D,isLoading:c,disabled:x}=A,{getLocale:i}=nA();return P(yA,{columnWidth:"full",children:[u(nc,{rowWidth:"full",horizontalAlign:"flex-end",children:c&&P(bA,{children:[u(GD,{}),u(F,{textSize:"12px",textColor:D?"error":"text03",isBold:!1,children:i("braveSwapFindingPrice")})]})}),P(J,{rowWidth:"full",children:[u(qM,{onClick:M,asset:N,text:N==null?void 0:N.symbol,buttonType:"secondary"}),u(VN,{hasError:D,onChange:I,value:j,disabled:x})]}),u(KA,{size:6})]})},nc=R.default(J)`
  margin-top: 2px;
  height: 4px;
`,XN=A=>A?A.split(" ")[0]:"",aM="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjk2NDg0IDE3LjQyODJDMy41NDE3OCAxNy44NTEzIDIuODU1ODUgMTcuODUxMyAyLjQzMjc4IDE3LjQyODJDMi4wMDk3MSAxNy4wMDUxIDIuMDA5NzEgMTYuMzE5MiAyLjQzMjc4IDE1Ljg5NjFMOC4wMzkwOCAxMC4yODk4TDIuNTY3MzggNC44MTgxMkMyLjE0NDMxIDQuMzk1MDUgMi4xNDQzMSAzLjcwOTEyIDIuNTY3MzggMy4yODYwNUMyLjk5MDQ1IDIuODYyOTggMy42NzYzOCAyLjg2Mjk4IDQuMDk5NDUgMy4yODYwNUw5LjU3MTE1IDguNzU3NzVMMTUuMDQyOCAzLjI4NjA1QzE1LjQ2NTkgMi44NjI5OCAxNi4xNTE4IDIuODYyOTggMTYuNTc0OSAzLjI4NjA1QzE2Ljk5OCAzLjcwOTEyIDE2Ljk5OCA0LjM5NTA1IDE2LjU3NDkgNC44MTgxMkwxMS4xMDMyIDEwLjI4OThMMTYuNzA5NSAxNS44OTYxQzE3LjEzMjYgMTYuMzE5MiAxNy4xMzI2IDE3LjAwNTEgMTYuNzA5NSAxNy40MjgyQzE2LjI4NjUgMTcuODUxMyAxNS42MDA1IDE3Ljg1MTMgMTUuMTc3NSAxNy40MjgyTDkuNTcxMTUgMTEuODIxOUwzLjk2NDg0IDE3LjQyODJaIiBmaWxsPSIjMjEyNTI5Ii8+Cjwvc3ZnPgo=",hN=A=>{const{onSelectNetwork:M,onClose:I,isHeader:N}=A,{getLocale:j,supportedNetworks:D}=nA();return P(Tc,{isHeader:N,children:[P(tc,{isHeader:N,rowWidth:"full",horizontalPadding:20,verticalPadding:12,children:[u(F,{textSize:"20px",textColor:"text01",isBold:!0,children:j("braveSwapChangeNetwork")}),u(WA,{icon:aM,onClick:I,size:20})]}),u(KA,{size:4}),D.map(c=>u(qD,{onClick:M,network:c,isHeader:N},c.chainId))]})},Tc=R.default(K)`
  justify-content: flex-start;
  background-color: ${A=>A.theme.color.legacy.background01};
  min-width: 222px;
  position: absolute;
  padding-bottom: 4px;
  z-index: 10;
  top: ${A=>A.isHeader?42:40}px;
  box-shadow: 0px 0px 16px var(--network-selector-shadow-color);
  right: ${A=>A.isHeader?"unset":"-10px"};
  border-radius: ${A=>A.isHeader?16:4}px;
  @media screen and (max-width: 800px) {
    right: ${A=>A.isHeader?"0px":"unset"};
  }
  @media screen and (max-width: 570px) {
    position: ${A=>A.isHeader?"fixed":"absolute"};
    right: ${A=>A.isHeader?"0px":"-20px"};
    left: ${A=>A.isHeader?"0px":"unset"};
    top: ${A=>A.isHeader?"72px":"40px"};
    bottom: ${A=>A.isHeader?"0px":"unset"};
    width: ${A=>A.isHeader?"auto":"90vw"};
    border-radius: ${A=>A.isHeader?"16px 16px 0px 0px":"4px"};
  }
`,tc=R.default(J)`
  display: none;
  padding-top: 24px;
  @media screen and (max-width: 570px) {
    display: ${A=>A.isHeader?"flex":"none"};
  }
`,Ec="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NjcxIDE2SDYuNjY0MDVDNS45MjkzMiAxNiA1LjMzMTEgMTUuNDAyIDUuMzMxMSAxNC42NjY3VjExLjMzMzNDNS4zMzExIDEwLjk2NTMgNS42Mjk1NCAxMC42NjY3IDUuOTk3NTcgMTAuNjY2N0M2LjM2NTYxIDEwLjY2NjcgNi42MzU5NCAxMC45NjUzIDYuNjM1OTQgMTEuMzMzM1YxNC42NjY3SDE0LjY2NzFWMS4zMzMzM0g2LjYzNTk0VjQuNjY2NjdDNi42MzU5NCA1LjAzNDY3IDYuMzY1NjEgNS4zMzMzMyA1Ljk5NzU3IDUuMzMzMzNDNS42Mjk1NCA1LjMzMzMzIDUuMzMxMSA1LjAzNDY3IDUuMzMxMSA0LjY2NjY3VjEuMzMzMzNDNS4zMzExIDAuNTk4IDUuOTI5MzIgMCA2LjY2NDA1IDBIMTQuNjY3MUMxNS40MDI1IDAgMTYgMC41OTggMTYgMS4zMzMzM1YxNC42NjY3QzE2IDE1LjQwMiAxNS40MDI1IDE2IDE0LjY2NzEgMTZaTTIuMjc1MSA3LjMzMzMzSDExLjMyODdDMTEuNjk2NyA3LjMzMzMzIDExLjk5NTEgNy42MzIgMTEuOTk1MSA4QzExLjk5NTEgOC4zNjggMTEuNjk2NyA4LjY2NjY3IDExLjMyODcgOC42NjY2N0gyLjI3NTc3TDMuODAzNDQgMTAuMTk1M0M0LjA2Mzc0IDEwLjQ1NTMgNC4wNjM3NCAxMC44NzggMy44MDM0NCAxMS4xMzhDMy42NzI5NSAxMS4yNjggMy41MDIzMiAxMS4zMzMzIDMuMzMyMzYgMTEuMzMzM0MzLjE2MTcyIDExLjMzMzMgMi45OTEwOSAxMS4yNjggMi44NjEyOCAxMS4xMzhMMC4xOTUzOTEgOC40NzEzM0MwLjEzMzgzIDguNDEgMC4wODU2NTEgOC4zMzY2NyAwLjA1MTUyNDQgOC4yNTQ2N0MwLjAxODczNjEgOC4xNzQ2NyAwLjAwMjAwNzQ0IDguMDkgMC4wMDEzMzgzIDguMDA0NjdDMC4wMDEzMzgzIDguMDAzMzMgMCA4LjAwMTMzIDAgOEMwIDcuOTk0NjcgMC4wMDI2NzY1OSA3Ljk5MDY3IDAuMDAzMzQ1NzQgNy45ODUzM0MwLjAwNDY4NDA0IDcuOTAzMzMgMC4wMjAwNzQ0IDcuODIyIDAuMDUxNTI0NCA3Ljc0NTMzQzAuMDg1NjUxIDcuNjY0IDAuMTMzODMgNy41OSAwLjE5NjA2IDcuNTI4TDIuODYxMjggNC44NjJDMy4xMjA5MSA0LjYwMTMzIDMuNTQzMTQgNC42MDEzMyAzLjgwMzQ0IDQuODYyQzQuMDYzNzQgNS4xMjIgNC4wNjM3NCA1LjU0NDY3IDMuODAzNDQgNS44MDQ2N0wyLjI3NTEgNy4zMzMzM1oiIGZpbGw9IiM0OTUwNTciLz4KPC9zdmc+Cg==",Lc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4zNjIyIDE1LjM2NDVDMTMuNjYyNiAxNy4wNjQgMTEuNDAyMiAxOCA4Ljk5Njg5IDE4QzYuNTkyMzMgMTggNC4zMzE5MyAxNy4wNjQgMi42MzE1NCAxNS4zNjM4Qy0wLjg3NzE3OSAxMS44NTQ1IC0wLjg3NzE3OSA2LjE0NDc1IDIuNjMxNTQgMi42MzYyNUM0LjMzMTkzIDAuOTM2IDYuNTkyMzMgMCA4Ljk5Njg5IDBDMTEuNDAyMiAwIDEzLjY2MjYgMC45MzYgMTUuMzYyMiAyLjYzNjI1QzE3LjA2MzQgNC4zMzU3NSAxOCA2LjU5NjI1IDE4IDlDMTggMTEuNDAzNyAxNy4wNjM0IDEzLjY2NDMgMTUuMzYyMiAxNS4zNjQ1Wk0xNC4zMDE4IDMuNjk2NzVDMTIuODg1MiAyLjI4IDExLjAwMTQgMS41IDguOTk2ODkgMS41QzYuOTkzMDkgMS41IDUuMTA5MyAyLjI4IDMuNjkyNjggMy42OTY3NUMwLjc2ODEyMSA2LjYyMSAwLjc2ODEyMSAxMS4zNzkgMy42OTI2OCAxNC4zMDMyQzUuMTA5MyAxNS43MiA2Ljk5MzA5IDE2LjUgOC45OTY4OSAxNi41QzExLjAwMTQgMTYuNSAxMi44ODUyIDE1LjcyIDE0LjMwMTggMTQuMzAzMkMxNS43MTkyIDEyLjg4NzIgMTYuNDk5NiAxMS4wMDMzIDE2LjQ5OTYgOUMxNi40OTk2IDYuOTk2NzUgMTUuNzE5MiA1LjExMzUgMTQuMzAxOCAzLjY5Njc1Wk0xMC40OTggMTQuMjVINy40OTcyNUM3LjA4MzY2IDE0LjI1IDYuNzQ3MDUgMTMuOTE0IDYuNzQ3MDUgMTMuNUM2Ljc0NzA1IDEzLjA4NiA3LjA4MzY2IDEyLjc1IDcuNDk3MjUgMTIuNzVIOC4yNDc0NVY5Ljc1SDcuNDk3MjVDNy4wODM2NiA5Ljc1IDYuNzQ3MDUgOS40MTQgNi43NDcwNSA5QzYuNzQ3MDUgOC41ODYgNy4wODM2NiA4LjI1IDcuNDk3MjUgOC4yNUg4Ljk5NzY0QzkuNDExOTkgOC4yNSA5Ljc0Nzg0IDguNTg2IDkuNzQ3ODQgOVYxMi43NUgxMC40OThDMTAuOTEyNCAxMi43NSAxMS4yNDgyIDEzLjA4NiAxMS4yNDgyIDEzLjVDMTEuMjQ4MiAxMy45MTQgMTAuOTEyNCAxNC4yNSAxMC40OTggMTQuMjVaTTguOTk3NjQgNi43NUM4LjE3MDQ2IDYuNzUgNy40OTcyNSA2LjA3NjUgNy40OTcyNSA1LjI0OTI1QzcuNDk3MjUgNC40MjI3NSA4LjE3MDQ2IDMuNzUgOC45OTc2NCAzLjc1QzkuODI1NTcgMy43NSAxMC40OTggNC40MjI3NSAxMC40OTggNS4yNDkyNUMxMC40OTggNi4wNzY1IDkuODI1NTcgNi43NSA4Ljk5NzY0IDYuNzVaIiBmaWxsPSIjMjEyNTI5Ii8+Cjwvc3ZnPgo=",dc=A=>{const{onClick:M,address:I,name:N}=A,j=G.default.useMemo(()=>GM.exports.create({seed:I.toLowerCase()||"",size:8,scale:16}).toDataURL(),[I]);return P(yc,{onClick:M,children:[u(Bc,{orb:j})," ",u(oc,{textSize:"14px",isBold:!0,children:N}),u(sA,{size:4}),u(F,{textSize:"14px",textColor:"text03",isBold:!1,children:WN(I)})]})},yc=R.default(BA)`
  --account-text-color: ${A=>A.theme.color.legacy.text02};
  display: flex;
  justify-content: flex-start;
  background-color: ${A=>A.theme.color.legacy.background01};
  padding: 8px 10px;
  width: 100%;
  &:hover {
    --account-text-color: ${A=>A.theme.color.legacy.text01};
  }
`,Bc=R.default(K)`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-image: url(${A=>A.orb});
  background-size: cover;
  margin-right: 8px;
  @media screen and (max-width: 570px) {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`,oc=R.default(F)`
  color: var(--account-text-color);
`,FN=A=>{const{onClick:M,icon:I,text:N}=A;return P(Sc,{onClick:M,children:[u(sc,{size:16,icon:I}),N]})},Sc=R.default(BA)`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 14px;
  color: ${A=>A.theme.color.legacy.text02};
  width: 100%;
  margin: 0px;
  margin-right: 16px;
  padding: 12px 4px;
`,sc=R.default(OA)`
  background-color: ${A=>A.theme.color.legacy.text02};
  margin-right: 10px;
`,bc=A=>{const{onHideModal:M,refreshBlockchainState:I}=A,{getLocale:N,walletAccounts:j,network:D,switchAccount:c,disconnectWallet:x}=nA(),i=G.default.useMemo(()=>j.filter(E=>E.coin===D.coin),[j,D]),n=G.default.useCallback(async E=>{await c(E),M(),await I({account:E})},[M,c,I]),Z=G.default.useCallback(async()=>{x&&await x(),await M()},[x,M]),U=G.default.useCallback(()=>{window.open("https://support.brave.com/hc/en-us/articles/8155407080845-Brave-Swaps-FAQ")},[]);return P(Qc,{children:[P(yA,{columnWidth:"full",verticalPadding:12,horizontalPadding:6,horizontalAlign:"flex-start",verticalAlign:"flex-start",children:[P(J,{verticalPaddingResponsive:8,horizontalPadding:10,rowWidth:"full",marginBottom:4,children:[u(J,{children:u(Gc,{textSize:"12px",responsiveTextSize:"16px",textColor:"text02",isBold:!1,children:N("braveSwapAccounts")})}),u(bM,{maxWidth:570,children:u(WA,{icon:aM,onClick:M,size:20})})]}),i.map(E=>u(dc,{address:E.address,name:E.name,onClick:()=>n(E)},E.address))]}),u(oI,{}),P(yA,{columnWidth:"full",verticalPadding:4,horizontalPadding:16,horizontalAlign:"flex-start",verticalAlign:"flex-start",children:[x&&u(FN,{text:N("braveSwapDisconnectWallet"),icon:Ec,onClick:Z}),u(FN,{text:N("braveSwapHelpCenter"),icon:Lc,onClick:U})]})]})},Qc=R.default(K)`
  background-color: ${A=>A.theme.color.legacy.background01};
  min-width: 280px;
  position: absolute;
  padding-bottom: 4px;
  z-index: 10;
  top: 42px;
  box-shadow: 0px 0px 16px var(--network-selector-shadow-color);
  right: 0px;
  border-radius: 16px;
  white-space: nowrap;
  @media screen and (max-width: 570px) {
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    top: unset;
    width: auto;
    height: auto;
    border-radius: 16px 16px 0px 0px;
  }
`,Gc=R.default(F)`
  @media screen and (max-width: 570px) {
    font-weight: 600;
  }
`,Zc=A=>{const{refreshBlockchainState:M}=A,{network:I,supportedNetworks:N,isWalletConnected:j,connectWallet:D,switchNetwork:c,getLocale:x}=nA(),[i,n]=G.default.useState(!1),[Z,U]=G.default.useState(!1),E=G.default.useRef(null),Q=G.default.useRef(null),p=G.default.useCallback(async o=>{const y=await c(o);n(!1),await M({network:o,account:y})},[c,M]),t=G.default.useCallback(()=>{const o=window.localStorage.getItem(HA),y=window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark";if(o===null){document.documentElement.setAttribute("data-theme",y),window.localStorage.setItem(HA,y);return}if(o==="light"){document.documentElement.setAttribute("data-theme","dark"),window.localStorage.setItem(HA,"dark");return}document.documentElement.setAttribute("data-theme","light"),window.localStorage.setItem(HA,"light")},[]),{getNetworkFeeFiatEstimate:r}=vN();SM(E,()=>n(!1),i),SM(Q,()=>U(!1),Z);const b=G.default.useMemo(()=>N.some(o=>o.chainId===I.chainId),[I,N]),l=G.default.useCallback(async()=>{if(!j&&D){await D();return}U(o=>!o)},[j,D]);return P(Uc,{children:[P(J,{rowHeight:"full",verticalAlign:"center",children:[u(rc,{}),P(pA,{maxWidth:570,children:[u(sM,{height:22,marginRight:12,dividerTheme:"darker"}),u(F,{textSize:"18px",textColor:"text02",isBold:!0,children:x("braveSwap")})]})]}),P(J,{children:[u(Oc,{children:u($D,{onClick:t})}),P(fN,{ref:E,children:[u(qM,{onClick:()=>n(o=>!o),text:XN(I.chainName),network:I,buttonSize:"medium",hasBackground:!0,hasShadow:!0,networkFeeFiatValue:r(I),isHeader:!0,networkNotSupported:!b}),i&&u(hN,{isHeader:!0,onSelectNetwork:p,onClose:()=>n(!1)})]}),u(sA,{size:15}),P(fN,{ref:Q,children:[u(Ic,{onClick:l}),Z&&u(bc,{refreshBlockchainState:M,onHideModal:()=>U(!1)})]})]})]})},Uc=R.default(K)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 32px 0px 32px;
  margin-bottom: 45px;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: 570px) {
    padding: 20px 16px 0px 16px;
    position: absolute;
  }
`,rc=R.default(K)`
  height: 30px;
  width: 100px;
  background-image: var(--header-icon);
  background-size: cover;
  margin: 0px 12px 4px 0px;
  @media screen and (max-width: 570px) {
    margin: 0px 0px 4px 0px;
  }
`,fN=R.default(K)`
  display: flex;
  position: relative;
`,Oc=R.default(K)`
  @media screen and (max-width: 570px) {
    display: none;
  }
`,Rc=A=>{var U;const{children:M,refreshBlockchainState:I,showPrivacyModal:N}=A,{network:j,getLocale:D}=nA(),[c,x]=G.default.useState(0),[i,n]=G.default.useState(.3),Z=G.default.createRef();return G.default.useEffect(()=>{var E,Q;x((Q=(E=Z==null?void 0:Z.current)==null?void 0:E.clientHeight)!=null?Q:0)},[Z]),G.default.useEffect(()=>{n(.6),setTimeout(()=>n(.3),1e3)},[j]),P(Yc,{children:[u(Zc,{refreshBlockchainState:I}),u(mc,{ref:Z,children:M}),u(Pc,{onClick:N,children:D("braveSwapPrivacyPolicy")}),u(Hc,{height:c,network:(U=j.chainId)!=null?U:"",backgroundOpacity:i})]})},Yc=R.default(K)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  position: absolute;
  background-color: ${A=>A.theme.color.legacy.background01};
  @media (prefers-color-scheme: dark) {
    background-color: ${A=>A.theme.color.legacy.background02};
  @media screen and (max-width: 570px) {
    padding: 80px 0px;
  }
}
`,Hc=R.default(K)`
  /* Solana */
  --0x65: linear-gradient(
    125deg,
    rgb(33, 178, 164) 0%,
    rgb(93, 124, 209) 50%,
    rgb(122, 96, 232) 100%
  );
  /* Ethereum */
  --0x1: linear-gradient(125deg, rgb(98, 126, 234) 0%, rgb(129, 152, 238) 100%);
  /* Polygon */
  --0x89: linear-gradient(
    125deg,
    rgb(130, 71, 229) 0%,
    rgb(93, 124, 209) 50%,
    rgb(130, 71, 229) 100%
  );
  /* Avalanche */
  --0xa86a: linear-gradient(
    125deg,
    rgb(232, 65, 66) 0%,
    rgb(233, 175, 176) 50%,
    rgb(232, 65, 66) 100%
  );
  /* Optimism */
  --0xa: linear-gradient(
    125deg,
    rgb(252, 141, 153) 0%,
    rgb(247, 211, 215) 50%,
    rgb(254, 4, 32) 100%
  );
  /* Celo */
  --0xa4ec: linear-gradient(
    125deg,
    rgb(252, 204, 94) 0%,
    rgb(238, 255, 143) 50%,
    rgb(54, 210, 129) 100%
  );
  /* Binance */
  --0x38: linear-gradient(
    125deg,
    rgb(243, 186, 47) 0%,
    rgb(255, 219, 133) 50%,
    rgb(243, 186, 47) 100%
  );
  /* Fantom */
  --0xfa: linear-gradient(
    125deg,
    rgb(19, 181, 236) 0%,
    rgb(19, 181, 236) 50%,
    rgb(19, 181, 236) 100%
  );
  filter: blur(150px);
  width: 512px;
  height: ${A=>A.height}px;
  opacity: ${A=>A.backgroundOpacity};
  transition-delay: 0s;
  transition-duration: 1s;
  transition-timing-function: ease;
  position: absolute;
  z-index: 8;
  background-image: var(--${A=>A.network});
  @media screen and (max-width: 570px) {
    width: 100%;
  }
`,mc=R.default(K)`
  background-color: ${A=>A.theme.color.legacy.background01};
  border-radius: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 16px;
  width: 512px;
  position: relative;
  z-index: 9;
  margin-bottom: 10px;
  @media screen and (max-width: 570px) {
    width: 92%;
    padding: 16px 8px;
  }
`,Pc=R.default(BA)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${A=>A.theme.color.legacy.interactive05};
  @media (prefers-color-scheme: dark) {
    color: ${A=>A.theme.color.legacy.interactive06};
  }
`,kc=A=>{const{onSearchChanged:M,refreshBlockchainState:I,searchValue:N,networkSelectorDisabled:j}=A,{getLocale:D,network:c,switchNetwork:x}=nA(),[i,n]=G.default.useState(!1),Z=G.default.useCallback(async U=>{const E=await x(U);n(!1),await I({network:U,account:E})},[x,I]);return P(pc,{children:[u(zc,{placeholder:D("braveSwapSearchToken"),autoFocus:!1,onChange:M,value:N}),P(pA,{maxWidth:570,children:[u(sM,{marginRight:8,height:24}),P(vc,{children:[u(qM,{network:c,onClick:()=>n(U=>!U),text:XN(c.chainName),buttonSize:"small",disabled:j}),i&&u(hN,{onSelectNetwork:Z})]})]})]})},pc=R.default(K)`
  background-color: ${A=>A.theme.color.legacy.background01};
  border: 1px solid ${A=>A.theme.color.legacy.disabled};
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  padding: 4px 8px 4px 12px;
  width: 100%;
  min-height: 40px;
`,vc=R.default(K)`
  display: flex;
  position: relative;
`,JN=G.default.forwardRef((A,M)=>{const{children:I,modalHeight:N,modalBackground:j}=A;return u(Wc,{children:u(Vc,{ref:M,modalHeight:N,modalBackground:j,children:I})})}),Wc=R.default(K)`
  background-color: var(--standard-modal-background-color);
  bottom: 0%;
  left: 0%;
  position: absolute;
  right: 0%;
  top: 0%;
  z-index: 10;
`,Vc=R.default(K)`
  background-color: ${A=>A.modalBackground==="background02"?A.theme.color.legacy.background02:A.theme.color.legacy.background01};
  border-radius: 22px;
  box-shadow: var(--standard-modal-box-shadow);
  box-sizing: border-box;
  flex-direction: column;
  height: ${A=>A.modalHeight==="full"?"85%":A.modalHeight==="dynamic"?"unset":"520px"};
  justify-content: flex-start;
  overflow: hidden;
  position: absolute;
  width: 440px;
  z-index: 20;
  @media screen and (max-width: 570px) {
    position: fixed;
    right: 0px;
    left: 0px;
    top: 72px;
    bottom: 0px;
    width: auto;
    height: auto;
    border-radius: 16px 16px 0px 0px;
  }
`;function bI(){return bI=Object.assign?Object.assign.bind():function(A){for(var M=1;M<arguments.length;M++){var I=arguments[M];for(var N in I)Object.prototype.hasOwnProperty.call(I,N)&&(A[N]=I[N])}return A},bI.apply(this,arguments)}function KN(A){if(A===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function QI(A,M){return QI=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(N,j){return N.__proto__=j,N},QI(A,M)}function Xc(A,M){A.prototype=Object.create(M.prototype),A.prototype.constructor=A,QI(A,M)}var qN=Number.isNaN||function(M){return typeof M=="number"&&M!==M};function hc(A,M){return!!(A===M||qN(A)&&qN(M))}function Fc(A,M){if(A.length!==M.length)return!1;for(var I=0;I<A.length;I++)if(!hc(A[I],M[I]))return!1;return!0}function GI(A,M){M===void 0&&(M=Fc);var I,N=[],j,D=!1;function c(){for(var x=[],i=0;i<arguments.length;i++)x[i]=arguments[i];return D&&I===this&&M(x,N)||(j=A.apply(this,x),D=!0,I=this,N=x),j}return c}var fc=typeof performance=="object"&&typeof performance.now=="function",_N=fc?function(){return performance.now()}:function(){return Date.now()};function $N(A){cancelAnimationFrame(A.id)}function Jc(A,M){var I=_N();function N(){_N()-I>=M?A.call(null):j.id=requestAnimationFrame(N)}var j={id:requestAnimationFrame(N)};return j}var ZI=-1;function Aj(A){if(A===void 0&&(A=!1),ZI===-1||A){var M=document.createElement("div"),I=M.style;I.width="50px",I.height="50px",I.overflow="scroll",document.body.appendChild(M),ZI=M.offsetWidth-M.clientWidth,document.body.removeChild(M)}return ZI}var nM=null;function Mj(A){if(A===void 0&&(A=!1),nM===null||A){var M=document.createElement("div"),I=M.style;I.width="50px",I.height="50px",I.overflow="scroll",I.direction="rtl";var N=document.createElement("div"),j=N.style;return j.width="100px",j.height="100px",M.appendChild(N),document.body.appendChild(M),M.scrollLeft>0?nM="positive-descending":(M.scrollLeft=1,M.scrollLeft===0?nM="negative":nM="positive-ascending"),document.body.removeChild(M),nM}return nM}process.env.NODE_ENV;var Kc=150,qc=function(M,I){return M},$M=null,AI=null;process.env.NODE_ENV!=="production"&&typeof window<"u"&&typeof window.WeakSet<"u"&&($M=new WeakSet,AI=new WeakSet);function _c(A){var M,I=A.getItemOffset,N=A.getEstimatedTotalSize,j=A.getItemSize,D=A.getOffsetForIndexAndAlignment,c=A.getStartIndexForOffset,x=A.getStopIndexForStartIndex,i=A.initInstanceProps,n=A.shouldResetStyleCacheOnItemSizeChange,Z=A.validateProps;return M=function(U){Xc(E,U);function E(p){var t;return t=U.call(this,p)||this,t._instanceProps=i(t.props,KN(t)),t._outerRef=void 0,t._resetIsScrollingTimeoutId=null,t.state={instance:KN(t),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof t.props.initialScrollOffset=="number"?t.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},t._callOnItemsRendered=void 0,t._callOnItemsRendered=GI(function(r,b,l,o){return t.props.onItemsRendered({overscanStartIndex:r,overscanStopIndex:b,visibleStartIndex:l,visibleStopIndex:o})}),t._callOnScroll=void 0,t._callOnScroll=GI(function(r,b,l){return t.props.onScroll({scrollDirection:r,scrollOffset:b,scrollUpdateWasRequested:l})}),t._getItemStyle=void 0,t._getItemStyle=function(r){var b=t.props,l=b.direction,o=b.itemSize,y=b.layout,O=t._getItemStyleCache(n&&o,n&&y,n&&l),m;if(O.hasOwnProperty(r))m=O[r];else{var H=I(t.props,r,t._instanceProps),g=j(t.props,r,t._instanceProps),z=l==="horizontal"||y==="horizontal",e=l==="rtl",a=z?H:0;O[r]=m={position:"absolute",left:e?void 0:a,right:e?a:void 0,top:z?0:H,height:z?"100%":g,width:z?g:"100%"}}return m},t._getItemStyleCache=void 0,t._getItemStyleCache=GI(function(r,b,l){return{}}),t._onScrollHorizontal=function(r){var b=r.currentTarget,l=b.clientWidth,o=b.scrollLeft,y=b.scrollWidth;t.setState(function(O){if(O.scrollOffset===o)return null;var m=t.props.direction,H=o;if(m==="rtl")switch(Mj()){case"negative":H=-o;break;case"positive-descending":H=y-l-o;break}return H=Math.max(0,Math.min(H,y-l)),{isScrolling:!0,scrollDirection:O.scrollOffset<o?"forward":"backward",scrollOffset:H,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._onScrollVertical=function(r){var b=r.currentTarget,l=b.clientHeight,o=b.scrollHeight,y=b.scrollTop;t.setState(function(O){if(O.scrollOffset===y)return null;var m=Math.max(0,Math.min(y,o-l));return{isScrolling:!0,scrollDirection:O.scrollOffset<m?"forward":"backward",scrollOffset:m,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._outerRefSetter=function(r){var b=t.props.outerRef;t._outerRef=r,typeof b=="function"?b(r):b!=null&&typeof b=="object"&&b.hasOwnProperty("current")&&(b.current=r)},t._resetIsScrollingDebounced=function(){t._resetIsScrollingTimeoutId!==null&&$N(t._resetIsScrollingTimeoutId),t._resetIsScrollingTimeoutId=Jc(t._resetIsScrolling,Kc)},t._resetIsScrolling=function(){t._resetIsScrollingTimeoutId=null,t.setState({isScrolling:!1},function(){t._getItemStyleCache(-1,null)})},t}E.getDerivedStateFromProps=function(t,r){return $c(t,r),Z(t),null};var Q=E.prototype;return Q.scrollTo=function(t){t=Math.max(0,t),this.setState(function(r){return r.scrollOffset===t?null:{scrollDirection:r.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},Q.scrollToItem=function(t,r){r===void 0&&(r="auto");var b=this.props,l=b.itemCount,o=b.layout,y=this.state.scrollOffset;t=Math.max(0,Math.min(t,l-1));var O=0;if(this._outerRef){var m=this._outerRef;o==="vertical"?O=m.scrollWidth>m.clientWidth?Aj():0:O=m.scrollHeight>m.clientHeight?Aj():0}this.scrollTo(D(this.props,t,r,y,this._instanceProps,O))},Q.componentDidMount=function(){var t=this.props,r=t.direction,b=t.initialScrollOffset,l=t.layout;if(typeof b=="number"&&this._outerRef!=null){var o=this._outerRef;r==="horizontal"||l==="horizontal"?o.scrollLeft=b:o.scrollTop=b}this._callPropsCallbacks()},Q.componentDidUpdate=function(){var t=this.props,r=t.direction,b=t.layout,l=this.state,o=l.scrollOffset,y=l.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var O=this._outerRef;if(r==="horizontal"||b==="horizontal")if(r==="rtl")switch(Mj()){case"negative":O.scrollLeft=-o;break;case"positive-ascending":O.scrollLeft=o;break;default:var m=O.clientWidth,H=O.scrollWidth;O.scrollLeft=H-m-o;break}else O.scrollLeft=o;else O.scrollTop=o}this._callPropsCallbacks()},Q.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&$N(this._resetIsScrollingTimeoutId)},Q.render=function(){var t=this.props,r=t.children,b=t.className,l=t.direction,o=t.height,y=t.innerRef,O=t.innerElementType,m=t.innerTagName,H=t.itemCount,g=t.itemData,z=t.itemKey,e=z===void 0?qc:z,a=t.layout,T=t.outerElementType,d=t.outerTagName,B=t.style,C=t.useIsScrolling,w=t.width,S=this.state.isScrolling,L=l==="horizontal"||a==="horizontal",Y=L?this._onScrollHorizontal:this._onScrollVertical,X=this._getRangeToRender(),V=X[0],_=X[1],eA=[];if(H>0)for(var cA=V;cA<=_;cA++)eA.push(uA.createElement(r,{data:g,key:e(cA,g),index:cA,isScrolling:C?S:void 0,style:this._getItemStyle(cA)}));var q=N(this.props,this._instanceProps);return uA.createElement(T||d||"div",{className:b,onScroll:Y,ref:this._outerRefSetter,style:bI({position:"relative",height:o,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:l},B)},uA.createElement(O||m||"div",{children:eA,ref:y,style:{height:L?"100%":q,pointerEvents:S?"none":void 0,width:L?q:"100%"}}))},Q._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var t=this.props.itemCount;if(t>0){var r=this._getRangeToRender(),b=r[0],l=r[1],o=r[2],y=r[3];this._callOnItemsRendered(b,l,o,y)}}if(typeof this.props.onScroll=="function"){var O=this.state,m=O.scrollDirection,H=O.scrollOffset,g=O.scrollUpdateWasRequested;this._callOnScroll(m,H,g)}},Q._getRangeToRender=function(){var t=this.props,r=t.itemCount,b=t.overscanCount,l=this.state,o=l.isScrolling,y=l.scrollDirection,O=l.scrollOffset;if(r===0)return[0,0,0,0];var m=c(this.props,O,this._instanceProps),H=x(this.props,m,O,this._instanceProps),g=!o||y==="backward"?Math.max(1,b):1,z=!o||y==="forward"?Math.max(1,b):1;return[Math.max(0,m-g),Math.max(0,Math.min(r-1,H+z)),m,H]},E}(uA.PureComponent),M.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},M}var $c=function(M,I){var N=M.children,j=M.direction,D=M.height,c=M.layout,x=M.innerTagName,i=M.outerTagName,n=M.width,Z=I.instance;if(process.env.NODE_ENV!=="production"){(x!=null||i!=null)&&AI&&!AI.has(Z)&&(AI.add(Z),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var U=j==="horizontal"||c==="horizontal";switch(j){case"horizontal":case"vertical":$M&&!$M.has(Z)&&($M.add(Z),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". '+('"'+j+'" was specified.'))}switch(c){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". '+('"'+c+'" was specified.'))}if(N==null)throw Error('An invalid "children" prop has been specified. Value should be a React component. '+('"'+(N===null?"null":typeof N)+'" was specified.'));if(U&&typeof n!="number")throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. '+('"'+(n===null?"null":typeof n)+'" was specified.'));if(!U&&typeof D!="number")throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. '+('"'+(D===null?"null":typeof D)+'" was specified.'))}},Ai=50,TM=function(M,I,N){var j=M,D=j.itemSize,c=N.itemMetadataMap,x=N.lastMeasuredIndex;if(I>x){var i=0;if(x>=0){var n=c[x];i=n.offset+n.size}for(var Z=x+1;Z<=I;Z++){var U=D(Z);c[Z]={offset:i,size:U},i+=U}N.lastMeasuredIndex=I}return c[I]},Mi=function(M,I,N){var j=I.itemMetadataMap,D=I.lastMeasuredIndex,c=D>0?j[D].offset:0;return c>=N?Ij(M,I,D,0,N):Ii(M,I,Math.max(0,D),N)},Ij=function(M,I,N,j,D){for(;j<=N;){var c=j+Math.floor((N-j)/2),x=TM(M,c,I).offset;if(x===D)return c;x<D?j=c+1:x>D&&(N=c-1)}return j>0?j-1:0},Ii=function(M,I,N,j){for(var D=M.itemCount,c=1;N<D&&TM(M,N,I).offset<j;)N+=c,c*=2;return Ij(M,I,Math.min(N,D-1),Math.floor(N/2),j)},Nj=function(M,I){var N=M.itemCount,j=I.itemMetadataMap,D=I.estimatedItemSize,c=I.lastMeasuredIndex,x=0;if(c>=N&&(c=N-1),c>=0){var i=j[c];x=i.offset+i.size}var n=N-c-1,Z=n*D;return x+Z},Ni=_c({getItemOffset:function(M,I,N){return TM(M,I,N).offset},getItemSize:function(M,I,N){return N.itemMetadataMap[I].size},getEstimatedTotalSize:Nj,getOffsetForIndexAndAlignment:function(M,I,N,j,D,c){var x=M.direction,i=M.height,n=M.layout,Z=M.width,U=x==="horizontal"||n==="horizontal",E=U?Z:i,Q=TM(M,I,D),p=Nj(M,D),t=Math.max(0,Math.min(p-E,Q.offset)),r=Math.max(0,Q.offset-E+Q.size+c);switch(N==="smart"&&(j>=r-E&&j<=t+E?N="auto":N="center"),N){case"start":return t;case"end":return r;case"center":return Math.round(r+(t-r)/2);case"auto":default:return j>=r&&j<=t?j:j<r?r:t}},getStartIndexForOffset:function(M,I,N){return Mi(M,N,I)},getStopIndexForStartIndex:function(M,I,N,j){for(var D=M.direction,c=M.height,x=M.itemCount,i=M.layout,n=M.width,Z=D==="horizontal"||i==="horizontal",U=Z?n:c,E=TM(M,I,j),Q=N+U,p=E.offset+E.size,t=I;t<x-1&&p<Q;)t++,p+=TM(M,t,j).size;return t},initInstanceProps:function(M,I){var N=M,j=N.estimatedItemSize,D={itemMetadataMap:{},estimatedItemSize:j||Ai,lastMeasuredIndex:-1};return I.resetAfterIndex=function(c,x){x===void 0&&(x=!0),D.lastMeasuredIndex=Math.min(D.lastMeasuredIndex,c-1),I._getItemStyleCache(-1),x&&I.forceUpdate()},D},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(M){var I=M.itemSize;if(process.env.NODE_ENV!=="production"&&typeof I!="function")throw Error('An invalid "itemSize" prop has been specified. Value should be a function. '+('"'+(I===null?"null":typeof I)+'" was specified.'))}}),ji=function(A,M){if(!(A instanceof M))throw new TypeError("Cannot call a class as a function")},gi=function(){function A(M,I){for(var N=0;N<I.length;N++){var j=I[N];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(M,j.key,j)}}return function(M,I,N){return I&&A(M.prototype,I),N&&A(M,N),M}}(),Di=Object.assign||function(A){for(var M=1;M<arguments.length;M++){var I=arguments[M];for(var N in I)Object.prototype.hasOwnProperty.call(I,N)&&(A[N]=I[N])}return A},ci=function(A,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);A.prototype=Object.create(M&&M.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(A,M):A.__proto__=M)},jj=function(A,M){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:A},ii=function(){function A(M,I){var N=[],j=!0,D=!1,c=void 0;try{for(var x=M[Symbol.iterator](),i;!(j=(i=x.next()).done)&&(N.push(i.value),!(I&&N.length===I));j=!0);}catch(n){D=!0,c=n}finally{try{!j&&x.return&&x.return()}finally{if(D)throw c}}return N}return function(M,I){if(Array.isArray(M))return M;if(Symbol.iterator in Object(M))return A(M,I);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),RA=void 0;typeof window<"u"?RA=window:typeof self<"u"?RA=self:RA=global;var UI=null,rI=null,gj=20,OI=RA.clearTimeout,Dj=RA.setTimeout,RI=RA.cancelAnimationFrame||RA.mozCancelAnimationFrame||RA.webkitCancelAnimationFrame,cj=RA.requestAnimationFrame||RA.mozRequestAnimationFrame||RA.webkitRequestAnimationFrame;RI==null||cj==null?(UI=OI,rI=function(M){return Dj(M,gj)}):(UI=function(M){var I=ii(M,2),N=I[0],j=I[1];RI(N),OI(j)},rI=function(M){var I=cj(function(){OI(N),M()}),N=Dj(function(){RI(I),M()},gj);return[I,N]});function zi(A){var M=void 0,I=void 0,N=void 0,j=void 0,D=void 0,c=void 0,x=void 0,i=typeof document<"u"&&document.attachEvent;if(!i){c=function(y){var O=y.__resizeTriggers__,m=O.firstElementChild,H=O.lastElementChild,g=m.firstElementChild;H.scrollLeft=H.scrollWidth,H.scrollTop=H.scrollHeight,g.style.width=m.offsetWidth+1+"px",g.style.height=m.offsetHeight+1+"px",m.scrollLeft=m.scrollWidth,m.scrollTop=m.scrollHeight},D=function(y){return y.offsetWidth!==y.__resizeLast__.width||y.offsetHeight!==y.__resizeLast__.height},x=function(y){if(!(y.target.className&&typeof y.target.className.indexOf=="function"&&y.target.className.indexOf("contract-trigger")<0&&y.target.className.indexOf("expand-trigger")<0)){var O=this;c(this),this.__resizeRAF__&&UI(this.__resizeRAF__),this.__resizeRAF__=rI(function(){D(O)&&(O.__resizeLast__.width=O.offsetWidth,O.__resizeLast__.height=O.offsetHeight,O.__resizeListeners__.forEach(function(g){g.call(O,y)}))})}};var n=!1,Z="";N="animationstart";var U="Webkit Moz O ms".split(" "),E="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),Q="";{var p=document.createElement("fakeelement");if(p.style.animationName!==void 0&&(n=!0),n===!1){for(var t=0;t<U.length;t++)if(p.style[U[t]+"AnimationName"]!==void 0){Q=U[t],Z="-"+Q.toLowerCase()+"-",N=E[t],n=!0;break}}}I="resizeanim",M="@"+Z+"keyframes "+I+" { from { opacity: 0; } to { opacity: 0; } } ",j=Z+"animation: 1ms "+I+"; "}var r=function(y){if(!y.getElementById("detectElementResize")){var O=(M||"")+".resize-triggers { "+(j||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',m=y.head||y.getElementsByTagName("head")[0],H=y.createElement("style");H.id="detectElementResize",H.type="text/css",A!=null&&H.setAttribute("nonce",A),H.styleSheet?H.styleSheet.cssText=O:H.appendChild(y.createTextNode(O)),m.appendChild(H)}},b=function(y,O){if(i)y.attachEvent("onresize",O);else{if(!y.__resizeTriggers__){var m=y.ownerDocument,H=RA.getComputedStyle(y);H&&H.position==="static"&&(y.style.position="relative"),r(m),y.__resizeLast__={},y.__resizeListeners__=[],(y.__resizeTriggers__=m.createElement("div")).className="resize-triggers";var g=m.createElement("div");g.className="expand-trigger",g.appendChild(m.createElement("div"));var z=m.createElement("div");z.className="contract-trigger",y.__resizeTriggers__.appendChild(g),y.__resizeTriggers__.appendChild(z),y.appendChild(y.__resizeTriggers__),c(y),y.addEventListener("scroll",x,!0),N&&(y.__resizeTriggers__.__animationListener__=function(a){a.animationName===I&&c(y)},y.__resizeTriggers__.addEventListener(N,y.__resizeTriggers__.__animationListener__))}y.__resizeListeners__.push(O)}},l=function(y,O){if(i)y.detachEvent("onresize",O);else if(y.__resizeListeners__.splice(y.__resizeListeners__.indexOf(O),1),!y.__resizeListeners__.length){y.removeEventListener("scroll",x,!0),y.__resizeTriggers__.__animationListener__&&(y.__resizeTriggers__.removeEventListener(N,y.__resizeTriggers__.__animationListener__),y.__resizeTriggers__.__animationListener__=null);try{y.__resizeTriggers__=!y.removeChild(y.__resizeTriggers__)}catch{}}};return{addResizeListener:b,removeResizeListener:l}}var ij=function(A){ci(M,A);function M(){var I,N,j,D;ji(this,M);for(var c=arguments.length,x=Array(c),i=0;i<c;i++)x[i]=arguments[i];return D=(N=(j=jj(this,(I=M.__proto__||Object.getPrototypeOf(M)).call.apply(I,[this].concat(x))),j),j.state={height:j.props.defaultHeight||0,width:j.props.defaultWidth||0},j._onResize=function(){var n=j.props,Z=n.disableHeight,U=n.disableWidth,E=n.onResize;if(j._parentNode){var Q=j._parentNode.offsetHeight||0,p=j._parentNode.offsetWidth||0,t=window.getComputedStyle(j._parentNode)||{},r=parseInt(t.paddingLeft,10)||0,b=parseInt(t.paddingRight,10)||0,l=parseInt(t.paddingTop,10)||0,o=parseInt(t.paddingBottom,10)||0,y=Q-l-o,O=p-r-b;(!Z&&j.state.height!==y||!U&&j.state.width!==O)&&(j.setState({height:Q-l-o,width:p-r-b}),E({height:Q,width:p}))}},j._setRef=function(n){j._autoSizer=n},N),jj(j,D)}return gi(M,[{key:"componentDidMount",value:function(){var N=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=zi(N),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var N=this.props,j=N.children,D=N.className,c=N.disableHeight,x=N.disableWidth,i=N.style,n=this.state,Z=n.height,U=n.width,E={overflow:"visible"},Q={},p=!1;return c||(Z===0&&(p=!0),E.height=0,Q.height=Z),x||(U===0&&(p=!0),E.width=0,Q.width=U),uA.createElement("div",{className:D,ref:this._setRef,style:Di({},E,i)},!p&&j(Q))}}]),M}(uA.PureComponent);ij.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};const zj=72,ei=(A,M)=>{const I=M[A];return`${I.contractAddress}-${I.symbol}-${I.chainId}`},xi=A=>{const{index:M,data:I,getCachedAssetBalance:N,disabledToken:j,isWalletConnected:D,onSelectToken:c,style:x}=A,i=I[M];return u("div",{style:x,children:u(XD,{onClick:c,balance:N(i),isWalletConnected:D,token:i,disabled:j?j.contractAddress===i.contractAddress:!1})})},ui=A=>{const{tokenList:M,disabledToken:I,getCachedAssetBalance:N,isWalletConnected:j,onSelectToken:D}=A;return u(ij,{style:{height:"100%",width:"100%"},children:function({height:c,width:x}){return u(Ni,{width:x,height:c,itemData:M,itemSize:i=>zj,estimatedItemSize:zj,itemCount:M.length,overscanCount:2,itemKey:ei,children:i=>u(xi,{...i,getCachedAssetBalance:N,disabledToken:I,isWalletConnected:j,onSelectToken:D})})}})},li=G.default.forwardRef((A,M)=>{const{onClose:I,onSelectToken:N,getCachedAssetBalance:j,refreshBlockchainState:D,getNetworkAssetsList:c,disabledToken:x,selectingFromOrTo:i}=A,{getLocale:n,network:Z,isWalletConnected:U}=nA(),[E,Q]=G.default.useState(!0),[p,t]=G.default.useState(""),r=G.default.useCallback(()=>{Q(g=>!g)},[]),b=G.default.useCallback(g=>{t(g)},[]),l=G.default.useMemo(()=>c(Z),[c,Z]),o=G.default.useMemo(()=>n(E?"braveSwapShowTokensWithZeroBalances":"braveSwapHideTokensWithZeroBalances"),[n,E]),y=G.default.useMemo(()=>p===""?l:l.filter(g=>g.name.toLowerCase().startsWith(p.toLowerCase())||g.symbol.toLowerCase().startsWith(p.toLowerCase())),[l,p]),O=G.default.useMemo(()=>y.filter(g=>j(g).gt(0)),[y,j]),m=G.default.useMemo(()=>O.length===0||!U?y:E?O:y,[y,E,O,U]),H=G.default.useMemo(()=>O.length!==0&&U,[O,U]);return G.default.useEffect(()=>{i==="to"&&Q(!1)},[i]),P(JN,{ref:M,modalHeight:E?"standard":"full",children:[P(J,{rowWidth:"full",horizontalPadding:24,verticalPadding:20,children:[u(F,{textSize:"18px",responsiveTextSize:"20px",isBold:!0,children:n("braveSwapSelectAToken")}),u(WA,{icon:aM,onClick:I,size:20})]}),u(J,{rowWidth:"full",horizontalPadding:20,marginBottom:16,children:u(kc,{onSearchChanged:b,searchValue:p,networkSelectorDisabled:i==="to",refreshBlockchainState:D})}),u(pA,{maxWidth:570,children:u(oI,{})}),u(Ci,{columnWidth:"full",verticalAlign:"flex-start",verticalPadding:8,children:m.length!==0&&u(ui,{disabledToken:x,getCachedAssetBalance:j,isWalletConnected:U,onSelectToken:N,tokenList:m})}),H&&u(wi,{buttonText:o,onClick:r,buttonStyle:"square",buttonWidth:"full",horizontalMargin:0,verticalMargin:0})]})}),wi=R.default(sI)`
  align-self: flex-end;
  margin: auto;
`,Ci=R.default(yA)`
  flex: 1;
  overflow: hidden;
  @media screen and (max-width: 570px) {
    padding: 0;
  }
`,ai=A=>{const{options:M,selectedQuoteOptionIndex:I,onSelectQuoteOption:N}=A,{getTokenPrice:j}=nA(),[D,c]=G.default.useState(!1),[x,i]=G.default.useState(void 0);G.default.useEffect(()=>{let U=!1;if(M[I]!==void 0)return j(M[I].toToken).then(E=>{U||i(Number(k.normalize(E)))}).catch(E=>console.log(E)),()=>{U=!0}},[M,I,j]);const n=G.default.useCallback(()=>{c(U=>!U)},[]),Z=G.default.useMemo(()=>D?M:M.slice(0,2),[M,D]);return P(bA,{children:[u(KA,{size:15}),u(yA,{columnHeight:"dynamic",columnWidth:"full",children:Z.map((U,E)=>u(fD,{isBest:E===0,isSelected:I===E,onClick:()=>N(E),option:U,spotPrice:x},E))}),u(ni,{isSelected:D,icon:QM,onClick:n})]})},ni=R.default(WA)`
  transform: ${A=>A.isSelected?"rotate(180deg)":"unset"};
  background-color: ${A=>A.theme.color.legacy.text03};
  margin-left: 8px;
`,Dz=R.default(OA)`
  background-color: ${A=>A.theme.color.legacy.text02};
  margin-right: 6px;
`,Cj=R.default(J)`
  padding: 2px 8px;
  border-radius: 8px;
  background-color: var(--token-or-network-bubble-background);
`,cz=R.default(K)`
  background-image: url(${A=>A.icon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: ${A=>A.size}px;
  width: ${A=>A.size}px;
  margin-left: 6px;
  border-radius: 50px;
`,iz=R.default(F)`
  padding: 0 6px;
`,zz=R.default(J)`
  gap: 4px;
`,ez=R.default(F)`
  text-decoration: line-through;
`,xz=R.default(WA)`
  transform: ${A=>A.isExpanded?"rotate(180deg)":"unset"};
  transition: transform 300ms ease;
`;R.default(KM)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;const uz=R.default(K)`
  position: relative;
  box-sizing: border-box;
  width: 48px;
  height: 24px;
  background: var(--standard-switch-unchecked-background);
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: ${A=>A.theme.color.legacy.background01};
    transform: translate(0, -50%);
  }
`;R.default(DM)`
  display: none;

  &:checked + ${uz} {
    background: var(--standard-switch-checked-background);

    &:before {
      transform: translate(20px, -50%);
      background: var(--standard-switch-button-checked-background);
    }
  }
`,R.default(DM)`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${A=>A.theme.color.legacy.interactive08};
  cursor: pointer;
  border-radius: 100%;
  ::after {
    content: '';
    display: block;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    margin: 3px;
  }
  :checked {
    border: 2px solid var(--standard-radio-checked-color);
    ::after {
      background-color: var(--standard-radio-checked-color);
    }
  }
`,R.default(K)`
  flex-direction: row;
  gap: 12px;
`,R.default(KM)`
  cursor: pointer;
  color: ${A=>A.isChecked?A.theme.color.legacy.text01:A.theme.color.legacy.text03};
`;const lz="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQ3ODMgMC44Njg0NkMxMi4yMTUyIDAuNjM4NzU2IDExLjg2NDMgMC41NDY4NzUgMTEuNTEzNCAwLjU0Njg3NUMxMS4xNjI1IDAuNTkyODE2IDEwLjg1NTUgMC43MzA2MzggMTAuNjM2MiAxLjAwNjI4TDUuNDE2OTMgNy4yNTQyMkwyLjg3MzA3IDQuNjM1NkMyLjM0Njc2IDQuMDg0MzEgMS41MTM0MiA0LjA4NDMxIDEuMDMwOTcgNC42MzU2QzAuNzY3ODA5IDQuOTExMjQgMC42MzYyMyA1LjIzMjgyIDAuNjM2MjMgNS42MDAzNUMwLjYzNjIzIDUuOTY3ODggMC43Njc4MDkgNi4zMzU0IDEuMDMwOTcgNi41NjUxTDQuNTgzNiAxMC4yNDA0QzQuODQ2NzYgMTAuNTE2IDUuMTUzNzcgMTAuNjUzOCA1LjUwNDY1IDEwLjY1MzhINS41NDg1MUM1Ljg5OTM5IDEwLjY1MzggNi4yNTAyNyAxMC40NzAxIDYuNDY5NTYgMTAuMTk0NEwxMi42MDk5IDIuODQzOTFDMTMuMDQ4NSAyLjI0NjY4IDEzLjAwNDcgMS4zNzM4MSAxMi40NzgzIDAuODY4NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",wz=A=>{const{label:M,id:I,onChange:N,isChecked:j,labelSize:D,isBold:c}=A;return P(J,{children:[u(Cz,{type:"checkbox",name:"checkbox",id:I,onChange:i=>{N(i.target.id,i.target.checked)},checked:j}),P(Tz,{isChecked:j,htmlFor:I,labelSize:D,isBold:c,children:[u(nz,{isChecked:j,children:j&&u(az,{size:13,icon:lz})}),M]})]})},Cz=R.default(DM)`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,az=R.default(OA)`
  background-color: ${A=>A.theme.color.white};
`,nz=R.default(K)`
  width: 20px;
  height: 20px;
  background: ${A=>A.isChecked?A.theme.color.legacy.interactive05:A.theme.color.legacy.background01};
  border-radius: 4px;
  box-shadow: ${A=>A.isChecked?"none":`inset 0px 0px 0px 1px ${A.theme.color.legacy.interactive08}`};
`,Tz=R.default(KM)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  cursor: pointer;
  font-weight: ${A=>A.isBold?400:200};
  font-size: ${A=>A.labelSize?A.labelSize:"12px"};
  color: ${A=>A.theme.color.legacy.text02};
`,tz=()=>{const[A,M]=G.default.useState(!1),I=G.default.useCallback(N=>{M(N.target.checked);const j=window.localStorage.getItem(HA),D=window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark";if(j===null){document.documentElement.setAttribute("data-theme",D),window.localStorage.setItem(HA,D);return}if(j==="light"){document.documentElement.setAttribute("data-theme","dark"),window.localStorage.setItem(HA,"dark");return}document.documentElement.setAttribute("data-theme","light"),window.localStorage.setItem(HA,"light")},[]);return G.default.useEffect(()=>{const N=window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark",j=window.localStorage.getItem(HA);if(j===null){if(N==="light"){M(!0);return}if(N==="dark"){M(!1);return}}if(j==="light"){M(!0);return}M(!1)},[]),P(Ez,{children:[u(Lz,{checked:A,type:"checkbox",onChange:I}),u(aj,{children:u(dz,{})})]})},Ez=R.default(KM)`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 24px;
  right: 24px;
`,aj=R.default(K)`
  position: relative;
  box-sizing: border-box;
  width: 56px;
  height: 32px;
  background: var(--standard-switch-unchecked-background);
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;
  --icon-position: 10px;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 3px;
    background: ${A=>A.theme.color.legacy.background01};
    transform: translate(0, -50%);
  }
`,Lz=R.default(DM)`
  display: none;

  &:checked + ${aj} {
    background: var(--standard-switch-button-checked-background);
    --icon-position: 32px;
    &:before {
      transform: translate(22px, -50%);
      background: ${A=>A.theme.color.legacy.background01};
    }
  }
`,dz=R.default(K)`
  position: absolute;
  width: 14px;
  height: 14px;
  background-image: var(--theme-button-icon);
  background-size: cover;
  left: var(--icon-position);
  transition: 300ms all;
`;R.default(BA)`
  background-color: ${A=>A.theme.color.legacy.background01};
  border: 1px solid ${A=>A.theme.color.legacy.interactive08};
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 12px;
  min-width: 200px;
  :disabled {
    opacity: 0.3;
  }
`,R.default(K)`
  position: relative;
`,R.default(K)`
  background-color: ${A=>A.theme.color.legacy.background01};
  min-width: 200px;
  position: absolute;
  z-index: 10;
  top: 36px;
  left: 0px;
  padding: 6px 4px 4px 4px;
  box-shadow: 0px 0px 24px var(--account-selector-shadow-color);
  border-radius: 8px;
  box-sizing: border-box;
`,R.default(OA)`
  background-color: ${A=>A.theme.color.legacy.text01};
`,R.default(OA)`
  background-color: ${A=>A.theme.color.legacy.text02};
  margin-left: 4px;
  margin-right: 16px;
`;const nj=A=>{const{label:M,value:I,secondaryValue:N,children:j,onExpandOut:D}=A,[c,x]=G.default.useState(!1),i=G.default.useCallback(()=>{x(n=>!n)},[]);return P(yA,{columnWidth:"full",children:[P(J,{rowWidth:"full",verticalPadding:16,children:[u(F,{textColor:"text02",textSize:"14px",isBold:!0,children:M}),P(J,{children:[u(F,{textColor:"text01",textSize:"14px",isBold:!0,children:I}),N&&P(bA,{children:[u(sA,{size:4}),u(F,{textColor:"text03",textSize:"14px",isBold:!0,children:N})]}),u(sA,{size:16}),u(yz,{size:16,icon:QM,isSelected:c,expandOut:D!==void 0,onClick:D!=null?D:i})]})]}),c&&j]})},yz=R.default(WA)`
  transform: ${A=>A.expandOut?"rotate(270deg)":A.isSelected?"rotate(180deg)":"unset"};
  transition: transform 300ms ease;
`,Bz=A=>{const{onClick:M,isSelected:I,option:N,gasEstimates:j}=A,{getLocale:D,network:c}=nA();return P(oz,{onClick:M,isSelected:I,children:[P(J,{children:[u(Sz,{children:u(sz,{size:16,icon:N.icon})}),P(yA,{horizontalAlign:"flex-start",columnHeight:"full",children:[u(F,{textColor:"text02",textSize:"14px",isBold:!0,children:D(N.name)}),P(F,{textColor:"text03",textSize:"12px",isBold:!1,children:["<"," ",j.time]})]})]}),P(yA,{horizontalAlign:"flex-end",columnHeight:"full",children:[P(F,{textColor:"text02",textSize:"14px",isBold:!0,children:[j.gasFeeGwei," ",D("braveSwapGwei")]}),P(F,{textColor:"text03",textSize:"12px",isBold:!1,children:[j.gasFee," ",c==null?void 0:c.symbol]})]})]})},oz=R.default(BA)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${A=>A.theme.color.legacy.background01};
  border-radius: 8px;
  border: 1px solid
    ${A=>A.isSelected?"var(--gas-preset-button-border-selected)":A.theme.color.legacy.divider01};
  padding: 12px 16px;
  margin-bottom: 8px;
  &:hover {
    border: 1px solid var(--gas-preset-button-border-selected);
  }
`,Sz=R.default(K)`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: var(--gas-preset-button-icon-background);
  margin-right: 12px;
`,sz=R.default(OA)`
  background-color: var(--gas-preset-button-icon-color);
`,Tj=["0.1","0.5","1.0"],bz=A=>{const{selectedGasFeeOption:M,setSelectedGasFeeOption:I,setSlippageTolerance:N,slippageTolerance:j,gasEstimates:D,onClose:c}=A,{getLocale:x,network:i,exchanges:n}=nA(),{dispatch:Z}=ZN(),{state:{userSelectedExchanges:U}}=wM(),[E,Q]=G.default.useState(!1),p=G.default.useCallback((b,l)=>{const o=n.find(O=>O.id===b);if(l&&o!==void 0){const O=[o,...U];Z({type:"updateUserSelectedExchanges",payload:O});return}const y=U.filter(O=>O.id!==b);Z({type:"updateUserSelectedExchanges",payload:y})},[U,n,Z]),t=G.default.useMemo(()=>Tj.includes(j)?"":j,[j]),r=G.default.useMemo(()=>x(E?"braveSwapExchanges":"braveSwapSettings"),[x,E]);return P(Qz,{children:[P(J,{rowWidth:"full",marginBottom:2,children:[u(F,{textColor:"text01",textSize:"16px",isBold:!0,children:r}),E&&u(WA,{icon:aM,onClick:()=>Q(!1),size:20}),!E&&u(bM,{maxWidth:570,children:u(WA,{icon:aM,onClick:c,size:20})})]}),u(bM,{maxWidth:570,children:u(KA,{size:18})}),E&&P(bA,{children:[u(KA,{size:24}),u(Gz,{children:n.map(b=>u(wz,{id:b.id,isChecked:U.some(l=>l.id===b.id),label:b.name,onChange:p,labelSize:"14px",isBold:!0},b.id))})]}),!E&&P(bA,{children:[u(nj,{label:x("braveSwapSlippageTolerance"),value:`${j}%`,children:P(J,{marginBottom:22,rowWidth:"full",children:[u(J,{horizontalAlign:"flex-start",children:Tj.map(b=>u(sI,{buttonText:`${b}%`,onClick:()=>N(b),buttonType:"secondary",buttonSize:"small",buttonWidth:64,isSelected:j===b,marginRight:8},b))}),u(uc,{onChange:N,value:t})]})}),u(pA,{maxWidth:570,children:u(oI,{})}),i.coin===lA.Ethereum&&u(bA,{children:u(nj,{label:x("braveSwapNetworkFee"),value:`$${D.gasFeeFiat}`,secondaryValue:`${D.gasFee} ${i.symbol}`,children:u(yA,{columnWidth:"full",children:bN.map(b=>u(Bz,{option:b,isSelected:M===b,onClick:()=>I(b),gasEstimates:D},b.id))})})}),i.coin===lA.Solana&&u(bA,{})]}),u(bM,{maxWidth:570,children:u(tz,{})})]})},Qz=R.default(K)`
  background-color: ${A=>A.theme.color.legacy.background02};
  border-radius: 16px;
  border: 1px solid var(--swap-settings-modal-border-color);
  box-shadow: var(--swap-settings-modal-box-shadow);
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  position: absolute;
  padding: 20px 24px;
  width: 370px;
  min-height: 370px;
  z-index: 20;
  right: -16px;
  top: 28px;
  @media screen and (max-width: 570px) {
    position: fixed;
    right: 0;
    left: 0;
    top: 72px;
    bottom: 0;
    width: auto;
    border: none;
    border-radius: 16px 16px 0 0;
  }
`,Gz=R.default(K)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`,ZA=A=>{const{width:M,height:I,borderRadius:N,background:j}=A;return u(Zz,{width:M,height:I,borderRadius:N,background:j,children:u(Uz,{width:M,children:u(rz,{})})})},Zz=R.default.div`
  display: block;
  box-sizing: content-box;
  width: ${A=>A.width?`${A.width}px`:"100%"};
  height: ${A=>A.height?`${A.height}px`:"100%"};
  border-radius: ${A=>A.borderRadius?`${A.borderRadius}px`:"none"};
  background-color: var(--token-or-network-button-background-hover-${A=>A.background?A.background:"primary"});
  position: sticky;
  overflow: hidden;
`,Uz=R.default.div`
  display: block;
  height: 100%;
  transform: translate(400%);
  --start-distance: ${A=>A.width&&A.width<60?"-1000%":"-300%"};
  --end-distance: ${A=>A.width&&A.width<60?"1000%":"300%"};
  @keyframes identifier {
    0% {
      transform: translate(var(--start-distance));
    }
    100% {
      transform: translate(0%);
    }
    100% {
      transform: translate(var(--end-distance));
    }
  }
  animation: 3s identifier infinite linear;
`,rz=R.default.div`
  width: 1px;
  height: 100%;
  background-color: ${A=>A.theme.color.legacy.divider01};
  box-shadow: 0 0 100px 100px ${A=>A.theme.color.legacy.divider01};
`,Oz=()=>{const{getLocale:A}=nA();return P(Rz,{children:[P(Hz,{children:[P(J,{rowHeight:"full",verticalAlign:"center",children:[u(mz,{}),P(pA,{maxWidth:570,children:[u(sM,{height:22,marginRight:12,dividerTheme:"darker"}),u(F,{textSize:"18px",textColor:"text02",isBold:!0,children:A("braveSwap")})]})]}),P(J,{children:[P(pA,{maxWidth:570,children:[u(ZA,{width:40,height:40,borderRadius:100}),u(sA,{size:16}),u(ZA,{width:154,height:40,borderRadius:48}),u(sA,{size:16}),u(ZA,{width:154,height:40,borderRadius:48})]}),P(bM,{children:[u(ZA,{width:68,height:32,borderRadius:100}),u(sA,{size:16}),u(ZA,{width:135,height:32,borderRadius:48})]})]})]}),P(Yz,{children:[u(J,{rowWidth:"full",horizontalPadding:16,verticalPadding:6,marginBottom:18,children:u(F,{isBold:!0,children:A("braveSwap")})}),u(_M,{boxType:"primary",children:P(J,{rowWidth:"full",children:[P(J,{children:[u(ZA,{width:124,height:60,borderRadius:100}),u(sM,{height:28,marginLeft:8,marginRight:8}),u(pA,{maxWidth:570,children:u(ZA,{width:46,height:24,borderRadius:4})}),u(sA,{size:8}),u(ZA,{width:46,height:24,borderRadius:4})]}),u(ZA,{width:100,height:42,borderRadius:5})]})}),u(Pz,{children:u(kz,{children:u(ZA,{width:40,height:40,borderRadius:100,background:"secondary"})})}),u(_M,{boxType:"secondary",children:P(J,{rowWidth:"full",children:[u(ZA,{width:160,height:40,borderRadius:100,background:"secondary"}),u(ZA,{width:100,height:42,borderRadius:5,background:"secondary"})]})}),u(J,{rowWidth:"full",horizontalAlign:"center",verticalPadding:16,children:u(ZA,{height:56,borderRadius:48,background:"secondary"})})]})]})},Rz=R.default(K)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  position: absolute;
  background-color: ${A=>A.theme.color.legacy.background01};
  @media (prefers-color-scheme: dark) {
    background-color: ${A=>A.theme.color.legacy.background02};
    padding: 80px 0px;
  }
`,Yz=R.default(K)`
  background-color: ${A=>A.theme.color.legacy.background01};
  border-radius: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 16px;
  width: 512px;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 570px) {
    width: 92%;
    padding: 16px 8px;
  }
`,Hz=R.default(K)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 32px 0px 32px;
  margin-bottom: 45px;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: 570px) {
    padding: 20px 16px 0px 16px;
  }
`,mz=R.default(K)`
  height: 30px;
  width: 100px;
  background-image: var(--header-icon);
  background-size: cover;
  margin: 0px 12px 4px 0px;
  @media screen and (max-width: 570px) {
    margin: 0px 0px 4px 0px;
  }
`,Pz=R.default(K)`
  height: 8px;
  width: 100%;
`,kz=R.default(K)`
  position: absolute;
  z-index: 10;
  border-radius: 100%;
  background-color: ${A=>A.theme.color.legacy.background01};
`,pz=G.default.forwardRef((A,M)=>{const{onClose:I}=A,{getLocale:N}=nA();return P(JN,{ref:M,modalHeight:"dynamic",modalBackground:"background02",children:[P(J,{rowWidth:"full",horizontalPadding:24,verticalPadding:20,children:[u(F,{textSize:"18px",isBold:!0,children:N("braveSwapPrivacyPolicy")}),u(WA,{icon:aM,onClick:I,size:20})]}),P(yA,{columnWidth:"full",columnHeight:"full",horizontalPadding:20,horizontalAlign:"flex-start",children:[u(F,{textSize:"16px",textColor:"text02",textAlign:"left",isBold:!0,children:N("braveSwapPrivacyDescription")}),u(KA,{size:10}),P(tj,{columnWidth:"full",horizontalAlign:"flex-start",verticalPadding:10,horizontalPadding:10,children:[u(MI,{rel:"noopener noreferrer",target:"_blank",href:"https://www.0x.org/",children:"0x"}),u(F,{textSize:"14px",textColor:"text03",textAlign:"left",isBold:!0,children:N("braveSwapV2Disclaimer").replaceAll("$1","0x").replace("$2","EVM").replace("$3","Ethereum")}),u(MI,{rel:"noopener noreferrer",target:"_blank",href:"https://www.0x.org/privacy",children:N("braveSwapV2Privacy").replace("$1","0x")})]}),u(KA,{size:20}),P(tj,{columnWidth:"full",horizontalAlign:"flex-start",verticalPadding:10,horizontalPadding:10,children:[u(MI,{rel:"noopener noreferrer",target:"_blank",href:"https://jup.ag/",children:"Jupiter"}),u(F,{textSize:"14px",textColor:"text03",textAlign:"left",isBold:!0,children:N("braveSwapV2Disclaimer").replaceAll("$1","Jupiter").replace("$2","Solana").replace("$3","Solana")}),u(MI,{rel:"noopener noreferrer",target:"_blank",href:"https://docs.jup.ag/legal/privacy-policy",children:N("braveSwapV2Privacy").replace("$1","Jupiter")})]}),u(KA,{size:20})]})]})}),tj=R.default(yA)`
  background-color: ${A=>A.theme.color.legacy.background01};
  border: 1px solid ${A=>A.theme.color.legacy.divider01};
  border-radius: 8px;
`,MI=R.default.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${A=>A.theme.color.legacy.interactive05};
  text-decoration: none;
  display: block;
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    color: ${A=>A.theme.color.legacy.interactive06};
  }
`,vz="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjQ1NjY3IDE0LjY2NjdMMC42NjY2NjUgMTQuNjY2N0MwLjI5ODY2NSAxNC42NjY3IC02LjI4MDQ1ZS0wNyAxNC4zNjggLTYuMTE5NTllLTA3IDE0Qy01Ljk1ODc0ZS0wNyAxMy42MzIgMC4yOTg2NjUgMTMuMzMzMyAwLjY2NjY2NSAxMy4zMzMzTDkuNDU2NjcgMTMuMzMzM0M5LjczMjY3IDEyLjU1ODcgMTAuNDY1MyAxMiAxMS4zMzMzIDEyQzEyLjIwMTMgMTIgMTIuOTM0IDEyLjU1ODcgMTMuMjEwNyAxMy4zMzMzTDE1LjMzMzMgMTMuMzMzM0MxNS43MDEzIDEzLjMzMzMgMTYgMTMuNjMyIDE2IDE0QzE2IDE0LjM2OCAxNS43MDEzIDE0LjY2NjcgMTUuMzMzMyAxNC42NjY3TDEzLjIxMDcgMTQuNjY2N0MxMi45MzQgMTUuNDQwNyAxMi4yMDEzIDE2IDExLjMzMzMgMTZDMTAuNDY1MyAxNiA5LjczMjY3IDE1LjQ0MDcgOS40NTY2NyAxNC42NjY3Wk0xMiAxNEMxMiAxMy42MzI3IDExLjcwMTMgMTMuMzMzMyAxMS4zMzMzIDEzLjMzMzNDMTAuOTY2IDEzLjMzMzMgMTAuNjY2NyAxMy42MzI3IDEwLjY2NjcgMTRDMTAuNjY2NyAxNC4zNjczIDEwLjk2NiAxNC42NjY3IDExLjMzMzMgMTQuNjY2N0MxMS43MDEzIDE0LjY2NjcgMTIgMTQuMzY3MyAxMiAxNFpNMi43ODkzMyA4LjY2NjY3TDAuNjY2NjY2IDguNjY2NjdDMC4yOTg2NjYgOC42NjY2NyAtMy42NTc3N2UtMDcgOC4zNjggLTMuNDk2OTFlLTA3IDhDLTMuMzM2MDVlLTA3IDcuNjMyIDAuMjk4NjY2IDcuMzMzMzMgMC42NjY2NjYgNy4zMzMzM0wyLjc4OTMzIDcuMzMzMzNDMy4wNjYgNi41NTkzMyAzLjc5ODY3IDYgNC42NjY2NyA2QzUuNTM0NjcgNiA2LjI2NzMzIDYuNTU5MzMgNi41NDQgNy4zMzMzM0wxNS4zMzMzIDcuMzMzMzNDMTUuNzAxMyA3LjMzMzMzIDE2IDcuNjMyIDE2IDhDMTYgOC4zNjggMTUuNzAxMyA4LjY2NjY3IDE1LjMzMzMgOC42NjY2N0w2LjU0NCA4LjY2NjY3QzYuMjY3MzMgOS40NDEzMyA1LjUzNDY3IDEwIDQuNjY2NjcgMTBDMy43OTg2NyAxMCAzLjA2NiA5LjQ0MTMzIDIuNzg5MzMgOC42NjY2N1pNNS4zMzMzMyA4QzUuMzMzMzMgNy42MzI2NyA1LjAzNDY3IDcuMzMzMzMgNC42NjY2NyA3LjMzMzMzQzQuMjk4NjcgNy4zMzMzMyA0IDcuNjMyNjcgNCA4QzQgOC4zNjczMyA0LjI5ODY3IDguNjY2NjcgNC42NjY2NyA4LjY2NjY3QzUuMDM0NjcgOC42NjY2NyA1LjMzMzMzIDguMzY3MzMgNS4zMzMzMyA4Wk02LjEyMjY3IDIuNjY2NjdMMC42NjY2NjUgMi42NjY2N0MwLjI5ODY2NSAyLjY2NjY3IC0yLjAxMDg2ZS0wNiAyLjM2OCAtMS45OTQ3N2UtMDYgMkMtMS45Nzg2OWUtMDYgMS42MzIgMC4yOTg2NjUgMS4zMzMzMyAwLjY2NjY2NSAxLjMzMzMzTDYuMTIyNjcgMS4zMzMzM0M2LjM5ODY3IDAuNTU4NjY2IDcuMTMyIC0zLjg3NjMzZS0wNyA4IC0zLjQ5NjkxZS0wN0M4Ljg2OCAtMy4xMTc1ZS0wNyA5LjYwMTMzIDAuNTU4NjY2IDkuODc3MzMgMS4zMzMzM0wxNS4zMzMzIDEuMzMzMzNDMTUuNzAxMyAxLjMzMzMzIDE2IDEuNjMyIDE2IDJDMTYgMi4zNjggMTUuNzAxMyAyLjY2NjY3IDE1LjMzMzMgMi42NjY2N0w5Ljg3NzMzIDIuNjY2NjdDOS42MDEzMyAzLjQ0MDY3IDguODY4IDQgOCA0QzcuMTMyIDQgNi4zOTg2NyAzLjQ0MDY3IDYuMTIyNjcgMi42NjY2N1pNOC42NjY2NyAyQzguNjY2NjcgMS42MzI2NyA4LjM2NzMzIDEuMzMzMzMgOCAxLjMzMzMzQzcuNjMyNjcgMS4zMzMzMyA3LjMzMzMzIDEuNjMyNjcgNy4zMzMzMyAyQzcuMzMzMzMgMi4zNjczMyA3LjYzMjY3IDIuNjY2NjcgOCAyLjY2NjY3QzguMzY3MzMgMi42NjY2NyA4LjY2NjY3IDIuMzY3MzMgOC42NjY2NyAyWiIgZmlsbD0iIzQ5NTA1NyIvPgo8L3N2Zz4K",Wz=()=>{const A=bD(),{fromAmount:M,toAmount:I,fromToken:N,toToken:j,isFetchingQuote:D,quoteOptions:c,selectedQuoteOptionIndex:x,selectingFromOrTo:i,fromAssetBalance:n,fiatValue:Z,selectedGasFeeOption:U,slippageTolerance:E,useDirectRoute:Q,gasEstimates:p,getCachedAssetBalance:t,onSelectFromToken:r,onSelectToToken:b,onSelectQuoteOption:l,onClickFlipSwapTokens:o,setSelectingFromOrTo:y,handleOnSetFromAmount:O,handleOnSetToAmount:m,setSelectedGasFeeOption:H,setSlippageTolerance:g,setUseDirectRoute:z,onSubmit:e,submitButtonText:a,isSubmitButtonDisabled:T,swapValidationError:d,refreshBlockchainState:B,getNetworkAssetsList:C}=A,{getLocale:w,network:S,isReady:L}=nA(),[Y,X]=G.default.useState(!1),[V,_]=G.default.useState(!1),eA=G.default.useRef(null),cA=G.default.useRef(null),q=G.default.useRef(null),jA=G.default.useCallback(()=>{X(CA=>!CA),E===""&&g("0.5")},[E,g]);return SM(eA,()=>y(void 0),i!==void 0),SM(cA,jA,Y),SM(q,()=>_(!1),V),G.default.useEffect(()=>{const CA=window.localStorage.getItem(HA);CA!==null&&document.documentElement.setAttribute("data-theme",CA)},[]),L?P(bA,{children:[P(Rc,{showPrivacyModal:()=>_(!0),refreshBlockchainState:B,children:[P(J,{rowWidth:"full",horizontalPadding:16,verticalPadding:6,marginBottom:18,children:[u(F,{isBold:!0,children:w("braveSwap")}),P(Vz,{ref:cA,children:[u(WA,{icon:vz,onClick:jA}),Y&&u(bz,{selectedGasFeeOption:U,slippageTolerance:E,useDirectRoute:Q,setSelectedGasFeeOption:H,setSlippageTolerance:g,setUseDirectRoute:z,gasEstimates:p,onClose:()=>X(!1)})]})]}),u(Cc,{onInputChange:O,inputValue:M,onClickSelectToken:()=>y("from"),token:N,tokenBalance:n,hasInputError:d==="insufficientBalance"||d==="fromAmountDecimalsOverflow",fiatValue:Z}),u(ZD,{onClick:o}),P(_M,{boxType:"secondary",children:[u(ac,{onClickSelectToken:()=>y("to"),token:j,inputValue:I,onInputChange:m,hasInputError:d==="toAmountDecimalsOverflow",isLoading:D,disabled:S.coin===lA.Solana}),S.coin===lA.Solana&&c.length>0&&u(ai,{options:c,selectedQuoteOptionIndex:x,onSelectQuoteOption:l})]}),c.length>0&&u(bA,{children:u(jz,{selectedQuoteOption:c[x],fromToken:N,toToken:j,toAmount:I})}),u(sI,{onClick:e,buttonText:a,buttonType:"primary",buttonWidth:"full",verticalMargin:16,disabled:T})]}),i&&u(li,{ref:eA,onClose:()=>y(void 0),onSelectToken:i==="from"?r:b,disabledToken:i==="from"?j:N,getCachedAssetBalance:t,selectingFromOrTo:i,refreshBlockchainState:B,getNetworkAssetsList:C}),V&&u(pz,{ref:q,onClose:()=>_(!1)})]}):u(Oz,{})},Vz=R.default(K)`
  display: flex;
  position: relative;
`,Xz={name:"Default Theme",color:{gray10:"var(--color-gray-10)",gray20:"var(--color-gray-20)",gray30:"var(--color-gray-30)",gray40:"var(--color-gray-40)",gray50:"var(--color-gray-50)",gray60:"var(--color-gray-60)",gray70:"var(--color-gray-70)",gray80:"var(--color-gray-80)",gray90:"var(--color-gray-90)",gray100:"var(--color-gray-100)",gray110:"var(--color-gray-110)",gray120:"var(--color-gray-120)",primary10:"var(--color-primary-10)",primary20:"var(--color-primary-20)",primary30:"var(--color-primary-30)",primary40:"var(--color-primary-40)",primary50:"var(--color-primary-50)",primary60:"var(--color-primary-60)",primary70:"var(--color-primary-70)",primary80:"var(--color-primary-80)",primary90:"var(--color-primary-90)",primary100:"var(--color-primary-100)",primary110:"var(--color-primary-110)",primary120:"var(--color-primary-120)",secondary10:"var(--color-secondary-10)",secondary20:"var(--color-secondary-20)",secondary30:"var(--color-secondary-30)",secondary40:"var(--color-secondary-40)",secondary50:"var(--color-secondary-50)",secondary60:"var(--color-secondary-60)",secondary70:"var(--color-secondary-70)",secondary80:"var(--color-secondary-80)",secondary90:"var(--color-secondary-90)",secondary100:"var(--color-secondary-100)",secondary110:"var(--color-secondary-110)",secondary120:"var(--color-secondary-120)",red10:"var(--color-red-10)",red20:"var(--color-red-20)",red30:"var(--color-red-30)",red40:"var(--color-red-40)",red50:"var(--color-red-50)",red60:"var(--color-red-60)",red70:"var(--color-red-70)",red80:"var(--color-red-80)",red90:"var(--color-red-90)",red100:"var(--color-red-100)",red110:"var(--color-red-110)",red120:"var(--color-red-120)",yellow10:"var(--color-yellow-10)",yellow20:"var(--color-yellow-20)",yellow30:"var(--color-yellow-30)",yellow40:"var(--color-yellow-40)",yellow50:"var(--color-yellow-50)",yellow60:"var(--color-yellow-60)",yellow70:"var(--color-yellow-70)",yellow80:"var(--color-yellow-80)",yellow90:"var(--color-yellow-90)",yellow100:"var(--color-yellow-100)",yellow110:"var(--color-yellow-110)",yellow120:"var(--color-yellow-120)",green10:"var(--color-green-10)",green20:"var(--color-green-20)",green30:"var(--color-green-30)",green40:"var(--color-green-40)",green50:"var(--color-green-50)",green60:"var(--color-green-60)",green70:"var(--color-green-70)",green80:"var(--color-green-80)",green90:"var(--color-green-90)",green100:"var(--color-green-100)",green110:"var(--color-green-110)",green120:"var(--color-green-120)",blue10:"var(--color-blue-10)",blue20:"var(--color-blue-20)",blue30:"var(--color-blue-30)",blue40:"var(--color-blue-40)",blue50:"var(--color-blue-50)",blue60:"var(--color-blue-60)",blue70:"var(--color-blue-70)",blue80:"var(--color-blue-80)",blue90:"var(--color-blue-90)",blue100:"var(--color-blue-100)",blue110:"var(--color-blue-110)",blue120:"var(--color-blue-120)",lightBlue10:"var(--color-light-blue-10)",lightBlue20:"var(--color-light-blue-20)",lightBlue30:"var(--color-light-blue-30)",lightBlue40:"var(--color-light-blue-40)",lightBlue50:"var(--color-light-blue-50)",lightBlue60:"var(--color-light-blue-60)",lightBlue70:"var(--color-light-blue-70)",lightBlue80:"var(--color-light-blue-80)",lightBlue90:"var(--color-light-blue-90)",lightBlue100:"var(--color-light-blue-100)",lightBlue110:"var(--color-light-blue-110)",lightBlue120:"var(--color-light-blue-120)",violet10:"var(--color-violet-10)",violet20:"var(--color-violet-20)",violet30:"var(--color-violet-30)",violet40:"var(--color-violet-40)",violet50:"var(--color-violet-50)",violet60:"var(--color-violet-60)",violet70:"var(--color-violet-70)",violet80:"var(--color-violet-80)",violet90:"var(--color-violet-90)",violet100:"var(--color-violet-100)",violet110:"var(--color-violet-110)",violet120:"var(--color-violet-120)",pink10:"var(--color-pink-10)",pink20:"var(--color-pink-20)",pink30:"var(--color-pink-30)",pink40:"var(--color-pink-40)",pink50:"var(--color-pink-50)",pink60:"var(--color-pink-60)",pink70:"var(--color-pink-70)",pink80:"var(--color-pink-80)",pink90:"var(--color-pink-90)",pink100:"var(--color-pink-100)",pink110:"var(--color-pink-110)",pink120:"var(--color-pink-120)",teal10:"var(--color-teal-10)",teal20:"var(--color-teal-20)",teal30:"var(--color-teal-30)",teal40:"var(--color-teal-40)",teal50:"var(--color-teal-50)",teal60:"var(--color-teal-60)",teal70:"var(--color-teal-70)",teal80:"var(--color-teal-80)",teal90:"var(--color-teal-90)",teal100:"var(--color-teal-100)",teal110:"var(--color-teal-110)",teal120:"var(--color-teal-120)",tor10:"var(--color-tor-10)",tor20:"var(--color-tor-20)",tor30:"var(--color-tor-30)",tor40:"var(--color-tor-40)",tor50:"var(--color-tor-50)",tor60:"var(--color-tor-60)",tor70:"var(--color-tor-70)",tor80:"var(--color-tor-80)",tor90:"var(--color-tor-90)",tor100:"var(--color-tor-100)",tor110:"var(--color-tor-110)",tor120:"var(--color-tor-120)",white:"#ffffff",legacy:{background01:"var(--color-legacy-background1)",background02:"var(--color-legacy-background2)",text01:"var(--color-legacy-text1)",text02:"var(--color-legacy-text2)",text03:"var(--color-legacy-text3)",interactive01:"var(--color-legacy-interactive1)",interactive02:"var(--color-legacy-interactive2)",interactive03:"var(--color-legacy-interactive3)",interactive04:"var(--color-legacy-interactive4)",interactive05:"var(--color-legacy-interactive5)",interactive06:"var(--color-legacy-interactive6)",interactive07:"var(--color-legacy-interactive7)",interactive08:"var(--color-legacy-interactive8)",disabled:"var(--color-legacy-disabled)",divider01:"var(--color-legacy-divider1)",focusBorder:"var(--color-legacy-focus-border)"}}},A4="",hz=A=>{const{theme:M,assetsList:I,account:N,network:j,supportedNetworks:D,defaultBaseCurrency:c,exchanges:x,walletAccounts:i,isWalletConnected:n,isReady:Z,connectWallet:U,disconnectWallet:E,switchAccount:Q,switchNetwork:p,getBalance:t,getTokenBalance:r,getTokenBalances:b,getLocale:l,getTokenPrice:o,getNetworkFeeEstimate:y,ethWalletAdapter:O,solWalletAdapter:m,swapService:H}=A;return u(IM.ThemeProvider,{theme:M||Xz,children:u(bj,{network:j,account:N,assetsList:I,supportedNetworks:D,defaultBaseCurrency:c,exchanges:x,walletAccounts:i,isWalletConnected:n,isReady:Z,connectWallet:U,disconnectWallet:E,switchAccount:Q,switchNetwork:p,getBalance:t,getTokenBalance:r,getTokenBalances:b,getLocale:l,getTokenPrice:o,getNetworkFeeEstimate:y,ethWalletAdapter:O,solWalletAdapter:m,swapService:H,children:u(dD,{children:u(Wz,{})})})})};tA.BRAVE_SWAP_DATA_THEME_KEY=HA,tA.ChainID=vI,tA.CoinType=lA,tA.MAX_UINT256=WI,tA.NATIVE_ASSET_CONTRACT_ADDRESS_0X=LM,tA.Swap=hz,tA.WRAPPED_SOL_CONTRACT_ADDRESS=YM,tA.ZERO_EX_VALIDATION_ERROR_CODE=oj,tA.hexStrToNumberArray=YN,Object.defineProperties(tA,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=lib.umd.cjs.map