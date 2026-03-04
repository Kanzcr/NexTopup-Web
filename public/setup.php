<?php
/**
 * NexTopUp - Quick Setup Script
 * Akses via: http://localhost/[nama-folder-project]/setup.php
 */

// Database config
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'nextopup';

echo "<h1>🚀 NexTopUp Setup</h1>";
echo "<hr>";

// Step 1: Connect without database to create it
$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    die("❌ Koneksi ke MySQL gagal: " . $conn->connect_error);
}

echo "<h2>✅ Step 1: Koneksi ke MySQL berhasil</h2>";

// Step 2: Create database if not exists
$sql = "CREATE DATABASE IF NOT EXISTS $dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
if ($conn->query($sql)) {
    echo "<p>✅ Database '$dbname' berhasil dibuat/sudah ada</p>";
} else {
    die("❌ Error membuat database: " . $conn->error);
}

// Step 3: Select database
$conn->select_db($dbname);

// Step 4: Check if tables exist
$result = $conn->query("SHOW TABLES LIKE 'users'");
if ($result->num_rows == 0) {
    echo "<h2>⚙️ Step 2: Import Database Schema</h2>";
    
    // Try to import schema automatically
    $schemaFile = dirname(__DIR__) . '/database/mysql-schema.sql';
    $seedFile = dirname(__DIR__) . '/database/seed-data.sql';
    
    if (file_exists($schemaFile)) {
        $sql = file_get_contents($schemaFile);
        
        // Execute multi-query
        if ($conn->multi_query($sql)) {
            do {
                if ($result = $conn->store_result()) {
                    $result->free();
                }
            } while ($conn->next_result());
            
            echo "<p>✅ Schema berhasil di-import</p>";
            
            // Import seed data
            if (file_exists($seedFile)) {
                $sql = file_get_contents($seedFile);
                if ($conn->multi_query($sql)) {
                    do {
                        if ($result = $conn->store_result()) {
                            $result->free();
                        }
                    } while ($conn->next_result());
                    echo "<p>✅ Seed data berhasil di-import</p>";
                }
            }
            
            echo "<p><strong>✅ Database setup selesai! Refresh halaman ini.</strong></p>";
            echo "<p><a href='setup.php' style='padding:10px 20px;background:#00f5ff;color:#000;text-decoration:none;border-radius:5px;'>Refresh</a></p>";
            exit;
        } else {
            echo "<p>❌ Error import schema: " . $conn->error . "</p>";
        }
    } else {
        echo "<p>⚠️ File schema tidak ditemukan di: $schemaFile</p>";
        echo "<p>Silakan import manual via phpMyAdmin:</p>";
        echo "<ol>";
        echo "<li><a href='http://localhost/phpmyadmin' target='_blank'>Buka phpMyAdmin</a></li>";
        echo "<li>Pilih database 'nextopup'</li>";
        echo "<li>Import file: database/mysql-schema.sql</li>";
        echo "<li>Import file: database/seed-data.sql</li>";
        echo "</ol>";
    }
    exit;
}

echo "<h2>✅ Step 2: Tabel database sudah ada</h2>";
echo "<hr>";

// Generate password hashes
$admin_pass = password_hash('admin123', PASSWORD_DEFAULT);
$user_pass = password_hash('user123', PASSWORD_DEFAULT);

echo "<h2>✅ Password Hash Generated</h2>";
echo "<pre>";
echo "admin123 => $admin_pass\n";
echo "user123  => $user_pass\n";
echo "</pre>";

// Update passwords in database
$sql = "UPDATE users SET password = '$admin_pass' WHERE id = 1";
$conn->query($sql);

$sql = "UPDATE users SET password = '$user_pass' WHERE id IN (2,3,4)";
$conn->query($sql);

echo "<h2>✅ Password Updated in Database</h2>";
echo "<p>Password berhasil di-update untuk semua user.</p>";

echo "<hr>";
echo "<h2>📋 Login Credentials</h2>";
echo "<table border='1' cellpadding='10' style='border-collapse:collapse;'>";
echo "<tr><th>Role</th><th>Email</th><th>Password</th></tr>";
echo "<tr><td>Admin</td><td>admin@nextopup.id</td><td>admin123</td></tr>";
echo "<tr><td>Customer</td><td>budi@gmail.com</td><td>user123</td></tr>";
echo "<tr><td>Customer</td><td>sari@gmail.com</td><td>user123</td></tr>";
echo "<tr><td>Customer</td><td>fajar@gmail.com</td><td>user123</td></tr>";
echo "</table>";

echo "<hr>";
echo "<h2>🎯 Next Steps</h2>";
echo "<ol>";
echo "<li>Buka aplikasi: <a href='index.html'>index.html</a></li>";
echo "<li>Login dengan salah satu akun di atas</li>";
echo "<li>Hapus file setup.php ini setelah selesai (untuk keamanan)</li>";
echo "</ol>";

$conn->close();
?>
