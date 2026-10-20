var currentLang = "en";
try { currentLang = localStorage.getItem("readymaid_routine_lang") || "en"; } catch(e) {}
if (["en", "zh", "ms"].indexOf(currentLang) === -1) currentLang = "en";

var uiMs = {
  "READY MAID CUSTOMER TOOL": "ALAT PELANGGAN READY MAID",
  "Helper Routine Planner": "Perancang Rutin Pembantu Rumah",
  "Build a clear daily routine for your helper, adjust it anytime, and download one clean Ready Maid customer PDF.": "Susun rutin harian pembantu rumah anda, ubah pada bila-bila masa dan muat turun PDF Ready Maid yang kemas.",
  "Reset": "Tetapkan Semula",
  "Download PDF": "Muat Turun PDF",
  "Single-page customer routine planner": "Perancang rutin pelanggan satu halaman",
  "Customer fills in the routine and downloads one clean visual Ready Maid routine page.": "Pelanggan mengisi rutin dan memuat turun satu halaman jadual visual Ready Maid yang kemas.",
  "Routine Builder": "Susun Rutin",
  "Preview": "Pratonton",
  "Choose a template, then adjust the timetable. The poster visual is fixed automatically by the selected template.": "Pilih templat, kemudian ubah jadual. Visual poster ditetapkan secara automatik mengikut templat yang dipilih.",
  "The final result is one visual A4 routine page.": "Hasil akhir ialah satu halaman jadual visual bersaiz A4.",
  "Weekday": "Hari Biasa",
  "Weekend": "Hujung Minggu",
  "Family / Customer Name": "Nama Keluarga / Pelanggan",
  "Helper Name": "Nama Pembantu Rumah",
  "Quick Template": "Templat Pantas",
  "Special Notes": "Nota Khas",
  "Optional": "Pilihan",
  "Baby nap time, medicine reminder, food preference, key rules...": "Waktu tidur bayi, peringatan ubat, pilihan makanan, peraturan penting...",
  "Baby / Childcare": "Penjagaan Bayi / Kanak-kanak",
  "Elderly Care": "Penjagaan Warga Emas",
  "Housework & Cooking": "Kerja Rumah & Memasak",
  "<b>Owner tip:</b> keep roughly the same routine for 1–2 weeks. Once the helper remembers the flow, slowly reduce reminders. This tool saves on the same device whenever local browser storage is available.": "<b>Tip majikan:</b> Kekalkan rutin yang hampir sama selama 1–2 minggu. Setelah pembantu rumah mengingati urutannya, kurangkan peringatan secara beransur-ansur. Alat ini menyimpan data pada peranti yang sama jika storan pelayar tersedia.",
  "Zoom": "Zum",
  "Table Only": "Jadual Sahaja",
  "Poster Only": "Poster Sahaja",
  "Both": "Kedua-duanya",
  "Helper Daily Routine": "Rutin Harian Pembantu Rumah",
  "女佣日常时间表": "Jadual Harian Pembantu Rumah",
  "FAMILY": "KELUARGA",
  "HELPER": "PEMBANTU RUMAH",
  "Special Notes / 特别备注": "Nota Khas",
  "Daily Routine <span>Overview</span>": "Rutin Harian <span>Ringkasan</span>",
  "This visual version is easier to share with the helper. The same timetable content is shown in a cleaner poster style with a photo area and grouped routine blocks.": "Versi visual ini lebih mudah dikongsi dengan pembantu rumah. Jadual yang sama dipaparkan sebagai poster yang lebih kemas dengan ruang gambar dan blok rutin mengikut waktu.",
  "Most important": "Paling Penting",
  "Build the habit first, then slowly reduce reminders. Keep the routine clear, simple and consistent.": "Bina tabiat dahulu, kemudian kurangkan peringatan. Pastikan rutin jelas, mudah dan konsisten.",
  "Ready Maid Agency · Chat with us on WhatsApp": "Ready Maid Agency · Hubungi kami di WhatsApp",
  "+ Add task": "+ Tambah tugas",
  "Time": "Masa",
  "Task": "Tugas",
  "Notes (optional)": "Nota (pilihan)",
  "Notes": "Nota",
  "No tasks yet. Click + Add task.": "Belum ada tugas. Klik + Tambah tugas.",
  "No tasks yet.": "Belum ada tugas.",
  "Creating PDF…": "Sedang menyediakan PDF…",
  "Daily Routine": "Rutin Harian",
  "Overview": "Ringkasan",
  "This visual version is easier to share with the helper. The same timetable content is shown in a cleaner poster style.": "Versi visual ini mudah dikongsi. Jadual yang sama dipaparkan sebagai poster yang lebih kemas.",
  "Ready_Maid_Helper_Routine.pdf": "Ready_Maid_Helper_Routine_BM.pdf",
  "PDF downloaded": "PDF telah dimuat turun",
  "Download failed: ": "Muat turun gagal: ",
  "Saved": "Disimpan",
  "Not saved": "Tidak disimpan",
  "Ready": "Sedia",
  "Reset the whole planner?": "Tetapkan semula keseluruhan perancang?",
  "Language: ": "Bahasa: "
};
function languageText(en, zh){
  return currentLang === "ms" ? (uiMs[en] || en) : (currentLang === "zh" ? zh : en);
}
var sectionMS = {Morning:"Pagi", "Late Morning":"Lewat Pagi", Afternoon:"Petang", Evening:"Malam"};
function sectionLabel(sec){
  if(currentLang === "ms") return sectionMS[sec];
  return currentLang === "zh" ? sectionCN[sec] : (sectionCN[sec]+" · "+sec);
}

var contentZh = {
  "Prepare milk / breakfast":"准备奶 / 早餐",
  "Baby / child first":"宝宝 / 小孩优先",
  "Wash bottles / dishes":"清洗奶瓶 / 餐具",
  "Baby care / bathe child":"照顾宝宝 / 给小孩洗澡",
  "Baby nap / tidy room":"宝宝午睡 / 整理房间",
  "Laundry for baby clothes":"清洗宝宝衣物",
  "Prepare lunch":"准备午餐",
  "Child activity / watch child":"陪小孩活动 / 照看小孩",
  "Prepare dinner":"准备晚餐",
  "Wash dishes":"清洗餐具",
  "Prepare for tomorrow":"准备明天用品",
  "Prepare breakfast / medicine":"准备早餐 / 药物",
  "Check medicine":"检查药物",
  "Help elderly wash up":"协助老人梳洗",
  "Tidy bedroom":"整理卧室",
  "Companionship / light exercise":"陪伴 / 轻度运动",
  "Laundry":"洗衣",
  "Soft food if needed":"如有需要准备软食",
  "Tea / snacks / comfort check":"茶点 / 小吃 / 查看老人情况",
  "Evening medicine":"晚间药物",
  "If needed":"如有需要",
  "Prepare for sleep":"准备休息",
  "Prepare breakfast":"准备早餐",
  "Hang clothes":"晾衣服",
  "Tidy bedrooms":"整理卧室",
  "Clean living room":"清洁客厅",
  "Clean kitchen":"清洁厨房",
  "Fold / iron clothes":"折衣 / 熨衣",
  "Take out rubbish":"倒垃圾"
};
var contentMs = {
  "Prepare milk / breakfast": "Sediakan susu / sarapan",
  "Baby / child first": "Utamakan bayi / kanak-kanak",
  "Wash bottles / dishes": "Cuci botol susu / pinggan mangkuk",
  "Baby care / bathe child": "Jaga bayi / mandikan kanak-kanak",
  "Baby nap / tidy room": "Tidur siang bayi / kemas bilik",
  "Laundry for baby clothes": "Basuh pakaian bayi",
  "Prepare lunch": "Sediakan makan tengah hari",
  "Child activity / watch child": "Aktiviti kanak-kanak / awasi kanak-kanak",
  "Prepare dinner": "Sediakan makan malam",
  "Wash dishes": "Cuci pinggan mangkuk",
  "Prepare for tomorrow": "Sediakan keperluan esok",
  "Prepare breakfast / medicine": "Sediakan sarapan / ubat",
  "Check medicine": "Semak ubat",
  "Help elderly wash up": "Bantu warga emas membersihkan diri",
  "Tidy bedroom": "Kemas bilik tidur",
  "Companionship / light exercise": "Temani / senaman ringan",
  "Laundry": "Basuh pakaian",
  "Soft food if needed": "Makanan lembut jika perlu",
  "Tea / snacks / comfort check": "Teh / snek / periksa keselesaan",
  "Evening medicine": "Ubat waktu malam",
  "If needed": "Jika perlu",
  "Prepare for sleep": "Bersedia untuk tidur",
  "Prepare breakfast": "Sediakan sarapan",
  "Hang clothes": "Jemur pakaian",
  "Tidy bedrooms": "Kemas bilik-bilik tidur",
  "Clean living room": "Bersihkan ruang tamu",
  "Clean kitchen": "Bersihkan dapur",
  "Fold / iron clothes": "Lipat / seterika pakaian",
  "Take out rubbish": "Buang sampah"
};
var contentEn = {};
Object.keys(contentZh).forEach(function(k){ contentEn[contentZh[k]] = k; });
Object.keys(contentMs).forEach(function(k){ contentEn[contentMs[k]] = k; });
function trContent(v){
  var en = contentEn[v] || v;
  if (currentLang === "zh") return contentZh[en] || v;
  if (currentLang === "ms") return contentMs[en] || v;
  return en;
}

var artOriginal = getTemplateArt;
getTemplateArt = function(key){
  var art = artOriginal(key);
  if (currentLang === "ms") {
    var mapMs = {
      childcare:{title:uiMs["Baby / Childcare"],sub:"Untuk keluarga yang memerlukan penjagaan bayi baru lahir, bayi atau kanak-kanak."},
      elderly:{title:uiMs["Elderly Care"],sub:"Untuk menemani, membantu dan menjaga warga emas setiap hari."},
      housework:{title:uiMs["Housework & Cooking"],sub:"Untuk rutin membersih, mengemas dan memasak setiap hari."}
    };
    var ms = mapMs[key] || mapMs.housework;
    return {cls:art.cls,emoji:art.emoji,title:ms.title,sub:ms.sub};
  }
  if (currentLang !== "zh") return art;
  var map = {
    childcare:{title:"宝宝 / 儿童照顾",sub:"适合主要需要新生儿、宝宝或儿童照顾的家庭。"},
    elderly:{title:"老人照顾",sub:"适合陪伴、日常协助及老人照顾的家庭。"},
    housework:{title:"家务与烹饪",sub:"适合日常清洁、整理及烹饪工作的家庭。"}
  };
  var zh = map[key] || map.housework;
  return {cls:art.cls,emoji:art.emoji,title:zh.title,sub:zh.sub};
};

function setText(sel, en, zh){
  var el=document.querySelector(sel); if(el) el.textContent=languageText(en, zh);
}
function setHtml(sel, en, zh){
  var el=document.querySelector(sel); if(el) el.innerHTML=languageText(en, zh);
}
function localizeStatic(){
  document.documentElement.lang=currentLang==="zh"?"zh-CN":currentLang;
  var toggle=document.getElementById("langToggle");
  if(toggle) {
    toggle.innerHTML=[['en','EN'],['zh','中文'],['ms','Bahasa Melayu']].map(function(item){return currentLang===item[0]?'<strong>'+item[1]+'</strong>':item[1]}).join(' | ');
    toggle.setAttribute('aria-label', languageText('Language: ', '语言：') + ({en:'English',zh:'中文',ms:'Bahasa Melayu'})[currentLang]);
  }
  setText('.rmh-kicker','READY MAID CUSTOMER TOOL','READY MAID 客户工具');
  setText('.rmh-title','Helper Routine Planner','女佣日常时间表规划');
  setText('.rmh-subtitle','Build a clear daily routine for your helper, adjust it anytime, and download one clean Ready Maid customer PDF.','为女佣安排清楚的每日工作时间表，随时修改，并下载一份整洁的 Ready Maid 客户 PDF。');
  var reset=document.getElementById('resetBtn'); if(reset) reset.textContent=languageText('Reset', '重置');
  var top=document.querySelector('#downloadBothTop span:last-child'); if(top) top.textContent=languageText('Download PDF', '下载 PDF');
  setText('.hero h1','Single-page customer routine planner','单页客户日常时间表规划');
  setText('.hero p','Customer fills in the routine and downloads one clean visual Ready Maid routine page.','客户填写日常工作安排后，即可下载一页清楚的 Ready Maid 时间表。');
  var titles=document.querySelectorAll('.panel-title'); if(titles[0]) titles[0].textContent=languageText('Routine Builder', '日常时间表设置'); if(titles[1]) titles[1].textContent=languageText('Preview', '预览');
  var subs=document.querySelectorAll('.panel-sub'); if(subs[0]) subs[0].textContent=languageText('Choose a template, then adjust the timetable. The poster visual is fixed automatically by the selected template.', '选择模板后再调整时间表。海报视觉会根据所选模板自动固定。'); if(subs[1]) subs[1].textContent=languageText('The final result is one visual A4 routine page.', '最终结果为一页视觉化 A4 时间表。');
  var weekday=document.querySelector('[data-plan="weekday"]'), weekend=document.querySelector('[data-plan="weekend"]'); if(weekday) weekday.textContent=languageText('Weekday', '平日'); if(weekend) weekend.textContent=languageText('Weekend', '周末');
  var labels=document.querySelectorAll('.editor-panel label');
  if(labels[0]) labels[0].textContent=languageText('Family / Customer Name', '家庭 / 客户姓名');
  if(labels[1]) labels[1].textContent=languageText('Helper Name', '女佣姓名');
  if(labels[2]) labels[2].textContent=languageText('Quick Template', '快速模板');
  if(labels[3]) labels[3].textContent=languageText('Special Notes', '特别备注');
  var family=document.getElementById('familyInput'), helper=document.getElementById('helperInput'), notes=document.getElementById('notesInput');
  if(family) family.placeholder=languageText('Optional', '选填'); if(helper) helper.placeholder=languageText('Optional', '选填'); if(notes) notes.placeholder=languageText('Baby nap time, medicine reminder, food preference, key rules...', '宝宝午睡时间、药物提醒、饮食偏好、重要规则...');
  var opts=document.querySelectorAll('#templateSelect option'); if(opts[0]) opts[0].textContent=languageText('Baby / Childcare', '宝宝 / 儿童照顾'); if(opts[1]) opts[1].textContent=languageText('Elderly Care', '老人照顾'); if(opts[2]) opts[2].textContent=languageText('Housework & Cooking', '家务与烹饪');
  setHtml('.helper-note','<b>Owner tip:</b> keep roughly the same routine for 1–2 weeks. Once the helper remembers the flow, slowly reduce reminders. This tool saves on the same device whenever local browser storage is available.','<b>雇主提示：</b> 最初 1–2 周尽量保持相同的工作流程。女佣熟悉后，再慢慢减少提醒。只要浏览器允许，本工具会自动保存于同一设备。');
  var zoom=document.querySelector('.zoom-box span'); if(zoom) zoom.textContent=languageText('Zoom', '缩放');
  var tableOnly=document.getElementById('tableOnlyBtn'),posterOnly=document.getElementById('posterOnlyBtn'),both=document.getElementById('bothBtn'),download=document.getElementById('downloadPdfBtn');
  if(tableOnly) tableOnly.textContent=languageText('Table Only', '表格'); if(posterOnly) posterOnly.textContent=languageText('Poster Only', '海报'); if(both) both.textContent=languageText('Both', '全部'); if(download) download.textContent=languageText('Download PDF', '下载 PDF');
  var h2=document.querySelector('.center-title h2'), zh=document.querySelector('.center-title .zh'); if(h2) h2.textContent=languageText('Helper Daily Routine', '女佣每日工作安排'); if(zh) zh.textContent=languageText('女佣日常时间表', '女佣日常时间表');
  var metas=document.querySelectorAll('.meta-panels b'); if(metas[0]) metas[0].textContent=languageText('FAMILY', '家庭'); if(metas[1]) metas[1].textContent=languageText('HELPER', '女佣');
  var sp=document.querySelector('.table-page .special-box b'); if(sp) sp.textContent=languageText('Special Notes / 特别备注', '特别备注');
  var ph=document.querySelector('.poster-copy h3'); if(ph) ph.innerHTML=languageText('Daily Routine <span>Overview</span>', '每日工作 <span>总览</span>');
  var pp=document.querySelector('.poster-copy p'); if(pp) pp.textContent=languageText('This visual version is easier to share with the helper. The same timetable content is shown in a cleaner poster style with a photo area and grouped routine blocks.', '这个视觉版本更方便与女佣分享。同一份时间表会以更清楚的海报方式呈现，并按时段分组。');
  var infos=document.querySelectorAll('.info-card b'); if(infos[0]) infos[0].textContent=languageText('FAMILY', '家庭'); if(infos[1]) infos[1].textContent=languageText('HELPER', '女佣');
  var tipb=document.querySelector('.poster-tip b'),tipd=document.querySelector('.poster-tip div'); if(tipb) tipb.textContent=languageText('Most important', '最重要'); if(tipd) tipd.textContent=languageText('Build the habit first, then slowly reduce reminders. Keep the routine clear, simple and consistent.', '先建立习惯，再慢慢减少提醒。时间表要清楚、简单，并保持一致。');
  var psp=document.querySelector('.poster-page .special-box b'); if(psp) psp.textContent=languageText('Special Notes / 特别备注', '特别备注');
  var status=document.getElementById('saveState');
  if(status) ['Ready','Saved','Not saved','PDF downloaded'].some(function(en){
    var zh=en==='PDF downloaded'?'PDF 已下载':en;
    if([en,zh,uiMs[en]].indexOf(status.textContent)===-1) return false;
    status.textContent=languageText(en,zh);return true;
  });
  var foot=document.querySelector('.poster-footnote span:last-child'); if(foot) foot.textContent=languageText('Ready Maid Agency · Chat with us on WhatsApp', 'Ready Maid Agency · WhatsApp 联系我们');
}

function localizeEditor(){
  var heads=document.querySelectorAll('.section-head strong');
  for(var i=0;i<heads.length;i++) heads[i].textContent=sectionLabel(sectionNames[i]);
  Array.prototype.forEach.call(document.querySelectorAll('.add-btn'),function(b){b.textContent=languageText('+ Add task', '+ 添加任务')});
  Array.prototype.forEach.call(document.querySelectorAll('.time-input'),function(i){i.placeholder=languageText('Time', '时间')});
  Array.prototype.forEach.call(document.querySelectorAll('.task-input'),function(i){i.placeholder=languageText('Task', '工作内容');i.value=trContent(i.value)});
  Array.prototype.forEach.call(document.querySelectorAll('.notes-input'),function(i){i.placeholder=languageText('Notes (optional)', '备注（选填）');i.value=trContent(i.value)});
  Array.prototype.forEach.call(document.querySelectorAll('.section'),function(s){var d=s.querySelector('div[style*="padding:12px"]');if(d) d.textContent=languageText('No tasks yet. Click + Add task.', '暂无任务。点击 + 添加任务。')});
}

function localizePreview(){
  var titles=document.querySelectorAll('.table-title');
  for(var i=0;i<titles.length;i++) titles[i].textContent=sectionLabel(sectionNames[i]);
  Array.prototype.forEach.call(document.querySelectorAll('.table thead tr'),function(tr){var th=tr.querySelectorAll('th');if(th[0])th[0].textContent=languageText('Time', '时间');if(th[1])th[1].textContent=languageText('Task', '工作内容');if(th[2])th[2].textContent=languageText('Notes', '备注')});
  Array.prototype.forEach.call(document.querySelectorAll('.table tbody tr'),function(tr){var td=tr.querySelectorAll('td');if(td[1])td[1].textContent=trContent(td[1].textContent);if(td[2])td[2].textContent=trContent(td[2].textContent)});
  var heads=document.querySelectorAll('.poster-card .head');for(var j=0;j<heads.length;j++) heads[j].textContent=sectionLabel(sectionNames[j]);
  Array.prototype.forEach.call(document.querySelectorAll('.poster-task,.poster-notes'),function(el){el.textContent=trContent(el.textContent)});
  Array.prototype.forEach.call(document.querySelectorAll('.poster-card .body > div[style*="color:#66788f"]'),function(el){el.textContent=languageText('No tasks yet.', '暂无任务。')});
}

var originalRenderEditor=renderEditor;
renderEditor=function(){ originalRenderEditor(); localizeStatic(); localizeEditor(); };
var originalRenderPreview=renderPreview;
renderPreview=function(){ originalRenderPreview(); localizeStatic(); localizePreview(); };

function applyLanguage(lang){
  currentLang=["en", "zh", "ms"].indexOf(lang)!==-1?lang:"en";
  try{localStorage.setItem('readymaid_routine_lang',currentLang)}catch(e){}
  localizeStatic();renderEditor();renderPreview();
}

async function directDownloadPDF(){
  var status=document.getElementById('saveState');
  try{
    if(status) status.textContent=languageText('Creating PDF…', '正在制作 PDF…');
    var W=1240,H=1754,canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
    var ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,W,H);
    function roundRect(x,y,w,h,r,fill,stroke){ctx.beginPath();if(ctx.roundRect){ctx.roundRect(x,y,w,h,r)}else{ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y)}if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}}
    function wrap(text,x,y,maxWidth,lineHeight,maxLines){var words=String(text||'').split(/\s+/),line='',lines=[];for(var i=0;i<words.length;i++){var test=line?line+' '+words[i]:words[i];if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=words[i]}else line=test}if(line)lines.push(line);if(maxLines)lines=lines.slice(0,maxLines);for(var j=0;j<lines.length;j++)ctx.fillText(lines[j],x,y+j*lineHeight);return y+lines.length*lineHeight}
    function wrapCJK(text,x,y,maxWidth,lineHeight,maxLines){var chars=Array.from(String(text||'')),line='',lines=[];for(var i=0;i<chars.length;i++){var test=line+chars[i];if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=chars[i]}else line=test}if(line)lines.push(line);if(maxLines)lines=lines.slice(0,maxLines);for(var j=0;j<lines.length;j++)ctx.fillText(lines[j],x,y+j*lineHeight);return y+lines.length*lineHeight}
    function loadImg(src){return new Promise(function(resolve,reject){var im=new Image();im.onload=function(){resolve(im)};im.onerror=reject;im.src=src})}
    function cleanLogoImage(im){var c=document.createElement('canvas');c.width=im.naturalWidth||im.width;c.height=im.naturalHeight||im.height;var cctx=c.getContext('2d');cctx.drawImage(im,0,0);var d=cctx.getImageData(0,0,c.width,c.height),px=d.data;for(var i=0;i<px.length;i+=4){var r=px[i],g=px[i+1],b=px[i+2],mx=Math.max(r,g,b),mn=Math.min(r,g,b),spread=mx-mn,avg=(r+g+b)/3;if(avg>=250&&spread<=6){px[i+3]=0}else if(avg>=242&&spread<=9){px[i+3]=Math.round((250-avg)/8*255)}}cctx.putImageData(d,0,0);return c}
    var logoEl=document.querySelector('.rmh-logo, .p-logo, .logo');if(!logoEl)throw new Error('Ready Maid logo element not found');var rawLogo=await loadImg(logoEl.src),logo=cleanLogoImage(rawLogo);ctx.drawImage(logo,65,38,360,150);
    roundRect(930,60,245,58,18,'#fff','#cfdbeb');ctx.fillStyle='#0a2d66';ctx.font='700 24px Arial';ctx.fillText('Licence C · JTKSM',958,97);
    ctx.strokeStyle='#edf2f8';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(65,215);ctx.lineTo(1175,215);ctx.stroke();
    roundRect(65,245,520,282,24,'#f9fbfe','#dce6f2');ctx.fillStyle='#0a2d66';ctx.font='700 58px Arial';ctx.fillText(languageText('Daily Routine', '每日工作'),95,327);ctx.fillStyle='#0b78d4';ctx.fillText(languageText('Overview', '总览'),95,392);ctx.fillStyle='#66788f';ctx.font='19px Arial';var intro=languageText('This visual version is easier to share with the helper. The same timetable content is shown in a cleaner poster style.', '这个视觉版本更方便与女佣分享。同一份时间表会以更清楚的海报方式呈现。');(currentLang==='zh'?wrapCJK:wrap)(intro,95,423,440,24,2);
    roundRect(95,488,210,34,10,'#f7f9fd','#e4ebf4');roundRect(320,488,210,34,10,'#f7f9fd','#e4ebf4');ctx.fillStyle='#66788f';ctx.font='700 16px Arial';ctx.fillText(languageText('FAMILY', '家庭'),110,480);ctx.fillText(languageText('HELPER', '女佣'),335,480);ctx.fillStyle='#193862';ctx.font='700 21px Arial';ctx.fillText(state.meta.family||'—',110,514);ctx.fillText(state.meta.helper||'—',335,514);
    roundRect(610,245,565,282,24,'#eef7ff','#dce6f2');var art=getTemplateArt(currentTemplate);ctx.textAlign='center';ctx.font='78px Arial';ctx.fillText(art.emoji,892,348);ctx.fillStyle='#0a2d66';ctx.font='700 34px Arial';ctx.fillText(art.title,892,409);ctx.fillStyle='#66788f';ctx.font='20px Arial';(currentLang==='zh'?wrapCJK:wrap)(art.sub,892,452,350,27,3);ctx.textAlign='left';
    var positions=[[65,555],[630,555],[65,930],[630,930]],cardW=545,cardH=350;sectionNames.forEach(function(sec,idx){var x=positions[idx][0],y=positions[idx][1];roundRect(x,y,cardW,cardH,20,'#fff','#dce6f2');var grad=ctx.createLinearGradient(x,y,x+cardW,y);grad.addColorStop(0,'#0b78d4');grad.addColorStop(1,'#7446d8');ctx.fillStyle=grad;ctx.fillRect(x,y,cardW,62);ctx.fillStyle='#fff';ctx.font='700 27px Arial';ctx.fillText(sectionLabel(sec),x+22,y+41);var rows=state.plans[currentPlan][sec].filter(function(r){return r.time||r.task||r.notes}).slice(0,5),yy=y+105;rows.forEach(function(r){ctx.fillStyle='#0b78d4';ctx.font='700 22px Arial';ctx.fillText(r.time||'—',x+22,yy);ctx.fillStyle='#193862';ctx.font='700 21px Arial';(currentLang==='zh'?wrapCJK:wrap)(trContent(r.task||'—'),x+150,yy,340,27,2);if(r.notes){ctx.fillStyle='#66788f';ctx.font='18px Arial';(currentLang==='zh'?wrapCJK:wrap)(trContent(r.notes),x+150,yy+29,340,22,1)}yy+=60})});
    var band=ctx.createLinearGradient(65,1300,1175,1300);band.addColorStop(0,'#0a2d66');band.addColorStop(.55,'#0b78d4');band.addColorStop(1,'#7446d8');roundRect(65,1300,1110,105,18,band,null);ctx.fillStyle='#fff';ctx.font='700 26px Arial';ctx.fillText(languageText('Most important', '最重要'),85,1341);ctx.font='20px Arial';var tip=languageText('Build the habit first, then slowly reduce reminders. Keep the routine clear, simple and consistent.', '先建立习惯，再慢慢减少提醒。时间表要清楚、简单，并保持一致。');(currentLang==='zh'?wrapCJK:wrap)(tip,85,1377,1040,26,2);
    roundRect(65,1425,1110,175,18,'#fff','#dce6f2');ctx.fillStyle='#193862';ctx.font='700 24px Arial';ctx.fillText(languageText('Special Notes / 特别备注', '特别备注'),85,1465);ctx.font='20px Arial';(currentLang==='zh'?wrapCJK:wrap)(state.meta.notes||'—',85,1503,1040,29,3);
    ctx.fillStyle='#66788f';ctx.font='18px Arial';ctx.textAlign='right';ctx.fillText(languageText('Ready Maid Agency · Chat with us on WhatsApp', 'Ready Maid Agency · WhatsApp 联系我们'),1170,1645);ctx.textAlign='left';
    var jpgData=canvas.toDataURL('image/jpeg',0.94).split(',')[1],bin=atob(jpgData),jpg=new Uint8Array(bin.length);for(var k=0;k<bin.length;k++)jpg[k]=bin.charCodeAt(k);var pdfBytes=jpegPdfBytes(jpg,W,H),pdfBlob=new Blob([pdfBytes],{type:'application/pdf'}),url=URL.createObjectURL(pdfBlob),a=document.createElement('a');a.href=url;a.download=languageText('Ready_Maid_Helper_Routine.pdf', 'Ready_Maid_Helper_Routine_CN.pdf');a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},3000);if(status)status.textContent=languageText('PDF downloaded', 'PDF 已下载');
  }catch(err){console.error(err);if(status)status.textContent=(languageText('Download failed: ', '下载失败：'))+(err&&err.message?err.message:'Unknown error')}
}

var langToggle=document.getElementById('langToggle');
if(langToggle){langToggle.onclick=function(){var languages=['en','zh','ms'];applyLanguage(languages[(languages.indexOf(currentLang)+1)%languages.length])}}
localizeStatic();
