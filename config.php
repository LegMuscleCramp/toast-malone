<html>
<body>
  <?php
    $servername = "demo";
    $username = "demo";
    $password = "demo";
    $dbname = "demo";

    $conn = new mysqli($servername, $username, $password, $dbname); // creates new connection to db

    if ($conn -> connect_error) {
      die("connection failed: " . $conn -> connect_error);
    }
  ?>
</body>
</html>
