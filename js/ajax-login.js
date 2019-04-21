// ajax login
$(document).ready(function() {
  var loginAlert = $("#login-alert");
  $("#login-submit").on("click",function(){
    var loginUsername = $("#login-username").val();
    var loginPassword = $("#login-password").val();

    // check if username or password fields are blank
    if (loginUsername.trim()=="" || loginPassword.trim()==""){
      loginAlert.html("Please fill in all fields");
      loginAlert.addClass("input-error");
    } else {
      // send post request to check security answer
      $.post("login.php",{
        username: loginUsername,
        password: loginPassword
      }, function(data,status) {
        // alert login mismatch or proceed to score submission
        if(!data.includes("user/pass mismatch")) {
          $("#welcome-message").html(data); // display welcome message to user
          $("#login-form").addClass("hidden");
          $("#submit-score-form").removeClass("hidden");
        } else {
          loginAlert.html(data);
          loginAlert.addClass("input-error");
        }
      });
    }
  });
  $("#forgot-username").keyup(function(){
      loginAlert.html("");
      loginAlert.removeClass("input-error");
  });
});
