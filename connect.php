<?php
date_default_timezone_set('Asia/Ho_Chi_Minh');
$servername = "127.0.0.1:3307";
$username = "root";
$password = "TAD16112004@tad";
$database = "sexedu";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Kết nối đến cơ sở dữ liệu thất bại: " . $conn->connect_error);
} else {
    // echo "Kết nối thành công";
}
