'use strict';
const d = window.PORTFOLIO;
const $ = s => document.querySelector(s);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for (const [id,value] of Object.entries({headline:d.headline,name:d.name,intro:d.intro,university:d.university,degree:d.education,cgpa:d.cgpa,rank:d.rank,'about-copy':d.about,year:new Date().getFullYear()})) $('#'+id).textContent=value;
$('#email').textContent=d.email; $('#email').href='mailto:'+d.email;
$('#github').href=d.github; $('#linkedin').href=d.linkedin;
if(d.photo){const img=document.createElement('img');img.src=d.photo;img.alt='Portrait of '+d.name;$('#portrait').replaceChildren(img);}
$('#experience-list').innerHTML=d.experience.map(([type,title,body])=>`<article class="experience-row"><p class="type">${esc(type)}</p><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join('');
$('#skills-grid').innerHTML=d.skills.map(([title,body])=>`<div class="skill"><h3>${esc(title)}</h3><p>${esc(body)}</p></div>`).join('');
$('#coursework').innerHTML=d.coursework.map(([t,b])=>`<p><strong>${esc(t)}</strong><br>${esc(b)}</p>`).join('');
$('#education-history').innerHTML=d.educationHistory.map(([y,t,b])=>`<p><strong>${esc(t)}</strong><br>${esc(y)} · ${esc(b)}</p>`).join('');
$('#gre').textContent=d.gre;
const projectVisual = p => p.image===false ? `<div class="project-placeholder"><span>COMPUTER VISION</span><strong>Tennis tracking</strong><small>Motion · trajectories · speed</small></div>` : `<img src="assets/images/${esc(p.id)}.webp" alt="${esc(p.caption)}" loading="lazy">`;
const categories=['All projects',...new Set(d.projects.map(p=>p.category))];
$('.filters').innerHTML=categories.map((c,i)=>`<button type="button" aria-pressed="${i===0}" data-category="${esc(c)}">${esc(c)}</button>`).join('');
function render(category){const projects=d.projects.filter(p=>category==='All projects'||p.category===category);$('#project-grid').innerHTML=projects.map(p=>`<article class="project-card"><div class="project-image">${projectVisual(p)}</div><div class="project-body"><p class="eyebrow">${esc(p.category)} / TEAM PROJECT</p><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><p class="tools">${esc(p.tools)}</p><button class="detail-button" data-project="${esc(p.id)}">Explore project <span aria-hidden="true">↗</span></button></div></article>`).join('');$('#filter-status').textContent=projects.length+' projects shown';}
render('All projects');
$('.filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$('.filters').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render(b.dataset.category);});
const dialog=$('#project-dialog');
$('#project-grid').addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(!b)return;const p=d.projects.find(p=>p.id===b.dataset.project);$('#dialog-content').innerHTML=`<p class="eyebrow">${esc(p.category)} / TEAM PROJECT</p><h2 id="dialog-title">${esc(p.title)}</h2>${projectVisual(p)}${p.caption?`<p class="caption">${esc(p.caption)}</p>`:""}<section class="project-detail-section"><h3>Project overview</h3><p>${esc(p.details)}</p></section><section class="project-detail-section"><h3>How it works</h3><p>${esc(p.method)}</p></section><section class="project-detail-section"><h3>Results and scope</h3><p>${esc(p.outcome)}</p></section><section class="contribution-box"><h3>My contribution</h3><p>${esc(p.contribution)}</p></section><p class="tools"><strong>Tools:</strong> ${esc(p.tools)}</p>${p.repository?`<a href="${esc(p.repository)}" target="_blank" rel="noopener">Team repository ↗</a>`:""}${p.demo?`<a href="${esc(p.demo)}" target="_blank" rel="noopener">Watch team demo ↗</a>`:''}`;dialog.showModal();});
$('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
$('.menu').addEventListener('click',()=>{const open=$('#navigation').classList.toggle('open');$('.menu').setAttribute('aria-expanded',String(open));});
$('#navigation').addEventListener('click',e=>{if(e.target.closest('a')){$('#navigation').classList.remove('open');$('.menu').setAttribute('aria-expanded','false');}});
