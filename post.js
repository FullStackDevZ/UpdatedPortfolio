function post() {
    
    $recipient="alisarkeshik@gmail.com";
    $subject="Portfolio Inquiry";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
     
    $("#contact").empty();
$("#post-submit").append("Thank You! Your message has been sent.");

}

$("#contact-submit").on("click", post);