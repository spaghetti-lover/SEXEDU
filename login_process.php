<?php
require_once("connect.php");
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            $sql1 = "SELECT * FROM users WHERE email='$username'";
            $result1 = $conn->query($sql1);
            $row = $result1->fetch_assoc();
            // $_SESSION['message'] = "Đăng nhập thành công!";
            $_SESSION['userID'] = $row['userID'];
            $isLogin = intval(true);

            header("Location: index.html");
        } else {
            $_SESSION['message'] = "Sai mật khẩu";
            header("Location: index.php");
            exit();
        }
    } else {
        $_SESSION['message'] = "Người dùng không tồn tại!";
        header("Location: index.php");
        exit();
    }

    $conn->close();
}
