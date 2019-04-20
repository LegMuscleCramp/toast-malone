<?php
  include("config.php");
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $username = $_POST['username'];
  $password = $_POST['password'];
  $securityQuestion = $_POST['question'];
  $securityAnswer = $_POST['answer'];

  // check if username is taken
  $userTaken = FALSE;
  $sql = "SELECT username FROM user WHERE username='$username'";
  $result = $conn -> query($sql);
  if ($result -> num_rows > 0) {
    $userTaken = TRUE;
    echo "username already exists";
    exit();
  }

  // if username valid, post to db
  if (!$userTaken) {
    $sql = "INSERT INTO `fp_users` (username, password, securityQuestion, securityAnswer)
    VALUES ('$username','$password','$securityQuestion','$securityAnswer')";
    if ($conn -> query($sql) == TRUE) {
      echo "New record created successfully <br>";
      // header("Location: login.php"); //redirect user to login page
      exit();
    } else {
      echo "Error: " . $sql . "<br>" . $conn -> error;
    }
  }
  $conn->close();
?>
