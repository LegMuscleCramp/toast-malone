<?php
  session_start();
  include("config.php");
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $username = $_POST['username'];
  $password = $_POST['password'];
  $securityQuestion = $_POST['question'];
  $securityAnswer = $_POST['answer'];


  // if username valid, post to db
  if (!$_SESSION['userTaken']) {
    $sql = "INSERT INTO `fp_users` (username, password, securityQuestion, securityAnswer)
    VALUES ('$username','$password','$securityQuestion','$securityAnswer')";
    if ($conn -> query($sql) == TRUE) {
      echo "account created successfully";
      exit();
    } else {
      echo "error: account could not be created";
      exit();
    }
  }
  $conn->close();
?>
