// ajax submit score
$(document).ready(function(){
  $("#submit-score").on("click", function(){
    var score = $("#final-score").html();
    $.post("submit-score.php",{
      score: score
    }, function(data,status){
      if (data.includes("fail")){
        alert("error");
      }
      else {
        $("#submit-score-form").addClass("hidden");
        $("#show-score-container").removeClass("hidden");

        $.post("scoreboard.php",function(data,status){
          $("#scoreboard-table").html(data);
        });
      }
    });
  });
});
