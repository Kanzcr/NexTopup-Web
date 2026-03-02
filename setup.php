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

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("❌ Koneksi database gagal: " . $conn->connect_error);
}

echo "<h1>🚀 NexTopUp Setup</h1>";
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
