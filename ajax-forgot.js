// ajax forgot password
$(document).ready(function() {
  $("#forgot-submit").on("click",function(){
    var forgotUsername = $("#forgot-username").val();
    var forgotQuestion = $("#forgot-question").val();
    var forgotAnswer = $("#forgot-answer").val();
    // var finalScore = $("#final-score").html();
    $.post("retrieve.php",{
      username: forgotUsername,
      question: forgotQuestion,
      answer: forgotAnswer
    }, function(data,status) {
      // $("#login-alert").html(data);
      console.log(data);
    });
  });
});
