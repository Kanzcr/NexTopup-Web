<?php
// Check database connection
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'nextopup';

echo "<h2>Database Connection Test</h2>";

$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("❌ MySQL Connection Failed: " . $conn->connect_error);
}
echo "✅ MySQL Connected<br>";

$result = $conn->query("SHOW DATABASES LIKE '$dbname'");
if ($result->num_rows == 0) {
    echo "❌ Database '$dbname' not found<br>";
    echo "<a href='../setup.php'>Run Setup</a>";
    exit;
}
echo "✅ Database '$dbname' exists<br>";

$conn->select_db($dbname);

$result = $conn->query("SHOW TABLES");
echo "<br><strong>Tables in database:</strong><br>";
while ($row = $result->fetch_array()) {
    echo "- " . $row[0] . "<br>";
}

$result = $conn->query("SELECT COUNT(*) as count FROM users");
$row = $result->fetch_assoc();
echo "<br>✅ Users table has {$row['count']} records<br>";

echo "<br><a href='../index.html'>Go to App</a>";
?>
