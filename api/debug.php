<?php
header('Content-Type: text/html; charset=utf-8');

echo "<h2>Debug Database Connection</h2>";

$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'nextopup';

echo "<p><strong>Config:</strong></p>";
echo "Host: $host<br>";
echo "User: $user<br>";
echo "Database: $dbname<br><br>";

// Test 1: Connect to MySQL
echo "<p><strong>Test 1: Connect to MySQL</strong></p>";
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("❌ Failed: " . $conn->connect_error);
}
echo "✅ Connected to MySQL<br><br>";

// Test 2: Check if database exists
echo "<p><strong>Test 2: Check Database</strong></p>";
$result = $conn->query("SHOW DATABASES LIKE '$dbname'");
if ($result->num_rows == 0) {
    die("❌ Database '$dbname' not found");
}
echo "✅ Database '$dbname' exists<br><br>";

// Test 3: Select database
echo "<p><strong>Test 3: Select Database</strong></p>";
if (!$conn->select_db($dbname)) {
    die("❌ Cannot select database: " . $conn->error);
}
echo "✅ Database selected<br><br>";

// Test 4: Check tables
echo "<p><strong>Test 4: Check Tables</strong></p>";
$result = $conn->query("SHOW TABLES");
if ($result->num_rows == 0) {
    die("❌ No tables found. Please run setup.php");
}
echo "✅ Tables found: " . $result->num_rows . "<br>";
while ($row = $result->fetch_array()) {
    echo "- " . $row[0] . "<br>";
}
echo "<br>";

// Test 5: Check users
echo "<p><strong>Test 5: Check Users Table</strong></p>";
$result = $conn->query("SELECT id, name, email, role FROM users LIMIT 5");
if (!$result) {
    die("❌ Query failed: " . $conn->error);
}
echo "✅ Users found: " . $result->num_rows . "<br>";
while ($row = $result->fetch_assoc()) {
    echo "- {$row['name']} ({$row['email']}) - {$row['role']}<br>";
}

echo "<br><hr>";
echo "<h3>✅ All tests passed! Database is working.</h3>";
echo "<p><a href='../test-api.html'>Back to API Test</a></p>";

$conn->close();
?>
