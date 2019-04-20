// ajax register
$(document).ready(function() {
  $("#register-submit").on("click",function(){
    var registerUsername = $("#register-username").val();
    var registerPassword = $("#register-password").val();
    var registerQuestion = $("#register-question").val();
    var registerAnswer = $("#register-answer").val();

    $.post("register.php",{
        username: registerUsername,
        password: registerPassword,
        question: registerQuestion,
        answer: registerAnswer
      }, function(data,status) {
        console.log(data);
      });
  });
});
