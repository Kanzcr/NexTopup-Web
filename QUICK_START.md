# ⚡ Quick Start Guide

Panduan cepat untuk memulai NexTopUp dalam 5 menit!

## 🚀 Langkah Cepat

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Kanzcr/NexTopup-Web.git
cd NexTopup-Web
```

### 2️⃣ Setup Database (XAMPP)
```bash
# Start XAMPP Apache & MySQL
# Buka: http://localhost/phpmyadmin

# Buat database 'nextopup'
# Import: database/mysql-schema.sql
# Import: database/seed-data.sql
```

### 3️⃣ Konfigurasi
```bash
# Copy environment file
cp .env.example .env

# Edit api/config.php jika perlu
# Default: localhost, root, no password
```

### 4️⃣ Jalankan
```bash
# Buka di browser:
http://localhost/NexTopup-Web/public/
```

### 5️⃣ Login
```
Admin:
Email: admin@nextopup.id
Password: admin123

Customer:
Email: budi@gmail.com
Password: user123
```

---

## 🎯 Struktur Singkat

```
NexTopup-Web/
├── public/          # Buka ini di browser
│   ├── index.html  # Login page
│   └── assets/     # CSS & JS
├── api/            # Backend PHP
└── database/       # SQL files
```

---

## 🔧 Troubleshooting Cepat

### Database Error?
```bash
# Cek MySQL running
# Update api/config.php
# Re-import database
```

### 404 Error?
```bash
# Pastikan akses: /public/
# Cek Apache running
```

### API Error?
```bash
# Cek api/.htaccess ada
# Cek CORS settings
```

---

## 📚 Dokumentasi Lengkap

- [Setup Detail](docs/SETUP.md)
- [Daftar Fitur](docs/FEATURES.md)
- [Deployment](docs/DEPLOYMENT.md)

---

## 💡 Tips

1. Gunakan demo button untuk login cepat
2. Cek console browser (F12) untuk debug
3. Test API di: `public/test-api.html`
4. Lihat struktur: [STRUCTURE.md](docs/STRUCTURE.md)

---

**Selamat mencoba! 🎉**
