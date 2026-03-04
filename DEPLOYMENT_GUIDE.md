# 🚀 Panduan Deploy NexTopUp

## ⚠️ Penting: Netlify TIDAK Support PHP!

Aplikasi ini menggunakan PHP backend dan MySQL database, yang **TIDAK** didukung oleh Netlify.

Netlify hanya support:
- ✅ Static HTML/CSS/JS
- ✅ Serverless Functions (Node.js, Go)
- ❌ PHP
- ❌ MySQL

## 🎯 Pilihan Hosting yang Tepat

### 1. InfinityFree (GRATIS) ⭐ Recommended
**Link**: https://infinityfree.net

**Fitur:**
- ✅ PHP 7.4+
- ✅ MySQL Database
- ✅ Unlimited Bandwidth
- ✅ Free Subdomain
- ✅ cPanel

**Cara Deploy:**
1. Daftar di InfinityFree
2. Buat akun hosting baru
3. Upload semua file via File Manager atau FTP
4. Import database via phpMyAdmin
5. Update `api/config.php` dengan kredensial database baru
6. Akses via subdomain yang diberikan

### 2. 000webhost (GRATIS)
**Link**: https://www.000webhost.com

**Fitur:**
- ✅ PHP 7.4+
- ✅ MySQL Database
- ✅ 300 MB Storage
- ✅ Free Subdomain

### 3. Hostinger (BERBAYAR - Rp 20.000/bulan)
**Link**: https://www.hostinger.co.id

**Fitur:**
- ✅ PHP 8.x
- ✅ MySQL Database
- ✅ Free SSL
- ✅ Custom Domain
- ✅ 24/7 Support

### 4. Heroku (GRATIS dengan Batasan)
**Link**: https://www.heroku.com

**Fitur:**
- ✅ Support PHP
- ✅ ClearDB MySQL (addon)
- ⚠️ Sleep setelah 30 menit tidak aktif
- ⚠️ Perlu konfigurasi tambahan

## 📦 Langkah Deploy ke InfinityFree

### Step 1: Persiapan File
```bash
# Zip semua file kecuali .git
zip -r nextopup.zip . -x "*.git*" -x "node_modules/*"
```

Atau manual:
1. Copy semua file kecuali folder `.git`
2. Zip menjadi `nextopup.zip`

### Step 2: Upload ke Hosting
1. Login ke cPanel InfinityFree
2. Buka **File Manager**
3. Masuk ke folder `htdocs` atau `public_html`
4. Upload `nextopup.zip`
5. Extract file zip
6. Pindahkan isi folder `public/` ke root `htdocs/`

Struktur akhir di hosting:
```
htdocs/
├── index.html
├── setup.php
├── assets/
│   ├── css/
│   └── js/
└── api/
    ├── auth.php
    ├── config.php
    └── ...
```

### Step 3: Setup Database
1. Buka **MySQL Databases** di cPanel
2. Buat database baru (misal: `epiz_xxxxx_nextopup`)
3. Buat user database
4. Catat:
   - Database name
   - Database user
   - Database password
   - Database host

### Step 4: Update Konfigurasi
Edit file `api/config.php`:
```php
define('DB_HOST', 'sql123.infinityfree.com'); // Ganti dengan host dari cPanel
define('DB_USER', 'epiz_xxxxx_user');         // Ganti dengan user database
define('DB_PASS', 'password_kamu');           // Ganti dengan password database
define('DB_NAME', 'epiz_xxxxx_nextopup');     // Ganti dengan nama database
```

### Step 5: Import Database
1. Buka **phpMyAdmin** di cPanel
2. Pilih database yang sudah dibuat
3. Klik tab **Import**
4. Upload file `database/mysql-schema.sql`
5. Klik **Go**
6. Ulangi untuk `database/seed-data.sql`

### Step 6: Update API URL
Edit file `assets/js/api-config.js`:
```javascript
const API_BASE_URL = 'https://your-subdomain.infinityfreeapp.com/api';
```

### Step 7: Test
1. Akses `https://your-subdomain.infinityfreeapp.com/setup.php`
2. Pastikan database terkoneksi
3. Akses `https://your-subdomain.infinityfreeapp.com/`
4. Test login dengan akun demo

## 🔒 Keamanan untuk Production

Sebelum deploy ke production:

1. **Ganti Password Database**
   ```php
   define('DB_PASS', 'password_yang_kuat_123!@#');
   ```

2. **Hapus File Setup**
   ```bash
   rm setup.php
   ```

3. **Disable Error Display**
   ```php
   ini_set('display_errors', 0);
   error_reporting(0);
   ```

4. **Enable HTTPS**
   - Aktifkan SSL di cPanel
   - Force HTTPS di `.htaccess`

5. **Ganti Password Admin**
   - Login sebagai admin
   - Ganti password default

## 🐛 Troubleshooting

### Database Connection Failed
- Cek kredensial di `api/config.php`
- Pastikan database host benar
- Cek apakah database sudah dibuat

### 404 Not Found
- Pastikan file ada di folder `htdocs/`
- Cek `.htaccess` sudah di-upload
- Pastikan mod_rewrite aktif

### CORS Error
- Tambahkan domain ke CORS di `api/config.php`
- Cek `.htaccess` di folder `api/`

## 📞 Support

Jika ada masalah:
1. Cek error log di cPanel
2. Test API endpoint langsung: `https://domain.com/api/check-db.php`
3. Cek console browser (F12)

---

**Note**: Untuk development lokal, tetap gunakan XAMPP seperti di `CARA_PAKAI.md`
