<?php

if($_POST["submit"]) {
    $recipient="alisarkeshik@gmail.com";
    $subject="Portfolio Inquiry";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
$thankYou="
<p>Thank you! Your message has been sent.</p>
"; } ?>