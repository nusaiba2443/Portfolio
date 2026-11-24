const FORM_ENDPOINT='https://formspree.io/f/xgakpzjz';
(()=>{const d=document,r=d.documentElement,$=s=>d.querySelector(s),fine=matchMedia('(pointer:fine)').matches,calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const tb=$('#theme'),icon=()=>{const l=r.dataset.theme==='light';tb.textContent=l?'☀':'☾';tb.setAttribute('aria-pressed',l);$('meta[name=theme-color]').content=l?'#faf7ff':'#09060f'};icon();
tb.onclick=()=>{r.dataset.theme=r.dataset.theme==='light'?'dark':'light';try{localStorage.setItem('nya-theme',r.dataset.theme)}catch(e){}icon()};
const nav=$('#nav'),mb=$('#menu');mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};nav.onclick=e=>{if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});d.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const bar=$('#bar'),upd=()=>{const h=r.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%'};addEventListener('scroll',upd,{passive:true});upd();
$('#yr').textContent=new Date().getFullYear();
const ws=['clean layouts','dreamy interfaces','responsive websites','playful interactions'];let i=0;const w=$('#w');if(!calm)setInterval(()=>{w.classList.add('out');setTimeout(()=>{i=(i+1)%ws.length;w.textContent=ws[i];w.classList.remove('out')},350)},2600);
if(fine&&!calm){const g=$('#glow');addEventListener('pointermove',e=>{g.style.transform=`translate(${e.clientX-210}px,${e.clientY-210}px)`;g.style.opacity=1});
d.querySelectorAll('.tilt').forEach(c=>{c.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform=`perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')})}})();

const cf=document.getElementById('cf');if(cf){const st=document.getElementById('st');cf.addEventListener('submit',async e=>{e.preventDefault();const d=new FormData(cf);if(d.get('_gotcha'))return;
if(!FORM_ENDPOINT){const b=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`);location.href=`mailto:nusaiba2443m@gmail.com?subject=${encodeURIComponent(d.get('subject')||'Portfolio message')}&body=${b}`;st.textContent='Opening your email app…';return}
st.textContent='Sending…';try{const r=await fetch(FORM_ENDPOINT,{method:'POST',body:d,headers:{Accept:'application/json'}});if(r.ok){cf.reset();st.textContent='Thank you! Your message was sent. I will reply soon.'}else throw 0}catch(_){st.textContent='Sorry, that did not send. Please email me directly at nusaiba2443m@gmail.com.'}})}
