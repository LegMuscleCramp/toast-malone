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
    $_SESSION["user"] = $user;
    $pass=$_POST["pwd"];

    // check if username and password are correct
    $sql = "SELECT name FROM user WHERE username='$user' AND password='$pass'";
    $result = $conn -> query($sql);

    if ($result -> num_rows > 0) {
      // output data of each row
      while($row = $result -> fetch_assoc()) {
        $_SESSION["name"] = $row["name"];
        // echo "Welcome " . $row["name"] . "<br>";
        // header("Location: user_home.php");
      }
    }
    else{
      echo "Incorrect password. Try again.";
      header("refresh:2; url=login.html");
    }

    $conn -> close();
  ?>
</body>
</html>
