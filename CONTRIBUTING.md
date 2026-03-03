# Contributing to NexTopUp

Terima kasih atas minat Anda untuk berkontribusi pada NexTopUp! 🎉

## 📋 Cara Berkontribusi

### 1. Fork & Clone
```bash
# Fork repository di GitHub
# Clone fork Anda
git clone https://github.com/YOUR_USERNAME/NexTopup-Web.git
cd NexTopup-Web
```

### 2. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur-anda
# atau
git checkout -b fix/nama-bug-yang-diperbaiki
```

### 3. Lakukan Perubahan
- Ikuti struktur folder yang ada
- Tulis kode yang bersih dan mudah dibaca
- Tambahkan komentar jika diperlukan
- Test perubahan Anda

### 4. Commit & Push
```bash
git add .
git commit -m "feat: deskripsi singkat perubahan"
git push origin feature/nama-fitur-anda
```

### 5. Buat Pull Request
- Buka repository di GitHub
- Klik "New Pull Request"
- Jelaskan perubahan yang Anda buat
- Tunggu review

## 📝 Commit Message Guidelines

Gunakan format berikut:
- `feat:` untuk fitur baru
- `fix:` untuk bug fix
- `docs:` untuk perubahan dokumentasi
- `style:` untuk perubahan formatting
- `refactor:` untuk refactoring kode
- `test:` untuk menambah test
- `chore:` untuk maintenance

Contoh:
```
feat: tambah metode pembayaran ShopeePay
fix: perbaiki validasi email di form register
docs: update panduan setup database
```

## 🏗️ Struktur Proyek

```
NexTopup-Web/
├── public/          # Frontend files
│   ├── assets/     # CSS & JS
│   └── *.html      # HTML pages
├── api/            # Backend PHP
├── database/       # Database schemas
├── docs/           # Documentation
└── archive/        # Backup files
```

## 🎨 Code Style

### HTML
- Gunakan indentasi 2 spasi
- Gunakan semantic HTML
- Tambahkan komentar untuk section besar

### CSS
- Gunakan CSS variables untuk colors
- Gunakan BEM naming convention jika memungkinkan
- Group related properties

### JavaScript
- Gunakan ES6+ syntax
- Gunakan `const` dan `let`, hindari `var`
- Tambahkan JSDoc untuk fungsi kompleks
- Handle errors dengan proper try-catch

### PHP
- Follow PSR-12 coding standard
- Gunakan prepared statements untuk database queries
- Validate dan sanitize semua input
- Return JSON responses dengan proper HTTP status codes

## 🧪 Testing

Sebelum submit PR, pastikan:
- [ ] Kode berjalan tanpa error
- [ ] Fitur baru sudah ditest
- [ ] Tidak ada breaking changes
- [ ] Dokumentasi sudah diupdate

## 🐛 Melaporkan Bug

Gunakan GitHub Issues dengan template:
```
**Deskripsi Bug:**
[Jelaskan bug yang terjadi]

**Cara Reproduce:**
1. Buka halaman...
2. Klik tombol...
3. Error muncul...

**Expected Behavior:**
[Apa yang seharusnya terjadi]

**Screenshots:**
[Jika ada]

**Environment:**
- Browser: [Chrome/Firefox/Safari]
- OS: [Windows/Mac/Linux]
- Version: [versi aplikasi]
```

## 💡 Mengusulkan Fitur

Gunakan GitHub Issues dengan label "enhancement":
```
**Fitur yang Diusulkan:**
[Jelaskan fitur yang ingin ditambahkan]

**Alasan:**
[Mengapa fitur ini penting]

**Implementasi:**
[Ide implementasi jika ada]
```

## 📞 Butuh Bantuan?

- Buka [GitHub Issues](https://github.com/Kanzcr/NexTopup-Web/issues)
- Lihat [Documentation](docs/README.md)

---

Terima kasih telah berkontribusi! 🙏
