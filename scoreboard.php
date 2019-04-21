<?php
  session_start();
?>
<html>
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
          echo "User: " . $row["username"] . " - " . "Score: " . $row["score"] . "<br>"; // draw scoreboard table.
        }
      }
      else{
        echo "No user data in the scoreboard.";
        // header("refresh:3; url=index.php"); // redirect to home
      }
      $conn->close();
    ?>
  </body>
</html>
