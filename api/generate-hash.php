<?php
// Helper script to generate password hashes
// Access via: http://localhost/NexTopup-Web/api/generate-hash.php

$passwords = [
    'admin123' => password_hash('admin123', PASSWORD_DEFAULT),
    'user123' => password_hash('user123', PASSWORD_DEFAULT),
];

echo "<h2>Password Hashes</h2>";
echo "<pre>";
foreach($passwords as $plain => $hash) {
    echo "$plain => $hash\n";
}
echo "</pre>";

echo "<hr>";
echo "<h3>Update seed-data.sql dengan hash berikut:</h3>";
echo "<p>Ganti semua password hash di seed-data.sql dengan hash yang baru di-generate di atas.</p>";
?>
