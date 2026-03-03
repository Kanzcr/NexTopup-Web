# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-03-03

### 🎉 Restructured
- Reorganized project structure for better maintainability
- Moved all frontend files to `public/` directory
- Moved CSS and JS files to `public/assets/` directory
- Moved documentation to `docs/` directory
- Updated all file references and import paths

### 📁 New Structure
```
NexTopup-Web/
├── public/          # Frontend files (HTML, CSS, JS)
├── api/            # Backend PHP files
├── database/       # Database schemas and seeds
├── docs/           # Documentation
└── archive/        # Backup/testing files
```

### ✨ Added
- Created comprehensive README.md at root
- Added CONTRIBUTING.md for contribution guidelines
- Added CHANGELOG.md for version tracking
- Improved .gitignore with more patterns
- Updated API configuration to use dynamic base URL

### 🔧 Changed
- Updated `index.html` to reference `assets/css/` and `assets/js/`
- Updated `store.html` to reference `assets/css/` and `assets/js/`
- Updated `api-config.js` to use `window.location.origin` for API base URL
- Moved FEATURES.md to `docs/FEATURES.md`
- Moved SETUP.md to `docs/SETUP.md`
- Moved MOVE-TO-HTDOCS.txt to `docs/`

### 📚 Documentation
- Enhanced README.md with clearer structure
- Updated all documentation to reflect new folder structure
- Added detailed contribution guidelines

---

## [1.0.0] - Initial Release

### Features
- ✅ Sistem Login & Register
- ✅ Dashboard Admin & Customer
- ✅ 8 Metode Pembayaran
- ✅ Real QR Code Generation
- ✅ Payment Validation System
- ✅ Voucher & Promo Code
- ✅ Transaction History
- ✅ Digital Receipt
- ✅ Customer Support Widget
- ✅ FAQ Section
- ✅ Responsive Mobile Design
