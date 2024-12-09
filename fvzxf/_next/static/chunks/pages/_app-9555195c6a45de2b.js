(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4914)}])},4914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893);n(5724);var o=n(7294),s=n(4298),a=n.n(s),i=n(1163),u=n(3457),l=n.n(u);let c=e=>{window.dataLayer.push({event:"pageview",page:e})};var p=function(e){let{Component:t,pageProps:n}=e,s=(0,i.useRouter)();return(0,o.useEffect)(()=>(s.events.on("routeChangeComplete",c),()=>{s.events.off("routeChangeComplete",c)}),[s.events]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{id:"gtag-base",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer', '".concat("","');\n          ")}}),(0,r.jsx)(l(),{}),(0,r.jsx)(t,{...n})]})}},5724:function(){},1163:function(e,t,n){e.exports=n(9090)},4298:function(e,t,n){e.exports=n(2892)},3457:function(e,t,n){let r;var o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=e=>s(e,"__esModule",{value:!0}),p=(e,t)=>s(e,"name",{value:t,configurable:!0}),f=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))!l.call(e,o)&&(n||"default"!==o)&&s(e,o,{get:()=>t[o],enumerable:!(r=a(t,o))||r.enumerable});return e},d=(e,t)=>f(c(s(null!=e?o(u(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),m=(r="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>r&&r.get(e)||(t=f(c({}),e,1),r&&r.set(e,t),t)),g={};((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})(g,{default:()=>x});var h=d(n(1163)),v=d(n(4865)),b=d(n(5697)),y=d(n(7294)),w=p(({color:e="#29D",startPosition:t=.3,stopDelayMs:n=200,height:r=3,showOnShallow:o=!0,options:s,nonce:a,transformCSS:i=p(e=>y.createElement("style",{nonce:a},e),"transformCSS")})=>{let u=null;y.useEffect(()=>(s&&v.configure(s),h.default.events.on("routeChangeStart",l),h.default.events.on("routeChangeComplete",c),h.default.events.on("routeChangeError",f),()=>{h.default.events.off("routeChangeStart",l),h.default.events.off("routeChangeComplete",c),h.default.events.off("routeChangeError",f)}),[]);let l=p((e,{shallow:n})=>{(!n||o)&&(v.set(t),v.start())},"routeChangeStart"),c=p((e,{shallow:t})=>{(!t||o)&&(u&&clearTimeout(u),u=setTimeout(()=>{v.done(!0)},n))},"routeChangeEnd"),f=p((e,t,{shallow:r})=>{(!r||o)&&(u&&clearTimeout(u),u=setTimeout(()=>{v.done(!0)},n))},"routeChangeError");return i(`
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: ${r}px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogresss-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `)},"NextNProgress");w.propTypes={color:b.string,startPosition:b.number,stopDelayMs:b.number,height:b.number,showOnShallow:b.bool,options:b.object,nonce:b.string,transformCSS:b.func};var x=y.memo(w);e.exports=m(g)},4865:function(e,t,n){var r,o;void 0!==(o="function"==typeof(r=function(){var e,t,n,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(o[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=s(e,o.minimum,1),r.status=1===e?null:e;var n=r.render(!t),u=n.querySelector(o.barSelector),l=o.speed,c=o.easing;return n.offsetWidth,a(function(t){var s,a;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),i(u,(s=e,(a="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+l+"ms "+c,a)),1===e?(i(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){i(n,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},l)},l)):setTimeout(t,l)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var n,s=t.querySelector(o.barSelector),a=e?"-100":(-1+(r.status||0))*100,u=document.querySelector(o.parent);return i(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),!o.showSpinner&&(n=t.querySelector(o.spinnerSelector))&&f(n),u!=document.body&&l(u,"nprogress-custom-parent"),u.appendChild(t),t},r.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var s;r=t[s=(s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+s)in n)return r;return t}(s)),n.style[r]=o}return function(e,t){var r,o,s=arguments;if(2==s.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,s[1],s[2])}}();function u(e,t){return("string"==typeof e?e:p(e)).indexOf(" "+t+" ")>=0}function l(e,t){var n=p(e),r=n+t;u(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=p(e);u(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function p(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?r.call(t,n,t,e):r)&&(e.exports=o)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);