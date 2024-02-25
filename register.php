<?php
session_start();

if (isset($_SESSION['message'])) {
    echo "<script>alert('" . $_SESSION['message'] . "');</script>";
    unset($_SESSION['message']); // Xóa thông báo sau khi sử dụng
}
$userName = str_replace(' ', '', $_POST['name']);
$password = $_POST['pass'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    require_once("connect.php");
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['password'] = $_POST['pass'];
    $_SESSION['birthday'] = $_POST['birth'];
    $_SESSION['email'] = $_POST['email'];

    header("Location: register_process.php");
    exit();
} else {
    echo "Không nhận được đường truyền";
}
