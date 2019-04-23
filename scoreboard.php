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
  $userTopTen = false; // boolean to check if user is in top ten for scoreboard display
  $user = $_SESSION['user'];
  $score = $_SESSION['score'];
  if ($result -> num_rows > 0) {
    // output data of each row
    $i = 1;
    while($row = $result -> fetch_assoc()) {
      if ($row['username'] == $user && $row['score'] == $score) {
        $userTopTen = true;
      }
      echo "<tr><td id='rank$i' class='leaderboard-rank'>$i</td><td class='leaderboard-name'>" . $row['username'] . "</td><td class='leaderboard-score'>" . $row['score'] . "</td></tr>";
      $i++;
    }
  }
  else{
    echo "No user data in the scoreboard.";
  }

  // display user's score at bottom if not in top ten
  if ($userTopTen == false) {
    echo "<tr><td id='loser' class='leaderboard-rank'>L</td><td class='leaderboard-name'>" . $user . "</td><td class='leaderboard-score'>" . $score . "</td></tr>";
  }

  $conn->close();
?>
