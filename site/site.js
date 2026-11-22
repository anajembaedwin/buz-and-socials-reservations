
(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var ov=$('.ov');function tog(){ov.classList.toggle('open');document.body.style.overflow=ov.classList.contains('open')?'hidden':''}
$$('[data-menu]').forEach(function(b){b.addEventListener('click',tog)});
var WA='2348129209503',EM='buzandsocials@gmail.com';
// hide ended deals
var today=new Date().toISOString().slice(0,10);
$$('[data-until]').forEach(function(e){var u=e.getAttribute('data-until');if(u&&u<today)e.classList.add('hide')});
var any=$$('.deal:not(.hide)').length;var nd=$('#nodeals');if(nd&&!any)nd.classList.remove('hide');
// home search
var st=$('#search');
if(st){var kinds=$$('.tab',st);function pick(k){kinds.forEach(function(t){t.classList.toggle('on',t.dataset.k===k)});$$('.set',st).forEach(function(s){s.classList.toggle('hide',s.dataset.k!==k)});st.dataset.kind=k}
kinds.forEach(function(t){t.addEventListener('click',function(){pick(t.dataset.k)})});pick('hotel');
$('#sform').addEventListener('submit',function(e){e.preventDefault();var p=new URLSearchParams({kind:st.dataset.kind});$$('.set:not(.hide) [name]',st).forEach(function(i){if(i.value)p.set(i.name,i.value)});location.href='/enquiry.html?'+p.toString()})}
// enquiry
var ef=$('#eform');
if(ef){var q=new URLSearchParams(location.search);var kinds2=$$('.tab',ef);
function pk(k){kinds2.forEach(function(t){t.classList.toggle('on',t.dataset.k===k)});$$('.set',ef).forEach(function(s){var on=s.dataset.k===k;s.classList.toggle('hide',!on);$$('input,select,textarea',s).forEach(function(i){i.disabled=!on})});ef.dataset.kind=k}
kinds2.forEach(function(t){t.addEventListener('click',function(){pk(t.dataset.k)})});
pk(q.get('kind')||'hotel');
q.forEach(function(v,k){var el=ef.elements[k];if(el&&k!=='kind'){if(el.tagName==='SELECT'){var has=[].some.call(el.options,function(o){return o.value===v});if(!has){var o=document.createElement('option');o.value=o.textContent=v;el.appendChild(o)}}el.value=v}});
ef.addEventListener('submit',function(e){e.preventDefault();var err=$('#err');err.textContent='';
var nm=ef.elements.yname.value.trim(),ph=ef.elements.ywa.value.trim(),em=ef.elements.yemail.value.trim();
if(!nm){err.textContent='Please tell us your name.';return}
if(!ph&&!em){err.textContent='Please add a WhatsApp number or an email so we can send your quote.';return}
var lines=['Hello Buz and Socials, I would like a quote.','Request: '+$('.tab.on',ef).textContent];
$$('.set:not(.hide) [name]',ef).forEach(function(i){if(i.value.trim()){var l=i.closest('label');var lab=l?l.firstChild.textContent.trim():i.name;lines.push(lab+': '+i.value.trim())}});
lines.push('Name: '+nm);if(ph)lines.push('WhatsApp: '+ph);if(em)lines.push('Email: '+em);
var rq='RQ-'+Date.now().toString(36).toUpperCase().slice(-5);lines.push('Request number: '+rq);
var txt=lines.join('\n');
$('#rq').textContent=rq;$('#wal').href='https://wa.me/'+WA+'?text='+encodeURIComponent(txt);
$('#eml').href='mailto:'+EM+'?subject='+encodeURIComponent('Booking request '+rq)+'&body='+encodeURIComponent(txt);
$('#sum').textContent=txt;ef.classList.add('hide');$('#done').classList.add('show');window.scrollTo(0,0)});
var again=$('#again');if(again)again.addEventListener('click',function(){$('#done').classList.remove('show');ef.classList.remove('hide');window.scrollTo(0,0)})}
// contact form
var cf=$('#cform');
if(cf)cf.addEventListener('submit',function(e){e.preventDefault();var n=cf.elements.cn.value.trim(),m=cf.elements.cm.value.trim();if(!n||!m){$('#cerr').textContent='Please add your name and a message.';return}
var t='Hello Buz and Socials. My name is '+n+(cf.elements.cp.value?' ('+cf.elements.cp.value+')':'')+'.\n'+m;
$('#cwa').href='https://wa.me/'+WA+'?text='+encodeURIComponent(t);$('#cem').href='mailto:'+EM+'?subject='+encodeURIComponent('Message from '+n)+'&body='+encodeURIComponent(t);cf.classList.add('hide');$('#cdone').classList.add('show')});
// track
var tf=$('#tform');
if(tf)tf.addEventListener('submit',function(e){e.preventDefault();var b=tf.elements.bk.value.trim();if(!b){$('#terr').textContent='Please enter your booking number.';return}
$('#twa').href='https://wa.me/'+WA+'?text='+encodeURIComponent('Hello Buz and Socials, please update me on booking '+b+'.');$('#tem').href='mailto:'+EM+'?subject='+encodeURIComponent('Booking '+b)+'&body='+encodeURIComponent('Please update me on booking '+b+'.');tf.classList.add('hide');$('#tdone').classList.add('show')});
})();
