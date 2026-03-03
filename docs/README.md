# NexTopUp - Platform Top Up Games & App Premium

Platform top up games dan aplikasi premium dengan sistem login, payment gateway, dan dashboard admin/customer yang lengkap.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Fitur Utama

### 💎 Core Features
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

### 🎨 UI/UX
- Modern glassmorphism design
- Animated gradient background
- Smooth page transitions
- Loading states & skeleton screens
- Interactive hover effects
- Ripple button animations

### 📱 Fully Responsive
- Mobile-first approach
- Tablet optimization
- Desktop layout
- Touch-friendly interface

---

## 📁 Struktur Folder

```
NexTopup-Web/
├── public/                 # Frontend files
│   ├── index.html         # Login page (entry point)
│   ├── store.html         # Store page
│   ├── setup.php          # Setup wizard
│   ├── test-api.html      # API testing
│   └── assets/
│       ├── css/           # Stylesheets
│       │   ├── login-style.css
│       │   └── style.css
│       └── js/            # JavaScript files
│           ├── api-config.js
│           ├── features.js
│           ├── login-script.js
│           ├── payment-handler.js
│           └── script.js
├── api/                   # Backend PHP
│   ├── config.php        # Database configuration
│   ├── auth.php          # Authentication endpoints
│   ├── products.php      # Products API
│   ├── orders.php        # Orders API
│   ├── users.php         # Users API
│   └── README.md         # API documentation
├── database/             # Database files
│   ├── mysql-schema.sql  # Database schema
│   ├── mongodb-schema.js # MongoDB schema (alternative)
│   └── seed-data.sql     # Sample data
├── docs/                 # Documentation
│   ├── README.md         # Dokumentasi lengkap
│   ├── FEATURES.md       # Daftar fitur
│   └── SETUP.md          # Panduan setup
├── archive/              # Backup/testing files
├── .gitignore
└── LICENSE
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

2. Setup database (lihat [SETUP.md](SETUP.md))
3. Buka `public/index.html` di browser
4. Login menggunakan demo account

### Login Flow
1. Buka `public/index.html`
2. Pilih tab "Masuk" atau "Daftar"
3. Login dengan demo account atau klik demo button
4. Auto-redirect ke dashboard sesuai role

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

- **WELCOME10** - Diskon 10% (min. Rp 50.000)
- **TOPUP50** - Potongan Rp 5.000 (min. Rp 100.000)
- **GAME20** - Diskon 20% (min. Rp 75.000)

---

## 🎨 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** PHP 7.4+
- **Database:** MySQL 5.7+
- **Fonts:** Google Fonts (Orbitron, Rajdhani)
- **Libraries:** QRCode.js v1.5.3
- **Storage:** LocalStorage API
- **Design:** Glassmorphism, CSS Animations, Gradients

---

## 📚 Documentation

- [FEATURES.md](FEATURES.md) - Complete features documentation
- [SETUP.md](SETUP.md) - Setup guide
- [API Documentation](api/README.md) - API endpoints

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

## 📞 Contact & Support

- **GitHub:** [@Kanzcr](https://github.com/Kanzcr)
- **Repository:** [NexTopup-Web](https://github.com/Kanzcr/NexTopup-Web)

---

**Created with ❤️ by NexTopUp Team**
