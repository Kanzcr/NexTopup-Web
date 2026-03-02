<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

// GET ALL PRODUCTS
if ($method === 'GET') {
    $sql = "SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order, id";
    
    $result = $conn->query($sql);
    
    if (!$result) {
        response(false, 'Query error: ' . $conn->error);
    }
    
    $products = [];
    
    while ($row = $result->fetch_assoc()) {
        // Get options for this product
        $optSql = "SELECT id, label, price FROM product_options 
                   WHERE product_id = {$row['id']} AND is_active = 1 
                   ORDER BY sort_order";
        $optResult = $conn->query($optSql);
        
        $options = [];
        while ($opt = $optResult->fetch_assoc()) {
            $options[] = $opt;
        }
        
        $row['options'] = $options;
        $products[] = $row;
    }
    
    response(true, 'Products loaded', $products);
}
?>
