import{s as z,a as C,e as k,d as j,c as w,g as O,b as x,h,i as r,j as y,y as F,n as G,t as D,B as H,f as M,C as U,k as _,l as L}from"../chunks/scheduler.z1v5p5l_.js";import{S as J,i as K,c as N,b as Q,m as R,t as W,a as X,d as Y}from"../chunks/index.wUxZk5jp.js";import{e as T}from"../chunks/each.-oqiv04n.js";import{S as Z}from"../chunks/SEO.6ZEN78nZ.js";function P(d,e,o){const a=d.slice();return a[1]=e[o],a}function q(d){let e,o=`Coming soon…
    `;return{c(){e=k("div"),e.textContent=o,this.h()},l(a){e=w(a,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-jg1f82"&&(e.textContent=o),this.h()},h(){r(e,"class","lg:col-span-2 flex justify-center items-center font-bold text-base-content/20")},m(a,f){y(a,e,f)},p:G,d(a){a&&h(e)}}}function A(d){let e,o,a,f=d[1].title+"",g,c,p,u,n=d[1].site+"",i,t,s,l,m,$,E;return{c(){e=k("a"),o=k("div"),a=k("h2"),g=D(f),c=C(),p=k("p"),u=D("by "),i=D(n),t=C(),s=H("svg"),l=H("path"),m=H("path"),$=C(),this.h()},l(b){e=w(b,"A",{class:!0,href:!0,target:!0,rel:!0});var v=x(e);o=w(v,"DIV",{});var I=x(o);a=w(I,"H2",{class:!0});var B=x(a);g=M(B,f),B.forEach(h),c=j(I),p=w(I,"P",{class:!0});var S=x(p);u=M(S,"by "),i=M(S,n),S.forEach(h),I.forEach(h),t=j(v),s=U(v,"svg",{class:!0,width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var V=x(s);l=U(V,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),x(l).forEach(h),m=U(V,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),x(m).forEach(h),V.forEach(h),$=j(v),v.forEach(h),this.h()},h(){r(a,"class","text-xl font-bold group-hover:underline"),r(p,"class","text-base-content/60 text-sm font-bold"),r(l,"d","M19 11H37V29"),r(l,"stroke","currentColor"),r(l,"stroke-width","4"),r(l,"stroke-linecap","butt"),r(l,"stroke-linejoin","bevel"),r(m,"d","M11.5439 36.4559L36.9997 11"),r(m,"stroke","currentColor"),r(m,"stroke-width","4"),r(m,"stroke-linecap","butt"),r(m,"stroke-linejoin","bevel"),r(s,"class","inline-block h-5 w-5 opacity-0 duration-300 group-hover:opacity-50"),r(s,"width","18"),r(s,"height","18"),r(s,"viewBox","0 0 48 48"),r(s,"fill","none"),r(s,"xmlns","http://www.w3.org/2000/svg"),r(e,"class","rounded-box hover:bg-base-200 group relative flex items-center justify-between overflow-hidden p-4 duration-300"),r(e,"href",E=d[1].link),r(e,"target","_blank"),r(e,"rel","noopener noreferrer")},m(b,v){y(b,e,v),_(e,o),_(o,a),_(a,g),_(o,c),_(o,p),_(p,u),_(p,i),_(e,t),_(e,s),_(s,l),_(s,m),_(e,$)},p(b,v){v&1&&f!==(f=b[1].title+"")&&L(g,f),v&1&&n!==(n=b[1].site+"")&&L(i,n),v&1&&E!==(E=b[1].link)&&r(e,"href",E)},d(b){b&&h(e)}}}function ee(d){let e,o,a,f='<h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">daisyUI community articles</h1> <p class="text-base-content/60 text-xs italic">If you have an article or blog post about daisyUI, <a href="https://github.com/saadeghi/daisyui/blob/master/src/docs/src/lib/data/articles.js" target="_blank" rel="noopener, noreferrer" class="link">add it here</a></p>',g,c,p;e=new Z({props:{title:"daisyUI community articles",desc:"Tailwind CSS articles and daisyUI tutorials"}});let u=T(d[0].articles),n=[];for(let t=0;t<u.length;t+=1)n[t]=A(P(d,u,t));let i=null;return u.length||(i=q()),{c(){N(e.$$.fragment),o=C(),a=k("div"),a.innerHTML=f,g=C(),c=k("div");for(let t=0;t<n.length;t+=1)n[t].c();i&&i.c(),this.h()},l(t){Q(e.$$.fragment,t),o=j(t),a=w(t,"DIV",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-1hd15ba"&&(a.innerHTML=f),g=j(t),c=w(t,"DIV",{class:!0});var s=x(c);for(let l=0;l<n.length;l+=1)n[l].l(s);i&&i.l(s),s.forEach(h),this.h()},h(){r(a,"class","flex flex-col items-center gap-6"),r(c,"class","flex flex-col gap-8 py-20")},m(t,s){R(e,t,s),y(t,o,s),y(t,a,s),y(t,g,s),y(t,c,s);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(c,null);i&&i.m(c,null),p=!0},p(t,[s]){if(s&1){u=T(t[0].articles);let l;for(l=0;l<u.length;l+=1){const m=P(t,u,l);n[l]?n[l].p(m,s):(n[l]=A(m),n[l].c(),n[l].m(c,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=u.length,!u.length&&i?i.p(t,s):u.length?i&&(i.d(1),i=null):(i=q(),i.c(),i.m(c,null))}},i(t){p||(W(e.$$.fragment,t),p=!0)},o(t){X(e.$$.fragment,t),p=!1},d(t){t&&(h(o),h(a),h(g),h(c)),Y(e,t),F(n,t),i&&i.d()}}}function te(d,e,o){let{data:a}=e;return d.$$set=f=>{"data"in f&&o(0,a=f.data)},[a]}class ne extends J{constructor(e){super(),K(this,e,te,ee,z,{data:0})}}export{ne as component};
