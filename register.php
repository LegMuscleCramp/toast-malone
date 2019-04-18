<html>
<head>
  <title>Sign Up!</title>
  <script src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>
</head>
<body>
  <?php
  include("config.php");
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $username = $_POST['username'];
  $password = $_POST['password'];
  $securityQuestion = $_POST['question'];
  $securityAnswer = $_POST['answer'];
  $sql = "INSERT INTO  `fp_users` (username, password, securityQuestion, securityAnswer)
    VALUES ('$username','$password','$securityQuestion','$securityAnswer')";

  if ($conn->query($sql) == TRUE) {
      header("Location: login.php"); //redirect user to login page
      exit();
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $conn->close();
  ?>

</body>
</html>
