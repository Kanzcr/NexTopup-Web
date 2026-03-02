# 🚀 Setup Guide - NexTopUp

## Prerequisites
- XAMPP (Apache + MySQL)
- Browser modern (Chrome, Firefox, Edge)

## Langkah Setup

### 1. Database Setup
1. Buka XAMPP Control Panel
2. Start Apache dan MySQL
3. Buka phpMyAdmin: `http://localhost/phpmyadmin`
4. Buat database baru bernama `nextopup`
5. Import file `database/mysql-schema.sql`
6. Import file `database/seed-data.sql` (optional, untuk data contoh)

### 2. Generate Password Hash
1. Buka browser: `http://localhost/NexTopup-Web/api/generate-hash.php`
2. Copy password hash yang di-generate
3. Update file `database/seed-data.sql` dengan hash baru (jika belum)
4. Re-import `seed-data.sql` ke database

### 3. Konfigurasi Backend
1. Buka file `api/config.php`
2. Sesuaikan konfigurasi database jika perlu:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'root');
   define('DB_PASS', '');
   define('DB_NAME', 'nextopup');
   ```

### 4. Konfigurasi Frontend
1. Buka file `js/api-config.js`
2. Sesuaikan `API_BASE_URL` dengan path project Anda:
   ```javascript
   const API_BASE_URL = 'http://localhost/NexTopup-Web/api';
   ```

### 5. Testing
1. Buka browser: `http://localhost/NexTopup-Web/`
2. Login dengan akun default:
   - **Admin**: 
     - Email: `admin@nextopup.id`
     - Password: `admin123`
   - **Customer**: 
     - Email: `budi@gmail.com`
     - Password: `user123`

## Struktur Project

```
NexTopup-Web/
├── api/                    # Backend PHP
│   ├── config.php         # Database config
│   ├── auth.php           # Login & Register
│   ├── products.php       # Products API
│   ├── orders.php         # Orders API
│   ├── users.php          # Users API
│   └── .htaccess          # CORS & routing
├── database/              # Database files
│   ├── mysql-schema.sql   # Database schema
│   └── seed-data.sql      # Sample data
├── js/                    # Frontend JavaScript
│   ├── api-config.js      # API configuration
│   ├── login-script.js    # Main app logic
│   ├── features.js        # Additional features
│   └── payment-handler.js # Payment handling
├── css/                   # Stylesheets
└── index.html            # Main page
```

## Troubleshooting

### Database Connection Error
- Pastikan MySQL di XAMPP sudah running
- Cek konfigurasi di `api/config.php`
- Pastikan database `nextopup` sudah dibuat

### Login Gagal
- Pastikan `seed-data.sql` sudah di-import
- Generate password hash baru via `api/generate-hash.php`
- Update password di database

### API Error / CORS
- Pastikan Apache di XAMPP sudah running
- Cek `API_BASE_URL` di `js/api-config.js`
- Pastikan file `.htaccess` ada di folder `api/`

### 404 Not Found
- Pastikan path project sesuai dengan `API_BASE_URL`
- Cek mod_rewrite Apache sudah enabled

## Fitur Utama

### Customer
- ✅ Login & Register
- ✅ Browse produk top up
- ✅ Checkout & payment
- ✅ Riwayat transaksi
- ✅ Manajemen saldo
- ✅ Notifikasi

### Admin
- ✅ Dashboard analytics
- ✅ Kelola pesanan
- ✅ Kelola produk
- ✅ Manajemen user
- ✅ Laporan transaksi

## Support
Jika ada masalah, cek:
1. Console browser (F12) untuk error JavaScript
2. Network tab untuk error API
3. PHP error log di XAMPP

Happy coding! 🎮
