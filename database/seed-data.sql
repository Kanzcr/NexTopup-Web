-- ═══════════════════════════════════════════════
-- NexTopUp Seed Data - Sample Data for Testing
-- ═══════════════════════════════════════════════

-- ═══════════════════════════════════════════════
-- INSERT USERS
-- ═══════════════════════════════════════════════
-- Password: admin123 untuk admin, user123 untuk customer
INSERT INTO users (id, name, email, password, role, saldo, avatar, referral_code, joined_date) VALUES
(1, 'Admin NexTopUp', 'admin@nextopup.id', '$2y$10$rZ5qH8qH8qH8qH8qH8qH8uO5qH8qH8qH8qH8qH8qH8qH8qH8qH8qH8', 'admin', 0.00, '👑', 'REF000001', '2024-01-01'),
(2, 'Budi Santoso', 'budi@gmail.com', '$2y$10$rZ5qH8qH8qH8qH8qH8qH8uO5qH8qH8qH8qH8qH8qH8qH8qH8qH8qH8', 'customer', 250000.00, '🎮', 'REF000002', '2024-03-15'),
(3, 'Sari Dewi', 'sari@gmail.com', '$2y$10$rZ5qH8qH8qH8qH8qH8qH8uO5qH8qH8qH8qH8qH8qH8qH8qH8qH8qH8', 'customer', 75000.00, '👩', 'REF000003', '2024-04-02'),
(4, 'Fajar Maulana', 'fajar@gmail.com', '$2y$10$rZ5qH8qH8qH8qH8qH8qH8uO5qH8qH8qH8qH8qH8qH8qH8qH8qH8qH8', 'customer', 120000.00, '🧑', 'REF000004', '2024-05-10');

-- PENTING: Setelah import, jalankan query ini di phpMyAdmin untuk update password:
-- UPDATE users SET password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' WHERE id IN (1,2,3,4);

-- ═══════════════════════════════════════════════
-- INSERT PRODUCTS
-- ═══════════════════════════════════════════════
INSERT INTO products (id, name, category, icon, background_gradient, badge, badge_color, is_active, sort_order) VALUES
(1, 'Mobile Legends', 'moba', '🎮', 'linear-gradient(135deg,#120830,#231060)', 'Terlaris', '#ff2d78', TRUE, 1),
(2, 'Free Fire', 'br', '🔥', 'linear-gradient(135deg,#1a0a05,#3a1205)', 'Promo', '#ff9800', TRUE, 2),
(3, 'PUBG Mobile', 'br', '🔫', 'linear-gradient(135deg,#051a2a,#0a2a3f)', 'HOT', '#7b2fff', TRUE, 3),
(4, 'Genshin Impact', 'rpg', '✨', 'linear-gradient(135deg,#0d1835,#1a2860)', NULL, NULL, TRUE, 4),
(5, 'Honkai: Star Rail', 'rpg', '🌟', 'linear-gradient(135deg,#0a1535,#152560)', 'NEW', '#00f5ff', TRUE, 5),
(6, 'Netflix', 'streaming', '📺', 'linear-gradient(135deg,#1a0000,#300505)', 'Premium', '#e50914', TRUE, 6),
(7, 'Spotify Premium', 'musik', '🎵', 'linear-gradient(135deg,#001a08,#003015)', NULL, NULL, TRUE, 7),
(8, 'YouTube Premium', 'streaming', '▶️', 'linear-gradient(135deg,#1a0505,#300a0a)', NULL, NULL, TRUE, 8),
(9, 'Google One', 'cloud', '☁️', 'linear-gradient(135deg,#05101a,#0a1a30)', NULL, NULL, TRUE, 9),
(10, 'eFootball PES', 'sports', '⚽', 'linear-gradient(135deg,#051510,#0a2a1a)', 'Promo', '#7b2fff', TRUE, 10);

-- ═══════════════════════════════════════════════
-- INSERT PRODUCT OPTIONS
-- ═══════════════════════════════════════════════
INSERT INTO product_options (product_id, label, price, sort_order) VALUES
-- Mobile Legends
(1, '86 💎', 15500, 1),
(1, '172 💎', 29000, 2),
(1, '344 💎', 57000, 3),
(1, '706 💎', 110000, 4),
-- Free Fire
(2, '100 💎', 14000, 1),
(2, '210 💎', 27500, 2),
(2, '420 💎', 55000, 3),
(2, '720 💎', 95000, 4),
-- PUBG Mobile
(3, '60 UC', 19000, 1),
(3, '125 UC', 35000, 2),
(3, '260 UC', 65000, 3),
(3, '520 UC', 120000, 4),
-- Genshin Impact
(4, '60 Primo', 17000, 1),
(4, '300 Primo', 80000, 2),
(4, '980 Primo', 155000, 3),
-- Honkai: Star Rail
(5, '60 Jade', 17000, 1),
(5, '300 Jade', 82000, 2),
(5, '3280 Jade', 790000, 3),
-- Netflix
(6, '1 Bulan', 35000, 1),
(6, '3 Bulan', 95000, 2),
(6, '6 Bulan', 180000, 3),
(6, '1 Tahun', 340000, 4),
-- Spotify Premium
(7, '1 Bulan', 12500, 1),
(7, '3 Bulan', 35000, 2),
(7, '6 Bulan', 65000, 3),
-- YouTube Premium
(8, '1 Bulan', 19000, 1),
(8, '3 Bulan', 55000, 2),
-- Google One
(9, '100GB', 22000, 1),
(9, '200GB', 35000, 2),
(9, '2TB', 110000, 3),
-- eFootball PES
(10, '200 Koin', 20000, 1),
(10, '500 Koin', 48000, 2),
(10, '1000 Koin', 90000, 3);

-- ═══════════════════════════════════════════════
-- INSERT ORDERS
-- ═══════════════════════════════════════════════
INSERT INTO orders (id, user_id, product_id, product_name, option_label, amount, discount, final_amount, status, payment_method, game_id, order_date) VALUES
('NTU-00000001', 2, 1, 'Mobile Legends', '706 💎', 110000, 0, 110000, 'success', 'Saldo', '123456789', '2025-02-28'),
('NTU-00000002', 3, 6, 'Netflix', '1 Bulan', 35000, 0, 35000, 'success', 'GoPay', 'sari@gmail.com', '2025-02-27'),
('NTU-00000003', 4, 2, 'Free Fire', '420 💎', 55000, 0, 55000, 'pending', 'DANA', '987654321', '2025-03-01'),
('NTU-00000004', 2, 7, 'Spotify Premium', '3 Bulan', 35000, 0, 35000, 'success', 'OVO', 'budi@gmail.com', '2025-03-01'),
('NTU-00000005', 3, 3, 'PUBG Mobile', '260 UC', 65000, 0, 65000, 'failed', 'Saldo', 'sari123', '2025-02-25'),
('NTU-00000006', 4, 4, 'Genshin Impact', '60 Primo', 17000, 0, 17000, 'success', 'QRIS', 'fajar88', '2025-03-02');

-- ═══════════════════════════════════════════════
-- INSERT NOTIFICATIONS
-- ═══════════════════════════════════════════════
INSERT INTO notifications (user_id, icon, title, message, type, is_read) VALUES
-- Admin notifications
(1, '📦', 'Pesanan Pending', 'Pesanan #NTU-00000003 status PENDING menunggu konfirmasi.', 'warning', FALSE),
(1, '👤', 'Pengguna Baru', 'Pengguna baru terdaftar: Fajar Maulana.', 'info', FALSE),
(1, '💰', 'Revenue Harian', 'Revenue hari ini: Rp 317.000', 'success', TRUE),
-- Budi notifications
(2, '✅', 'Top Up Berhasil', 'Top up Mobile Legends 706 💎 berhasil diproses!', 'success', FALSE),
(2, '🎁', 'Bonus Selamat Datang', 'Selamat datang! Kamu dapat bonus saldo Rp 25.000.', 'success', TRUE),
-- Sari notifications
(3, '❌', 'Top Up Gagal', 'Top up PUBG Mobile gagal. Saldo dikembalikan.', 'error', FALSE),
-- Fajar notifications
(4, '✅', 'Top Up Berhasil', 'Top up Genshin Impact berhasil!', 'success', FALSE),
(4, '⏳', 'Pesanan Diproses', 'Top up Free Fire sedang diproses.', 'info', FALSE);

-- ═══════════════════════════════════════════════
-- INSERT VOUCHERS
-- ═══════════════════════════════════════════════
INSERT INTO vouchers (code, discount_type, discount_value, min_purchase, max_discount, description, usage_limit, valid_from, valid_until, is_active) VALUES
('WELCOME10', 'percent', 10, 50000, 10000, 'Diskon 10% untuk pengguna baru', NULL, '2024-01-01', '2025-12-31', TRUE),
('TOPUP50', 'fixed', 5000, 100000, 5000, 'Potongan Rp 5.000 untuk pembelian min Rp 100.000', NULL, '2024-01-01', '2025-12-31', TRUE),
('GAME20', 'percent', 20, 75000, 15000, 'Diskon 20% khusus game (max Rp 15.000)', 100, '2024-01-01', '2025-12-31', TRUE);

-- ═══════════════════════════════════════════════
-- INSERT TRANSACTIONS
-- ═══════════════════════════════════════════════
INSERT INTO transactions (order_id, user_id, type, amount, balance_before, balance_after, description, payment_method, status) VALUES
('NTU-00000001', 2, 'payment', 110000, 360000, 250000, 'Pembelian Mobile Legends 706 💎', 'Saldo', 'success'),
('NTU-00000002', 3, 'payment', 35000, 110000, 75000, 'Pembelian Netflix 1 Bulan', 'GoPay', 'success'),
('NTU-00000004', 2, 'payment', 35000, 285000, 250000, 'Pembelian Spotify Premium 3 Bulan', 'OVO', 'success'),
('NTU-00000005', 3, 'refund', 65000, 75000, 140000, 'Refund PUBG Mobile - Transaksi Gagal', 'Saldo', 'success'),
('NTU-00000006', 4, 'payment', 17000, 137000, 120000, 'Pembelian Genshin Impact 60 Primo', 'QRIS', 'success');
