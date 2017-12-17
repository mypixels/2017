<?php
if(isset($_POST['contact-name']) && isset($_POST['contact-email']) && isset($_POST['contact-message'])) {
  $n = $_POST['contact-name'];
  $e = $_POST['contact-email'];
  $m = nl2br($_POST['contact-message']);
  $to = "info@getitifixed.shop";
  $from = $e;
  $subject = 'Contact Form Message';
  $message = '<b>Name:</b> ' .$n. ' <br><b>Email:</b> ' .$e. ' <p>' .$m. '</p>';
  $headers = "From: $from\n";
  $headers .= "MIME_Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";

  if(mail($to, $subect, $message, $headers)) {
    echo "success";
  } else {
    echo "Your message could not be sent. Please try again later.";
  }
}
?>
