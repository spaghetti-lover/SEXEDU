<?php
date_default_timezone_set('Asia/Ho_Chi_Minh');
$prompt = $_POST['prompt'];
require __DIR__ . '/vendor/autoload.php'; // remove this line if you use a PHP Framework.

use Orhanerday\OpenAi\OpenAi;

$open_ai_key = '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';
$open_ai = new OpenAi($open_ai_key);

$chat = $open_ai->chat([
    'model' => 'gpt-3.5-turbo-0125',
    'messages' => [
        [
            "role" => "system",
            "content" => "You are a helpful assistant."
        ],
        [
            "role" => "user",
            "content" => $prompt
        ],
    ],
    'temperature' => 1.0,
    'max_tokens' => 4000,
    'frequency_penalty' => 0,
    'presence_penalty' => 0,
]);


//var_dump($chat);

// decode response
$d = json_decode($chat);
echo  $d->choices[0]->message->content . "\n";
//$d = $d->choices[0]->message->content;
