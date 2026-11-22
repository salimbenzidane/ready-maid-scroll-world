import fs from 'node:fs';
import crypto from 'node:crypto';
const mode=process.argv.includes('--ci')?'ci':process.argv.includes('--self-test')?'self-test':'vercel';
const sha256=v=>crypto.createHash('sha256').update(v).digest('hex');
const config=JSON.parse(fs.readFileSync('config/meet-duke-baseline.json','utf8'));
const read=(file,overrides)=>Object.prototype.hasOwnProperty.call(overrides,file)?Buffer.from(overrides[file]):fs.readFileSync(file);
function validate(overrides={}){
 const errors=[];
 if(config.version!==3)errors.push('V2 baseline version must be 3');
 for(const [file,expected] of Object.entries(config.hashes||{})){
  try{if(sha256(read(file,overrides))!==expected)errors.push('Protected V2 file changed: '+file)}
  catch(e){errors.push('Missing protected V2 file: '+file)}
 }
 for(const file of config.mediaFiles||[]){
  try{if(fs.statSync(file).size<1000)errors.push('Empty/broken media: '+file)}catch(e){errors.push('Missing media: '+file)}
 }
 let index='',sitemap='',fees='',refund='',script='';
 try{index=read('index.html',overrides).toString('utf8')}catch{}
 try{sitemap=read('sitemap.xml',overrides).toString('utf8')}catch{}
 try{fees=read('fees-payment-replacement-policy/index.html',overrides).toString('utf8')}catch{}
 try{refund=read('refund-policy/index.html',overrides).toString('utf8')}catch{}
 try{script=read('script.js',overrides).toString('utf8')}catch{}
 if(!index.includes('site-v2/assets/readymaid-logo.png'))errors.push('Approved V2 brand logo missing');
 if(!index.includes('Maid runaway only.'))errors.push('Approved V2 warranty wording missing');
 if(!index.includes('JTKSM 432')||!index.includes('30 Nov 2028'))errors.push('Approved Licence C missing');
 if(!index.includes('https://readymaid.my/'))errors.push('Canonical production host missing');
 if(!/<link[^>]*rel="canonical"[^>]*href="https:\/\/readymaid\.my\/"/.test(index))errors.push('Homepage canonical missing');
 if(!/<meta[^>]*content="index,follow,max-image-preview:large"[^>]*name="robots"/.test(index)&&!/<meta[^>]*name="robots"[^>]*content="index,follow,max-image-preview:large"/.test(index))errors.push('Homepage must be indexable');
 if((index.match(/<h1(?:\s|>)/gi)||[]).length!==1)errors.push('Homepage requires exactly one H1');
 if(!index.includes('application/ld+json'))errors.push('Homepage missing agency schema');
 if(!index.includes('site-v2/analytics.js'))errors.push('Homepage GA4 integration missing');
 if(!index.includes('601115556666'))errors.push('Approved WhatsApp number missing');
 if(!script.includes('601115556666')||script.includes('60123790677'))errors.push('Legacy analytics does not track approved number');
 for(const path of ['refund-policy','fees-payment-replacement-policy','licence-company-verification','contact-ready-maid','domestic-helper-faq']){
  if(!index.includes('/'+path+'/'))errors.push('Homepage missing required SEO footer link: '+path);
  if(!sitemap.includes('https://readymaid.my/'+path+'/'))errors.push('Sitemap missing required compliance URL: '+path);
 }
 if((sitemap.match(/<url>/g)||[]).length<47)errors.push('Sitemap dropped below 47 existing URLs');
 if(!fees.includes('RM15,500'))errors.push('Approved package missing from fees page');
 if(!fees.includes('Maid runaway only.')||!refund.includes('Maid runaway only.'))errors.push('Legacy policy pages not aligned with new FAQ');
 if(index.includes('noindex,nofollow'))errors.push('Private noindex leaked to production');
 return errors;
}
if(mode==='self-test'){
 const cases=[
  ['contact mutation',{'index.html':fs.readFileSync('index.html','utf8').replace('601115556666','60123790677')}],
  ['warranty mutation',{'index.html':fs.readFileSync('index.html','utf8').replace('Maid runaway only.','All replacements covered.')}],
  ['script mutation',{'script.js':fs.readFileSync('script.js','utf8').replace('601115556666','60123790677')}],
  ['branding mutation',{'index.html':fs.readFileSync('index.html','utf8').replace('site-v2/assets/readymaid-logo.png','/assets/not-approved.png')}]
 ];
 const misses=cases.filter(([name,p])=>validate(p).length===0).map(([name])=>name);
 if(misses.length){console.error('V2 guard self-test FAILED: '+misses.join(','));process.exit(1)}
 console.log('V2 guard self-test PASS: '+cases.length+' protected mutations blocked');process.exit(0);
}
const errors=validate();
if(errors.length){console.error('READYMAID V2 DEPLOYMENT BLOCKED:\n'+errors.map(x=>'- '+x).join('\n'));process.exit(mode==='ci'?1:0)}
console.log('Readymaid V2 production-source integrity PASS: approved homepage, SEO links, policies and media');
process.exit(mode==='ci'?0:1);
