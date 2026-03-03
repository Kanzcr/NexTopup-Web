# 🚀 Deployment Guide

Panduan lengkap untuk deploy NexTopUp ke production server.

## 📋 Prerequisites

- Server dengan PHP 7.4+ dan MySQL 5.7+
- Apache atau Nginx web server
- SSL Certificate (recommended untuk production)
- Domain name (optional)

---

## 🖥️ Deployment ke Shared Hosting

### 1. Persiapan Files

```bash
# Compress project
zip -r nextopup.zip . -x "*.git*" "node_modules/*" ".vscode/*"
```

### 2. Upload ke Server

1. Login ke cPanel atau File Manager
2. Upload `nextopup.zip` ke folder `public_html/`
3. Extract file

### 3. Konfigurasi Database

1. Buat database baru di cPanel MySQL
2. Import `database/mysql-schema.sql`
3. Import `database/seed-data.sql` (optional)
4. Update `api/config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');
define('DB_NAME', 'your_db_name');
```

### 4. Update API Configuration

Edit `public/assets/js/api-config.js`:

```javascript
const API_BASE_URL = 'https://yourdomain.com/api';
```

### 5. Set Permissions

```bash
chmod 755 public/
chmod 644 public/*.html
chmod 644 public/assets/css/*
chmod 644 public/assets/js/*
chmod 755 api/
chmod 644 api/*.php
```

### 6. Test

Buka `https://yourdomain.com/public/` di browser.

---

## 🐳 Deployment dengan Docker

### 1. Buat Dockerfile

```dockerfile
FROM php:7.4-apache

# Install MySQL extension
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache modules
RUN a2enmod rewrite

# Copy project files
COPY . /var/www/html/

# Set document root
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Set permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

EXPOSE 80
```

### 2. Buat docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    volumes:
      - .:/var/www/html
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_USER=nextopup
      - DB_PASS=secret
      - DB_NAME=nextopup

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: nextopup
      MYSQL_USER: nextopup
      MYSQL_PASSWORD: secret
    volumes:
      - db_data:/var/lib/mysql
      - ./database/mysql-schema.sql:/docker-entrypoint-initdb.d/1-schema.sql
      - ./database/seed-data.sql:/docker-entrypoint-initdb.d/2-seed.sql

volumes:
  db_data:
```

### 3. Deploy

```bash
# Build and start
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop
docker-compose down
```

Akses: `http://localhost:8080/`

---

## ☁️ Deployment ke VPS (Ubuntu)

### 1. Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Apache, PHP, MySQL
sudo apt install apache2 php php-mysql mysql-server -y

# Install PHP extensions
sudo apt install php-curl php-gd php-mbstring php-xml php-zip -y

# Enable Apache modules
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 2. Setup MySQL

```bash
# Secure MySQL
sudo mysql_secure_installation

# Create database
sudo mysql -u root -p
```

```sql
CREATE DATABASE nextopup;
CREATE USER 'nextopup'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON nextopup.* TO 'nextopup'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

```bash
# Import schema
mysql -u nextopup -p nextopup < database/mysql-schema.sql
mysql -u nextopup -p nextopup < database/seed-data.sql
```

### 3. Deploy Application

```bash
# Clone repository
cd /var/www/html
sudo git clone https://github.com/Kanzcr/NexTopup-Web.git nextopup
cd nextopup

# Set permissions
sudo chown -R www-data:www-data /var/www/html/nextopup
sudo chmod -R 755 /var/www/html/nextopup
```

### 4. Configure Apache

```bash
sudo nano /etc/apache2/sites-available/nextopup.conf
```

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    DocumentRoot /var/www/html/nextopup/public
    
    <Directory /var/www/html/nextopup/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/nextopup-error.log
    CustomLog ${APACHE_LOG_DIR}/nextopup-access.log combined
</VirtualHost>
```

```bash
# Enable site
sudo a2ensite nextopup.conf
sudo systemctl reload apache2
```

### 5. Setup SSL (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-apache -y

# Get certificate
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

### 6. Update Configuration

Edit `api/config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'nextopup');
define('DB_PASS', 'your_password');
define('DB_NAME', 'nextopup');
```

---

## 🔒 Security Checklist

### Before Production

- [ ] Change all default passwords
- [ ] Update `api/config.php` dengan credentials production
- [ ] Enable HTTPS/SSL
- [ ] Set proper file permissions (755 for directories, 644 for files)
- [ ] Disable error display di PHP (`display_errors = Off`)
- [ ] Enable error logging
- [ ] Remove atau protect file testing (`test-api.html`, `setup.php`)
- [ ] Update CORS settings di `api/.htaccess`
- [ ] Implement rate limiting
- [ ] Setup backup automation
- [ ] Configure firewall (UFW)

### PHP Configuration

Edit `/etc/php/7.4/apache2/php.ini`:

```ini
display_errors = Off
log_errors = On
error_log = /var/log/php/error.log
upload_max_filesize = 10M
post_max_size = 10M
max_execution_time = 30
```

### Apache Security

Edit `/etc/apache2/conf-available/security.conf`:

```apache
ServerTokens Prod
ServerSignature Off
TraceEnable Off
```

---

## 📊 Monitoring

### Setup Logging

```bash
# Create log directory
sudo mkdir -p /var/log/nextopup
sudo chown www-data:www-data /var/log/nextopup

# Monitor logs
tail -f /var/log/apache2/nextopup-error.log
tail -f /var/log/apache2/nextopup-access.log
```

### Performance Monitoring

Install monitoring tools:

```bash
# Install htop
sudo apt install htop -y

# Install MySQL monitoring
sudo apt install mytop -y
```

---

## 🔄 Update & Maintenance

### Update Application

```bash
cd /var/www/html/nextopup
sudo git pull origin main
sudo systemctl reload apache2
```

### Database Backup

```bash
# Manual backup
mysqldump -u nextopup -p nextopup > backup_$(date +%Y%m%d).sql

# Automated backup (cron)
sudo crontab -e
```

Add:
```cron
0 2 * * * mysqldump -u nextopup -p'password' nextopup > /backups/nextopup_$(date +\%Y\%m\%d).sql
```

---

## 🆘 Troubleshooting

### 500 Internal Server Error
- Check Apache error logs
- Verify file permissions
- Check `.htaccess` syntax

### Database Connection Error
- Verify MySQL is running: `sudo systemctl status mysql`
- Check credentials in `api/config.php`
- Test connection: `mysql -u nextopup -p`

### CORS Error
- Check `api/.htaccess` CORS headers
- Verify API_BASE_URL in `public/assets/js/api-config.js`

### Permission Denied
```bash
sudo chown -R www-data:www-data /var/www/html/nextopup
sudo chmod -R 755 /var/www/html/nextopup
```

---

## 📞 Support

Jika mengalami masalah saat deployment:
- Check [GitHub Issues](https://github.com/Kanzcr/NexTopup-Web/issues)
- Lihat [Documentation](README.md)

---

**Happy Deploying! 🚀**
