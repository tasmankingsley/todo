function k(){}const H=t=>t;function I(t){return t()}function B(){return Object.create(null)}function $(t){t.forEach(I)}function P(t){return typeof t=="function"}function xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}const J=typeof window!="undefined";let K=J?()=>window.performance.now():()=>Date.now(),q=J?t=>requestAnimationFrame(t):k;const y=new Set;function Q(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&q(Q)}function U(t){let e;return y.size===0&&q(Q),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}function et(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function nt(t){const e=it("style");return st(V(t),e),e.sheet}function st(t,e){et(t.head||t,e)}function vt(t,e,n){t.insertBefore(e,n||null)}function rt(t){t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function ot(t){return document.createTextNode(t)}function bt(){return ot(" ")}function kt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ct(t){return Array.from(t.childNodes)}function At(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e){t.value=e==null?"":e}function jt(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const O=new Map;let R=0;function ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:nt(e),rules:{}};return O.set(t,n),n}function W(t,e,n,s,i,a,u,f=0){const c=16.666/s;let r=`{
`;for(let m=0;m<=1;m+=c){const E=e+(n-e)*a(m);r+=m*100+`%{${u(E,1-E)}}
`}const l=r+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ut(l)}_${f}`,d=V(t),{stylesheet:_,rules:h}=O.get(d)||ft(d,t);h[o]||(h[o]=!0,_.insertRule(`@keyframes ${o} ${l}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${o} ${s}ms linear ${i}ms 1 both`,R+=1,o}function D(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),R-=i,R||lt())}function lt(){q(()=>{R||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let M;function w(t){M=t}const v=[],F=[],C=[],G=[],dt=Promise.resolve();let L=!1;function _t(){L||(L=!0,dt.then(X))}function b(t){C.push(t)}const z=new Set;let A=0;function X(){const t=M;do{for(;A<v.length;){const e=v[A];A++,w(e),ht(e.$$)}for(w(null),v.length=0,A=0;F.length;)F.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];z.has(n)||(z.add(n),n())}C.length=0}while(v.length);for(;G.length;)G.pop()();L=!1,z.clear(),w(t)}function ht(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}let x;function Y(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function S(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function Ot(){g={r:0,c:[],p:g}}function Rt(){g.r||$(g.c),g=g.p}function mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function St(t,e,n,s){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Z={duration:0};function Nt(t,e,n){let s=e(t,n),i=!1,a,u,f=0;function c(){a&&D(t,a)}function r(){const{delay:o=0,duration:d=300,easing:_=H,tick:h=k,css:p}=s||Z;p&&(a=W(t,0,1,d,o,_,p,f++)),h(0,1);const m=K()+o,E=m+d;u&&u.abort(),i=!0,b(()=>S(t,!0,"start")),u=U(N=>{if(i){if(N>=E)return h(1,0),S(t,!0,"end"),c(),i=!1;if(N>=m){const T=_((N-m)/d);h(T,1-T)}}return i})}let l=!1;return{start(){l||(l=!0,D(t),P(s)?(s=s(),Y().then(r)):r())},invalidate(){l=!1},end(){i&&(c(),i=!1)}}}function zt(t,e,n){let s=e(t,n),i=!0,a;const u=g;u.r+=1;function f(){const{delay:c=0,duration:r=300,easing:l=H,tick:o=k,css:d}=s||Z;d&&(a=W(t,1,0,r,c,l,d));const _=K()+c,h=_+r;b(()=>S(t,!1,"start")),U(p=>{if(i){if(p>=h)return o(0,1),S(t,!1,"end"),--u.r||$(u.c),!1;if(p>=_){const m=l((p-_)/r);o(1-m,m)}}return i})}return P(s)?Y().then(()=>{s=s(),f()}):f(),{end(c){c&&s.tick&&s.tick(1,0),i&&(a&&D(t,a),i=!1)}}}function Dt(t){t&&t.c()}function pt(t,e,n,s){const{fragment:i,on_mount:a,on_destroy:u,after_update:f}=t.$$;i&&i.m(e,n),s||b(()=>{const c=a.map(I).filter(P);u?u.push(...c):$(c),t.$$.on_mount=[]}),f.forEach(b)}function gt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(v.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,s,i,a,u,f=[-1]){const c=M;w(t);const r=t.$$={fragment:null,ctx:null,props:a,update:k,not_equal:i,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:B(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};u&&u(r.root);let l=!1;if(r.ctx=n?n(t,e.props||{},(o,d,..._)=>{const h=_.length?_[0]:d;return r.ctx&&i(r.ctx[o],r.ctx[o]=h)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](h),l&&yt(t,o)),d}):[],r.update(),l=!0,$(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const o=ct(e.target);r.fragment&&r.fragment.l(o),o.forEach(rt)}else r.fragment&&r.fragment.c();e.intro&&mt(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),X()}w(c)}class Pt{$destroy(){gt(this,1),this.$destroy=k}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $t(t){const e=t-1;return e*e*e+1}function qt(t,{delay:e=0,duration:n=400,easing:s=$t,x:i=0,y:a=0,opacity:u=0}={}){const f=getComputedStyle(t),c=+f.opacity,r=f.transform==="none"?"":f.transform,l=c*(1-u);return{delay:e,duration:n,easing:s,css:(o,d)=>`
			transform: ${r} translate(${(1-o)*i}px, ${(1-o)*a}px);
			opacity: ${c-l*d}`}}export{gt as A,Pt as S,bt as a,Et as b,jt as c,vt as d,it as e,et as f,At as g,b as h,Lt as i,Nt as j,zt as k,kt as l,rt as m,Ct as n,mt as o,Ot as p,St as q,$ as r,xt as s,ot as t,Rt as u,wt as v,qt as w,Dt as x,pt as y,k as z};
