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

    if(isset($_POST["username"])) {
      $user=$_POST["username"];
      $pass=$_POST["password"];

      // check if username and password are correct
      $sql = "SELECT username FROM `fp_users` WHERE username='$user' AND password='$pass'";
      $result = $conn -> query($sql);

      if ($result -> num_rows > 0) {
        // output data of each row
        while($row = $result -> fetch_assoc()) {
          $_SESSION["user"] = $user;
          echo "welcome $user";
        }
      } else {
        echo "user/pass mismatch"; // redirect back to login form...
        // header("refresh:2; url=index.html");
      }
      exit();
      $conn -> close();
    }
  ?>
</body>
</html>
