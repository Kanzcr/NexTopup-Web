// ═══════════════════════════════════════════════
//  PAYMENT VALIDATION & QR CODE HANDLER
// ═══════════════════════════════════════════════

// Validate user input before payment
function validateUserInput(gameId, gameIdConfirm, productCategory){
  if(!gameId){
    showToast('error','Error','Mohon isi User ID / Email akun');
    return false;
  }
  
  if(!gameIdConfirm){
    showToast('error','Error','Mohon konfirmasi User ID / Email akun');
    return false;
  }
  
  if(gameId !== gameIdConfirm){
    showToast('error','Data Tidak Cocok','User ID / Email yang dimasukkan tidak sama');
    return false;
  }
  
  // Email validation for email-based products
  const isEmailBased = ['streaming', 'musik', 'cloud'].includes(productCategory);
  
  if(isEmailBased){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(gameId)){
      showToast('error','Email Tidak Valid','Mohon masukkan alamat email yang benar');
      return false;
    }
  }
  
  return true;
}

// Generate realistic VA number
function generateVANumber(methodId, userId){
  let vaPrefix = '';
  
  switch(methodId){
    case 'bca':
      vaPrefix = '8808';
      break;
    case 'mandiri':
      vaPrefix = '8909';
      break;
    case 'bni':
      vaPrefix = '8810';
      break;
    default:
      vaPrefix = '8808';
  }
  
  return `${vaPrefix}${String(userId).padStart(12,'0')}`;
}

// Generate QR Code
function generateQRCode(containerId, data){
  const container = document.getElementById(containerId);
  if(container && typeof QRCode !== 'undefined'){
    // Clear previous QR code
    container.innerHTML = '';
    
    new QRCode(container, {
      text: data,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

// Generate QRIS data
function generateQRISData(userId, orderId, amount){
  return `00020101021226670016ID.CO.QRIS.WWW0215ID${userId}${orderId}0303UMI51440014ID.CO.BCA.WWW02150${userId.toString().padStart(16,'0')}0215${orderId}5204581153033605802ID5913NEXTOPUP.ID6007JAKARTA61051234062070703A016304${amount}`;
}

// Generate E-wallet QR data
function generateEwalletData(methodName, phoneNumber, amount, orderId){
  return `${methodName.toUpperCase()}:${phoneNumber}:${amount}:${orderId}`;
}


// ═══════════════════════════════════════════════
//  LOADING OVERLAY
// ═══════════════════════════════════════════════
function showLoading(text = 'Memproses...'){
  let overlay = document.getElementById('loading-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
      <div class="loading-spinner"></div>
      <div class="loading-text" id="loading-text">${text}</div>
    `;
    document.body.appendChild(overlay);
  }
  
  document.getElementById('loading-text').textContent = text;
  setTimeout(() => overlay.classList.add('show'), 10);
}

function hideLoading(){
  const overlay = document.getElementById('loading-overlay');
  if(overlay){
    overlay.classList.remove('show');
  }
}

// ═══════════════════════════════════════════════
//  VOUCHER SYSTEM
// ═══════════════════════════════════════════════
const VOUCHERS = {
  'WELCOME10': {code:'WELCOME10', discount:10, type:'percent', minPurchase:50000, maxDiscount:10000, desc:'Diskon 10% untuk pengguna baru'},
  'TOPUP50': {code:'TOPUP50', discount:5000, type:'fixed', minPurchase:100000, maxDiscount:5000, desc:'Potongan Rp 5.000 untuk pembelian min Rp 100.000'},
  'GAME20': {code:'GAME20', discount:20, type:'percent', minPurchase:75000, maxDiscount:15000, desc:'Diskon 20% untuk top up game'},
};

function applyVoucher(voucherCode, totalAmount){
  const voucher = VOUCHERS[voucherCode.toUpperCase()];
  
  if(!voucher){
    return {success:false, message:'Kode voucher tidak valid'};
  }
  
  if(totalAmount < voucher.minPurchase){
    return {success:false, message:`Minimal pembelian Rp ${voucher.minPurchase.toLocaleString('id-ID')}`};
  }
  
  let discount = 0;
  if(voucher.type === 'percent'){
    discount = Math.min((totalAmount * voucher.discount / 100), voucher.maxDiscount);
  } else {
    discount = voucher.discount;
  }
  
  return {
    success:true,
    discount:discount,
    voucher:voucher,
    finalAmount:totalAmount - discount
  };
}

// ═══════════════════════════════════════════════
//  RECEIPT GENERATOR
// ═══════════════════════════════════════════════
function generateReceipt(orderData){
  const receiptHtml = `
    <div class="receipt" id="receipt-content">
      <div class="receipt-header">
        <div class="receipt-logo">NEXTOPUP</div>
        <div style="font-size:.85rem;color:#666;">Platform Top Up #1</div>
        <div style="font-size:.75rem;color:#999;margin-top:.5rem;">www.nextopup.id</div>
      </div>
      
      <div style="margin:1.5rem 0;">
        <div class="receipt-row">
          <span style="color:#666;">Order ID</span>
          <span style="font-family:monospace;font-weight:600;">${orderData.orderId}</span>
        </div>
        <div class="receipt-row">
          <span style="color:#666;">Tanggal</span>
          <span>${orderData.date}</span>
        </div>
        <div class="receipt-row">
          <span style="color:#666;">Customer</span>
          <span>${orderData.customerName}</span>
        </div>
      </div>
      
      <div style="border-top:1px solid #ddd;padding-top:1rem;">
        <div class="receipt-row">
          <span style="color:#666;">Produk</span>
          <span style="font-weight:600;">${orderData.product}</span>
        </div>
        <div class="receipt-row">
          <span style="color:#666;">Nominal</span>
          <span>${orderData.option}</span>
        </div>
        <div class="receipt-row">
          <span style="color:#666;">User ID</span>
          <span style="font-family:monospace;">${orderData.userId}</span>
        </div>
        <div class="receipt-row">
          <span style="color:#666;">Harga</span>
          <span>Rp ${orderData.price.toLocaleString('id-ID')}</span>
        </div>
        ${orderData.fee > 0 ? `<div class="receipt-row">
          <span style="color:#666;">Biaya Admin</span>
          <span>Rp ${orderData.fee.toLocaleString('id-ID')}</span>
        </div>` : ''}
        ${orderData.discount > 0 ? `<div class="receipt-row" style="color:#00AA13;">
          <span>Diskon</span>
          <span>- Rp ${orderData.discount.toLocaleString('id-ID')}</span>
        </div>` : ''}
      </div>
      
      <div class="receipt-total">
        <div class="receipt-row">
          <span>TOTAL</span>
          <span>Rp ${orderData.total.toLocaleString('id-ID')}</span>
        </div>
      </div>
      
      <div style="margin-top:1rem;padding:1rem;background:#f5f5f5;border-radius:4px;">
        <div class="receipt-row">
          <span style="color:#666;">Metode Pembayaran</span>
          <span style="font-weight:600;">${orderData.paymentMethod}</span>
        </div>
        <div class="receipt-row">
          <span style="color:#666;">Status</span>
          <span style="color:#00AA13;font-weight:600;">✓ BERHASIL</span>
        </div>
      </div>
      
      <div class="receipt-footer">
        <div style="margin-bottom:.5rem;">Terima kasih telah berbelanja di NexTopUp!</div>
        <div>Simpan struk ini sebagai bukti transaksi</div>
        <div style="margin-top:1rem;font-size:.7rem;">
          Customer Service: cs@nextopup.id | WA: 0812-3456-7890
        </div>
      </div>
    </div>
  `;
  
  return receiptHtml;
}

function downloadReceipt(orderData){
  const receiptHtml = generateReceipt(orderData);
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Receipt - ${orderData.orderId}</title>
      <style>
        body{font-family:Arial,sans-serif;margin:0;padding:20px;background:#f5f5f5;}
        .receipt{background:#fff;color:#000;padding:2rem;border-radius:8px;max-width:400px;margin:0 auto;box-shadow:0 2px 10px rgba(0,0,0,.1);}
        .receipt-header{text-align:center;border-bottom:2px dashed #ccc;padding-bottom:1rem;margin-bottom:1rem;}
        .receipt-logo{font-family:'Arial Black';font-size:1.5rem;font-weight:900;color:#00f5ff;margin-bottom:.5rem;}
        .receipt-row{display:flex;justify-content:space-between;padding:.5rem 0;font-size:.85rem;}
        .receipt-total{border-top:2px solid #000;margin-top:1rem;padding-top:1rem;font-weight:700;font-size:1.1rem;}
        .receipt-footer{text-align:center;margin-top:1.5rem;padding-top:1rem;border-top:2px dashed #ccc;font-size:.75rem;color:#666;}
        @media print{body{background:#fff;}.receipt{box-shadow:none;}}
      </style>
    </head>
    <body>${receiptHtml}</body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 250);
}

// ═══════════════════════════════════════════════
//  FAQ DATA
// ═══════════════════════════════════════════════
const FAQ_DATA = [
  {
    q:'Bagaimana cara top up di NexTopUp?',
    a:'Pilih produk yang ingin di-top up, masukkan User ID/Email, pilih nominal, pilih metode pembayaran, dan selesaikan pembayaran. Top up akan diproses otomatis.'
  },
  {
    q:'Berapa lama proses top up?',
    a:'Top up diproses otomatis dan instant setelah pembayaran berhasil. Biasanya hanya membutuhkan waktu 1-5 menit.'
  },
  {
    q:'Metode pembayaran apa saja yang tersedia?',
    a:'Kami menerima pembayaran via Saldo NexTopUp, GoPay, OVO, DANA, QRIS, dan Virtual Account (BCA, Mandiri, BNI).'
  },
  {
    q:'Apakah aman bertransaksi di NexTopUp?',
    a:'Sangat aman! Kami menggunakan sistem keamanan berlapis dan semua transaksi dienkripsi. Data pribadi Anda dijamin aman.'
  },
  {
    q:'Bagaimana jika top up gagal?',
    a:'Jika top up gagal, saldo akan dikembalikan otomatis ke akun Anda. Anda bisa menghubungi customer service kami untuk bantuan lebih lanjut.'
  },
  {
    q:'Apakah ada biaya admin?',
    a:'Untuk pembayaran via Saldo, GoPay, OVO, DANA, dan QRIS tidak ada biaya admin. Untuk Virtual Account dikenakan biaya admin Rp 4.000.'
  },
  {
    q:'Bagaimana cara menggunakan voucher?',
    a:'Masukkan kode voucher saat checkout sebelum melakukan pembayaran. Diskon akan otomatis teraplikasi jika voucher valid.'
  },
  {
    q:'Apakah bisa refund?',
    a:'Refund hanya bisa dilakukan jika top up gagal atau ada kesalahan sistem. Untuk top up yang sudah berhasil tidak bisa di-refund.'
  }
];

function renderFAQ(){
  return FAQ_DATA.map((faq, index) => `
    <div class="faq-item" onclick="toggleFAQ(this)">
      <div class="faq-question">
        <span>${faq.q}</span>
        <span class="faq-icon">▼</span>
      </div>
      <div class="faq-answer">${faq.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(element){
  element.classList.toggle('open');
}

// ═══════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════
function formatCurrency(amount){
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

function formatDate(dateString){
  const date = new Date(dateString);
  const options = {year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit'};
  return date.toLocaleDateString('id-ID', options);
}

function copyToClipboard(text){
  navigator.clipboard.writeText(text).then(() => {
    showToast('success','Berhasil!','Teks berhasil dicopy');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('success','Berhasil!','Teks berhasil dicopy');
  });
}
