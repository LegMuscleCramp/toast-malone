$(document).ready(function(){
  defaultFormToggle();

  // makes registration form visible and hides all other forms
  $("#register-link").on("click",function(){
    loginForm.addClass("hidden");
    submitScoreForm.addClass("hidden");
    forgotForm.addClass("hidden");
    retrieveForm.addClass("hidden");
    showScore.addClass("hidden");
    showPassword.addClass("hidden");

    registerForm.removeClass("hidden");
    $("#register-form").children().removeClass("input-error");
  });

  // makes login form visible and hides all other forms
  $(".login-link").on("click",function(){
    submitScoreForm.addClass("hidden");
    registerForm.addClass("hidden");
    forgotForm.addClass("hidden");
    retrieveForm.addClass("hidden");
    showScore.addClass("hidden");
    showPassword.addClass("hidden");

    loginForm.removeClass("hidden");
    $("#login-form").children().removeClass("input-error");
  });

  // makes forgot password form visible and hides all other forms
  $("#forgot-link").on("click",function(){
    loginForm.addClass("hidden");
    submitScoreForm.addClass("hidden");
    registerForm.addClass("hidden");
    retrieveForm.addClass("hidden");
    showPassword.addClass("hidden");
    showScore.addClass("hidden");

    forgotForm.removeClass("hidden");
    $("#forgot-form").children().removeClass("input-error");
  });

  $("#play-again-link").on("click",function(){
    location.reload();
  });

  $("#logout-button").on("click",function(){
    $.post("logout.php",function(success){
      defaultFormToggle();
      $(".logout-message").removeClass("hidden");
      setTimeout(function(){
        $(".logout-message").addClass("hidden");
        location.reload();
      },1000);
    });
  });
});

function defaultFormToggle(){
  $("#logout-button").addClass("hidden");

  // initializing form variables and hiding all but registration form
  var loginForm = $("#login-form");
  var submitScoreForm = $("#submit-score-form");
  var registerForm = $("#register-form");
  var forgotForm = $("#forgot-form");
  var retrieveForm = $("#retrieve-form");
  var showScore = $("#show-score-container");
  var showPassword = $("#show-password-container");
  submitScoreForm.addClass("hidden");
  registerForm.addClass("hidden");
  forgotForm.addClass("hidden");
  retrieveForm.addClass("hidden");
  showScore.addClass("hidden");
  showPassword.addClass("hidden");
}
