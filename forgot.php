<?php
    session_start(); //start the session
    include("config.php");
    if($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $user = $_POST['username'];

    $sql = "SELECT securityQuestion FROM `fp_users` WHERE username='$user'";
    $result = $conn -> query($sql);
    if ($result -> num_rows > 0) {
      while($row = $result -> fetch_assoc()) {
        $_SESSION['username'] = $user;
        $_SESSION['question'] = $row['securityQuestion'];
        echo $row['securityQuestion'];
        exit();
      }
    } else {
        echo "fail";
        exit();
    }

    $conn -> close();
?>
</body>
</html>
