<?php
  session_start();
?>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Submit score</title>
  </head>
  <body>
    <?php
      include("config.php"); // for DB connection
      if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
      // get user score and username
      $username = $_SESSION['user'];
      $score = $_POST['variable'];
      $_SESSION['score'] = $score;

      // post to DB
      $sql = "INSERT INTO fp_highScores (username, score) VALUES ('$username', '$score')";
      if ($conn->query($sql) == TRUE) {
          header("Location: scoreboard.php");
          exit();
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }
      $conn->close();
    ?>
  </body>
</html>
