<?php
require_once 'config.php';

echo "<h2>Insert Default Users</h2>";

// Generate password hashes
$admin_pass = password_hash('admin123', PASSWORD_DEFAULT);
$user_pass = password_hash('user123', PASSWORD_DEFAULT);

// Check if users already exist
$result = $conn->query("SELECT COUNT(*) as count FROM users");
$row = $result->fetch_assoc();

if ($row['count'] > 0) {
    echo "<p>⚠️ Users already exist ({$row['count']} users found)</p>";
    echo "<p><a href='debug.php'>Check Database</a></p>";
    exit;
}

// Insert users
$users = [
    [1, 'Admin NexTopUp', 'admin@nextopup.id', $admin_pass, 'admin', 0, '👑', 'REF000001', '2024-01-01'],
    [2, 'Budi Santoso', 'budi@gmail.com', $user_pass, 'customer', 250000, '🎮', 'REF000002', '2024-03-15'],
    [3, 'Sari Dewi', 'sari@gmail.com', $user_pass, 'customer', 75000, '👩', 'REF000003', '2024-04-02'],
    [4, 'Fajar Maulana', 'fajar@gmail.com', $user_pass, 'customer', 120000, '🧑', 'REF000004', '2024-05-10']
];

foreach ($users as $user) {
    $sql = "INSERT INTO users (id, name, email, password, role, saldo, avatar, referral_code, joined_date) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('issssdsss', $user[0], $user[1], $user[2], $user[3], $user[4], $user[5], $user[6], $user[7], $user[8]);
    
    if ($stmt->execute()) {
        echo "✅ User created: {$user[1]} ({$user[2]})<br>";
    } else {
        echo "❌ Failed to create: {$user[1]} - " . $stmt->error . "<br>";
    }
}

echo "<br><hr>";
echo "<h3>✅ Users inserted successfully!</h3>";
echo "<p><strong>Login Credentials:</strong></p>";
echo "<table border='1' cellpadding='10' style='border-collapse:collapse;'>";
echo "<tr><th>Role</th><th>Email</th><th>Password</th></tr>";
echo "<tr><td>Admin</td><td>admin@nextopup.id</td><td>admin123</td></tr>";
echo "<tr><td>Customer</td><td>budi@gmail.com</td><td>user123</td></tr>";
echo "<tr><td>Customer</td><td>sari@gmail.com</td><td>user123</td></tr>";
echo "<tr><td>Customer</td><td>fajar@gmail.com</td><td>user123</td></tr>";
echo "</table>";

echo "<br><p><a href='debug.php'>Check Database</a> | <a href='../index.html'>Go to App</a></p>";

$conn->close();
?>
