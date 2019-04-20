// ajax retrieve password
$(document).ready(function() {
  $("#retrieve-submit").on("click",function(){
    var retrieveAnswer = $("#retrieve-answer").val();
    $.post("retrieve.php",{
      answer: retrieveAnswer
    }, function(data,status) {
      if(data=="fail") {
        alert("incorrect answer");
      } else {
        $("#login-form,#register-form,#forgot-form,#retrieve-form").addClass("hidden");
        $("#retrieve-password").removeClass("hidden").html("Your password is "+ data);
      }
    });
  });
});
