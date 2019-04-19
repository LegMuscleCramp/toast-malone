// ajax register
$(document).ready(function() {
  $("#register-submit").on("click",function(){
    var registerUsername = $("#register-username").val();
    var registerPassword = $("#register-password").val();
    var registerQuestion = $("#register-question").val();
    var registerAnswer = $("#register-answer").val();
    // var finalScore = $("#final-score").html();
    $.post("register.php",{
      username: registerUsername,
      password: registerPassword,
      question: registerQuestion,
      answer: registerAnswer
      // score: finalScore
    }, function(data,status) {
      // $("#login-alert").html(data);
      console.log(data);
    });
  });
});
