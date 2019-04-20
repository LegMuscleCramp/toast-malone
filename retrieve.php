<?php
    session_start(); //start the session
    include("config.php");
    if($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    $user = $_SESSION["username"];
    $question = $_SESSION["question"];
    $answer = $_POST["answer"];
    $sql = "SELECT `password` FROM `fp_users` WHERE username='$user' AND securityQuestion='$question' AND securityAnswer='$answer'";
    $result = $conn -> query($sql);
    if ($result -> num_rows > 0) {
      while($row = $result -> fetch_assoc()) {
        echo $row['password'];
        exit();
      }
    } else {
        echo "fail";
        exit();
    }

    $conn -> close();
?>
