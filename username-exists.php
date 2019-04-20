<?php
  session_start();
  include("config.php");
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $username = $_POST['username'];
  $sql = "SELECT username FROM `fp_users` WHERE username='$username'";
  $result = $conn -> query($sql);
  if ($result -> num_rows > 0) {
    $_SESSION['userTaken'] = TRUE;
    echo "fail";
    exit();
  }
  else {
    $_SESSION['userTaken'] = FALSE;
    exit();
  }
?>
