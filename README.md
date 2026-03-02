# NexTopUp - Platform Top Up Games & App Premium

Platform top up games dan aplikasi premium dengan sistem login, payment gateway, dan dashboard admin/customer yang lengkap.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Fitur Utama

### 💎 **Core Features**
- ✅ Sistem Login & Register
- ✅ Dashboard Admin & Customer
- ✅ 8 Metode Pembayaran (E-wallet, QRIS, Bank VA)
- ✅ Real QR Code Generation
- ✅ Payment Validation System
- ✅ Voucher & Promo Code
- ✅ Transaction History
- ✅ Digital Receipt (Download/Print)
- ✅ Customer Support Widget
- ✅ FAQ Section
- ✅ Responsive Mobile Design

### 🎨 **UI/UX**
- Modern glassmorphism design
- Animated gradient background
- Smooth page transitions
- Loading states & skeleton screens
- Interactive hover effects
- Ripple button animations

### 📱 **Fully Responsive**
- Mobile-first approach
- Tablet optimization
- Desktop layout
- Touch-friendly interface

---

## 📁 Struktur Folder

```
NexTopup-Web/
├── index.html              # Login page (entry point)
├── store.html              # Store page (standalone)
├── README.md               # Project documentation
├── FEATURES.md             # Complete features list
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
├── css/
│   ├── login-style.css     # Styles untuk login & dashboard (1000+ lines)
│   └── style.css           # Styles untuk store page
├── js/
│   ├── login-script.js     # Main application logic
│   ├── payment-handler.js  # Payment validation & QR generation
│   ├── features.js         # Additional features (analytics, support, etc)
│   └── script.js           # Logic untuk store page
└── archive/                # File backup/testing
    ├── login.html
    ├── Topup.html
    ├── test-button.html
    ├── test-login.html
    └── login-simple.html
```

---

## 🎮 Demo Accounts

### Admin
- Email: `admin@nextopup.id`
- Password: `admin123`
- Akses: Dashboard, Kelola Pesanan, Produk, User

### Customer
- Email: `budi@gmail.com`
- Password: `user123`
- Akses: Store, Riwayat Transaksi, Profil

## 🛠️ Cara Menggunakan

### Quick Start
1. Clone repository
```bash
git clone https://github.com/Kanzcr/NexTopup-Web.git
cd NexTopup-Web
```

2. Buka `index.html` di browser
3. Login menggunakan demo account
4. Explore fitur-fitur yang tersedia!

### Login Flow
1. Buka `index.html`
2. Pilih tab "Masuk" atau "Daftar"
3. Login dengan demo account atau klik demo button
4. Auto-redirect ke dashboard sesuai role

### Admin Flow
1. Login sebagai admin
2. Lihat dashboard dengan statistik
3. Kelola pesanan (approve/reject)
4. Tambah/edit/hapus produk
5. Kelola user dan tambah saldo

### Customer Flow
1. Login sebagai customer
2. Browse produk di store
3. Pilih produk dan nominal
4. **Masukkan & konfirmasi User ID/Email** (NEW!)
5. **Pilih metode pembayaran** (8 options)
6. Scan QR Code atau transfer ke VA
7. Konfirmasi pembayaran
8. Download receipt
9. Lihat riwayat di menu History

---

## 💳 Payment Methods

1. **Saldo NexTopUp** 💰 - No fee
2. **GoPay** 💚 - No fee, Real QR Code
3. **OVO** 🟣 - No fee, Real QR Code
4. **DANA** 🔵 - No fee, Real QR Code
5. **QRIS** ⚡ - No fee, Universal QR
6. **BCA VA** 🏦 - Fee Rp 4.000
7. **Mandiri VA** 🏦 - Fee Rp 4.000
8. **BNI VA** 🏦 - Fee Rp 4.000

---

## 🎫 Demo Vouchers

Try these voucher codes at checkout:

- **WELCOME10** - Diskon 10% (min. Rp 50.000)
- **TOPUP50** - Potongan Rp 5.000 (min. Rp 100.000)
- **GAME20** - Diskon 20% (min. Rp 75.000)

---

## 💾 Database

Database disimpan di memory (JavaScript object) di file `js/login-script.js`:
- 4 User (1 Admin, 3 Customer)
- 10 Produk (Games & Apps)
- 6 Sample Orders
- Notifikasi per user

## 🎨 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** Google Fonts (Orbitron, Rajdhani)
- **Libraries:** QRCode.js v1.5.3
- **Storage:** LocalStorage API
- **Notifications:** Web Notifications API
- **Design:** Glassmorphism, CSS Animations, Gradients

---

## 📝 Notes

- Aplikasi ini menggunakan **in-memory database** (data hilang saat refresh)
- Untuk production, integrasikan dengan **backend API** (Node.js, PHP, Python, dll)
- QR Code dan VA number adalah **simulasi** untuk demo purposes
- Payment gateway perlu integrasi dengan provider real:
  - [Midtrans](https://midtrans.com) - Payment Gateway Indonesia
  - [Xendit](https://xendit.co) - Payment Infrastructure
  - [Doku](https://doku.com) - Payment Solutions
- File di folder `archive/` adalah backup dan testing files

---

## 🔧 Development

### File Utama
- `index.html` - Entry point & login page structure
- `css/login-style.css` - Main styling (1000+ lines)
- `js/login-script.js` - Core application logic
- `js/payment-handler.js` - Payment validation & QR generation
- `js/features.js` - Additional features (analytics, support, FAQ)

### Menambah Produk Baru
Edit `DB.products` di `js/login-script.js`:
```javascript
{
  id: 11,
  name: 'Produk Baru',
  cat: 'kategori',
  icon: '🎮',
  bg: 'linear-gradient(135deg,#color1,#color2)',
  badge: 'NEW',
  badgeColor: '#00f5ff',
  active: true,
  options: [
    {label:'100 Koin', price:10000},
    {label:'500 Koin', price:45000}
  ]
}
```

### Menambah Voucher Baru
Edit `VOUCHERS` di `js/payment-handler.js`:
```javascript
'NEWCODE': {
  code: 'NEWCODE',
  discount: 15,
  type: 'percent',
  minPurchase: 50000,
  maxDiscount: 20000,
  desc: 'Deskripsi voucher'
}
```

---

## 📚 Documentation

- [FEATURES.md](FEATURES.md) - Complete features documentation
- [LICENSE](LICENSE) - MIT License

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

- **GitHub:** [@Kanzcr](https://github.com/Kanzcr)
- **Repository:** [NexTopup-Web](https://github.com/Kanzcr/NexTopup-Web)
- **Issues:** [Report Bug](https://github.com/Kanzcr/NexTopup-Web/issues)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Created with ❤️ by NexTopUp Team**
