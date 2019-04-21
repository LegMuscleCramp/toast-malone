<?php
  session_start();
  include("config.php"); // for DB connection
  if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // get user score and username
  $username = $_SESSION['user'];
  $score = $_POST['score'];

  // post to DB
  $sql = "INSERT INTO fp_highScores (username, score) VALUES ('$username', '$score')";
  if ($conn->query($sql) == TRUE) {
    header("Location: scoreboard.php");
    exit();
  } else {
    echo "fail";
    // echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $conn->close();
?>
