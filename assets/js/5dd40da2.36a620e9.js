/*! For license information please see 5dd40da2.36a620e9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[54195],{124064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(824246),o=r(511151);const s={id:"v1.3.0",title:"v1.3.0",description:"Backstage Release v1.3.0"},a=void 0,i={id:"releases/v1.3.0",title:"v1.3.0",description:"Backstage Release v1.3.0",source:"@site/../docs/releases/v1.3.0.md",sourceDirName:"releases",slug:"/releases/v1.3.0",permalink:"/docs/releases/v1.3.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.3.0.md",tags:[],version:"current",frontMatter:{id:"v1.3.0",title:"v1.3.0",description:"Backstage Release v1.3.0"},sidebar:"releases",previous:{title:"v1.4.0",permalink:"/docs/releases/v1.4.0"},next:{title:"v1.2.0",permalink:"/docs/releases/v1.2.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Scaffolder Dry Run and Template Editor",id:"scaffolder-dry-run-and-template-editor",level:3},{value:"TypeScript 4.7",id:"typescript-47",level:3},{value:"Expiring Backend Tokens",id:"expiring-backend-tokens",level:3},{value:"Discovery providers",id:"discovery-providers",level:3},{value:"New plugin: Vault",id:"new-plugin-vault",level:3},{value:"New plugin: GitHub Pull Requests Board",id:"new-plugin-github-pull-requests-board",level:3},{value:"New plugin: Dynatrace",id:"new-plugin-dynatrace",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.3.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-dry-run-and-template-editor",children:"Scaffolder Dry Run and Template Editor"}),"\n",(0,n.jsxs)(t.p,{children:["The scaffolder plugin now has a new template editor in addition to the form editor, which is accessible via the context menu on the top right hand corner of the Create page. It allows you to load a template from a local directory, edit it with a preview, execute it in dry-run mode, and view the results. Note that the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API",children:"File System Access API"})," must be supported by your browser for this to be available."]}),"\n",(0,n.jsx)(t.h3,{id:"typescript-47",children:"TypeScript 4.7"}),"\n",(0,n.jsxs)(t.p,{children:["The recommended TypeScript version has been bumped to ",(0,n.jsx)(t.code,{children:"~4.7.0"}),", and that\u2019s what the main Backstage repository uses right now for its builds. Each Backstage project manages their version separately however, so there is no rush or immediate effect on users - you can update the ",(0,n.jsx)(t.code,{children:"typescript"})," dependency in your root ",(0,n.jsx)(t.code,{children:"package.json"})," once you feel ready to do so."]}),"\n",(0,n.jsx)(t.h3,{id:"expiring-backend-tokens",children:"Expiring Backend Tokens"}),"\n",(0,n.jsxs)(t.p,{children:["In 1.2 we introduced expiry times for server-to-server authentication tokens issued from the standard ",(0,n.jsx)(t.code,{children:"TokenManager"}),". At that point in time, the expiry was only added to tokens and not yet enforced. In this release however, it is now also enforced, meaning that expired tokens are considered invalid and will be rejected."]}),"\n",(0,n.jsx)(t.h3,{id:"discovery-providers",children:"Discovery providers"}),"\n",(0,n.jsxs)(t.p,{children:["Several new ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity",children:"entity providers"})," have been contributed as replacements for their corresponding discovery processors. Entity providers allow for more control and are ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/external-integrations",children:"recommended"})," over their processing counterparts."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"AzureDevOpsEntityProvider"})," as replacement for ",(0,n.jsx)(t.code,{children:"AzureDevOpsDiscoveryProcessor"}),". PR ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11604",children:"#11604"})," contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/goenning",children:"@goenning"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," as replacement for ",(0,n.jsx)(t.code,{children:"GitLabDiscoveryProcessor"}),". PR ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11886",children:"#11886"})," contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/ivangonzalezacuna",children:"@ivangonzalezacuna"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BitbucketCloudEntityProvider"})," as a replacement for ",(0,n.jsx)(t.code,{children:"BitbucketDiscoveryProcessor"})," (for Bitbucket Cloud only). PR ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11345",children:"#11345"})," contributed by ",(0,n.jsx)(t.a,{href:"%E2%80%8B%E2%80%8Bhttps://github.com/pjungermann",children:"@pjungermann"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-vault",children:"New plugin: Vault"}),"\n",(0,n.jsxs)(t.p,{children:["View secrets from ",(0,n.jsx)(t.a,{href:"https://www.vaultproject.io/",children:"HashiCorp Vault"})," alongside your components. PR ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11423",children:"#11423"})," contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/ivangonzalezacuna",children:"@ivangonzalezacuna"})]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-github-pull-requests-board",children:"New plugin: GitHub Pull Requests Board"}),"\n",(0,n.jsxs)(t.p,{children:["GitHub Pull Requests Board Plugin is a board that helps you visualize all open pull requests from all repositories owned by a team, with the main goal of reducing the time from opening a PR to merging it. PR ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11043",children:"#11043"})," contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/gregorytalita",children:"@gregorytalita"})]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-dynatrace",children:"New plugin: Dynatrace"}),"\n",(0,n.jsxs)(t.p,{children:["Displays tracing data from ",(0,n.jsx)(t.a,{href:"https://www.dynatrace.com/",children:"Dynatrace"})," alongside your components. PR ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11754",children:"#11754"})," contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/isand3r",children:"@isand3r"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"}),", please upgrade to the latest version if you are using this module.\n",(0,n.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"}),", please upgrade to the latest version if you are using this module."]}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.3.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var x=v.prototype=new b;x.constructor=v,g(x,m.prototype),x.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,s={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!_.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:i,props:s,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===s?"."+P(c,0):s,k(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(a,t,o,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",k(e))for(var l=0;l<e.length;l++){var u=s+P(i=e[l],l);c+=C(i,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,o,u=s+P(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function B(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},O={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:O,ReactCurrentOwner:w};t.Children={map:B,forEach:function(e,t,r){B(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return B(e,(function(){t++})),t},toArray:function(e){return B(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),s=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(667294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);