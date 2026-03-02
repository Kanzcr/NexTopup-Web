// ─── STATE
let cart = [], cid = 0;

// ─── PARTICLES
(()=>{
  const c=document.getElementById('particles');
  const colors=['rgba(0,245,255,.7)','rgba(255,45,120,.5)','rgba(123,47,255,.6)','rgba(255,215,0,.4)'];
  for(let i=0;i<35;i++){
    const p=document.createElement('div');
    p.className='particle';
    const s=Math.random()*3+1;
    p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;bottom:-10px;background:${colors[i%4]};animation-duration:${Math.random()*15+8}s;animation-delay:${Math.random()*10}s;box-shadow:0 0 ${s*3}px currentColor;`;
    c.appendChild(p);
  }
})();

// ─── CURSOR (smooth ring with rAF)
const cur=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
document.addEventListener('mousedown',()=>cur.classList.add('click'));
document.addEventListener('mouseup',()=>cur.classList.remove('click'));
(function tick(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(tick);})();
document.querySelectorAll('button,a,.cat-card,.product-card,.pay-card,.opt-btn,.faq-q,.testi-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='rgba(0,245,255,.9)';});
  el.addEventListener('mouseleave',()=>{ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(0,245,255,.5)';});
});

// ─── SCROLL
window.addEventListener('scroll',()=>{
  document.getElementById('scrollTop').classList.toggle('visible',scrollY>400);
});

// ─── MOBILE NAV
function toggleNav(){
  const mn=document.getElementById('mobileNav');
  mn.classList.toggle('open');
  const open=mn.classList.contains('open');
  const bars=document.querySelectorAll('.hamburger span');
  bars[0].style.transform=open?'rotate(45deg) translate(5px,5px)':'';
  bars[1].style.opacity=open?'0':'1';
  bars[2].style.transform=open?'rotate(-45deg) translate(5px,-5px)':'';
}

// ─── COUNTER ANIMATION
function animCount(el){
  if(el.dataset.pct){el.textContent=el.dataset.pct+'%';return;}
  const target=+el.dataset.target;
  let cur=0;
  const steps=80;
  const inc=target/steps;
  const t=setInterval(()=>{
    cur=Math.min(cur+inc,target);
    if(target>=1e6) el.textContent=(cur/1e6).toFixed(1)+'M+';
    else if(target>=1e3) el.textContent=Math.floor(cur/1000)+'K+';
    else el.textContent=Math.floor(cur)+'+';
    if(cur>=target)clearInterval(t);
  },20);
}
const cObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animCount(e.target);cObs.unobserve(e.target);}}),{threshold:.5});
document.querySelectorAll('.stat-num').forEach(el=>cObs.observe(el));

// ─── CARD REVEAL
const rObs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('visible'),i*60);}),{threshold:.08});
document.querySelectorAll('.product-card').forEach(el=>rObs.observe(el));

// ─── SEARCH
function doSearch(){
  const q=document.getElementById('searchInput').value.toLowerCase().trim();
  let v=0;
  document.querySelectorAll('.product-card').forEach(c=>{
    const show=!q||c.dataset.name.includes(q);
    c.classList.toggle('hidden',!show);
    if(show)v++;
  });
  document.getElementById('noResults').classList.toggle('show',v===0);
}

// ─── FILTER BY CAT
function filterCat(el,cat){
  document.querySelectorAll('.cat-card').forEach(c=>c.classList.remove('ac'));
  el.classList.add('ac');
  document.getElementById('searchInput').value='';
  let v=0;
  document.querySelectorAll('.product-card').forEach(c=>{
    const show=cat==='all'||c.dataset.cat===cat;
    c.classList.toggle('hidden',!show);
    if(show)v++;
  });
  document.getElementById('noResults').classList.toggle('show',v===0);
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

// ─── SORT
function sortCards(el,type){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const grid=document.getElementById('productsGrid');
  const cards=[...document.querySelectorAll('.product-card')];
  if(type==='promo'){
    cards.forEach(c=>c.classList.toggle('hidden',c.dataset.promo!=='1'));
  }else{
    cards.forEach(c=>c.classList.remove('hidden'));
    if(type==='cheap'){cards.sort((a,b)=>+a.dataset.price-+b.dataset.price);cards.forEach(c=>grid.insertBefore(c,document.getElementById('noResults')));}
  }
  document.getElementById('noResults').classList.remove('show');
}

// ─── SELECT OPTION
function selOpt(el,price,num){
  const body=el.closest('.product-body');
  body.querySelectorAll('.opt-btn').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  const pEl=body.querySelector('.product-price');
  pEl.textContent=price;
  pEl.dataset.num=num;
}
// ─── CART
function addCart(btn,name,icon){
  const card=btn.closest('.product-card');
  const sel=card.querySelector('.opt-btn.sel');
  const opt=sel?sel.textContent:'';
  const price=card.querySelector('.product-price').textContent;
  cart.push({id:cid++,name,icon,opt,price});
  updateCartUI();
  showToast('✅','Ditambahkan!',`${name} ${opt} — ${price}`);
  const cb=document.querySelector('.cart-btn');
  cb.style.transform='scale(1.3)';setTimeout(()=>cb.style.transform='',300);
}
function delCart(id){cart=cart.filter(i=>i.id!==id);updateCartUI();}
function updateCartUI(){
  const n=cart.length;
  const cc=document.getElementById('cartCount');
  cc.textContent=n;cc.style.display=n>0?'flex':'none';
  const ci=document.getElementById('cartItems');
  const cf=document.getElementById('cartFooter');
  if(!n){ci.innerHTML='<div class="cart-empty"><span class="cei">🛒</span><p>Keranjang kosong.<br>Yuk tambahkan produk!</p></div>';cf.style.display='none';}
  else{
    ci.innerHTML=cart.map(i=>`<div class="cart-item"><div class="cart-item-icon">${i.icon}</div><div class="cart-item-info"><div class="cart-item-name">${i.name}</div><div class="cart-item-sub">${i.opt}</div><div class="cart-item-price">${i.price}</div></div><button class="cart-item-del" onclick="delCart(${i.id})">✕</button></div>`).join('');
    cf.style.display='block';
    const total=cart.reduce((s,i)=>s+parseInt(i.price.replace(/\D/g,'')),0);
    document.getElementById('cartTotal').textContent='Rp '+total.toLocaleString('id-ID');
  }
  // sync order summary
  const oi=document.getElementById('orderItems');
  if(oi){
    if(!n){oi.innerHTML='<div style="color:var(--muted);font-size:.85rem;padding:.5rem 0;">Belum ada item</div>';document.getElementById('orderTotal').textContent='Rp 0';}
    else{
      oi.innerHTML=cart.map(i=>`<div class="order-row"><span>${i.icon} ${i.name} (${i.opt})</span><span>${i.price}</span></div>`).join('');
      const t=cart.reduce((s,i)=>s+parseInt(i.price.replace(/\D/g,'')),0);
      document.getElementById('orderTotal').textContent='Rp '+t.toLocaleString('id-ID');
    }
  }
}
function openCart(){document.getElementById('cartOverlay').classList.add('open');document.getElementById('cartSidebar').classList.add('open');}
function closeCart(){document.getElementById('cartOverlay').classList.remove('open');document.getElementById('cartSidebar').classList.remove('open');}

// ─── MODAL
function openModal(){
  updateCartUI();
  document.getElementById('modalTitle').textContent='⚡ Checkout';
  document.getElementById('modalBody').style.display='';
  document.getElementById('modalFooter').style.display='';
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');}
function selPay(el){document.querySelectorAll('.pay-opt').forEach(p=>p.classList.remove('sel'));el.classList.add('sel');}
function doCheckout(){
  const id=document.getElementById('gameId')?.value?.trim();
  if(!id){showToast('⚠️','Perhatian!','Harap isi ID Game atau Email akun');return;}
  if(!cart.length){showToast('⚠️','Keranjang Kosong!','Tambahkan produk terlebih dahulu');return;}
  document.getElementById('modalTitle').textContent='Status Pesanan';
  const orderId='#NTU-'+Date.now().toString().slice(-8);
  document.getElementById('modalBody').innerHTML=`<div class="success-modal"><span class="success-icon">🎉</span><h3>Pembayaran Berhasil!</h3><p style="margin-top:.5rem">Top up sedang diproses.<br>Item masuk dalam 5–30 detik.</p><div style="margin-top:1.5rem;background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.2);padding:1rem;"><div style="font-family:'Orbitron';font-size:.7rem;color:var(--green);margin-bottom:.5rem;">ORDER ID</div><div style="font-family:'Orbitron';font-size:1rem;font-weight:700;">${orderId}</div></div></div>`;
  document.getElementById('modalFooter').innerHTML=`<button class="btn-primary" style="width:100%;clip-path:none" onclick="closeModal();cart=[];updateCartUI()">Selesai ✓</button>`;
}

// ─── FAQ
function toggleFaq(el){
  const item=el.closest('.faq-item');
  const was=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!was)item.classList.add('open');
}

// ─── TOAST
let tt;
function showToast(icon,title,msg){
  document.getElementById('toastIcon').textContent=icon;
  document.getElementById('toastTitle').textContent=title;
  document.getElementById('toastMsg').textContent=msg;
  const t=document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(tt);
  tt=setTimeout(()=>t.classList.remove('show'),3200);
}

// ─── KEYBOARD
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCart();}});
