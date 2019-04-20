// ajax username-exists
$(document).ready(function() {
  $("#register-username").keyup(function(){
    var registerUsername = $("#register-username");
    $.post("username-exists.php",{
      username: registerUsername.val()
    }, function(data,status) {
      var usernameLabel = $("#register-username-label");
      if(data.includes("fail")) {
        usernameLabel.html("username already exists");
        usernameLabel.addClass("input-error");
        registerUsername.addClass("input-error");
      } else {
        usernameLabel.html("username");
        usernameLabel.removeClass("input-error");
        registerUsername.removeClass("input-error");
      }
    });
  });
});
