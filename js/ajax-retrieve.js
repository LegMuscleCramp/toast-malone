// ajax retrieve password
$(document).ready(function() {
  var answerLabel = $("#retrieve-answer-label");
  $("#retrieve-submit").on("click",function(){
    var retrieveAnswer = $("#retrieve-answer").val();
    if (retrieveAnswer.trim()==""){
      $("#retrieve-answer").html("");
    }
    else {
      $.post("retrieve.php",{
        answer: retrieveAnswer
      }, function(data,status) {
        if(data.includes("fail")) {
          answerLabel.html("incorrect answer");
          answerLabel.addClass("input-error");
          $("#retrieve-answer").addClass("input-error");
        } else {
          $("#retrieve-answer").val("");
          $("#login-form,#register-form,#forgot-form,#retrieve-form").addClass("hidden");
          $("#show-password").html("YOUR PASSWORD IS "+ data);
          $("#show-password-container").removeClass("hidden");
        }
      });
    }
  });
  $("#retrieve-answer").keyup(function(){
    answerLabel.html("security answer");
    answerLabel.removeClass("input-error");
    $("#retrieve-answer").removeClass("input-error");
  });
});
