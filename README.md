# NexTopUp - Platform Top Up Games & App Premium

Platform top up games dan aplikasi premium dengan sistem login dan dashboard admin/customer.

## 🚀 Fitur

- ✅ Sistem Login (Admin & Customer)
- ✅ Dashboard Admin (Kelola Pesanan, Produk, User)
- ✅ Store Customer (Top Up Games & Apps)
- ✅ Riwayat Transaksi
- ✅ Manajemen Saldo
- ✅ Notifikasi Real-time
- ✅ Responsive Design
- ✅ Smooth Animations

## 📁 Struktur Folder

```
NexTopup-Web/
├── index.html          # Login page (entry point)
├── store.html          # Store page (standalone)
├── README.md
├── css/
│   ├── login-style.css # Styles untuk login & dashboard
│   └── style.css       # Styles untuk store page
├── js/
│   ├── login-script.js # Logic untuk login & dashboard
│   └── script.js       # Logic untuk store page
└── archive/            # File backup/testing
    ├── login.html
    ├── Topup.html
    ├── test-button.html
    ├── test-login.html
    └── login-simple.html
```

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

1. Buka `index.html` di browser
2. Login menggunakan salah satu akun demo di atas
3. Atau klik tombol demo untuk auto-fill credentials

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
4. Top up menggunakan saldo
5. Lihat riwayat transaksi di menu History

## 💾 Database

Database disimpan di memory (JavaScript object) di file `js/login-script.js`:
- 4 User (1 Admin, 3 Customer)
- 10 Produk (Games & Apps)
- 6 Sample Orders
- Notifikasi per user

## 🎨 Tech Stack

- HTML5
- CSS3 (Custom animations, gradients, glassmorphism)
- Vanilla JavaScript (No framework)
- Google Fonts (Orbitron, Rajdhani)

## 📝 Notes

- Aplikasi ini menggunakan in-memory database (data hilang saat refresh)
- Untuk production, integrasikan dengan backend API
- File di folder `archive/` adalah backup dan testing files

## 🔧 Development

File utama yang perlu dimodifikasi:
- `index.html` - Struktur login page
- `css/login-style.css` - Styling login & dashboard
- `js/login-script.js` - Logic & database

---

**Created with ❤️ by NexTopUp Team**
