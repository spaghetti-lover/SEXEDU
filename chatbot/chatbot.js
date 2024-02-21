'use strict';

        var chatInput = document.querySelector('#chat_input');
        var typing = document.querySelector('#typing');
        var send = document.querySelector('#send');
        var chatMessages = document.querySelector('#chat_messages');
        var chatBoxBody = document.querySelector('#chat_box_body');
        var chatThread = {};

        // ----- EVENTS ----- //

        chatInput.addEventListener('input', function () {
            this.style.height = '0';
            this.style.height = this.scrollHeight + 1 + 'px';
        });

        chatInput.addEventListener('keydown', function (evt) {
            if (evt.keyCode == 13 && !evt.shiftKey) {
                sendMessage('my', this);
                evt.preventDefault();
            }
        });

        send.addEventListener('click', function () {
            sendMessage('my', chatInput.value); // Pass the message content directly
        });

        // ----- FUNCTIONS -----//

        function renderProfile(p) {
            return '<div class="profile ' + p + '-profile hide"><img src="' + profile[p].pic + '" alt="' + profile[p]
                .name + '" width="30" height="30" />&nbsp;<span>' + profile[p].name + '</span></div>';
        }

        function renderMessage(p, m) {
            return '<div class="message ' + p + '-message hide">' + m + '</div>';
        }

        function appendMessage(r) {
            chatMessages.insertAdjacentHTML('beforeend', r);

            var elms = document.querySelectorAll('.profile.hide, .message.hide');

            for (var i = 0; i < elms.length; i++) {
                if (elms[i].classList.contains('profile')) {
                    elms[i].style.height = elms[i].scrollHeight + 'px';
                } else {
                    elms[i].style.height = elms[i].scrollHeight - 20 + 'px';
                }

                elms[i].classList.remove('hide');
            }

            chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
        }

        function sendMessage(p, message) { // Accept message content as a parameter
            var r = '';

            if (chatThread[chatThread.length - 1].profile !== p) {
                r += renderProfile(p);
            }

            r += renderMessage(p, message); // Use the provided message content

            chatThread.push({
                'profile': p,
                'message': message // Store the message content
            });

            appendMessage(r);
            chatInput.value = ''; // Clear the input after sending
        }

        chatBoxBody.scrollTop = chatBoxBody.scrollHeight;

        // ---------- Example ---------- //

        var profile = {
            'my': {
                'name': 'My profile',
                'pic': 'https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619'
            },
            'other': {
                'name': 'Other profile',
                'pic': 'https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed'
            }
        };

        var chatThread = [{
            'profile': 'other',
            'message': 'Hello!'
        }, {
            'profile': 'my',
            'message': 'Hi!'
        }, {
            'profile': 'my',
            'message': 'How are you?'
        }];

        (function autoText() {
            setTimeout(function () {
                typing.classList.add('active');

                setTimeout(function () {
                    var randomMessages = [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    ];

                    sendMessage('other', randomMessages[Math.floor(Math.random() * 4)]);

                    typing.classList.remove('active');

                    autoText();
                }, 8000);
            }, 3000);
        })();


        function sendMessage() {
            var typing = document.querySelector('#typing');
            typing.classList.add('active');

            var messageInput = document.getElementById('chat_input');
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

                    typing.classList.remove('active'); // Remove typing indicator after AI response
                }
            };
            xhr.send('prompt=' + encodeURIComponent(message)); // Send the user's message content to the server

            // Clear the message input
            messageInput.value = '';
        }