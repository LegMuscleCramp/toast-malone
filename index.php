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
    <script type="text/javascript" src="js/scripts.js"></script>
    <script type="text/javascript" src="js/form-toggling.js"></script>
    <script type="text/javascript" src="js/ajax-login.js"></script>
    <script type="text/javascript" src="js/ajax-submit-score.js"></script>
    <script type="text/javascript" src="js/ajax-register.js"></script>
    <script type="text/javascript" src="js/ajax-forgot.js"></script>
    <script type="text/javascript" src="js/ajax-retrieve.js"></script>
    <script type="text/javascript" src="js/ajax-validate-form.js"></script>
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
        <span id="rules" class="form-notify">the rules are simple: mash the 'toast malone' button. ready?</span>
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

    <!-- forms container -->
    <div class="form-container hidden">
      <div id="login-form" class="each-form">
        <span class="final-score form-notify"></span><br>
        <span id="login-alert" class="form-notify">Sign in to submit your score!</span>
        <span class="input-label">username</span><br>
        <input id="login-username" class="form-field" type="text" name="username" required><br>
        <span class="input-label">password</span><br>
        <input id="login-password" class="form-field" type="password" name="pwd" required>
        <button id="login-submit" value="sign in" class="form-field submit-button blue">sign in</button>
        <span id="register-link" class="form-help-links">Register</span>
        <span id="forgot-link" class="form-help-links">Forgot password?</span>
      </div>
      <div id="submit-score-form">
        <span id="welcome-message" class="form-notify"></span><br><br>
        <span id="final-score" class="final-score form-notify"></span><br>
        <button id="submit-score" value="submit score" class="form-field submit-button blue">submit score</button>
      </div>
      <div id="register-form" class="each-form">
        <span id="register-username-label" class="input-label">username</span><br>
        <input id="register-username" class="form-field" type="text" name="username" required><br>
        <span class="input-label">password</span><br>
        <input id="register-password" class="form-field" type="password" name="password" required><br>
        <span class="input-label">security question</span><br>
        <input id="register-question" class="form-field" type="text" name="question" required><br>
        <span class="input-label">security answer</span><br>
        <input id="register-answer" class="form-field" type="text" name="answer" required><br>
        <button id="register-submit" value="register" class="form-field submit-button blue">register</button>
        <span id="registration-confirmation" class="form-help-links"></span><br><br>
        <span class="form-help-links login-link">return to login</span>
      </div>
      <div id="forgot-form" class="each-form">
        <span id="forgot-username-label" class="input-label">username</span><br>
        <input id="forgot-username" class="form-field" type="text" name="username" required><br>
        <button id="forgot-submit" value="submit" class="submit-button blue form-field">submit</button>
        <span class="form-help-links login-link">return to login</span>
      </div>
      <div id="retrieve-form" class="each-form">
        <span class="input-label">security question</span><br>
        <span id="retrieve-question" class="form-notify"></span><br>
        <span id="retrieve-answer-label" class="input-label">security answer</span><br>
        <input id="retrieve-answer" class="form-field" type="text" name="answer" required><br>
        <button id="retrieve-submit" value="submit" class="submit-button blue form-field">submit</button>
        <span class="form-help-links login-link">return to login</span>
      </div>
      <div id="show-password-container">
        <span id="show-password" class="form-notify"></span><br><br><br>
        <span class="form-help-links login-link">return to login</span>
      </div>
    </div>
  </body>
</html>
