$(document).ready(function() {
  $(".each-form .submit-button").on("click",function() {
    var emptyVals = $(".each-form :input").filter(function() {
      return $(this).val().trim()=="";
    });
    if(emptyVals.length>0) {
      emptyVals.val("");
      emptyVals.addClass("input-error");
      emptyVals.prev().prev().addClass("input-error");
    }
  });

  $(".each-form .form-field").keyup(function() {
    if($(this).val()!="") {
      $(this).removeClass("input-error");
      $(this).prev().prev().removeClass("input-error");
    }
  });
});
