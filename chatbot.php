<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Template Mo">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">

    <title>SexEdu</title>
    <link rel="icon" type="image/x-icon" href="assets/images/equality.png">

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-edu-meeting.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="chatbot/chatbot.css">

    <!-- Additional icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<body>
    <!-- ***** Header Area Start ***** -->

    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="index.html" class="logo">
                            <i class="fa-solid fa-venus-mars"></i> SexEdu
                        </a>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li><a href="index.html">Trang chủ</a></li>
                            <li><a href="sense-deceive/index.html">Game</a></li>
                            <li><a href="podcast-1.html"> Podcast</a></li>
                            <li class="has-sub">
                                <a href="javascript:void(0)">Cẩm nang</a>
                                <ul class="sub-menu">
                                    <li><a href="book-child.html">Học sinh</a></li>
                                    <li><a href="book-parent.html">Phụ huynh</a></li>
                                </ul>
                            </li>
                            <li><a href="chatbot.php" class="active">Chatbot</a></li>
                            <li><a href="index.html#contact">Liên hệ</a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->



    <section class="meetings-page" id="meetings">
        <!-- <div class="footer"></div> -->
        <div class="chat-container">
            <div class="flexbox">
                <div class="chat-box">
                    <div class="chat-box-header">
                        <h3 style="font-weight: 600;">SexEdu Chatbot<br /></h3>
                    </div>
                    <div id="chat_box_body" class="chat-box-body">
                        <div id="chat_messages">
                            <div class="profile other-profile">
                                <span>Chatbot</span>
                            </div>
                            <div class="message ai">Hello! How can I assist you today?</div>
                            <div class="profile my-profile">
                                <span>You</span>

                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="typing">
                        <div><span></span> <span></span> <span></span> <span class="n"></span>Chatbot is answer...</div>
                    </div>
                    <div class="chat-box-footer">
                        <textarea id="message_input" placeholder="Enter your question here..."></textarea>
                        <button id="send" onclick="sendMessage()">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-- chatbot cũ -->
        <!-- <div class="chat-container">
            <div class="row">
                <div class="chat">
                    <div class="chat-box" id="chat-box">
                    
                        <div class="ai-message">Hello! How can I assist you today?</div>

                        <br>
                    </div>
                    <br>
                    <div class="input-box">
                        <input type="text" id="message-input" placeholder="Type your question..." required>
                        <button id="send-button" onclick="sendMessage()">Send</button>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="footer">
            <p>Copyright © 2024 TEAMBRUH
                <!-- <br>Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p> -->
            <div>
                <a style="color: #0866FE; margin: 5px;" href="#"><i class="fa-brands fa-facebook"></i></a>
                <a style="color: rgb(255, 45, 45); margin: 5px;" href="#"><i class="fa-regular fa-envelope"></i></a>
                <a style="color: palevioletred; margin: 5px;" href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </section>


    <!-- Scripts -->
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/lightbox.js"></script>
    <script src="assets/js/tabs.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/video.js"></script>
    <script src="assets/js/slick-slider.js"></script>
    <script src="assets/js/custom.js"></script>
    <!-- <script src="chatbot/chatbot.js"></script> -->
    <script>
        function sendMessage() {
            var typing = document.querySelector('#typing');
            typing.classList.add('active');

            var messageInput = document.getElementById('message_input');
            var message = messageInput.value;

            // Append user's message to the chat box
            var chatMessages = document.getElementById('chat_messages');

            // Create a div element to contain the user's message
            var userMessageContainer = document.createElement('div');
            userMessageContainer.className = 'message user';
            userMessageContainer.textContent = message;

            // Append the user's message to the chat messages
            chatMessages.appendChild(userMessageContainer);

            // Send message to server
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'api.php'); // Replace 'your_php_script.php' with the path to your PHP file
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Append AI's response to the chat box
                    var aiMessageContainer = document.createElement('div');
                    aiMessageContainer.className = 'message ai';
                    aiMessageContainer.textContent = xhr.responseText; // Use the response content from the server

                    // Append AI's message to the chat messages
                    chatMessages.appendChild(aiMessageContainer);

                    // Scroll to the bottom of the chat box after adding messages
                    chatMessages.scrollTop = chatMessages.scrollHeight;

                    typing.classList.remove('active');
                }
            };
            xhr.send('prompt=' + encodeURIComponent(message)); // Send the user's message content to the server

            // Clear the message input
            messageInput.value = '';

        }
    </script>
</body>


</body>

</html>