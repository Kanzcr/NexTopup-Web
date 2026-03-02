<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

// GET USER PROFILE
if ($method === 'GET' && isset($_GET['id'])) {
    $user_id = (int)$_GET['id'];
    
    $sql = "SELECT id, name, email, role, saldo, avatar, phone, referral_code, joined_date, last_login 
            FROM users WHERE id = $user_id";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        response(true, 'User loaded', $result->fetch_assoc());
    }
    
    response(false, 'User not found');
}

// UPDATE SALDO
if ($method === 'POST' && isset($input['action']) && $input['action'] === 'topup') {
    $user_id = (int)$input['user_id'];
    $amount = (float)$input['amount'];
    
    $sql = "UPDATE users SET saldo = saldo + $amount WHERE id = $user_id";
    
    if ($conn->query($sql)) {
        $result = $conn->query("SELECT saldo FROM users WHERE id = $user_id");
        $new_saldo = $result->fetch_assoc()['saldo'];
        response(true, 'Saldo updated', ['new_saldo' => $new_saldo]);
    }
    
    response(false, 'Topup failed');
}

// DEDUCT SALDO (for payment)
if ($method === 'POST' && isset($input['action']) && $input['action'] === 'deduct') {
    $user_id = (int)$input['user_id'];
    $amount = (float)$input['amount'];
    
    // Check balance
    $result = $conn->query("SELECT saldo FROM users WHERE id = $user_id");
    $user = $result->fetch_assoc();
    
    if ($user['saldo'] < $amount) {
        response(false, 'Saldo tidak cukup');
    }
    
    $sql = "UPDATE users SET saldo = saldo - $amount WHERE id = $user_id";
    
    if ($conn->query($sql)) {
        response(true, 'Payment successful');
    }
    
    response(false, 'Payment failed');
}
?>
