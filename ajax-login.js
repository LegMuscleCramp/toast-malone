// ajax login
$(document).ready(function() {
  $("#login-submit").on("click",function(){
    var loginUsername = $("#login-username").val();
    var loginPassword = $("#login-password").val();
    var finalScore = $("#final-score").html();
    $.post("login.php",{
      username: loginUsername,
      password: loginPassword,
      score: finalScore
    }, function(data,status) {
      $("#login-alert").html(data);
    });
  });
});
