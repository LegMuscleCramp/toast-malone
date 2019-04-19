<?php
  include("config.php");
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Toast Malone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts.js"></script>
    <script type="text/javascript" src="ajax-login.js"></script>
  </head>
  <body oncontextmenu="return false">

    <!-- toast container -->
    <div class="toast-container">
      <div class="content-half">
        <div class="click-speed-bar">
          <table class="speed-gauge">
            <tr>
              <td id="speed1" class="speed-gauge-bar"></td>
              <td id="speed2" class="speed-gauge-bar"></td>
              <td id="speed3" class="speed-gauge-bar"></td>
            </tr>
          </table>
          <div id="speed4" class="speed-gauge-bar">
            <img src="img/toasty-multiplier.png">
            <span id="multiplier" class="big-text"></span>
          </div>
        </div>
        <span id="user-score" class="big-text"></span><br>
        <span id="timer" class="big-text"></span>
      </div>
      <div class="content-half">
        <div id="toast-slice">
          <img src="img/poasty.png">
        </div>
        <div id="toaster">
          <img src="img/toaster.png">
        </div>
        <button id="burn-toast" class="big-button red">
          <span class="big-text">Toast<br>Malone</span>
        </button>
      </div>
    </div>
    <div class="cover-game">
      <div class="top-content">
        <span id="rules" class="big-text">the rules are simple: mash the 'burn toast' button. ready?</span>
        <br>
        <button id="start" class="big-button green">
          <span class="big-text">start</span>
        </button>
      </div>
    </div>
    <audio id="boii">
      <source src="audio/boii.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <!-- user login form -->
    <div class="form-container hidden">
      <div id="login-form" class="each-form">
        <span id="final-score" class="score-submit-notify"></span><br>
        <span id="login-alert" class="score-submit-notify">Sign in to submit your score!</span>
        <span class="input-label">username</span><br>
        <input id="login-username" type="text" name="username" required><br>
        <span class="input-label">password</span><br>
        <input id="login-password"type="password" name="pwd" required>
        <button id="login-submit" value="sign in" class="submit-button blue">sign in</button>
        <span id="register-link" class="form-help-links">Register</span>
        <span id="forgot-link" class="form-help-links">Forgot password?</span>
      </div>
      <div id="register-form" class="each-form">
        <span class="input-label">username</span><br>
        <input type="text" name="username" required><br>
        <span class="input-label">password</span><br>
        <input type="password" name="password" required><br>
        <span class="input-label">security question</span><br>
        <input type="text" name="question" required><br>
        <span class="input-label">security answer</span><br>
        <input type="text" name="answer" required><br>
        <button id="register-submit" value="register" class="submit-button blue">register</button>
        <span id="login-link" class="form-help-links">return to login</span>
      </div>
      <div id="forgot-form" class="each-form">
        <span class="input-label">username</span><br>
        <input type="text" name="username" required><br>
        <span class="input-label">security question</span><br>
        <input type="text" name="question" required><br>
        <span class="input-label">security answer</span><br>
        <input type="text" name="answer" required><br>
        <button id="forgot-submit" value="submit" class="submit-button blue">submit</button>
        <span id="login-link2" class="form-help-links">return to login</span>
      </div>
    </div>
  </body>
</html>
