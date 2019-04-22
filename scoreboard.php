<?php
  session_start();
  include("config.php"); // for DB connection
  if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // get scoreboard from DB
  $sql = "SELECT username,score FROM fp_highScores ORDER BY score DESC LIMIT 10";
  $result = $conn -> query($sql);
  $scoresArray = array();
  if ($result -> num_rows > 0) {
    // output data of each row
    $i = 1;
    while($row = $result -> fetch_assoc()) {
      // echo "User: " . $row["username"] . " - " . "Score: " . $row["score"] . "<br>";
      echo "<tr><td>$i</td><td>" . $row['username'] . "</td><td>" . $row['score'] . "</td></tr>";
      $i++;
      // $scoresArray[] = $row;
    }
    // echo json_encode($scoresArray);
  }
  else{
    echo "No user data in the scoreboard.";
    // header("refresh:3; url=index.php"); // redirect to home
  }
  $conn->close();
?>
