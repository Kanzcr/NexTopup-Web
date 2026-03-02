# NexTopUp API Documentation

## Setup
1. Import `database/mysql-schema.sql` ke phpMyAdmin
2. Import `database/seed-data.sql` (optional, untuk data contoh)
3. Sesuaikan konfigurasi di `api/config.php` jika perlu
4. Pastikan XAMPP Apache dan MySQL sudah running

## Endpoints

### Authentication
- **POST** `/api/auth.php`
  - Login: `{"action": "login", "email": "user@email.com", "password": "pass123"}`
  - Register: `{"action": "register", "name": "Nama", "email": "email@test.com", "password": "pass123"}`

### Products
- **GET** `/api/products.php` - Get all active products

### Orders
- **POST** `/api/orders.php` - Create order
  ```json
  {
    "action": "create",
    "user_id": 1,
    "product_id": 1,
    "product_name": "Mobile Legends",
    "option_label": "86 💎",
    "amount": 15500,
    "discount": 0,
    "payment_method": "saldo",
    "game_id": "123456789"
  }
  ```
- **GET** `/api/orders.php?user_id=1` - Get user orders
- **PUT** `/api/orders.php` - Update order status (admin)
  ```json
  {
    "action": "update_status",
    "order_id": "NTU-00000001",
    "status": "success"
  }
  ```

### Users
- **GET** `/api/users.php?id=1` - Get user profile
- **POST** `/api/users.php` - Top up saldo
  ```json
  {"action": "topup", "user_id": 1, "amount": 50000}
  ```
- **POST** `/api/users.php` - Deduct saldo (payment)
  ```json
  {"action": "deduct", "user_id": 1, "amount": 15500}
  ```

## Testing
Gunakan Postman atau browser untuk test endpoints.
Base URL: `http://localhost/NexTopup-Web/api/`
