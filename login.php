<?php
  session_start(); //start the session
?>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>Login</title>
</head>
<body>
  <?php
    include("config.php"); // for DB connection
    if($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    $user=$_POST["username"];
    // $_SESSION["user"] = $user;
    $pass=$_POST["pwd"];

    // grab score variable from JS
    $_SESSION["score"] = "1000"; // NOTE: hardcoded score - grab it instead from JAVASCRIPT

    // check if username and password are correct
    $sql = "SELECT name FROM user WHERE username='$user' AND password='$pass'";
    $result = $conn -> query($sql);

    if ($result -> num_rows > 0) {
      // output data of each row
      while($row = $result -> fetch_assoc()) {
        if ($user == $row["username"]){
          $_SESSION["user"] = $user;
        }
        header("Location: submit-score.php");
      }
    }
    else{
      echo "Incorrect password. Try again."; // redirect back to login form...
      // header("refresh:2; url=index.html");
    }

    $conn -> close();
  ?>
</body>
</html>
