// ajax forgot password
$(document).ready(function() {
  var usernameLabel = $("#forgot-username-label");
  $("#forgot-submit").on("click",function(){
    var forgotUsername = $("#forgot-username").val();
    if (forgotUsername.trim()==""){
      $("#forgot-username").html("");
    }
    else {
      $.post("forgot.php",{
        username: forgotUsername
      }, function(data,status) {
        if(data.includes("fail")) {
          usernameLabel.html("no username found");
          usernameLabel.addClass("input-error");
          $("#forgot-username").addClass("input-error");
        } else {
          $("#login-form,#register-form,#forgot-form").addClass("hidden");
          $("#retrieve-question").html(data);
          $("#retrieve-form").removeClass("hidden");
          $("#retrieve-answer").removeClass("input-error");
          $("#retrieve-answer-label").removeClass("input-error");
        }
      });
    }
  });
  $("#forgot-username").keyup(function(){
    usernameLabel.html("username");
    usernameLabel.removeClass("input-error");
    $("#retrieve-form").removeClass("input-error");
  });
});
