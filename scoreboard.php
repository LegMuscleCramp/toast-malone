<?php
  session_start();
?>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title></title>
  </head>
  <body>
    <?php
      include("config.php"); // for DB connection
      if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
      // get scoreboard from DB
      $sql = "SELECT * FROM fp_highScores";
      $result = $conn -> query($sql);

      if ($result -> num_rows > 0) {
        // output data of each row
        while($row = $result -> fetch_assoc()) {
          echo "User: " . $row["username"] . " - " . "Score: " . $row["score"];
          // header("Location: submit-score.php");
        }
      }
      else{
        // header("refresh:2; url=index.html");
      }
      $conn->close();
    ?>
  </body>
</html>
