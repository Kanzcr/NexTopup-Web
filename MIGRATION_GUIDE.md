# 🔄 Migration Guide

Panduan untuk migrasi dari struktur lama ke struktur baru (v2.0.0).

## 📋 Overview

Jika Anda sudah menggunakan NexTopUp versi lama, ikuti panduan ini untuk migrasi ke struktur baru.

## ⚠️ Breaking Changes

### 1. URL Access Changes

**Sebelum (v1.x):**
```
http://localhost/NexTopup-Web/
http://localhost/NexTopup-Web/index.html
http://localhost/NexTopup-Web/store.html
```

**Sesudah (v2.0):**
```
http://localhost/NexTopup-Web/public/
http://localhost/NexTopup-Web/public/index.html
http://localhost/NexTopup-Web/public/store.html
```

### 2. File Structure Changes

**Sebelum:**
```
NexTopup-Web/
├── index.html
├── store.html
├── css/
├── js/
└── api/
```

**Sesudah:**
```
NexTopup-Web/
├── public/
│   ├── index.html
│   ├── store.html
│   └── assets/
│       ├── css/
│       └── js/
└── api/
```

### 3. Import Path Changes

**CSS:**
```diff
- href="css/login-style.css"
+ href="assets/css/login-style.css"
```

**JavaScript:**
```diff
- src="js/login-script.js"
+ src="assets/js/login-script.js"
```

---

## 🚀 Migration Steps

### Option 1: Fresh Install (Recommended)

Untuk instalasi baru atau jika tidak ada data penting:

```bash
# 1. Backup data lama (jika ada)
cp -r NexTopup-Web NexTopup-Web-backup

# 2. Clone versi baru
git clone https://github.com/Kanzcr/NexTopup-Web.git NexTopup-Web-v2
cd NexTopup-Web-v2

# 3. Setup database
# Import database/mysql-schema.sql
# Import database/seed-data.sql

# 4. Konfigurasi
cp .env.example .env
# Edit .env sesuai kebutuhan

# 5. Update api/config.php
# Sesuaikan database credentials

# 6. Test
# Buka: http://localhost/NexTopup-Web-v2/public/
```

### Option 2: In-Place Migration

Untuk update repository yang sudah ada:

```bash
# 1. Backup dulu!
cp -r NexTopup-Web NexTopup-Web-backup

# 2. Pull latest changes
cd NexTopup-Web
git pull origin main

# 3. Struktur sudah otomatis berubah
# Tidak perlu manual move files

# 4. Update bookmarks/shortcuts
# Ganti URL dari / ke /public/

# 5. Test
# Buka: http://localhost/NexTopup-Web/public/
```

### Option 3: Manual Migration

Jika Anda punya custom changes:

```bash
# 1. Backup
cp -r NexTopup-Web NexTopup-Web-backup

# 2. Buat struktur baru
cd NexTopup-Web
mkdir -p public/assets/{css,js}
mkdir -p docs

# 3. Move files
mv index.html public/
mv store.html public/
mv setup.php public/
mv test-api.html public/
mv css/* public/assets/css/
mv js/* public/assets/js/
mv FEATURES.md docs/
mv SETUP.md docs/

# 4. Update paths di HTML files
# Edit public/index.html
# Edit public/store.html

# 5. Update API config
# Edit public/assets/js/api-config.js

# 6. Test
```

---

## 🔧 Configuration Updates

### 1. Apache/Nginx Configuration

**Apache (.htaccess atau VirtualHost):**

**Sebelum:**
```apache
DocumentRoot "/var/www/html/NexTopup-Web"
<Directory "/var/www/html/NexTopup-Web">
```

**Sesudah:**
```apache
DocumentRoot "/var/www/html/NexTopup-Web/public"
<Directory "/var/www/html/NexTopup-Web/public">
```

**Nginx:**

**Sebelum:**
```nginx
root /var/www/html/NexTopup-Web;
```

**Sesudah:**
```nginx
root /var/www/html/NexTopup-Web/public;
```

### 2. Environment Variables

Buat file `.env` dari template:

```bash
cp .env.example .env
```

Edit sesuai kebutuhan:
```env
DB_HOST=localhost
DB_USER=your_user
DB_PASS=your_password
DB_NAME=nextopup
APP_URL=http://yourdomain.com
```

### 3. API Configuration

File `public/assets/js/api-config.js` sekarang menggunakan dynamic URL:

```javascript
// Otomatis detect base URL
const API_BASE_URL = window.location.origin + '/api';
```

Jika perlu custom path:
```javascript
const API_BASE_URL = 'http://yourdomain.com/api';
```

---

## 🗄️ Database Migration

### No Changes Required

Database schema tidak berubah, jadi:
- ✅ Tidak perlu migrasi data
- ✅ Tidak perlu update schema
- ✅ Data lama tetap compatible

Jika fresh install:
```bash
mysql -u root -p nextopup < database/mysql-schema.sql
mysql -u root -p nextopup < database/seed-data.sql
```

---

## 📝 Custom Code Migration

### If You Modified HTML Files

Update import paths:

```html
<!-- Old -->
<link rel="stylesheet" href="css/login-style.css">
<script src="js/login-script.js"></script>

<!-- New -->
<link rel="stylesheet" href="assets/css/login-style.css">
<script src="assets/js/login-script.js"></script>
```

### If You Modified JavaScript

No changes needed, kecuali jika ada hardcoded paths.

### If You Modified CSS

No changes needed, file tetap sama.

### If You Modified PHP API

No changes needed, API folder tidak berubah.

---

## 🧪 Testing After Migration

### 1. Basic Functionality
```bash
# Test login page
✓ Buka public/index.html
✓ Login dengan demo account
✓ Check console untuk errors

# Test store page
✓ Buka public/store.html
✓ Browse products
✓ Check console untuk errors

# Test API
✓ Buka public/test-api.html
✓ Test endpoints
✓ Verify responses
```

### 2. File Access
```bash
# Check CSS loads
✓ No 404 errors untuk CSS files
✓ Styling tampil dengan benar

# Check JS loads
✓ No 404 errors untuk JS files
✓ Functionality works properly

# Check API
✓ API endpoints accessible
✓ Database connection works
```

### 3. Features
```bash
✓ Login/Register works
✓ Dashboard loads
✓ Products display
✓ Payment methods work
✓ Vouchers validate
✓ Orders create successfully
```

---

## 🐛 Troubleshooting

### Issue: 404 Not Found

**Problem:** Page tidak ditemukan

**Solution:**
```bash
# Pastikan akses via /public/
http://localhost/NexTopup-Web/public/

# Update bookmarks
# Update web server config
```

### Issue: CSS/JS Not Loading

**Problem:** Styling atau functionality tidak bekerja

**Solution:**
```bash
# Check paths di HTML files
# Pastikan menggunakan assets/css/ dan assets/js/

# Check console browser (F12)
# Lihat error 404

# Verify file locations
ls public/assets/css/
ls public/assets/js/
```

### Issue: API Errors

**Problem:** API tidak bisa diakses

**Solution:**
```bash
# Check API_BASE_URL di api-config.js
# Pastikan api/ folder accessible
# Check .htaccess di api/
# Verify database connection
```

### Issue: Database Connection Failed

**Problem:** Tidak bisa connect ke database

**Solution:**
```bash
# Check api/config.php
# Verify MySQL running
# Test connection:
mysql -u root -p nextopup

# Re-import schema jika perlu
```

---

## 📊 Migration Checklist

### Pre-Migration
- [ ] Backup semua files
- [ ] Backup database
- [ ] Document custom changes
- [ ] Note current configuration

### During Migration
- [ ] Pull/clone new version
- [ ] Move/update files
- [ ] Update configurations
- [ ] Update web server config

### Post-Migration
- [ ] Test login functionality
- [ ] Test all pages
- [ ] Verify API endpoints
- [ ] Check database connection
- [ ] Test payment flow
- [ ] Verify all features work

### Cleanup
- [ ] Remove old backup (after verification)
- [ ] Update documentation
- [ ] Update team members
- [ ] Update deployment scripts

---

## 🆘 Need Help?

### Resources
- [QUICK_START.md](QUICK_START.md) - Quick start guide
- [docs/SETUP.md](docs/SETUP.md) - Detailed setup
- [docs/STRUCTURE.md](docs/STRUCTURE.md) - Folder structure
- [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) - Verification steps

### Support
- GitHub Issues: [Report Problem](https://github.com/Kanzcr/NexTopup-Web/issues)
- Documentation: [docs/README.md](docs/README.md)

---

## 📈 Benefits After Migration

### Better Organization
- ✅ Cleaner folder structure
- ✅ Separated frontend/backend
- ✅ Better security (public folder)

### Improved Documentation
- ✅ Comprehensive guides
- ✅ Multiple documentation levels
- ✅ Deployment instructions

### Easier Deployment
- ✅ Standard web server setup
- ✅ Environment configuration
- ✅ Production-ready structure

### Better Development
- ✅ Clear contribution guidelines
- ✅ Version tracking (CHANGELOG)
- ✅ Better .gitignore

---

**Migration completed? Welcome to v2.0! 🎉**

**Date:** March 3, 2024  
**Version:** 2.0.0
