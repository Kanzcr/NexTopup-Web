# 🚀 Cara Pakai NexTopUp

## 📋 Persyaratan
- XAMPP (Apache + MySQL sudah running)
- Browser modern (Chrome, Firefox, Edge)

## 🔧 Langkah Setup

### 1. Pastikan XAMPP Running
- Buka XAMPP Control Panel
- Start **Apache** ✅
- Start **MySQL** ✅

### 2. Setup Database
Buka browser dan akses:
```
http://localhost/NexTopup-Web/public/setup.php
```

Halaman setup akan otomatis:
- ✅ Membuat database `nextopup`
- ✅ Import schema tabel
- ✅ Import data awal
- ✅ Generate password hash

**Tunggu sampai muncul "Database setup selesai!"**

### 3. Buka Aplikasi
Setelah setup selesai, akses:
```
http://localhost/NexTopup-Web/public/
```

atau

```
http://localhost/NexTopup-Web/public/index.html
```

## 👤 Akun Demo

### Admin
- **Email**: `admin@nextopup.id`
- **Password**: `admin123`
- **Akses**: Dashboard, Kelola Pesanan, Produk, User

### Customer
- **Email**: `budi@gmail.com`
- **Password**: `user123`
- **Akses**: Toko, Riwayat Transaksi, Profil

## 📁 Struktur Folder

```
NexTopup-Web/
├── public/              ← File web ada di sini
│   ├── index.html       ← Halaman utama
│   ├── setup.php        ← Setup database
│   ├── assets/
│   │   ├── css/         ← File CSS
│   │   └── js/          ← File JavaScript
├── api/                 ← Backend API PHP
│   ├── auth.php         ← Login/Register
│   ├── products.php     ← Produk
│   ├── orders.php       ← Pesanan
│   └── users.php        ← User management
├── database/            ← SQL schema & seed data
└── docs/                ← Dokumentasi
```

## ✨ Fitur yang Sudah Ada

### 🔐 Keamanan
- ✅ Password hashing dengan bcrypt
- ✅ Validasi input Game ID/Email
- ✅ Real-time validation feedback
- ✅ Password toggle (show/hide)
- ✅ SQL injection protection (prepared statements)

### 🎮 Customer
- ✅ Browse produk game & subscription
- ✅ Top up dengan berbagai metode pembayaran
- ✅ Riwayat transaksi
- ✅ Manajemen saldo
- ✅ Notifikasi real-time

### 👑 Admin
- ✅ Dashboard dengan statistik
- ✅ Kelola pesanan (approve/reject)
- ✅ Manajemen produk (CRUD)
- ✅ Manajemen user
- ✅ Chart revenue

## 🐛 Troubleshooting

### Login Gagal
1. Pastikan sudah jalankan `setup.php` terlebih dahulu
2. Cek console browser (F12) untuk error
3. Pastikan MySQL running di XAMPP
4. Cek database `nextopup` sudah ada di phpMyAdmin

### API Error
1. Buka `http://localhost/NexTopup-Web/api/check-db.php`
2. Pastikan koneksi database berhasil
3. Cek file `api/config.php` untuk konfigurasi database

### File Not Found
1. Pastikan file ada di folder `C:\xampp\htdocs\NexTopup-Web\`
2. Gunakan URL lengkap: `http://localhost/NexTopup-Web/public/`
3. Jangan lupa `/public/` di URL

## 📞 Support
Jika ada masalah, cek:
1. Console browser (F12 → Console)
2. XAMPP Error Log
3. File `api/debug.php` untuk test koneksi

## 🎯 URL Penting

| Halaman | URL |
|---------|-----|
| Setup Database | `http://localhost/NexTopup-Web/public/setup.php` |
| Aplikasi | `http://localhost/NexTopup-Web/public/` |
| Test API | `http://localhost/NexTopup-Web/api/check-db.php` |
| phpMyAdmin | `http://localhost/phpmyadmin` |

---

**Selamat mencoba! 🎉**
