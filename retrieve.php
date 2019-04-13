<?php
    session_start(); //start the session
?>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>Retrieve</title>
</head>
<body>
    <?php
      include("config.php");
      if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $user = $_POST["username"];
      $question = $_POST["question"];
      $answer = $_POST["answer"];

      $sql = "SELECT password FROM user WHERE username='$user' AND question='$question' AND answer='$answer'";
      $result = $conn -> query($sql);
      if ($result -> num_rows > 0) {
        while($row = $result -> fetch_assoc()) {
          echo "Your password is: " . $row["password"] . "<br>";
          // echo "<br><br><a href='login.html'>Go to Login</a>"; 
        }
      }
      else{
        echo "Answer does not match our records. Please try again.";
        // echo "<br><br><a href='forgot.php'>Go back</a>";
      }

      $conn -> close();
    ?>
</body>
</html>
