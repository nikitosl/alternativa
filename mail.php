<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
<title>Обратная связь</title>
</head>
<body>

<?php
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['mess'])) {$mess = $_POST['mess'];}
    
    $to = "altuxov.nikita@gmail.com";
    $headers = "Content-type: text/plain; charset = windows-1251";
    $subject = "Сообщение с вашего сайта";
    $message = "Имя пославшего: $name \nЭлектронный адрес: $email \nСообщение: $mess";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true' && $message!='' )
    {
    
        echo   "<b>Спасибо за отправку вашего сообщения!<p>";
        echo   "<a href=information.html>Нажмите,</a> чтобы вернуться на главную страницу";
    }
    else
    {
        echo "<p><b>Ошибка. Сообщение не отправлено!";
    }
    ?>
</body>
</html>