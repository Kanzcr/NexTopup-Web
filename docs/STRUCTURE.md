# 📁 Struktur Folder NexTopUp

Dokumentasi lengkap tentang struktur folder dan file dalam project NexTopUp.

## 🏗️ Overview

```
NexTopup-Web/
├── public/              # Frontend files (HTML, CSS, JS)
├── api/                # Backend PHP files
├── database/           # Database schemas and seeds
├── docs/               # Documentation
├── archive/            # Backup/testing files
├── .git/               # Git repository
├── .gitignore          # Git ignore rules
├── CHANGELOG.md        # Version history
├── CONTRIBUTING.md     # Contribution guidelines
├── LICENSE             # MIT License
└── README.md           # Main documentation
```

---

## 📂 Folder Details

### `/public/` - Frontend Files

Berisi semua file yang diakses langsung oleh browser.

```
public/
├── index.html          # Login page (entry point)
├── store.html          # Store page (standalone)
├── setup.php           # Setup wizard untuk instalasi
├── test-api.html       # Testing API endpoints
└── assets/
    ├── css/
    │   ├── login-style.css    # Styles untuk login & dashboard (1000+ lines)
    │   └── style.css          # Styles untuk store page
    └── js/
        ├── api-config.js      # API configuration & helper functions
        ├── features.js        # Additional features (analytics, support, FAQ)
        ├── login-script.js    # Main application logic & database
        ├── payment-handler.js # Payment validation & QR generation
        └── script.js          # Logic untuk store page
```

#### File Descriptions

**HTML Files:**
- `index.html` - Halaman login/register dan dashboard utama
- `store.html` - Halaman store standalone (dapat digunakan terpisah)
- `setup.php` - Wizard untuk setup database dan konfigurasi awal
- `test-api.html` - Tool untuk testing API endpoints

**CSS Files:**
- `login-style.css` - Styling lengkap untuk login, dashboard, dan semua komponen UI
- `style.css` - Styling khusus untuk halaman store

**JavaScript Files:**
- `api-config.js` - Konfigurasi API base URL dan helper functions untuk API calls
- `login-script.js` - Logic utama aplikasi, database in-memory, routing, dan state management
- `payment-handler.js` - Handle payment methods, QR code generation, voucher validation
- `features.js` - Fitur tambahan seperti analytics, customer support widget, FAQ
- `script.js` - Logic khusus untuk halaman store

---

### `/api/` - Backend PHP

Berisi semua endpoint API untuk komunikasi dengan database.

```
api/
├── .htaccess           # CORS configuration & URL rewriting
├── config.php          # Database connection configuration
├── auth.php            # Login & Register endpoints
├── products.php        # Products CRUD endpoints
├── orders.php          # Orders management endpoints
├── users.php           # Users management endpoints
├── check-db.php        # Database connection checker
├── debug.php           # Debug helper
├── generate-hash.php   # Password hash generator
├── insert-users.php    # Bulk user insertion
├── test.php            # API testing
└── README.md           # API documentation
```

#### Endpoints

**auth.php:**
- `POST /api/auth.php?action=login` - User login
- `POST /api/auth.php?action=register` - User registration

**products.php:**
- `GET /api/products.php` - Get all products
- `GET /api/products.php?id=1` - Get product by ID
- `POST /api/products.php` - Create new product
- `PUT /api/products.php?id=1` - Update product
- `DELETE /api/products.php?id=1` - Delete product

**orders.php:**
- `GET /api/orders.php` - Get all orders
- `GET /api/orders.php?user_id=1` - Get orders by user
- `POST /api/orders.php` - Create new order
- `PUT /api/orders.php?id=1` - Update order status

**users.php:**
- `GET /api/users.php` - Get all users
- `GET /api/users.php?id=1` - Get user by ID
- `PUT /api/users.php?id=1` - Update user
- `DELETE /api/users.php?id=1` - Delete user

---

### `/database/` - Database Files

Berisi schema dan data untuk database.

```
database/
├── mysql-schema.sql    # MySQL database schema
├── mongodb-schema.js   # MongoDB schema (alternative)
└── seed-data.sql       # Sample data untuk testing
```

#### Files

- `mysql-schema.sql` - Struktur tabel untuk MySQL (users, products, orders, transactions)
- `mongodb-schema.js` - Schema untuk MongoDB (jika ingin menggunakan NoSQL)
- `seed-data.sql` - Data contoh (4 users, 10 products, 6 orders)

---

### `/docs/` - Documentation

Berisi semua dokumentasi project.

```
docs/
├── README.md           # Dokumentasi lengkap
├── FEATURES.md         # Daftar fitur lengkap
├── SETUP.md            # Panduan setup & instalasi
├── STRUCTURE.md        # Dokumentasi struktur folder (file ini)
└── MOVE-TO-HTDOCS.txt  # Instruksi deployment ke XAMPP
```

---

### `/archive/` - Backup Files

Berisi file backup dan testing.

```
archive/
├── login.html          # Versi lama login page
├── login-simple.html   # Versi sederhana login
├── Topup.html          # Prototype topup page
├── test-button.html    # Testing button components
└── test-login.html     # Testing login functionality
```

---

## 🔧 Configuration Files

### `.gitignore`
Mengatur file/folder yang diabaikan oleh Git:
- `node_modules/`, `vendor/`
- `.env`, `.env.local`
- IDE files (`.vscode/`, `.idea/`)
- OS files (`.DS_Store`, `Thumbs.db`)
- Logs dan temporary files

### `CHANGELOG.md`
Mencatat semua perubahan versi project.

### `CONTRIBUTING.md`
Panduan untuk kontributor:
- Cara fork & clone
- Commit message guidelines
- Code style guidelines
- Testing checklist

### `LICENSE`
MIT License - open source license.

### `README.md`
Dokumentasi utama project:
- Quick start guide
- Demo accounts
- Tech stack
- Links ke dokumentasi lain

---

## 📝 File Naming Conventions

### HTML Files
- Gunakan lowercase dengan hyphen: `test-api.html`
- Descriptive names: `index.html`, `store.html`

### CSS Files
- Gunakan lowercase dengan hyphen: `login-style.css`
- Suffix dengan `-style`: `login-style.css`

### JavaScript Files
- Gunakan lowercase dengan hyphen: `api-config.js`
- Descriptive names: `payment-handler.js`, `login-script.js`

### PHP Files
- Gunakan lowercase dengan hyphen: `check-db.php`
- Endpoint files: `auth.php`, `products.php`
- Config files: `config.php`

---

## 🚀 Deployment Structure

Untuk production, struktur yang direkomendasikan:

```
/var/www/html/nextopup/
├── public/              # Document root (point Apache/Nginx here)
│   ├── index.html
│   └── assets/
├── api/                # API endpoints
├── database/           # Database files (tidak perlu di production)
├── .env               # Environment variables
└── logs/              # Application logs
```

**Apache Configuration:**
```apache
DocumentRoot "/var/www/html/nextopup/public"
<Directory "/var/www/html/nextopup/public">
    AllowOverride All
    Require all granted
</Directory>
```

---

## 📊 File Size Reference

- `login-style.css` - ~1000+ lines (main styling)
- `login-script.js` - ~2000+ lines (main logic)
- `payment-handler.js` - ~500+ lines
- `features.js` - ~400+ lines

---

## 🔗 Related Documentation

- [README.md](../README.md) - Main documentation
- [FEATURES.md](FEATURES.md) - Complete features list
- [SETUP.md](SETUP.md) - Setup guide
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines

---

**Last Updated:** March 3, 2024
