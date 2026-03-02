<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

// CREATE ORDER
if ($method === 'POST' && isset($input['action']) && $input['action'] === 'create') {
    $user_id = (int)$input['user_id'];
    $product_id = (int)$input['product_id'];
    $product_name = $conn->real_escape_string($input['product_name']);
    $option_label = $conn->real_escape_string($input['option_label']);
    $amount = (float)$input['amount'];
    $discount = (float)($input['discount'] ?? 0);
    $final_amount = $amount - $discount;
    $payment_method = $conn->real_escape_string($input['payment_method']);
    $game_id = $conn->real_escape_string($input['game_id']);
    $order_date = date('Y-m-d');
    
    // Generate Order ID
    $order_id = 'NTU-' . date('Ymd') . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);
    
    $sql = "INSERT INTO orders (id, user_id, product_id, product_name, option_label, amount, discount, final_amount, 
            status, payment_method, game_id, order_date) 
            VALUES ('$order_id', $user_id, $product_id, '$product_name', '$option_label', $amount, $discount, 
            $final_amount, 'pending', '$payment_method', '$game_id', '$order_date')";
    
    if ($conn->query($sql)) {
        response(true, 'Order created', ['order_id' => $order_id]);
    }
    
    response(false, 'Order creation failed');
}

// GET USER ORDERS
if ($method === 'GET' && isset($_GET['user_id'])) {
    $user_id = (int)$_GET['user_id'];
    
    $sql = "SELECT * FROM orders WHERE user_id = $user_id ORDER BY created_at DESC";
    $result = $conn->query($sql);
    $orders = [];
    
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
    
    response(true, 'Orders loaded', $orders);
}

// UPDATE ORDER STATUS (Admin)
if ($method === 'PUT' && isset($input['action']) && $input['action'] === 'update_status') {
    $order_id = $conn->real_escape_string($input['order_id']);
    $status = $conn->real_escape_string($input['status']);
    
    $sql = "UPDATE orders SET status = '$status' WHERE id = '$order_id'";
    
    if ($conn->query($sql)) {
        response(true, 'Order status updated');
    }
    
    response(false, 'Update failed');
}
?>
