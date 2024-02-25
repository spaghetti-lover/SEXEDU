<?php
session_start();

if (isset($_SESSION['message'])) {
    echo "<script>alert('" . $_SESSION['message'] . "');</script>";
    unset($_SESSION['message']); // Xóa thông báo sau khi sử dụng
}
session_destroy();
?>< !DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form</title>
        <!-- to file css -->
        <link rel="stylesheet" href="Login/style.css">

        <!-- to icon -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body>
        <h2><img src="assets/images/equality.png" alt="ảnh giới tính" style="width: 48px; height: 48px; margin-right: 8px;">SexEdu</h2>
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="register.php" method="post">
                    <h1>Đăng ký</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>Đăng ký tài khoản mới</span>
                    <input type="text" placeholder="Họ Tên" id="name" name="name" />
                    <input type="date" placeholder="Ngày sinh" id="birth" name="birth" />
                    <input type="email" placeholder="Email" id="email" name="email" />
                    <input type="password" placeholder="Mật khẩu" id="pass" name="pass" />
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="login_process.php" method="post">
                    <h1>Đăng nhập</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>Đăng nhập tài khoản hiện có</span>
                    <input type="email" placeholder="Email" id="username" name="username" />
                    <input type="password" placeholder="Mật khẩu" id="password" name="password" />
                    <a href="#">Quên mật khẩu?</a>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Chào mừng đến với SexEdu!</h1>
                        <p>Đăng nhập bằng thông tin của bạn</p>
                        <button class="ghost" id="signIn">Đăng nhập</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Chào mừng đến với SexEdu!</h1>
                        <p>Nhập thông tin của bạn để tạo tài khoản</p>
                        <button class="ghost" id="signUp">Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="Login/script-form.js"></script>
    </body>

    </html>