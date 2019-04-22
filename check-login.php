<?php
  session_start(); //start the session
  if(isset($_SESSION["user"])){
    echo "Welcome " . $_SESSION["user"];
  } else {
    echo "";
  }
?>
