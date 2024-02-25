<?php
require_once("connect.php");
session_start();

$password = password_hash($_SESSION['password'], PASSWORD_BCRYPT, ['cost' => 12]);
$birthday = str_replace("-", "/", $_SESSION['birthday']);

$fullname = $_SESSION['name'];
$email = $_SESSION['email'];
$userID = 'ID' . str_pad(rand(0, 99999999), 8, '0', STR_PAD_LEFT);
if (strlen($fullname) == 1) {
    $fullname = 'Anonymous';
}
$stmt = $conn->prepare("INSERT INTO users (userID, fullName, password, birthday, email) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $userID, $fullname, $password, $birthday, $email);

// Thực thi truy vấn
$result = $stmt->execute();

if ($result) {
    $_SESSION['message'] = "Đăng ký thành công!";
} else {
    $_SESSION['message'] = "Lỗi khi đăng ký: " . $stmt->error;
}
header("Location: index.php");
// Đóng statement và kết nối
$stmt->close();
$mysqli->close();
session_destroy();
