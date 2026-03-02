<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

// LOGIN
if ($method === 'POST' && isset($input['action']) && $input['action'] === 'login') {
    $email = $conn->real_escape_string($input['email']);
    $password = $input['password'];
    
    $sql = "SELECT * FROM users WHERE email = '$email' AND is_active = 1";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        if (password_verify($password, $user['password'])) {
            // Update last login
            $conn->query("UPDATE users SET last_login = NOW() WHERE id = {$user['id']}");
            
            unset($user['password']);
            response(true, 'Login berhasil', $user);
        }
    }
    
    response(false, 'Email atau password salah');
}

// REGISTER
if ($method === 'POST' && isset($input['action']) && $input['action'] === 'register') {
    $name = $conn->real_escape_string($input['name']);
    $email = $conn->real_escape_string($input['email']);
    $password = password_hash($input['password'], PASSWORD_DEFAULT);
    $joined_date = date('Y-m-d');
    $referral_code = 'REF' . str_pad(rand(1, 999999), 6, '0', STR_PAD_LEFT);
    
    // Check if email exists
    $check = $conn->query("SELECT id FROM users WHERE email = '$email'");
    if ($check->num_rows > 0) {
        response(false, 'Email sudah terdaftar');
    }
    
    $sql = "INSERT INTO users (name, email, password, role, saldo, joined_date, referral_code) 
            VALUES ('$name', '$email', '$password', 'customer', 25000, '$joined_date', '$referral_code')";
    
    if ($conn->query($sql)) {
        response(true, 'Registrasi berhasil');
    }
    
    response(false, 'Registrasi gagal');
}
?>
