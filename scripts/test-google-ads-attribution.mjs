import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {strict as assert} from 'node:assert';
import {webcrypto} from 'node:crypto';
const source=readFileSync(new URL('../site-v2/google-ads-attribution.js', import.meta.url),'utf8');
class Store {constructor(){this.map=new Map()} getItem(k){return this.map.has(k)?this.map.get(k):null} setItem(k,v){this.map.set(k,String(v))}}
class El {constructor(url,target='_blank'){this.attrs={href:url};this.target=target;this.textContent='WhatsApp'}closest(q){return q.includes('a[href]')?this:null}getAttribute(k){return this.attrs[k]||null}setAttribute(k,v){this.attrs[k]=v}}
class Anchor extends El {get href(){return this.attrs.href}set href(v){this.attrs.href=v}}
const wa='https://wa.me/601115556666?text=Hello%20Readymaid';
function page(url,local=new Store(),session=new Store(),cookie={value:''}) {
 const w={localStorage:local,sessionStorage:session,crypto:webcrypto,dataLayer:[],setTimeout(fn){this.timer=fn},__readymaidPrimaryWhatsAppNumber:'601115556666'};
 const nav=[],logs=[],loaded=[];
 const loc=new URL(url);loc.assign=value=>nav.push(value);
 let click;
 const doc={
  get cookie(){return cookie.value},set cookie(v){cookie.value=v.split(';')[0]},
  head:{appendChild:x=>loaded.push(x)},createElement:()=>({dataset:{}}),
  querySelector:()=>null,addEventListener:(name,cb)=>{if(name==='click')click=cb}
 };
 runInNewContext(source,{window:w,document:doc,location:loc,URL,URLSearchParams,Date,Uint8Array,Element:El,HTMLAnchorElement:Anchor,console:{info:(...x)=>logs.push(x)}});
 return {w,local,session,cookie,logs,nav,loaded,
  click(href=wa,target='_blank'){
   const el=new Anchor(href,target);const e={target:el,preventDefault(){this.prevented=true},prevented:false};
   click(e);return {el,e,url:new URL(el.href)};
  },
  events(name){return w.dataLayer.filter(x=>x[0]==='event'&&x[1]===name).map(x=>x[2])}
 };
}
{
 const p=page('https://readymaid.my/?gclid=abc123&utm_source=google&utm_medium=cpc&utm_campaign=Care');
 const first=p.click(),msg=first.url.searchParams.get('text');
 assert.match(msg,/^Hello Readymaid\n\n\[Ref: RM-[A-F0-9]{6}\]$/);
 const ref=msg.match(/RM-([A-F0-9]{6})/)[1];
 assert.match(p.cookie.value,/^rm_attribution=/);
 const mapping=JSON.parse(p.local.getItem('rm_attribution_refs'))[0];
 assert.equal(mapping.ref,ref);assert.equal(mapping.gclid,'abc123');assert.equal(mapping.landingPath,'/');
 assert.equal(p.events('conversion').length,1);
 assert.equal(p.events('conversion')[0].send_to,'AW-18587211891/f5meCMmSpb0dEPOwiZ9F');
 assert.equal(p.events('conversion')[0].currency,'MYR');
 assert.equal(p.events('whatsapp_click')[0].lead_reference,'RM-'+ref);
 p.click();assert.equal(p.events('conversion').length,1);
 const next=page('https://readymaid.my/contact-ready-maid/',p.local,p.session,p.cookie);
 assert.match(next.click().url.searchParams.get('text'),new RegExp('RM-'+ref));
 assert.equal(next.events('conversion').length,0);
}
{
 const p=page('https://readymaid.my/?gclid=test&debug_ads=1');p.click();
 assert.equal(p.events('conversion').length,0);
 assert.equal(p.events('whatsapp_click').length,0);
 assert.ok(p.logs.some(x=>x.includes('Captured')));
}
{
 const p=page('https://readymaid.my/');
 assert.equal(p.click().url.searchParams.get('text'),'Hello Readymaid');
 assert.equal(p.events('conversion').length,1);
}
{
 const p=page('https://readymaid.my/?wbraid=ok');
 const c=p.click('https://api.whatsapp.com/send?phone=601115556666&text=Hello','_self');
 assert.equal(c.e.prevented,true);
 assert.match(c.url.searchParams.get('text'),/\[Ref: RM-/);
 assert.equal(typeof p.events('conversion')[0].event_callback,'function');
 p.w.timer();assert.equal(p.nav.length,1);
}
console.log('PASS: attribution capture, cookie, reference map, GA4/Ads, click dedup, route persistence, debug and same-tab navigation');
