// ═══════════════════════════════════════════════
//  ADDITIONAL FEATURES
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  SEARCH & FILTER ENHANCEMENT
// ═══════════════════════════════════════════════
function enhancedSearch(query, products){
  query = query.toLowerCase().trim();
  
  if(!query) return products;
  
  return products.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(query);
    const catMatch = p.cat.toLowerCase().includes(query);
    const optionsMatch = p.options.some(o => o.label.toLowerCase().includes(query));
    
    return nameMatch || catMatch || optionsMatch;
  });
}

function sortProducts(products, sortBy){
  const sorted = [...products];
  
  switch(sortBy){
    case 'name-asc':
      return sorted.sort((a,b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a,b) => b.name.localeCompare(a.name));
    case 'price-asc':
      return sorted.sort((a,b) => Math.min(...a.options.map(o=>o.price)) - Math.min(...b.options.map(o=>o.price)));
    case 'price-desc':
      return sorted.sort((a,b) => Math.min(...b.options.map(o=>o.price)) - Math.min(...a.options.map(o=>o.price)));
    case 'popular':
      return sorted.sort((a,b) => (b.badge === 'Terlaris' ? 1 : 0) - (a.badge === 'Terlaris' ? 1 : 0));
    default:
      return sorted;
  }
}

// ═══════════════════════════════════════════════
//  NOTIFICATION SYSTEM
// ═══════════════════════════════════════════════
function requestNotificationPermission(){
  if('Notification' in window && Notification.permission === 'default'){
    Notification.requestPermission();
  }
}

function sendBrowserNotification(title, body, icon = '🔔'){
  if('Notification' in window && Notification.permission === 'granted'){
    new Notification(title, {
      body: body,
      icon: '/favicon.ico',
      badge: icon,
      tag: 'nextopup-notification'
    });
  }
}

// ═══════════════════════════════════════════════
//  LOCAL STORAGE MANAGEMENT
// ═══════════════════════════════════════════════
function saveToLocalStorage(key, data){
  try{
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }catch(e){
    console.error('LocalStorage error:', e);
    return false;
  }
}

function getFromLocalStorage(key){
  try{
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }catch(e){
    console.error('LocalStorage error:', e);
    return null;
  }
}

function clearLocalStorage(key){
  try{
    if(key){
      localStorage.removeItem(key);
    }else{
      localStorage.clear();
    }
    return true;
  }catch(e){
    console.error('LocalStorage error:', e);
    return false;
  }
}

// Save user preferences
function saveUserPreferences(userId, preferences){
  saveToLocalStorage(`user_pref_${userId}`, preferences);
}

function getUserPreferences(userId){
  return getFromLocalStorage(`user_pref_${userId}`) || {
    theme: 'dark',
    language: 'id',
    notifications: true
  };
}

// ═══════════════════════════════════════════════
//  ANALYTICS & TRACKING
// ═══════════════════════════════════════════════
function trackEvent(eventName, eventData = {}){
  console.log('Event tracked:', eventName, eventData);
  
  // Here you can integrate with Google Analytics, Mixpanel, etc.
  // Example: gtag('event', eventName, eventData);
  
  // Save to local analytics
  const analytics = getFromLocalStorage('analytics') || [];
  analytics.push({
    event: eventName,
    data: eventData,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 100 events
  if(analytics.length > 100){
    analytics.shift();
  }
  
  saveToLocalStorage('analytics', analytics);
}

// Track page views
function trackPageView(pageName){
  trackEvent('page_view', {page: pageName});
}

// Track transactions
function trackTransaction(orderData){
  trackEvent('transaction', {
    orderId: orderData.id,
    product: orderData.product,
    amount: orderData.amount,
    paymentMethod: orderData.paymentMethod
  });
}

// ═══════════════════════════════════════════════
//  ERROR HANDLING & REPORTING
// ═══════════════════════════════════════════════
function handleError(error, context = ''){
  console.error(`Error in ${context}:`, error);
  
  // Log error for debugging
  const errorLog = getFromLocalStorage('error_log') || [];
  errorLog.push({
    error: error.message || error,
    context: context,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  });
  
  // Keep only last 50 errors
  if(errorLog.length > 50){
    errorLog.shift();
  }
  
  saveToLocalStorage('error_log', errorLog);
  
  // Show user-friendly error message
  showToast('error', 'Terjadi Kesalahan', 'Mohon coba lagi atau hubungi customer service');
}

// Global error handler
window.addEventListener('error', (event) => {
  handleError(event.error, 'Global');
});

window.addEventListener('unhandledrejection', (event) => {
  handleError(event.reason, 'Promise');
});

// ═══════════════════════════════════════════════
//  PERFORMANCE MONITORING
// ═══════════════════════════════════════════════
function measurePerformance(label, callback){
  const start = performance.now();
  const result = callback();
  const end = performance.now();
  
  console.log(`Performance [${label}]: ${(end - start).toFixed(2)}ms`);
  
  return result;
}

// ═══════════════════════════════════════════════
//  REFERRAL SYSTEM
// ═══════════════════════════════════════════════
function generateReferralCode(userId){
  return `REF${userId.toString().padStart(6, '0')}`;
}

function getReferralLink(userId){
  const code = generateReferralCode(userId);
  return `${window.location.origin}?ref=${code}`;
}

function checkReferralCode(){
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get('ref');
  
  if(refCode){
    saveToLocalStorage('referral_code', refCode);
    return refCode;
  }
  
  return getFromLocalStorage('referral_code');
}

// ═══════════════════════════════════════════════
//  CUSTOMER SUPPORT WIDGET
// ═══════════════════════════════════════════════
function initSupportWidget(){
  const widget = document.createElement('div');
  widget.id = 'support-widget';
  widget.innerHTML = `
    <button class="support-btn" onclick="toggleSupportWidget()" title="Customer Support">
      <span class="support-icon">💬</span>
      <span class="support-badge" id="support-badge" style="display:none;">1</span>
    </button>
    <div class="support-panel" id="support-panel">
      <div class="support-header">
        <h4>💬 Customer Support</h4>
        <button class="close-btn" onclick="toggleSupportWidget()">✕</button>
      </div>
      <div class="support-body">
        <div class="support-quick-actions">
          <button class="support-action-btn" onclick="openWhatsApp()">
            <span>💚</span>
            <div>
              <div style="font-weight:600;font-size:.85rem;">WhatsApp</div>
              <div style="font-size:.75rem;color:var(--muted);">Chat langsung</div>
            </div>
          </button>
          <button class="support-action-btn" onclick="openEmail()">
            <span>📧</span>
            <div>
              <div style="font-weight:600;font-size:.85rem;">Email</div>
              <div style="font-size:.75rem;color:var(--muted);">cs@nextopup.id</div>
            </div>
          </button>
          <button class="support-action-btn" onclick="showFAQModal()">
            <span>❓</span>
            <div>
              <div style="font-weight:600;font-size:.85rem;">FAQ</div>
              <div style="font-size:.75rem;color:var(--muted);">Pertanyaan umum</div>
            </div>
          </button>
        </div>
        <div style="margin-top:1rem;padding:.75rem;background:rgba(0,245,255,.05);border:1px solid rgba(0,245,255,.15);border-radius:6px;font-size:.8rem;">
          <div style="font-weight:600;margin-bottom:.3rem;">⏰ Jam Operasional</div>
          <div style="color:var(--muted);">Senin - Minggu: 08:00 - 22:00 WIB</div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(widget);
}

function toggleSupportWidget(){
  const panel = document.getElementById('support-panel');
  panel.classList.toggle('open');
}

function openWhatsApp(){
  window.open('https://wa.me/6281234567890?text=Halo%20NexTopUp,%20saya%20butuh%20bantuan', '_blank');
}

function openEmail(){
  window.location.href = 'mailto:cs@nextopup.id?subject=Bantuan%20NexTopUp';
}

function showFAQModal(){
  openModal('❓ Frequently Asked Questions', `
    <div style="max-height:400px;overflow-y:auto;">
      ${renderFAQ()}
    </div>
  `, [
    {label:'Tutup', cls:'btn-secondary', action:'closeModal()'}
  ]);
  
  document.getElementById('modalBox').classList.add('modal-lg');
}

// ═══════════════════════════════════════════════
//  INITIALIZE ON PAGE LOAD
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Check referral code
  checkReferralCode();
  
  // Request notification permission
  requestNotificationPermission();
  
  // Initialize support widget
  initSupportWidget();
  
  // Track page load
  trackPageView('home');
});
