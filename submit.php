<?php
    header('Access-Control-Allow-Origin: https://weezykon.github.io');
    header("Access-Control-Allow-Origin: *");
    if($_POST){
        $name = trim(stripslashes($_POST['fullname']));
        $email = trim(stripslashes($_POST['email']));
        $message = trim(stripslashes($_POST['message']));
        $title = trim(stripslashes($_POST['title']));
        $mainmessage = "\nContact ".$name ." -- ". $email ." -- ". $title ." -- ". $message;
        $file = fopen('messages.txt', "a");
        fwrite($file, $mainmessage);
        fclose($file);
        return true;
    }
?>