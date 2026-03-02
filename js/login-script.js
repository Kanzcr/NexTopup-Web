// ═══════════════════════════════════════════════
//  DATA STORE
// ═══════════════════════════════════════════════
const DB = {
  users: [
    {id:1, name:'Admin NexTopUp', email:'admin@nextopup.id', pass:'admin123', role:'admin', saldo:0, joined:'2024-01-01', avatar:'👑'},
    {id:2, name:'Budi Santoso', email:'budi@gmail.com', pass:'user123', role:'customer', saldo:250000, joined:'2024-03-15', avatar:'🎮'},
    {id:3, name:'Sari Dewi', email:'sari@gmail.com', pass:'user123', role:'customer', saldo:75000, joined:'2024-04-02', avatar:'👩'},
    {id:4, name:'Fajar Maulana', email:'fajar@gmail.com', pass:'user123', role:'customer', saldo:120000, joined:'2024-05-10', avatar:'🧑'},
  ],
  products: [
    {id:1, name:'Mobile Legends', cat:'moba', icon:'🎮', bg:'linear-gradient(135deg,#120830,#231060)', badge:'Terlaris', badgeColor:'#ff2d78', active:true, options:[{label:'86 💎',price:15500},{label:'172 💎',price:29000},{label:'344 💎',price:57000},{label:'706 💎',price:110000}]},
    {id:2, name:'Free Fire', cat:'br', icon:'🔥', bg:'linear-gradient(135deg,#1a0a05,#3a1205)', badge:'Promo', badgeColor:'#ff9800', active:true, options:[{label:'100 💎',price:14000},{label:'210 💎',price:27500},{label:'420 💎',price:55000},{label:'720 💎',price:95000}]},
    {id:3, name:'PUBG Mobile', cat:'br', icon:'🔫', bg:'linear-gradient(135deg,#051a2a,#0a2a3f)', badge:'HOT', badgeColor:'#7b2fff', active:true, options:[{label:'60 UC',price:19000},{label:'125 UC',price:35000},{label:'260 UC',price:65000},{label:'520 UC',price:120000}]},
    {id:4, name:'Genshin Impact', cat:'rpg', icon:'✨', bg:'linear-gradient(135deg,#0d1835,#1a2860)', badge:null, active:true, options:[{label:'60 Primo',price:17000},{label:'300 Primo',price:80000},{label:'980 Primo',price:155000}]},
    {id:5, name:'Honkai: Star Rail', cat:'rpg', icon:'🌟', bg:'linear-gradient(135deg,#0a1535,#152560)', badge:'NEW', badgeColor:'#00f5ff', active:true, options:[{label:'60 Jade',price:17000},{label:'300 Jade',price:82000},{label:'3280 Jade',price:790000}]},
    {id:6, name:'Netflix', cat:'streaming', icon:'📺', bg:'linear-gradient(135deg,#1a0000,#300505)', badge:'Premium', badgeColor:'#e50914', active:true, options:[{label:'1 Bulan',price:35000},{label:'3 Bulan',price:95000},{label:'6 Bulan',price:180000},{label:'1 Tahun',price:340000}]},
    {id:7, name:'Spotify Premium', cat:'musik', icon:'🎵', bg:'linear-gradient(135deg,#001a08,#003015)', badge:null, active:true, options:[{label:'1 Bulan',price:12500},{label:'3 Bulan',price:35000},{label:'6 Bulan',price:65000}]},
    {id:8, name:'YouTube Premium', cat:'streaming', icon:'▶️', bg:'linear-gradient(135deg,#1a0505,#300a0a)', badge:null, active:true, options:[{label:'1 Bulan',price:19000},{label:'3 Bulan',price:55000}]},
    {id:9, name:'Google One', cat:'cloud', icon:'☁️', bg:'linear-gradient(135deg,#05101a,#0a1a30)', badge:null, active:true, options:[{label:'100GB',price:22000},{label:'200GB',price:35000},{label:'2TB',price:110000}]},
    {id:10, name:'eFootball PES', cat:'sports', icon:'⚽', bg:'linear-gradient(135deg,#051510,#0a2a1a)', badge:'Promo', badgeColor:'#7b2fff', active:true, options:[{label:'200 Koin',price:20000},{label:'500 Koin',price:48000},{label:'1000 Koin',price:90000}]},
  ],
  orders: [
    {id:'NTU-00000001', userId:2, product:'Mobile Legends', option:'706 💎', amount:110000, status:'success', date:'2025-02-28', gameId:'123456789'},
    {id:'NTU-00000002', userId:3, product:'Netflix', option:'1 Bulan', amount:35000, status:'success', date:'2025-02-27', gameId:'sari@gmail.com'},
    {id:'NTU-00000003', userId:4, product:'Free Fire', option:'420 💎', amount:55000, status:'pending', date:'2025-03-01', gameId:'987654321'},
    {id:'NTU-00000004', userId:2, product:'Spotify Premium', option:'3 Bulan', amount:35000, status:'success', date:'2025-03-01', gameId:'budi@gmail.com'},
    {id:'NTU-00000005', userId:3, product:'PUBG Mobile', option:'260 UC', amount:65000, status:'failed', date:'2025-02-25', gameId:'sari123'},
    {id:'NTU-00000006', userId:4, product:'Genshin Impact', option:'60 Primo', amount:17000, status:'success', date:'2025-03-02', gameId:'fajar88'},
  ],
  notifications: {
    1:[
      {id:1, icon:'📦', text:'Pesanan #NTU-00000003 status PENDING menunggu konfirmasi.', time:'5 menit lalu', read:false},
      {id:2, icon:'👤', text:'Pengguna baru terdaftar: Fajar Maulana.', time:'2 jam lalu', read:false},
      {id:3, icon:'💰', text:'Revenue hari ini: Rp 317.000', time:'1 hari lalu', read:true},
    ],
    2:[
      {id:1, icon:'✅', text:'Top up Mobile Legends 706 💎 berhasil diproses!', time:'2 hari lalu', read:false},
      {id:2, icon:'🎁', text:'Selamat datang! Kamu dapat bonus saldo Rp 25.000.', time:'3 hari lalu', read:true},
    ],
    3:[
      {id:1, icon:'❌', text:'Top up PUBG Mobile gagal. Saldo dikembalikan.', time:'5 hari lalu', read:false},
    ],
    4:[
      {id:1, icon:'✅', text:'Top up Genshin Impact berhasil!', time:'1 hari lalu', read:false},
      {id:2, icon:'⏳', text:'Top up Free Fire sedang diproses.', time:'1 jam lalu', read:false},
    ]
  }
};

let currentUser = null;
let currentView = '';
let orderCounter = DB.orders.length + 1;
let userCounter = DB.users.length + 1;
let productCounter = DB.products.length + 1;

// ═══════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════
function switchAuthTab(tab){
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f=>f.classList.remove('active'));
  document.querySelector(`.auth-tab:nth-child(${tab==='login'?1:2})`).classList.add('active');
  document.getElementById(`form-${tab}`).classList.add('active');
}

function demoLogin(email, pass){
  console.log('demoLogin called with:', email);
  const emailEl = document.getElementById('login-email');
  const passEl = document.getElementById('login-pass');
  
  if (!emailEl || !passEl) {
    console.error('Login elements not found!');
    return;
  }
  
  emailEl.value = email;
  passEl.value = pass;
  doLogin();
}

function doLogin(){
  console.log('doLogin called!'); // Debug log
  
  // Check if elements exist
  const emailEl = document.getElementById('login-email');
  const passEl = document.getElementById('login-pass');
  
  if (!emailEl || !passEl) {
    console.error('Login elements not found!');
    alert('Error: Form elements not found. Please refresh the page.');
    return;
  }
  
  const email = emailEl.value.trim();
  const pass = passEl.value;
  console.log('Email:', email, 'Pass:', pass); // Debug log
  
  if (!email || !pass) {
    showToast('error', 'Error', 'Email dan password harus diisi');
    return;
  }
  
  const user = DB.users.find(u=>u.email===email && u.pass===pass);
  console.log('User found:', user); // Debug log
  
  if(!user){ 
    showToast('error','Login Gagal','Email atau password salah'); 
    return; 
  }
  
  currentUser = user;
  console.log('Login success! Initializing app...');
  
  // Show success toast
  showToast('success', 'Login Berhasil!', `Selamat datang ${user.name}`);
  
  // Small delay before initializing app for better UX
  setTimeout(() => {
    initApp();
  }, 500);
}

function doRegister(){
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  const pass2 = document.getElementById('reg-pass2').value;
  if(!name||!email||!pass){ showToast('error','Error','Semua field harus diisi'); return; }
  if(pass.length < 6){ showToast('error','Error','Password min. 6 karakter'); return; }
  if(pass !== pass2){ showToast('error','Error','Password tidak cocok'); return; }
  if(DB.users.find(u=>u.email===email)){ showToast('error','Error','Email sudah terdaftar'); return; }
  const newUser = {id:userCounter++, name, email, pass, role:'customer', saldo:25000, joined:new Date().toISOString().slice(0,10), avatar:'🎮'};
  DB.users.push(newUser);
  DB.notifications[newUser.id] = [{id:1, icon:'🎁', text:'Selamat datang! Bonus saldo Rp 25.000 telah ditambahkan.', time:'Baru saja', read:false}];
  showToast('success','Berhasil!','Akun berhasil dibuat. Silakan masuk.');
  document.getElementById('reg-name').value='';
  document.getElementById('reg-email').value='';
  document.getElementById('reg-pass').value='';
  document.getElementById('reg-pass2').value='';
  switchAuthTab('login');
  document.getElementById('login-email').value = email;
}

function doLogout(){
  currentUser = null;
  showPage('page-auth');
  showToast('success','Berhasil','Kamu telah keluar.');
}

function initApp(){
  console.log('initApp() called');
  console.log('currentUser:', currentUser);
  
  try {
    showPage('page-app');
    console.log('Page switched to app');
    
    const sidebarName = document.getElementById('sidebarName');
    const sidebarRole = document.getElementById('sidebarRole');
    const sidebarAva = document.getElementById('sidebarAva');
    const topbarUser = document.getElementById('topbarUser');
    
    console.log('Elements found:', {
      sidebarName: sidebarName !== null,
      sidebarRole: sidebarRole !== null,
      sidebarAva: sidebarAva !== null,
      topbarUser: topbarUser !== null
    });
    
    if (sidebarName) sidebarName.textContent = currentUser.name;
    if (sidebarRole) sidebarRole.textContent = currentUser.role === 'admin' ? '👑 Administrator' : '🎮 Customer';
    if (sidebarAva) sidebarAva.textContent = currentUser.avatar;
    if (topbarUser) topbarUser.textContent = currentUser.name;
    
    renderNav();
    renderNotifs();
    
    console.log('Navigating to:', currentUser.role === 'admin' ? 'dashboard' : 'store');
    if(currentUser.role === 'admin') navigate('dashboard');
    else navigate('store');
    
    console.log('initApp() completed successfully');
  } catch (error) {
    console.error('Error in initApp():', error);
  }
}

function showPage(id){
  console.log('showPage() called with id:', id);
  const pages = document.querySelectorAll('.page');
  console.log('Total pages found:', pages.length);
  
  pages.forEach(p => {
    p.classList.remove('active');
    console.log('Removed active from:', p.id);
  });
  
  const targetPage = document.getElementById(id);
  if (targetPage) {
    targetPage.classList.add('active');
    console.log('Added active to:', id);
  } else {
    console.error('Page not found:', id);
  }
}

// ═══════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════
const adminNav = [
  {section:'Utama', items:[
    {id:'dashboard', icon:'📊', label:'Dashboard'},
    {id:'orders', icon:'📦', label:'Kelola Pesanan'},
  ]},
  {section:'Konten', items:[
    {id:'products', icon:'🎮', label:'Produk'},
  ]},
  {section:'Pengguna', items:[
    {id:'users', icon:'👥', label:'Manajemen User'},
  ]},
];
const customerNav = [
  {section:'Belanja', items:[
    {id:'store', icon:'🛍️', label:'Toko'},
    {id:'history', icon:'📋', label:'Riwayat Transaksi'},
  ]},
  {section:'Akun', items:[
    {id:'profile', icon:'👤', label:'Profil & Saldo'},
  ]},
];

function renderNav(){
  const navData = currentUser.role === 'admin' ? adminNav : customerNav;
  let html = '';
  navData.forEach(sec=>{
    html += `<div class="nav-section">${sec.section}</div>`;
    sec.items.forEach(item=>{
      html += `<div class="nav-item" id="nav-${item.id}" onclick="navigate('${item.id}')"><span class="icon">${item.icon}</span>${item.label}</div>`;
    });
  });
  document.getElementById('sidebarNav').innerHTML = html;
}

function navigate(view){
  currentView = view;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const ni = document.getElementById('nav-'+view);
  if(ni) ni.classList.add('active');
  const titles = {dashboard:'Dashboard',orders:'Kelola Pesanan',products:'Manajemen Produk',users:'Manajemen Pengguna',store:'Toko Top Up',history:'Riwayat Transaksi',profile:'Profil & Saldo'};
  document.getElementById('topbarTitle').textContent = titles[view] || view;
  const renders = {dashboard:renderDashboard, orders:renderOrders, products:renderProducts, users:renderUsers, store:renderStore, history:renderHistory, profile:renderProfile};
  if(renders[view]) renders[view]();
}

// ═══════════════════════════════════════════════
//  NOTIFICATIONS
// ═══════════════════════════════════════════════
function renderNotifs(){
  const notifs = DB.notifications[currentUser.id] || [];
  const unread = notifs.filter(n=>!n.read).length;
  document.getElementById('notifDot').style.display = unread>0 ? 'block' : 'none';
  let html = notifs.length ? notifs.map(n=>`
    <div class="notif-item ${n.read?'':'unread'}">
      <div class="notif-icon">${n.icon}</div>
      <div class="notif-text"><p>${n.text}</p><div class="notif-time">${n.time}</div></div>
    </div>
  `).join('') : '<div class="empty-state"><span class="ei">🔔</span><p>Tidak ada notifikasi</p></div>';
  document.getElementById('notifList').innerHTML = html;
}

function toggleNotif(){
  const panel = document.getElementById('notifPanel');
  panel.classList.toggle('open');
  if(panel.classList.contains('open')){
    const notifs = DB.notifications[currentUser.id] || [];
    notifs.forEach(n=>n.read=true);
    document.getElementById('notifDot').style.display='none';
    renderNotifs();
  }
}
document.addEventListener('click',e=>{
  if(!e.target.closest('#notifPanel') && !e.target.closest('#notifBtn'))
    document.getElementById('notifPanel').classList.remove('open');
});

// ═══════════════════════════════════════════════
//  ADMIN: DASHBOARD
// ═══════════════════════════════════════════════
function renderDashboard(){
  const totalRev = DB.orders.filter(o=>o.status==='success').reduce((s,o)=>s+o.amount,0);
  const todayOrders = DB.orders.filter(o=>o.date===new Date().toISOString().slice(0,10));
  const successOrders = DB.orders.filter(o=>o.status==='success').length;
  const totalCustomers = DB.users.filter(u=>u.role==='customer').length;

  // Chart data (7 days fake)
  const chartData = [120000,245000,180000,310000,275000,410000,totalRev];
  const maxVal = Math.max(...chartData);
  const days = ['Sen','Sel','Rab','Kam','Jum','Sab','Min'];
  const barsHtml = chartData.map((v,i)=>`
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;">
      <div class="chart-bar" style="height:${Math.round((v/maxVal)*120)}px;width:100%;" data-val="Rp ${v.toLocaleString('id-ID')}"></div>
      <div class="chart-label">${days[i]}</div>
    </div>
  `).join('');

  // Recent orders
  const recentOrders = [...DB.orders].reverse().slice(0,5);

  document.getElementById('mainContent').innerHTML = `
    <div class="grid4 mb3">
      <div class="stat-card c1">
        <div class="stat-icon">💰</div>
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value text-accent orb" style="font-size:1.3rem">Rp ${(totalRev/1000).toFixed(0)}K</div>
        <div class="stat-change up">▲ 12.4% dari bulan lalu</div>
      </div>
      <div class="stat-card c2">
        <div class="stat-icon">📦</div>
        <div class="stat-label">Total Pesanan</div>
        <div class="stat-value orb">${DB.orders.length}</div>
        <div class="stat-change up">▲ ${todayOrders.length} hari ini</div>
      </div>
      <div class="stat-card c3">
        <div class="stat-icon">✅</div>
        <div class="stat-label">Sukses Rate</div>
        <div class="stat-value text-gold orb">${Math.round(successOrders/DB.orders.length*100)}%</div>
        <div class="stat-change up">▲ dari 97.1%</div>
      </div>
      <div class="stat-card c4">
        <div class="stat-icon">👥</div>
        <div class="stat-label">Total Customer</div>
        <div class="stat-value text-green orb">${totalCustomers}</div>
        <div class="stat-change up">▲ 2 baru minggu ini</div>
      </div>
    </div>

    <div class="grid2 mb3" style="grid-template-columns:2fr 1fr;">
      <div class="chart-area">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div class="sl">Revenue</div>
            <div class="st" style="font-size:1.1rem">7 Hari <span>Terakhir</span></div>
          </div>
          <div class="text-gold orb" style="font-size:1.1rem;font-weight:700;">Rp ${totalRev.toLocaleString('id-ID')}</div>
        </div>
        <div class="chart-bar-wrap">${barsHtml}</div>
      </div>
      <div class="card">
        <div class="sl">Top Produk</div>
        <div class="st mb3" style="font-size:1rem">Terlaris <span>Minggu Ini</span></div>
        ${[['🎮','Mobile Legends','48%'],['🔥','Free Fire','22%'],['📺','Netflix','15%'],['🔫','PUBG Mobile','9%']].map(([ic,nm,pct])=>`
          <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.9rem;">
            <div style="font-size:1.3rem">${ic}</div>
            <div style="flex:1">
              <div style="font-size:.82rem;font-weight:600;margin-bottom:3px;">${nm}</div>
              <div style="height:4px;background:rgba(255,255,255,.08);border-radius:2px;">
                <div style="height:100%;background:linear-gradient(90deg,var(--accent),var(--accent3));width:${pct};border-radius:2px;"></div>
              </div>
            </div>
            <div class="text-muted" style="font-size:.78rem">${pct}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem;">
        <div><div class="sl">Transaksi</div><div class="st" style="font-size:1rem">Pesanan <span>Terbaru</span></div></div>
        <button class="btn btn-secondary btn-sm" onclick="navigate('orders')">Lihat Semua</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Order ID</th><th>Customer</th><th>Produk</th><th>Amount</th><th>Status</th><th>Tanggal</th></tr></thead>
          <tbody>
            ${recentOrders.map(o=>{
              const user = DB.users.find(u=>u.id===o.userId);
              return `<tr>
                <td class="text-accent orb" style="font-size:.72rem">${o.id}</td>
                <td>${user?.name||'-'}</td>
                <td>${o.product} — ${o.option}</td>
                <td class="text-gold orb" style="font-size:.82rem">Rp ${o.amount.toLocaleString('id-ID')}</td>
                <td>${statusBadge(o.status)}</td>
                <td class="text-muted">${o.date}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
//  ADMIN: ORDERS
// ═══════════════════════════════════════════════
function renderOrders(){
  const orders = [...DB.orders].reverse();
  document.getElementById('mainContent').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:.75rem;">
      <div><div class="sl">Manajemen</div><div class="st" style="font-size:1.1rem">Kelola <span>Pesanan</span></div></div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
        <select class="form-select" style="width:auto;padding:8px 14px;font-size:.82rem;" onchange="filterOrders(this.value)">
          <option value="all">Semua Status</option>
          <option value="success">Sukses</option>
          <option value="pending">Pending</option>
          <option value="failed">Gagal</option>
        </select>
      </div>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Order ID</th><th>Customer</th><th>Produk</th><th>Game ID</th><th>Amount</th><th>Status</th><th>Tanggal</th><th>Aksi</th></tr></thead>
          <tbody id="ordersTableBody">
            ${renderOrderRows(orders)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderOrderRows(orders){
  return orders.map(o=>{
    const user = DB.users.find(u=>u.id===o.userId);
    return `<tr>
      <td class="text-accent orb" style="font-size:.72rem">${o.id}</td>
      <td>${user?.name||'Unknown'}</td>
      <td><span style="font-weight:600">${o.product}</span><br><span class="text-muted" style="font-size:.75rem">${o.option}</span></td>
      <td class="text-muted" style="font-size:.82rem">${o.gameId}</td>
      <td class="text-gold orb" style="font-size:.82rem">Rp ${o.amount.toLocaleString('id-ID')}</td>
      <td>${statusBadge(o.status)}</td>
      <td class="text-muted">${o.date}</td>
      <td>
        ${o.status==='pending'?`
          <button class="btn btn-sm" style="background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.25);color:var(--green);font-size:.72rem;padding:4px 10px;" onclick="updateOrderStatus('${o.id}','success')">✓ Setujui</button>
          <button class="btn btn-sm btn-danger" style="font-size:.72rem;padding:4px 10px;" onclick="updateOrderStatus('${o.id}','failed')">✗ Tolak</button>
        `:`<span class="text-muted" style="font-size:.75rem">—</span>`}
      </td>
    </tr>`;
  }).join('');
}

function filterOrders(status){
  const orders = status==='all' ? [...DB.orders].reverse() : [...DB.orders].reverse().filter(o=>o.status===status);
  document.getElementById('ordersTableBody').innerHTML = renderOrderRows(orders);
}

function updateOrderStatus(orderId, status){
  const order = DB.orders.find(o=>o.id===orderId);
  if(order){
    order.status = status;
    // Notify customer
    const userNotifs = DB.notifications[order.userId] || [];
    userNotifs.unshift({id:Date.now(), icon: status==='success'?'✅':'❌', text:`Pesanan ${orderId} ${status==='success'?'berhasil diproses':'ditolak'}.`, time:'Baru saja', read:false});
    DB.notifications[order.userId] = userNotifs;
    showToast('success','Updated',`Pesanan ${orderId} → ${status}`);
    renderOrders();
  }
}

// ═══════════════════════════════════════════════
//  ADMIN: PRODUCTS
// ═══════════════════════════════════════════════
function renderProducts(){
  document.getElementById('mainContent').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:.75rem;">
      <div><div class="sl">Manajemen</div><div class="st" style="font-size:1.1rem">Kelola <span>Produk</span></div></div>
      <button class="btn btn-primary" onclick="openAddProduct()">+ Tambah Produk</button>
    </div>
    <div class="prod-grid" id="prodGrid">
      ${DB.products.map(p=>`
        <div class="prod-admin-card">
          <div class="prod-thumb-sm" style="background:${p.bg}">${p.icon}</div>
          <div class="prod-admin-body">
            <div class="prod-admin-name">${p.name}</div>
            <div class="prod-admin-meta">${p.cat.toUpperCase()} · ${p.options.length} opsi · <span class="${p.active?'text-green':'text-red'}">${p.active?'Aktif':'Nonaktif'}</span></div>
            <div class="prod-admin-meta text-muted">Mulai Rp ${Math.min(...p.options.map(o=>o.price)).toLocaleString('id-ID')}</div>
            <div class="prod-admin-actions mt1">
              <button class="btn btn-secondary btn-sm" onclick="openEditProduct(${p.id})">✏️ Edit</button>
              <button class="btn btn-sm" style="background:rgba(255,152,0,.1);border:1px solid rgba(255,152,0,.2);color:var(--orange);font-size:.72rem;" onclick="toggleProduct(${p.id})">${p.active?'🔴 Nonaktif':'🟢 Aktifkan'}</button>
              <button class="btn btn-danger btn-sm" onclick="deleteProduct(${p.id})">🗑️</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openAddProduct(){
  openModal('Tambah Produk Baru', `
    <div class="form-group"><label>Nama Produk</label><input type="text" class="form-input" id="mp-name" placeholder="Contoh: Mobile Legends"></div>
    <div class="form-group"><label>Kategori</label>
      <select class="form-select" id="mp-cat">
        <option value="moba">MOBA</option><option value="br">Battle Royale</option><option value="rpg">RPG</option>
        <option value="streaming">Streaming</option><option value="musik">Musik</option><option value="cloud">Cloud</option><option value="sports">Sports</option>
      </select>
    </div>
    <div class="form-group"><label>Icon (Emoji)</label><input type="text" class="form-input" id="mp-icon" placeholder="🎮" maxlength="4"></div>
    <div class="form-group"><label>Opsi (satu per baris, format: Label|Harga)</label>
      <textarea class="form-input" id="mp-opts" rows="4" placeholder="86 💎|15500&#10;172 💎|29000&#10;344 💎|57000"></textarea>
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'💾 Simpan Produk', cls:'btn-primary', action:'saveNewProduct()'},
  ]);
}

function saveNewProduct(){
  const name = document.getElementById('mp-name').value.trim();
  const cat = document.getElementById('mp-cat').value;
  const icon = document.getElementById('mp-icon').value.trim() || '🎮';
  const optsRaw = document.getElementById('mp-opts').value.trim().split('\n').filter(Boolean);
  if(!name||!optsRaw.length){ showToast('error','Error','Nama dan opsi wajib diisi'); return; }
  const options = optsRaw.map(r=>{ const [label,price] = r.split('|'); return {label:label?.trim(),price:parseInt(price)||0}; }).filter(o=>o.label);
  const colors = ['#120830,#231060','#1a0a05,#3a1205','#0d1835,#1a2860','#051510,#0a2a1a','#05101a,#0a1a30'];
  DB.products.push({id:productCounter++, name, cat, icon, bg:`linear-gradient(135deg,${colors[Math.floor(Math.random()*colors.length)]})`, badge:null, active:true, options});
  showToast('success','Berhasil!',`${name} berhasil ditambahkan.`);
  closeModal(); renderProducts();
}

function openEditProduct(id){
  const p = DB.products.find(x=>x.id===id);
  if(!p) return;
  openModal('Edit Produk', `
    <div class="form-group"><label>Nama Produk</label><input type="text" class="form-input" id="ep-name" value="${p.name}"></div>
    <div class="form-group"><label>Icon</label><input type="text" class="form-input" id="ep-icon" value="${p.icon}" maxlength="4"></div>
    <div class="form-group"><label>Opsi (Label|Harga)</label>
      <textarea class="form-input" id="ep-opts" rows="4">${p.options.map(o=>`${o.label}|${o.price}`).join('\n')}</textarea>
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'💾 Update', cls:'btn-primary', action:`saveEditProduct(${id})`},
  ]);
}

function saveEditProduct(id){
  const p = DB.products.find(x=>x.id===id);
  if(!p) return;
  p.name = document.getElementById('ep-name').value.trim() || p.name;
  p.icon = document.getElementById('ep-icon').value.trim() || p.icon;
  const optsRaw = document.getElementById('ep-opts').value.trim().split('\n').filter(Boolean);
  p.options = optsRaw.map(r=>{ const [label,price]=r.split('|'); return {label:label?.trim(),price:parseInt(price)||0}; }).filter(o=>o.label);
  showToast('success','Updated',`${p.name} berhasil diperbarui.`);
  closeModal(); renderProducts();
}

function toggleProduct(id){
  const p = DB.products.find(x=>x.id===id);
  if(p){ p.active=!p.active; showToast('success','Updated',`${p.name} ${p.active?'diaktifkan':'dinonaktifkan'}.`); renderProducts(); }
}

function deleteProduct(id){
  const p = DB.products.find(x=>x.id===id);
  if(!p) return;
  openModal('Hapus Produk', `
    <div style="text-align:center;padding:1rem 0;">
      <div style="font-size:3rem;margin-bottom:1rem;">⚠️</div>
      <p>Yakin ingin menghapus <strong style="color:var(--accent)">${p.name}</strong>?<br><span class="text-muted" style="font-size:.85rem">Tindakan ini tidak dapat dibatalkan.</span></p>
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'🗑️ Hapus', cls:'btn-danger', action:`confirmDelete(${id})`},
  ]);
}

function confirmDelete(id){
  DB.products = DB.products.filter(p=>p.id!==id);
  showToast('success','Dihapus','Produk berhasil dihapus.');
  closeModal(); renderProducts();
}

// ═══════════════════════════════════════════════
//  ADMIN: USERS
// ═══════════════════════════════════════════════
function renderUsers(){
  const customers = DB.users.filter(u=>u.role==='customer');
  document.getElementById('mainContent').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:.75rem;">
      <div><div class="sl">Manajemen</div><div class="st" style="font-size:1.1rem">Data <span>Pengguna</span></div></div>
      <div class="badge badge-blue">${customers.length} Customer Terdaftar</div>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>User</th><th>Email</th><th>Saldo</th><th>Transaksi</th><th>Bergabung</th><th>Aksi</th></tr></thead>
          <tbody>
            ${customers.map(u=>{
              const userOrders = DB.orders.filter(o=>o.userId===u.id);
              const totalSpend = userOrders.filter(o=>o.status==='success').reduce((s,o)=>s+o.amount,0);
              return `<tr>
                <td><div style="display:flex;align-items:center;gap:.6rem;"><div class="user-row-ava">${u.avatar}</div><div><div style="font-weight:600;font-size:.9rem">${u.name}</div><div class="text-muted" style="font-size:.72rem">#${u.id}</div></div></div></td>
                <td class="text-muted">${u.email}</td>
                <td class="text-gold orb" style="font-size:.82rem">Rp ${u.saldo.toLocaleString('id-ID')}</td>
                <td><div style="font-size:.85rem">${userOrders.length} order</div><div class="text-muted" style="font-size:.72rem">Total: Rp ${totalSpend.toLocaleString('id-ID')}</div></td>
                <td class="text-muted">${u.joined}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="openAddSaldo(${u.id})">+ Saldo</button>
                  <button class="btn btn-danger btn-sm" onclick="viewUserOrders(${u.id})">📋 History</button>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openAddSaldo(userId){
  const user = DB.users.find(u=>u.id===userId);
  openModal(`Tambah Saldo — ${user.name}`, `
    <div style="margin-bottom:1rem;"><span class="text-muted">Saldo saat ini: </span><strong class="text-gold orb">Rp ${user.saldo.toLocaleString('id-ID')}</strong></div>
    <div class="form-group"><label>Jumlah Saldo (Rp)</label><input type="number" class="form-input" id="add-saldo-amt" placeholder="Contoh: 50000" min="1000"></div>
    <div class="form-group"><label>Keterangan</label><input type="text" class="form-input" id="add-saldo-note" placeholder="Bonus, refund, dll."></div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'💰 Tambahkan', cls:'btn-primary', action:`confirmAddSaldo(${userId})`},
  ]);
}

function confirmAddSaldo(userId){
  const amt = parseInt(document.getElementById('add-saldo-amt').value);
  const note = document.getElementById('add-saldo-note').value || 'Penambahan saldo oleh admin';
  if(!amt||amt<1000){ showToast('error','Error','Jumlah minimal Rp 1.000'); return; }
  const user = DB.users.find(u=>u.id===userId);
  user.saldo += amt;
  const notifs = DB.notifications[userId] || [];
  notifs.unshift({id:Date.now(), icon:'💰', text:`Saldo kamu ditambah Rp ${amt.toLocaleString('id-ID')}. (${note})`, time:'Baru saja', read:false});
  DB.notifications[userId] = notifs;
  showToast('success','Berhasil',`+Rp ${amt.toLocaleString('id-ID')} untuk ${user.name}`);
  closeModal(); renderUsers();
}

function viewUserOrders(userId){
  const user = DB.users.find(u=>u.id===userId);
  const orders = DB.orders.filter(o=>o.userId===userId).reverse();
  openModal(`Riwayat — ${user.name}`, `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Order ID</th><th>Produk</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          ${orders.length ? orders.map(o=>`<tr>
            <td class="text-accent orb" style="font-size:.7rem">${o.id}</td>
            <td>${o.product} — ${o.option}</td>
            <td class="text-gold orb" style="font-size:.78rem">Rp ${o.amount.toLocaleString('id-ID')}</td>
            <td>${statusBadge(o.status)}</td>
          </tr>`).join('') : '<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:2rem">Belum ada transaksi</td></tr>'}
        </tbody>
      </table>
    </div>
  `, [{label:'Tutup', cls:'btn-secondary', action:'closeModal()'}]);
  document.getElementById('modalBox').classList.add('modal-lg');
}

// ═══════════════════════════════════════════════
//  CUSTOMER: STORE
// ═══════════════════════════════════════════════
function renderStore(){
  const activeProducts = DB.products.filter(p=>p.active);
  document.getElementById('mainContent').innerHTML = `
    <div style="padding:0;">
      <div class="store-hero">
        <div>
          <div class="sl">Selamat datang, ${currentUser.name.split(' ')[0]}! 👋</div>
          <div class="st" style="font-size:1.1rem">Pilih <span>Produk</span> Top Up</div>
        </div>
        <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <div style="background:linear-gradient(135deg,rgba(0,245,255,.1),rgba(123,47,255,.15));border:1px solid rgba(0,245,255,.2);padding:.6rem 1.2rem;text-align:center;">
            <div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:1px;">Saldo Kamu</div>
            <div class="orb text-accent" style="font-size:1rem;font-weight:700;">Rp ${currentUser.saldo.toLocaleString('id-ID')}</div>
          </div>
          <div class="store-search">
            <span class="s-icon">🔍</span>
            <input type="text" placeholder="Cari produk..." id="storeSearch" oninput="filterStore()">
          </div>
        </div>
      </div>
      <div style="padding:1rem 1.5rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;">
        <div class="cat-pills">
          <div class="cat-pill active" onclick="filterStoreCat(this,'all')">Semua</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'moba')">⚔️ MOBA</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'br')">🔫 Battle Royale</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'rpg')">⭐ RPG</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'streaming')">📺 Streaming</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'musik')">🎵 Musik</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'cloud')">☁️ Cloud</div>
          <div class="cat-pill" onclick="filterStoreCat(this,'sports')">⚽ Sports</div>
        </div>
      </div>
      <div class="store-grid" id="storeGrid">
        ${activeProducts.map(p=>`
          <div class="store-card" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}" onclick="openTopupModal(${p.id})">
            <div class="store-thumb" style="background:${p.bg}">
              ${p.badge?`<div class="store-sbadge" style="background:${p.badgeColor||'var(--accent2)'};color:#fff">${p.badge}</div>`:''}
              ${p.icon}
            </div>
            <div class="store-body">
              <div class="store-name">${p.name}</div>
              <div class="store-cat">${p.cat.toUpperCase()}</div>
              <div class="store-from">Mulai dari</div>
              <div class="store-price">Rp ${Math.min(...p.options.map(o=>o.price)).toLocaleString('id-ID')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function filterStoreCat(el, cat){
  document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.store-card').forEach(c=>{
    c.style.display = (cat==='all'||c.dataset.cat===cat) ? '' : 'none';
  });
}
function filterStore(){
  const q = document.getElementById('storeSearch').value.toLowerCase();
  document.querySelectorAll('.store-card').forEach(c=>{
    c.style.display = !q||c.dataset.name.includes(q) ? '' : 'none';
  });
}

function openTopupModal(productId){
  const p = DB.products.find(x=>x.id===productId);
  if(!p) return;
  let selectedOpt = p.options[0];
  const optsHtml = p.options.map((o,i)=>`
    <div class="opt-card ${i===0?'sel':''}" onclick="selectTopupOpt(this, '${o.label}', ${o.price})" data-label="${o.label}" data-price="${o.price}">
      <div class="oc-amount">${o.label}</div>
      <div class="oc-price">Rp ${o.price.toLocaleString('id-ID')}</div>
    </div>
  `).join('');
  openModal(`Top Up — ${p.name}`, `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
      <div style="font-size:3rem;background:${p.bg};width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:4px;">${p.icon}</div>
      <div>
        <div class="orb" style="font-size:1rem;font-weight:700;">${p.name}</div>
        <div class="text-muted">${p.cat.toUpperCase()}</div>
        <div style="font-size:.78rem;margin-top:.2rem;">Saldo kamu: <span class="text-gold orb">Rp ${currentUser.saldo.toLocaleString('id-ID')}</span></div>
      </div>
    </div>
    <div class="form-group">
      <label>Pilih Nominal</label>
      <div class="opt-grid" id="topupOptGrid">${optsHtml}</div>
    </div>
    <div class="form-group mt2">
      <label>ID Game / Email Akun</label>
      <input type="text" class="form-input" id="topup-gameid" placeholder="Masukkan ID atau email akunmu">
    </div>
    <div style="background:rgba(0,0,0,.2);border:1px solid var(--border);padding:1rem;margin-top:1rem;">
      <div style="display:flex;justify-content:space-between;font-size:.88rem;margin-bottom:.4rem;"><span class="text-muted">Produk</span><span>${p.name}</span></div>
      <div style="display:flex;justify-content:space-between;font-size:.88rem;margin-bottom:.4rem;"><span class="text-muted">Nominal</span><span id="sum-opt">${p.options[0].label}</span></div>
      <div style="border-top:1px solid var(--border);margin-top:.4rem;padding-top:.6rem;display:flex;justify-content:space-between;" ><span class="text-muted orb" style="font-size:.8rem;">TOTAL</span><span class="text-gold orb" id="sum-price">Rp ${p.options[0].price.toLocaleString('id-ID')}</span></div>
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'⚡ Bayar Sekarang', cls:'btn-primary', action:`processTopup(${productId})`},
  ]);
}

function selectTopupOpt(el, label, price){
  document.querySelectorAll('.opt-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('sum-opt').textContent = label;
  document.getElementById('sum-price').textContent = 'Rp '+price.toLocaleString('id-ID');
}

function processTopup(productId){
  const p = DB.products.find(x=>x.id===productId);
  const selCard = document.querySelector('.opt-card.sel');
  if(!selCard){ showToast('error','Error','Pilih nominal terlebih dahulu'); return; }
  const gameId = document.getElementById('topup-gameid').value.trim();
  if(!gameId){ showToast('error','Error','Masukkan ID Game / Email akun'); return; }
  const price = parseInt(selCard.dataset.price);
  const label = selCard.dataset.label;
  
  // Show payment method selection
  closeModal();
  openPaymentModal(productId, label, price, gameId);
}

// ═══════════════════════════════════════════════
//  PAYMENT GATEWAY
// ═══════════════════════════════════════════════
const PAYMENT_METHODS = [
  {id:'saldo', name:'Saldo NexTopUp', icon:'💰', color:'#00f5ff', fee:0, desc:'Bayar dengan saldo'},
  {id:'gopay', name:'GoPay', icon:'💚', color:'#00AA13', fee:0, desc:'E-wallet GoPay'},
  {id:'ovo', name:'OVO', icon:'🟣', color:'#4C3494', fee:0, desc:'E-wallet OVO'},
  {id:'dana', name:'DANA', icon:'🔵', color:'#118EEA', fee:0, desc:'E-wallet DANA'},
  {id:'qris', name:'QRIS', icon:'⚡', color:'#FF6B6B', fee:0, desc:'Scan QRIS semua e-wallet'},
  {id:'bca', name:'BCA Virtual Account', icon:'🏦', color:'#0066AE', fee:4000, desc:'Transfer via BCA'},
  {id:'mandiri', name:'Mandiri Virtual Account', icon:'🏦', color:'#003D79', fee:4000, desc:'Transfer via Mandiri'},
  {id:'bni', name:'BNI Virtual Account', icon:'🏦', color:'#F47920', fee:4000, desc:'Transfer via BNI'},
];

function openPaymentModal(productId, label, price, gameId){
  const p = DB.products.find(x=>x.id===productId);
  
  const paymentMethodsHtml = PAYMENT_METHODS.map(pm=>{
    const totalPrice = price + pm.fee;
    const canPay = pm.id === 'saldo' ? currentUser.saldo >= totalPrice : true;
    const disabledClass = !canPay ? 'disabled' : '';
    
    return `
      <div class="payment-method ${disabledClass}" onclick="${canPay ? `selectPaymentMethod('${pm.id}', ${productId}, '${label}', ${price}, '${gameId}')` : ''}" data-method="${pm.id}">
        <div class="pm-icon" style="background:${pm.color}20;color:${pm.color}">${pm.icon}</div>
        <div class="pm-info">
          <div class="pm-name">${pm.name}</div>
          <div class="pm-desc">${pm.desc}</div>
        </div>
        <div class="pm-right">
          ${pm.fee > 0 ? `<div class="pm-fee">+Rp ${pm.fee.toLocaleString('id-ID')}</div>` : ''}
          <div class="pm-total">Rp ${totalPrice.toLocaleString('id-ID')}</div>
          ${!canPay ? '<div class="pm-insufficient">Saldo tidak cukup</div>' : ''}
        </div>
      </div>
    `;
  }).join('');
  
  openModal('💳 Pilih Metode Pembayaran', `
    <div style="margin-bottom:1.5rem;padding:1rem;background:rgba(0,245,255,.05);border:1px solid rgba(0,245,255,.15);border-radius:4px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;">
        <span class="text-muted" style="font-size:.85rem;">Produk</span>
        <span style="font-weight:600;">${p.name} ${label}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span class="text-muted" style="font-size:.85rem;">Harga</span>
        <span class="text-gold orb" style="font-size:1.1rem;font-weight:700;">Rp ${price.toLocaleString('id-ID')}</span>
      </div>
    </div>
    
    <div class="sl mb2">Metode Pembayaran</div>
    <div class="payment-methods-list">
      ${paymentMethodsHtml}
    </div>
    
    <div style="margin-top:1rem;padding:.75rem;background:rgba(255,152,0,.08);border:1px solid rgba(255,152,0,.2);border-radius:4px;font-size:.82rem;color:var(--orange);">
      ⚠️ Pilih metode pembayaran untuk melanjutkan transaksi
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal();openTopupModal('+productId+')'},
  ]);
  
  document.getElementById('modalBox').classList.add('modal-lg');
}

function selectPaymentMethod(methodId, productId, label, price, gameId){
  const method = PAYMENT_METHODS.find(m=>m.id===methodId);
  const p = DB.products.find(x=>x.id===productId);
  const totalPrice = price + method.fee;
  
  if(methodId === 'saldo'){
    // Direct payment with saldo
    if(currentUser.saldo < totalPrice){
      showToast('error','Saldo Tidak Cukup','Silakan top up saldo terlebih dahulu');
      return;
    }
    processPayment(methodId, productId, label, price, gameId, method.fee);
  } else {
    // Show payment instructions
    showPaymentInstructions(methodId, productId, label, price, gameId, method);
  }
}

function showPaymentInstructions(methodId, productId, label, price, gameId, method){
  const p = DB.products.find(x=>x.id===productId);
  const totalPrice = price + method.fee;
  const orderId = `NTU-${String(orderCounter).padStart(8,'0')}`;
  
  let instructionsHtml = '';
  
  if(['gopay','ovo','dana'].includes(methodId)){
    // E-wallet instructions
    const phoneNumber = '081234567890';
    instructionsHtml = `
      <div class="payment-qr">
        <div style="font-size:5rem;margin-bottom:1rem;">📱</div>
        <div class="text-muted mb2">Scan QR Code dengan aplikasi ${method.name}</div>
        <div style="width:200px;height:200px;background:rgba(255,255,255,.95);margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;border-radius:8px;">
          <div style="font-size:3rem;">QR</div>
        </div>
        <div class="text-muted" style="font-size:.85rem;">Atau transfer ke: <strong>${phoneNumber}</strong></div>
      </div>
    `;
  } else if(methodId === 'qris'){
    // QRIS instructions
    instructionsHtml = `
      <div class="payment-qr">
        <div style="font-size:5rem;margin-bottom:1rem;">⚡</div>
        <div class="text-muted mb2">Scan QRIS dengan aplikasi e-wallet apapun</div>
        <div style="width:220px;height:220px;background:rgba(255,255,255,.95);margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;border-radius:8px;border:2px solid var(--border);">
          <div style="text-align:center;">
            <div style="font-size:4rem;margin-bottom:.5rem;">⚡</div>
            <div style="color:#000;font-size:.75rem;font-weight:600;">QRIS</div>
          </div>
        </div>
        <div class="text-muted" style="font-size:.85rem;">GoPay, OVO, DANA, ShopeePay, LinkAja, dll</div>
      </div>
    `;
  } else {
    // Bank VA instructions
    const vaNumber = `8808${String(currentUser.id).padStart(10,'0')}`;
    instructionsHtml = `
      <div class="payment-va">
        <div style="font-size:4rem;margin-bottom:1rem;">🏦</div>
        <div class="text-muted mb2">Transfer ke Virtual Account</div>
        <div style="background:rgba(0,0,0,.3);border:1px solid var(--border);padding:1.5rem;border-radius:4px;margin-bottom:1rem;">
          <div class="text-muted" style="font-size:.75rem;margin-bottom:.5rem;">Nomor Virtual Account</div>
          <div class="orb" style="font-size:1.5rem;font-weight:700;color:var(--accent);letter-spacing:2px;">${vaNumber}</div>
          <button class="btn btn-secondary btn-sm mt2" onclick="copyToClipboard('${vaNumber}')">📋 Copy</button>
        </div>
        <div style="text-align:left;font-size:.85rem;">
          <div class="text-muted mb1">Cara Transfer:</div>
          <ol style="margin-left:1.2rem;line-height:1.8;">
            <li>Buka aplikasi ${method.name}</li>
            <li>Pilih Transfer > Virtual Account</li>
            <li>Masukkan nomor VA di atas</li>
            <li>Masukkan nominal: <strong>Rp ${totalPrice.toLocaleString('id-ID')}</strong></li>
            <li>Konfirmasi pembayaran</li>
          </ol>
        </div>
      </div>
    `;
  }
  
  closeModal();
  openModal(`💳 ${method.name}`, `
    <div style="margin-bottom:1.5rem;padding:1rem;background:rgba(0,245,255,.05);border:1px solid rgba(0,245,255,.15);border-radius:4px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:.5rem;">
        <span class="text-muted">Order ID</span>
        <span class="text-accent orb" style="font-size:.85rem;">${orderId}</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:.5rem;">
        <span class="text-muted">Produk</span>
        <span>${p.name} ${label}</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:.5rem;">
        <span class="text-muted">Harga</span>
        <span>Rp ${price.toLocaleString('id-ID')}</span>
      </div>
      ${method.fee > 0 ? `<div style="display:flex;justify-content:space-between;margin-bottom:.5rem;">
        <span class="text-muted">Biaya Admin</span>
        <span>Rp ${method.fee.toLocaleString('id-ID')}</span>
      </div>` : ''}
      <div style="border-top:1px solid var(--border);margin-top:.5rem;padding-top:.5rem;display:flex;justify-content:space-between;">
        <span class="text-muted orb">TOTAL</span>
        <span class="text-gold orb" style="font-size:1.2rem;font-weight:700;">Rp ${totalPrice.toLocaleString('id-ID')}</span>
      </div>
    </div>
    
    ${instructionsHtml}
    
    <div style="margin-top:1.5rem;padding:.75rem;background:rgba(255,152,0,.08);border:1px solid rgba(255,152,0,.2);border-radius:4px;font-size:.82rem;color:var(--orange);">
      ⏱️ Selesaikan pembayaran dalam 24 jam
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'✅ Saya Sudah Bayar', cls:'btn-primary', action:`confirmPayment('${methodId}', ${productId}, '${label}', ${price}, '${gameId}', ${method.fee})`},
  ]);
  
  document.getElementById('modalBox').classList.add('modal-lg');
}

function copyToClipboard(text){
  navigator.clipboard.writeText(text).then(()=>{
    showToast('success','Copied!','Nomor VA berhasil dicopy');
  }).catch(()=>{
    showToast('error','Error','Gagal copy nomor VA');
  });
}

function confirmPayment(methodId, productId, label, price, gameId, fee){
  // Simulate payment verification
  showToast('info','Memproses...','Memverifikasi pembayaran Anda');
  
  setTimeout(()=>{
    processPayment(methodId, productId, label, price, gameId, fee);
  }, 1500);
}

function processPayment(methodId, productId, label, price, gameId, fee){
  const p = DB.products.find(x=>x.id===productId);
  const totalPrice = price + fee;
  const method = PAYMENT_METHODS.find(m=>m.id===methodId);
  
  // Deduct saldo only if payment method is saldo
  if(methodId === 'saldo'){
    currentUser.saldo -= totalPrice;
    const user = DB.users.find(u=>u.id===currentUser.id);
    if(user) user.saldo = currentUser.saldo;
  }
  
  // Create order
  const orderId = `NTU-${String(orderCounter++).padStart(8,'0')}`;
  const newOrder = {
    id:orderId, 
    userId:currentUser.id, 
    product:p.name, 
    option:label, 
    amount:totalPrice, 
    status:'success', 
    date:new Date().toISOString().slice(0,10), 
    gameId,
    paymentMethod: method.name,
    paymentFee: fee
  };
  DB.orders.push(newOrder);
  
  // Notification
  const notifs = DB.notifications[currentUser.id] || [];
  notifs.unshift({id:Date.now(), icon:'✅', text:`Top up ${p.name} ${label} berhasil! ID: ${orderId}`, time:'Baru saja', read:false});
  DB.notifications[currentUser.id] = notifs;
  
  // Admin notification
  const adminNotifs = DB.notifications[1] || [];
  adminNotifs.unshift({id:Date.now(), icon:'💰', text:`Pesanan baru ${orderId}: ${p.name} ${label} dari ${currentUser.name}`, time:'Baru saja', read:false});
  DB.notifications[1] = adminNotifs;
  
  closeModal();
  openModal('✅ Pembayaran Berhasil!', `
    <div style="text-align:center;padding:1rem 0;">
      <div style="font-size:4rem;margin-bottom:1rem;animation:mshow .4s ease;">✅</div>
      <div class="text-green orb" style="font-size:1.1rem;font-weight:700;margin-bottom:.4rem;">Pembayaran Berhasil!</div>
      <p class="text-muted">${p.name} ${label} sedang diproses</p>
      <div style="background:rgba(0,0,0,.2);border:1px solid var(--border);padding:1rem;margin-top:1.2rem;text-align:left;">
        <div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:.3rem;"><span class="text-muted">Order ID</span><span class="text-accent orb" style="font-size:.78rem">${orderId}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:.3rem;"><span class="text-muted">Produk</span><span>${p.name} ${label}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:.3rem;"><span class="text-muted">Metode</span><span>${method.name}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:.85rem;"><span class="text-muted">Total Dibayar</span><span class="text-gold orb">Rp ${totalPrice.toLocaleString('id-ID')}</span></div>
      </div>
      ${methodId === 'saldo' ? `<div style="margin-top:.8rem;font-size:.82rem;color:var(--muted);">Saldo tersisa: <span class="text-gold orb">Rp ${currentUser.saldo.toLocaleString('id-ID')}</span></div>` : ''}
    </div>
  `, [{label:'Selesai', cls:'btn-primary', action:'closeModal();renderStore()'}]);
  
  // Update sidebar saldo display if visible
  renderNotifs();
  showToast('success','Berhasil!',`Pembayaran ${method.name} berhasil diproses`);
}

// ═══════════════════════════════════════════════
//  CUSTOMER: HISTORY
// ═══════════════════════════════════════════════
function renderHistory(){
  const orders = DB.orders.filter(o=>o.userId===currentUser.id).reverse();
  const totalSpend = orders.filter(o=>o.status==='success').reduce((s,o)=>s+o.amount,0);
  document.getElementById('mainContent').innerHTML = `
    <div class="grid3 mb3">
      <div class="stat-card c1"><div class="stat-icon">📦</div><div class="stat-label">Total Transaksi</div><div class="stat-value orb">${orders.length}</div></div>
      <div class="stat-card c2"><div class="stat-icon">✅</div><div class="stat-label">Sukses</div><div class="stat-value text-green orb">${orders.filter(o=>o.status==='success').length}</div></div>
      <div class="stat-card c3"><div class="stat-icon">💰</div><div class="stat-label">Total Pengeluaran</div><div class="stat-value text-gold orb" style="font-size:1.2rem">Rp ${(totalSpend/1000).toFixed(0)}K</div></div>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem;flex-wrap:wrap;gap:.5rem;">
        <div><div class="sl">Riwayat</div><div class="st" style="font-size:1rem">Semua <span>Transaksi</span></div></div>
        <select class="form-select" style="width:auto;font-size:.82rem;padding:7px 12px;" onchange="filterHistory(this.value)">
          <option value="all">Semua</option>
          <option value="success">Sukses</option>
          <option value="pending">Pending</option>
          <option value="failed">Gagal</option>
        </select>
      </div>
      <div class="table-wrap" id="historyTable">
        ${renderHistoryRows(orders)}
      </div>
    </div>
  `;
}

function renderHistoryRows(orders){
  if(!orders.length) return '<div class="empty-state"><span class="ei">📋</span><h4>Belum Ada Transaksi</h4><p>Yuk mulai top up dari toko!</p></div>';
  return `<table><thead><tr><th>Order ID</th><th>Produk</th><th>Amount</th><th>Metode Bayar</th><th>Status</th><th>Tanggal</th></tr></thead><tbody>
    ${orders.map(o=>`<tr>
      <td class="text-accent orb" style="font-size:.72rem">${o.id}</td>
      <td><div style="font-weight:600">${o.product}</div><div class="text-muted" style="font-size:.75rem">${o.option} · ${o.gameId}</div></td>
      <td class="text-gold orb" style="font-size:.82rem">Rp ${o.amount.toLocaleString('id-ID')}</td>
      <td class="text-muted" style="font-size:.82rem">${o.paymentMethod || 'Saldo'}</td>
      <td>${statusBadge(o.status)}</td>
      <td class="text-muted">${o.date}</td>
    </tr>`).join('')}
  </tbody></table>`;
}

function filterHistory(status){
  const orders = DB.orders.filter(o=>o.userId===currentUser.id && (status==='all'||o.status===status)).reverse();
  document.getElementById('historyTable').innerHTML = renderHistoryRows(orders);
}

// ═══════════════════════════════════════════════
//  CUSTOMER: PROFILE
// ═══════════════════════════════════════════════
function renderProfile(){
  const orders = DB.orders.filter(o=>o.userId===currentUser.id);
  const totalSpend = orders.filter(o=>o.status==='success').reduce((s,o)=>s+o.amount,0);
  document.getElementById('mainContent').innerHTML = `
    <div class="profile-hero mb3">
      <div class="profile-ava-lg">${currentUser.avatar}</div>
      <div class="profile-info">
        <h2>${currentUser.name}</h2>
        <p>${currentUser.email} · Member sejak ${currentUser.joined}</p>
        <div style="display:flex;gap:.5rem;margin-top:.5rem;flex-wrap:wrap;">
          <span class="badge badge-blue">🎮 Customer</span>
          <span class="badge badge-green">✅ Terverifikasi</span>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="openEditProfile()">✏️ Edit Profil</button>
    </div>

    <div class="grid2 mb3" style="grid-template-columns:1.4fr 1fr;">
      <div class="saldo-card">
        <div class="saldo-label">Saldo NexTopUp</div>
        <div class="saldo-value">Rp ${currentUser.saldo.toLocaleString('id-ID')}</div>
        <div class="text-muted mt1" style="font-size:.82rem;">Gunakan untuk semua transaksi top up</div>
        <div class="saldo-actions">
          <button class="btn btn-primary btn-sm" onclick="openTopupSaldo()">+ Top Up Saldo</button>
          <button class="btn btn-secondary btn-sm" onclick="navigate('history')">📋 Riwayat</button>
        </div>
      </div>
      <div class="card">
        <div class="sl mb2">Statistik Akun</div>
        <div style="display:flex;flex-direction:column;gap:.8rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="text-muted" style="font-size:.85rem;">Total Transaksi</span>
            <span class="orb text-accent" style="font-size:1rem;font-weight:700;">${orders.length}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="text-muted" style="font-size:.85rem;">Transaksi Sukses</span>
            <span class="orb text-green" style="font-size:1rem;font-weight:700;">${orders.filter(o=>o.status==='success').length}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="text-muted" style="font-size:.85rem;">Total Pengeluaran</span>
            <span class="orb text-gold" style="font-size:.9rem;font-weight:700;">Rp ${totalSpend.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
        <div class="sl">Keamanan Akun</div>
        <button class="btn btn-secondary btn-sm" onclick="openChangePass()">🔑 Ganti Password</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:.6rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:.75rem;background:rgba(0,0,0,.2);border:1px solid var(--border);">
          <div><div style="font-size:.88rem;font-weight:600;">Email</div><div class="text-muted" style="font-size:.8rem;">${currentUser.email}</div></div>
          <span class="badge badge-green">✓ Terverifikasi</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:.75rem;background:rgba(0,0,0,.2);border:1px solid var(--border);">
          <div><div style="font-size:.88rem;font-weight:600;">Password</div><div class="text-muted" style="font-size:.8rem;">••••••••</div></div>
          <span class="badge badge-blue">Aktif</span>
        </div>
      </div>
    </div>
  `;
}

function openTopupSaldo(){
  openModal('Top Up Saldo', `
    <div class="text-muted mb3" style="font-size:.88rem;">Pilih nominal saldo yang ingin ditambahkan</div>
    <div class="opt-grid mb3" id="saldoOptGrid">
      ${[25000,50000,100000,200000,500000].map((amt,i)=>`
        <div class="opt-card ${i===0?'sel':''}" onclick="selSaldoOpt(this,${amt})" data-amt="${amt}">
          <div class="oc-amount orb" style="font-size:.9rem">Rp ${(amt/1000).toFixed(0)}K</div>
        </div>
      `).join('')}
    </div>
    <div class="form-group"><label>Metode Pembayaran</label>
      <select class="form-select"><option>💚 GoPay</option><option>🟣 OVO</option><option>🔵 Dana</option><option>⚡ QRIS</option><option>🏦 Transfer Bank</option></select>
    </div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'💳 Bayar & Tambah Saldo', cls:'btn-primary', action:'confirmTopupSaldo()'},
  ]);
}

function selSaldoOpt(el, amt){
  document.querySelectorAll('#saldoOptGrid .opt-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
}

function confirmTopupSaldo(){
  const sel = document.querySelector('#saldoOptGrid .opt-card.sel');
  if(!sel) return;
  const amt = parseInt(sel.dataset.amt);
  currentUser.saldo += amt;
  const user = DB.users.find(u=>u.id===currentUser.id);
  if(user) user.saldo = currentUser.saldo;
  const notifs = DB.notifications[currentUser.id]||[];
  notifs.unshift({id:Date.now(), icon:'💰', text:`Saldo berhasil ditambah Rp ${amt.toLocaleString('id-ID')}.`, time:'Baru saja', read:false});
  showToast('success','Berhasil!',`Saldo +Rp ${amt.toLocaleString('id-ID')}`);
  closeModal(); renderProfile();
}

function openEditProfile(){
  openModal('Edit Profil', `
    <div class="form-group"><label>Nama Lengkap</label><input type="text" class="form-input" id="ep-name" value="${currentUser.name}"></div>
    <div class="form-group"><label>Avatar (Emoji)</label><input type="text" class="form-input" id="ep-avatar" value="${currentUser.avatar}" maxlength="4"></div>
    <div style="padding:.75rem;background:rgba(255,152,0,.06);border:1px solid rgba(255,152,0,.15);font-size:.82rem;color:var(--orange);">⚠️ Email tidak dapat diubah</div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'💾 Simpan', cls:'btn-primary', action:'saveEditProfile()'},
  ]);
}

function saveEditProfile(){
  const name = document.getElementById('ep-name').value.trim();
  const avatar = document.getElementById('ep-avatar').value.trim();
  if(!name){ showToast('error','Error','Nama tidak boleh kosong'); return; }
  currentUser.name = name;
  currentUser.avatar = avatar || currentUser.avatar;
  const user = DB.users.find(u=>u.id===currentUser.id);
  if(user){ user.name=name; user.avatar=currentUser.avatar; }
  document.getElementById('sidebarName').textContent = name;
  document.getElementById('sidebarAva').textContent = currentUser.avatar;
  document.getElementById('topbarUser').textContent = name;
  showToast('success','Berhasil','Profil berhasil diperbarui.');
  closeModal(); renderProfile();
}

function openChangePass(){
  openModal('Ganti Password', `
    <div class="form-group"><label>Password Lama</label><input type="password" class="form-input" id="cp-old" placeholder="••••••••"></div>
    <div class="form-group"><label>Password Baru</label><input type="password" class="form-input" id="cp-new" placeholder="Min. 6 karakter"></div>
    <div class="form-group"><label>Konfirmasi Password Baru</label><input type="password" class="form-input" id="cp-new2" placeholder="Ulangi password baru"></div>
  `, [
    {label:'Batal', cls:'btn-secondary', action:'closeModal()'},
    {label:'🔑 Ganti Password', cls:'btn-primary', action:'saveNewPass()'},
  ]);
}

function saveNewPass(){
  const old = document.getElementById('cp-old').value;
  const nw = document.getElementById('cp-new').value;
  const nw2 = document.getElementById('cp-new2').value;
  if(old !== currentUser.pass){ showToast('error','Error','Password lama salah'); return; }
  if(nw.length < 6){ showToast('error','Error','Password min. 6 karakter'); return; }
  if(nw !== nw2){ showToast('error','Error','Konfirmasi password tidak cocok'); return; }
  currentUser.pass = nw;
  const user = DB.users.find(u=>u.id===currentUser.id);
  if(user) user.pass = nw;
  showToast('success','Berhasil','Password berhasil diubah!');
  closeModal();
}

// ═══════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════
function statusBadge(s){
  const map = {success:'<span class="badge badge-green">✓ Sukses</span>',pending:'<span class="badge badge-orange">⏳ Pending</span>',failed:'<span class="badge badge-red">✗ Gagal</span>'};
  return map[s]||s;
}

// ═══════════════════════════════════════════════
//  MODAL ENGINE
// ═══════════════════════════════════════════════
function openModal(title, body, buttons=[]){
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modalBox').classList.remove('modal-lg');
  document.getElementById('modalFooter').innerHTML = buttons.map(b=>
    `<button class="btn ${b.cls}" onclick="${b.action}">${b.label}</button>`
  ).join('');
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('modalBox').classList.remove('modal-lg');
}
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

// ═══════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════
let toastQ = [];
function showToast(type, title, msg){
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  const icons = {success:'✅', error:'❌', info:'ℹ️'};
  el.className = `toast ${type}`;
  el.innerHTML = `<div class="toast-ico">${icons[type]||'💬'}</div><div class="toast-msg"><h5>${title}</h5><p>${msg}</p></div>`;
  container.appendChild(el);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('show')));
  setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(), 500); }, 3500);
}