import{S as ze,i as je,s as ye,e as b,t as R,c as k,a as D,g as q,d as h,b as m,a4 as ue,f as T,E as _,L as fe,F as Se,aO as Ke,k as C,l as te,n as L,h as le,N as se,j as he,aL as Ge,m as Te,J as Ce,o as de,u as me,w as Qe,x as _e,v as ge,aM as We,aK as pe,aN as Xe,r as Ye}from"../../chunks/vendor-7d844a47.js";import{k as Ze}from"../../chunks/Brush.html-8ed484dd.js";import{d as Le}from"../../chunks/downloadBlob-f865e357.js";import{h as Ve}from"../../chunks/hljsDefineSvelte-bd0b92b8.js";import{c as xe}from"../../chunks/_components-c65d53ad.js";import"../../chunks/dots-7b604473.js";import"../../chunks/ClevelandDotPlot.percent-range.html-39ceebcd.js";function et(s){let e,l,t,n;return{c(){e=b("button"),l=R("Download \xA0\xA0\xA0\xA0\xA0"),this.h()},l(r){e=k(r,"BUTTON",{title:!0,class:!0,style:!0});var o=D(e);l=q(o,"Download \xA0\xA0\xA0\xA0\xA0"),o.forEach(h),this.h()},h(){e.disabled=s[0],m(e,"title","download zip file"),m(e,"class","icon svelte-1gef78k"),ue(e,"background-image","url(/icons/download.svg)")},m(r,o){T(r,e,o),_(e,l),t||(n=fe(e,"click",s[1]),t=!0)},p(r,[o]){o&1&&(e.disabled=r[0])},i:Se,o:Se,d(r){r&&h(e),t=!1,n()}}}function tt(s,e,l){let{data:t={}}=e,{slug:n}=e,r=!1;async function o(){l(0,r=!0);const a=[];a.push(...t.modules.map(i=>({path:i.slug.replace("./",""),data:i.contents}))),a.push({path:n,data:t.main.contents});const u=Ze(a.filter(Boolean),"path",!1);if(console.log(u),u.length===1)Le(u[0].data,`layercake-${n}`,!0);else{const i=n.split(".");Le(Ke(u),`layercake-${i[0]}.zip`)}l(0,r=!1)}return s.$$set=a=>{"data"in a&&l(2,t=a.data),"slug"in a&&l(3,n=a.slug)},[r,o,t,n]}class lt extends ze{constructor(e){super();je(this,e,tt,et,ye,{data:2,slug:3})}}const{document:ve}=Xe;function He(s,e,l){const t=s.slice();return t[14]=e[l],t}function $e(s,e,l){const t=s.slice();return t[14]=e[l],t}function Be(s,e,l){const t=s.slice();return t[19]=e[l],t}function Me(s,e,l){const t=s.slice();return t[22]=e[l],t}function Re(s){let e,l=s[6](s[3])+"";return{c(){e=b("div"),this.h()},l(t){e=k(t,"DIV",{id:!0,class:!0});var n=D(e);n.forEach(h),this.h()},h(){m(e,"id","params-table"),m(e,"class","svelte-2w8zgn")},m(t,n){T(t,e,n),e.innerHTML=l},p(t,n){n&8&&l!==(l=t[6](t[3])+"")&&(e.innerHTML=l)},d(t){t&&h(e)}}}function qe(s){let e,l,t=(s[2].usedIn[0].matches.length===0&&s[2].usedIn[1].matches.length>0?" SSR":"")+"",n,r,o,a,u=s[2].usedIn,i=[];for(let f=0;f<u.length;f+=1)i[f]=Ae(Be(s,u,f));return{c(){e=b("h3"),l=R("Used in these"),n=R(t),r=R(" examples:"),o=C();for(let f=0;f<i.length;f+=1)i[f].c();a=te(),this.h()},l(f){e=k(f,"H3",{class:!0});var E=D(e);l=q(E,"Used in these"),n=q(E,t),r=q(E," examples:"),E.forEach(h),o=L(f);for(let v=0;v<i.length;v+=1)i[v].l(f);a=te(),this.h()},h(){m(e,"class","svelte-2w8zgn")},m(f,E){T(f,e,E),_(e,l),_(e,n),_(e,r),T(f,o,E);for(let v=0;v<i.length;v+=1)i[v].m(f,E);T(f,a,E)},p(f,E){if(E&4&&t!==(t=(f[2].usedIn[0].matches.length===0&&f[2].usedIn[1].matches.length>0?" SSR":"")+"")&&le(n,t),E&4){u=f[2].usedIn;let v;for(v=0;v<u.length;v+=1){const V=Be(f,u,v);i[v]?i[v].p(V,E):(i[v]=Ae(V),i[v].c(),i[v].m(a.parentNode,a))}for(;v<i.length;v+=1)i[v].d(1);i.length=u.length}},d(f){f&&h(e),f&&h(o),se(i,f),f&&h(a)}}}function Ne(s){let e,l,t,n=s[19].group==="SSR"&&s[2].usedIn[0].matches.length>0&&Ue(),r=s[19].matches,o=[];for(let a=0;a<r.length;a+=1)o[a]=Pe(Me(s,r,a));return{c(){n&&n.c(),e=C(),l=b("ul");for(let a=0;a<o.length;a+=1)o[a].c();t=C(),this.h()},l(a){n&&n.l(a),e=L(a),l=k(a,"UL",{class:!0});var u=D(l);for(let i=0;i<o.length;i+=1)o[i].l(u);t=L(u),u.forEach(h),this.h()},h(){m(l,"class","svelte-2w8zgn")},m(a,u){n&&n.m(a,u),T(a,e,u),T(a,l,u);for(let i=0;i<o.length;i+=1)o[i].m(l,null);_(l,t)},p(a,u){if(a[19].group==="SSR"&&a[2].usedIn[0].matches.length>0?n||(n=Ue(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),u&4){r=a[19].matches;let i;for(i=0;i<r.length;i+=1){const f=Me(a,r,i);o[i]?o[i].p(f,u):(o[i]=Pe(f),o[i].c(),o[i].m(l,t))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},d(a){n&&n.d(a),a&&h(e),a&&h(l),se(o,a)}}}function Ue(s){let e,l;return{c(){e=b("h3"),l=R("SSR Examples:"),this.h()},l(t){e=k(t,"H3",{class:!0});var n=D(e);l=q(n,"SSR Examples:"),n.forEach(h),this.h()},h(){m(e,"class","svelte-2w8zgn")},m(t,n){T(t,e,n),_(e,l)},d(t){t&&h(e)}}}function Pe(s){let e,l,t=s[22].split("/").pop()+"",n,r;return{c(){e=b("li"),l=b("a"),n=R(t),this.h()},l(o){e=k(o,"LI",{});var a=D(e);l=k(a,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var u=D(l);n=q(u,t),u.forEach(h),a.forEach(h),this.h()},h(){m(l,"href",r=s[22]),m(l,"sveltekit:prefetch",""),m(l,"class","svelte-2w8zgn")},m(o,a){T(o,e,a),_(e,l),_(l,n)},p(o,a){a&4&&t!==(t=o[22].split("/").pop()+"")&&le(n,t),a&4&&r!==(r=o[22])&&m(l,"href",r)},d(o){o&&h(e)}}}function Ae(s){let e,l=s[19].matches.length>0&&Ne(s);return{c(){l&&l.c(),e=te()},l(t){l&&l.l(t),e=te()},m(t,n){l&&l.m(t,n),T(t,e,n)},p(t,n){t[19].matches.length>0?l?l.p(t,n):(l=Ne(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&h(e)}}}function Oe(s){let e,l=s[14].slug+"",t,n,r,o;function a(){return s[9](s[14])}return{c(){e=b("li"),t=R(l),this.h()},l(u){e=k(u,"LI",{class:!0});var i=D(e);t=q(i,l),i.forEach(h),this.h()},h(){m(e,"class",n="tab "+(s[0]===s[14].slug?"active":"")+" svelte-2w8zgn")},m(u,i){T(u,e,i),_(e,t),r||(o=fe(e,"click",a),r=!0)},p(u,i){s=u,i&16&&l!==(l=s[14].slug+"")&&le(t,l),i&17&&n!==(n="tab "+(s[0]===s[14].slug?"active":"")+" svelte-2w8zgn")&&m(e,"class",n)},d(u){u&&h(e),r=!1,o()}}}function Fe(s){let e,l,t=s[7](s[14].contents,s[14].slug)+"",n;return{c(){e=b("div"),l=b("pre"),n=C(),this.h()},l(r){e=k(r,"DIV",{class:!0,style:!0});var o=D(e);l=k(o,"PRE",{class:!0});var a=D(l);a.forEach(h),n=L(o),o.forEach(h),this.h()},h(){m(l,"class","svelte-2w8zgn"),m(e,"class","contents"),ue(e,"display",s[0]===s[14].slug?"block":"none")},m(r,o){T(r,e,o),_(e,l),l.innerHTML=t,_(e,n)},p(r,o){o&16&&t!==(t=r[7](r[14].contents,r[14].slug)+"")&&(l.innerHTML=t),o&17&&ue(e,"display",r[0]===r[14].slug?"block":"none")},d(r){r&&h(e)}}}function st(s){let e,l,t,n,r,o,a,u,i=s[5].slug+"",f,E,v,V,w,X,N,d,$,H,U=s[6](s[2].componentDescription)+"",ne,Y,P,ae,B,A,oe,M,K,ie,Z,O,re,we;ve.title=e=""+(s[5].slug+" component");var G=s[5].component;function be(c){return{}}G&&(w=new G(be())),d=new lt({props:{data:s[2],slug:s[1]}});let I=s[2].hasjsDoctable===!0&&Re(s),z=(s[2].usedIn[0].matches.length>0||s[2].usedIn[1].matches.length>0)&&qe(s),Q=s[4],j=[];for(let c=0;c<Q.length;c+=1)j[c]=Oe($e(s,Q,c));let W=s[4],y=[];for(let c=0;c<W.length;c+=1)y[c]=Fe(He(s,W,c));return{c(){l=C(),t=b("div"),n=b("div"),r=b("a"),o=R("\u2190 View all components"),a=C(),u=b("h1"),f=R(i),E=R(" component"),v=C(),V=b("div"),w&&he(w.$$.fragment),X=C(),N=b("div"),he(d.$$.fragment),$=C(),H=b("div"),ne=C(),I&&I.c(),Y=C(),P=b("div"),z&&z.c(),ae=C(),B=b("div"),A=b("ul");for(let c=0;c<j.length;c+=1)j[c].c();oe=C(),M=b("div"),K=b("div"),ie=C();for(let c=0;c<y.length;c+=1)y[c].c();this.h()},l(c){Ge('[data-svelte="svelte-1675z5z"]',ve.head).forEach(h),l=L(c),t=k(c,"DIV",{class:!0});var p=D(t);n=k(p,"DIV",{class:!0});var g=D(n);r=k(g,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var F=D(r);o=q(F,"\u2190 View all components"),F.forEach(h),g.forEach(h),a=L(p),u=k(p,"H1",{class:!0});var ce=D(u);f=q(ce,i),E=q(ce," component"),ce.forEach(h),v=L(p),V=k(p,"DIV",{class:!0});var ke=D(V);w&&Te(w.$$.fragment,ke),ke.forEach(h),X=L(p),N=k(p,"DIV",{class:!0});var De=D(N);Te(d.$$.fragment,De),De.forEach(h),$=L(p),H=k(p,"DIV",{class:!0});var Je=D(H);Je.forEach(h),ne=L(p),I&&I.l(p),Y=L(p),P=k(p,"DIV",{id:!0,class:!0});var Ee=D(P);z&&z.l(Ee),Ee.forEach(h),ae=L(p),B=k(p,"DIV",{id:!0,class:!0});var x=D(B);A=k(x,"UL",{id:!0,class:!0});var Ie=D(A);for(let J=0;J<j.length;J+=1)j[J].l(Ie);Ie.forEach(h),oe=L(x),M=k(x,"DIV",{id:!0,class:!0});var ee=D(M);K=k(ee,"DIV",{class:!0}),D(K).forEach(h),ie=L(ee);for(let J=0;J<y.length;J+=1)y[J].l(ee);ee.forEach(h),x.forEach(h),p.forEach(h),this.h()},h(){m(r,"href","/components"),m(r,"sveltekit:prefetch",""),m(r,"class","svelte-2w8zgn"),m(n,"class","all-components svelte-2w8zgn"),m(u,"class","svelte-2w8zgn"),m(V,"class","chart-hero svelte-2w8zgn"),m(N,"class","download svelte-2w8zgn"),m(H,"class","dek svelte-2w8zgn"),m(P,"id","used-in"),m(P,"class","svelte-2w8zgn"),m(A,"id","page-nav"),m(A,"class","svelte-2w8zgn"),m(K,"class","copy svelte-2w8zgn"),m(M,"id","contents-container"),m(M,"class","svelte-2w8zgn"),m(B,"id","pages"),m(B,"class",Z=""+(Ce(s[2].dek?"has-dek":"")+" svelte-2w8zgn")),m(t,"class","main svelte-2w8zgn")},m(c,S){T(c,l,S),T(c,t,S),_(t,n),_(n,r),_(r,o),_(t,a),_(t,u),_(u,f),_(u,E),_(t,v),_(t,V),w&&de(w,V,null),_(t,X),_(t,N),de(d,N,null),_(t,$),_(t,H),H.innerHTML=U,_(t,ne),I&&I.m(t,null),_(t,Y),_(t,P),z&&z.m(P,null),_(t,ae),_(t,B),_(B,A);for(let p=0;p<j.length;p+=1)j[p].m(A,null);_(B,oe),_(B,M),_(M,K),_(M,ie);for(let p=0;p<y.length;p+=1)y[p].m(M,null);O=!0,re||(we=fe(K,"click",s[8]),re=!0)},p(c,[S]){if((!O||S&32)&&e!==(e=""+(c[5].slug+" component"))&&(ve.title=e),(!O||S&32)&&i!==(i=c[5].slug+"")&&le(f,i),G!==(G=c[5].component)){if(w){Ye();const g=w;me(g.$$.fragment,1,0,()=>{ge(g,1)}),Qe()}G?(w=new G(be()),he(w.$$.fragment),_e(w.$$.fragment,1),de(w,V,null)):w=null}const p={};if(S&4&&(p.data=c[2]),S&2&&(p.slug=c[1]),d.$set(p),(!O||S&4)&&U!==(U=c[6](c[2].componentDescription)+"")&&(H.innerHTML=U),c[2].hasjsDoctable===!0?I?I.p(c,S):(I=Re(c),I.c(),I.m(t,Y)):I&&(I.d(1),I=null),c[2].usedIn[0].matches.length>0||c[2].usedIn[1].matches.length>0?z?z.p(c,S):(z=qe(c),z.c(),z.m(P,null)):z&&(z.d(1),z=null),S&17){Q=c[4];let g;for(g=0;g<Q.length;g+=1){const F=$e(c,Q,g);j[g]?j[g].p(F,S):(j[g]=Oe(F),j[g].c(),j[g].m(A,null))}for(;g<j.length;g+=1)j[g].d(1);j.length=Q.length}if(S&145){W=c[4];let g;for(g=0;g<W.length;g+=1){const F=He(c,W,g);y[g]?y[g].p(F,S):(y[g]=Fe(F),y[g].c(),y[g].m(M,null))}for(;g<y.length;g+=1)y[g].d(1);y.length=W.length}(!O||S&4&&Z!==(Z=""+(Ce(c[2].dek?"has-dek":"")+" svelte-2w8zgn")))&&m(B,"class",Z)},i(c){O||(w&&_e(w.$$.fragment,c),_e(d.$$.fragment,c),O=!0)},o(c){w&&me(w.$$.fragment,c),me(d.$$.fragment,c),O=!1},d(c){c&&h(l),c&&h(t),w&&ge(w),ge(d),I&&I.d(),z&&z.d(),se(j,c),se(y,c),re=!1,we()}}}const _t=!0;async function gt({page:s,fetch:e}){const{slug:l}=s.params,t=`${l}.json`,n=await e(t),r=await n.json();return n.status===200?{props:{slug:l,data:r,active:l}}:{status:n.status,error:new Error(`Could not load ${t}: ${r.message}`)}}function nt(s){const e=l=>l.map(t=>`\`${t.name}\``).join(" &vert; ");if(s.name)return`\`${s.name}\``;if(s.type.elements)return`(${e(s.type.elements)})`;if(s.expression){if(s.expression.name)return`\`${s.expression.name}\``;if(s.expression.elements)return`(${e(s.expression.elements)})`}}function at(s){return s?`\`${s}\``:"None"}function ot(s){return`<center>${s.type!=="OptionalType"?"yes":"no"}</center>`}function it(s,e,l){let t,n;const r=new We({html:!0,linkfify:!0});pe.registerLanguage("svelte",Ve),Ve(pe);let{slug:o}=e,{data:a}=e,{active:u=""}=e;function i(d){return r.render(d)}function f(d,$){const H=$.split(".");let U=H[H.length-1];return U==="csv"&&(U="diff"),pe.highlight(d,{language:U}).value}const E=new Map;xe.flatMap(d=>d.components).forEach(d=>{E.set(d.slug,d)});const v=`|Param|Default|Required|Description|
|-----|-------|--------|-----------|`;let V="",w="";a.hasjsDoctable===!0&&(V=`${a.jsdocParsed.tags.map(d=>`**${d.name}** ${nt(d.type)}|${at(d.default)}|${ot(d.type)}|${d.description.replace(/^(-|–|—)/g,"").trim()}`).join(`
`)}`,w=a.jsdocParsed.tags.length?`${v}
${V}`:"");function X(){const d=t[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",d);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const $=document.createElement("textarea");$.textContent=d,$.style.position="fixed",document.body.appendChild($),$.select();try{return document.execCommand("copy")}catch(H){return console.warn("Copy to clipboard failed.",H),!1}finally{document.body.removeChild($)}}}const N=d=>l(0,u=d.slug);return s.$$set=d=>{"slug"in d&&l(1,o=d.slug),"data"in d&&l(2,a=d.data),"active"in d&&l(0,u=d.active)},s.$$.update=()=>{s.$$.dirty&4&&l(4,t=[a.main].concat(a.modules)),s.$$.dirty&2&&l(5,n=E.get(o))},[u,o,a,w,t,n,i,f,X,N]}class pt extends ze{constructor(e){super();je(this,e,it,st,ye,{slug:1,data:2,active:0})}}export{pt as default,gt as load,_t as prerender};
