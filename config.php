<html>
<body>
  <?php
    $servername = "localhost";
    $username = "lgarciasainz1";
    $password = "lgarciasainz1";
    $dbname = "lgarciasainz1";

    $conn = new mysqli($servername, $username, $password, $dbname); // creates new connection to db

    if ($conn -> connect_error) {
      die("connection failed: " . $conn -> connect_error);
    }
  ?>
</body>
</html>
