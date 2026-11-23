{
const impact=[
[10,'','+','Years shipping software','Backend, web, mobile and AI'],
[100,'','K+','Active users','On products I support today'],
[50,'','+','APIs and services','Built and maintained'],
[500,'$','M+','Processed through payments','Abhi'],
[3,'','','Developers mentored','Later promoted to senior'],
[450,'','+','Companies on the platform','Abhi'],
[10,'','K+','Requests per second','At the edge, on Cloudflare Workers'],
[85,'','%','Test coverage','Up from 40%'],
[6,'','','Engineers led','Plus external partners']];
const skills=[
['AI & LLMs',['AI Agents','RAG','Tool calling','Evals','MCP','LangChain','LangGraph','OpenAI','Claude']],
['Backend',['Node.js','NestJS','Python','FastAPI','.NET','REST','GraphQL','WebSockets','Kafka']],
['Frontend',['React','Next.js','TypeScript','Tailwind','Redux','TanStack']],
['Mobile',['React Native','Expo','Swift modules','Kotlin modules','App Store','Play Store']],
['Data',['PostgreSQL','MongoDB','Redis','SQL Server','Elasticsearch']],
['Cloud & DevOps',['AWS','Azure','GCP','Cloudflare','Docker','Kubernetes','Terraform','GitHub Actions']]];
const projects=[
{img:'powerhouse',tag:'AI · Legal',name:'Powerhouse',desc:'AI legal workflow platform.',role:'Built the AI layer (RAG, agents, tool calling, evals, model routing) and led 2 developers. Review time went from 2 hours to 15 minutes.',stack:['LLMs','RAG','AI Agents','Evals'],url:'https://www.powerhouse.so/',link:'Visit live product →'},
{img:'abhi',tag:'Fintech',name:'Abhi',desc:'Payroll, salary advance and payments platform. $500M+ processed for 450+ companies.',role:'Payments backend: double-entry ledger, idempotent payment APIs and reconciliation.',stack:['Node.js','PostgreSQL','Redis','AWS'],url:'https://abhi.com.pk/',link:'Visit live product →'},
{img:'skillmatch',tag:'AI · Hiring',name:'SkillMatch AI',desc:'AI hiring platform that screens resumes and matches candidates to roles.',role:'Senior full stack engineer and team lead on the product.',stack:['AI matching','Full Stack','Team Lead'],url:'https://www.skillmatchai.in/',link:'Visit live product →'},
{img:'careflow',tag:'AI · Healthcare',name:'CareFlow AI',desc:'AI-powered clinic management: appointments, patient summaries and visit reports.',role:'Built with a team. I worked mostly on appointments and the backend.',stack:['Backend','Mobile','AI'],url:'https://play.google.com/store/apps/details?id=io.xtnd.careflow',link:'Get it on Google Play →'}];
const journey=[
['Nov 2023 – Present','Lead Full Stack Engineer','Botmer International · Remote','Lead a team of 6. AI agents and RAG, 50+ APIs, API response time cut from 900 ms to 450 ms, deployments from 45 minutes to 8.'],
['Jul 2020 – Nov 2023','Senior Software Engineer (Tech Lead)','AHOY Tech · Remote','React Native store releases, payment and lending flows with Stripe, and web front ends in React and Next.js.'],
['Feb 2018 – Jul 2020','Senior Software Engineer','ABHI Microfinance Bank · Hybrid','React and Node.js web apps, plus text processing and search in Python with Elasticsearch.'],
['Jul 2016 – Jan 2018','Software Engineer','N3O · Hybrid','Web features with JavaScript, HTML and CSS, alongside my final years of study.'],
['2013 – 2018','Bachelor of Telecommunications Engineering','Bahauddin Zakariya University','CGPA 3.55 / 4.00']];

document.getElementById('impact').innerHTML=impact.map(([n,pre,suf,k,sub])=>`<div class="imp"><b><em>${pre}</em><span class="num" data-to="${n}">0</span><em>${suf}</em></b><div class="k">${k}</div><div class="s">${sub}</div></div>`).join('');
document.getElementById('skillGrid').innerHTML=skills.map(([g,items])=>`<div class="card skill rv"><h3>${g}</h3><div class="tags">${items.map(i=>`<span>${i}</span>`).join('')}</div></div>`).join('');
document.getElementById('projGrid').innerHTML=projects.map(p=>`<article class="card proj rv"><div class="shot"><img src="images/${p.img}.jpg" alt="${p.name} screenshot" loading="lazy"><span class="badge">${p.tag}</span></div><div class="pb"><h3>${p.name}</h3><p>${p.desc}</p><p class="role"><b>My part:</b> ${p.role}</p><div class="tags">${p.stack.map(t=>`<span>${t}</span>`).join('')}</div><a href="${p.url}">${p.link}</a></div></article>`).join('');
document.getElementById('line').innerHTML=journey.map(([d,t,p,x])=>`<div class="step rv"><div class="d">${d}</div><h3>${t}</h3><div class="p">${p}</div><div class="t">${x}</div></div>`).join('');

const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window&&!reduce){
  const revealer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revealer.unobserve(e.target)}}),{threshold:.12});
  els.forEach(el=>revealer.observe(el));
}else els.forEach(el=>el.classList.add('in'));

const navLinks=[...document.querySelectorAll('.links a')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>spy.observe(s));

const burger=document.getElementById('burger'),menu=document.getElementById('links');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
navLinks.forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}));

const nums=document.querySelectorAll('.num');
const run=el=>{const to=+el.dataset.to;if(reduce){el.textContent=to;return}const t0=performance.now(),dur=1600;
  const step=t=>{const k=Math.min((t-t0)/dur,1),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e).toLocaleString('en-US');if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
if('IntersectionObserver' in window){const counter=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);counter.unobserve(e.target)}}),{threshold:.6});nums.forEach(n=>counter.observe(n))}else nums.forEach(n=>n.textContent=n.dataset.to);

if(matchMedia('(hover: hover) and (pointer: fine)').matches&&!reduce){
  const dot=document.createElement('div'),ring=document.createElement('div');dot.className='cur-dot';ring.className='cur-ring';
  document.body.append(dot,ring);document.body.classList.add('has-cur');
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;dot.style.opacity=ring.style.opacity=1});
  document.addEventListener('mouseleave',()=>{dot.style.opacity=ring.style.opacity=0});
  const follow=()=>{rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(follow)};follow();
  document.addEventListener('mouseover',e=>{ring.classList.toggle('hov',!!e.target.closest('a,button,.card'))});
  addEventListener('mousedown',()=>ring.classList.add('down'));addEventListener('mouseup',()=>ring.classList.remove('down'));
}

if(!reduce){
  const roles=['Lead Full Stack Engineer','AI Engineer','Backend & API Specialist','React Native Developer'];
  const out=document.getElementById('typed');let r=0,i=roles[0].length,del=true;
  const tick=()=>{const w=roles[r];
    if(del){i--;if(i<=0){del=false;r=(r+1)%roles.length}}
    else{i++;if(i>=roles[r].length){del=true;out.textContent=roles[r];return setTimeout(tick,1800)}}
    out.textContent=roles[r].slice(0,i);setTimeout(tick,del?40:80)};
  setTimeout(tick,2200);
}
}
