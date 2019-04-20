// ajax forgot password
$(document).ready(function() {
  $("#forgot-submit").on("click",function(){
    var forgotUsername = $("#forgot-username").val();
    $.post("forgot.php",{
      username: forgotUsername
    }, function(data,status) {
      if(data=="fail") {
        alert("username doesn't exist");
      } else {
        $("#login-form,#register-form,#forgot-form").addClass("hidden");
        $("#retrieve-question").html(data);
        $("#retrieve-form").removeClass("hidden");
      }
    });
  });
});
