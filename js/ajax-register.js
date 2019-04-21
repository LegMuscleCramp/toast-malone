// ajax register
$(document).ready(function() {
  var usernameExists = false;
  $("#register-submit").on("click",function(){
    var registerUsername = $("#register-username").val();
    var registerPassword = $("#register-password").val();
    var registerQuestion = $("#register-question").val();
    var registerAnswer = $("#register-answer").val();
    var registrationConfirmation = $("#registration-confirmation");

    if(!usernameExists &&
      !(registerUsername.trim()=="" || registerPassword.trim()=="" ||
      registerQuestion.trim()=="" || registerAnswer.trim()=="")) {
      $.post("register.php",{
        username: registerUsername,
        password: registerPassword,
        question: registerQuestion,
        answer: registerAnswer
      }, function(data,status) {
        registrationConfirmation.html(data);
        $("#register-form :input").val("");
        if(data.includes("account created successfully")) {
          registrationConfirmation.attr("style","color: #00b533");
          registrationConfirmation.show();
          setTimeout(function(){
            registrationConfirmation.hide();
          },2000);
        } else {
          registrationConfirmation.attr("style","color: #f00");
          registrationConfirmation.show();
          setTimeout(function(){
            registrationConfirmation.hide();
          },2000);
        }
      });
    }
  });

  $("#register-username").keyup(function(){
    var registerUsername = $("#register-username");
    $.post("username-exists.php",{
      username: registerUsername.val()
    }, function(data,status) {
      var usernameLabel = $("#register-username-label");
      if(data.includes("fail")) {
        usernameExists = true;
        usernameLabel.html("username already exists");
        usernameLabel.addClass("input-error");
        registerUsername.addClass("input-error");
      } else {
        usernameExists = false;
        usernameLabel.html("username");
        usernameLabel.removeClass("input-error");
        registerUsername.removeClass("input-error");
      }
    });
  });
});
