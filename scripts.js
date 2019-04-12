var clickSpeed = 250;
var clickCount = 0; // use to calculate cliks per 250ms intervals
var subCount = 0; // displays number of clicks; used to determine if user still clicking
var allowClickCalc = true; // boolean that prohibits calculation of clickspeed if calculation already ongoing
var score = 0;
var playable = true;

$(document).ready(function() {
  var burnButton = $("#burn-toast");
  var scoreText = $("#sub-count");
  var toasty = $("#speed4");
  var speedGaugeBars = $(".speed-gauge-bar");
  $("#start").on("click",function(){
    score = 0;
    $("#sub-count").html("");
    $(".cover-game,#start").hide();
    $("#toaster").addClass("toasting");
    var timerId = setInterval(countdown, 1000);
    timeLeft = 4;
    var timerDisplay = $("#timer");
    function countdown() {
      if (timeLeft==0) {
        clearTimeout(timerId);
        endGame(burnButton,scoreText,toasty,speedGaugeBars);
      } else {
        timerDisplay.html(timeLeft);
        timeLeft--;
      }
    }
  });
  $("#burn-toast").on("click",function(){
    if(playable){
      subCount++;
      calculateClickSpeed();
      showClickSpeed(subCount);
      animateScore(burnButton,scoreText,toasty);
    }
  });
});

function calculateClickSpeed() {
  clickCount++;
  if(allowClickCalc) {
    allowClickCalc = false;
    setTimeout(function(){
      clickSpeed = (clickCount*250)<=1000 ? clickCount*250 : 1000;
      clickCount = 0;
      allowClickCalc = true;
    },250);
  }
}

function showClickSpeed(clickGhost) {
  var clickGauge;
  var currentSpeed = clickSpeed/250;
  score = (currentSpeed<4) ? score+currentSpeed : score+10;
  document.getElementById("sub-count").innerHTML = "+"+ score;
  console.log(score +"\t"+ currentSpeed);
  document.getElementById("multiplier").innerHTML = (currentSpeed<4) ? "x"+ currentSpeed : "x10";
  switch(true) {
    case (currentSpeed>=4):
      clickGauge = $("#speed4");
      illuminateSpeedGauge(clickGauge,currentSpeed);
      clickGauge.attr("src","img/flaming-toast-light.png");
    case (currentSpeed==3):
      clickGauge = $("#speed3");
      illuminateSpeedGauge(clickGauge,currentSpeed);
    case (currentSpeed==2):
      clickGauge = $("#speed2");
      illuminateSpeedGauge(clickGauge,currentSpeed);
    case (currentSpeed==1):
      clickGauge = $("#speed1");
      illuminateSpeedGauge(clickGauge,currentSpeed);
      break;
  }

  setTimeout(function(){
    if(clickGhost==subCount) {
      $(".speed-gauge-bar").removeClass("lit-click-speed");
      $("#speed4").attr("src","img/toasty.png");
      clickSpeed=250;
    }
  },clickSpeed);
}

function illuminateSpeedGauge(glow,x) {
  dim = $(".speed-gauge-bar:gt("+(x-1)+")");
  $(".speed-gauge-bar:gt("+(x-1)+")#speed4").attr("src","img/toasty.png");
  dim.removeClass("lit-click-speed");
  glow.addClass("lit-click-speed");
}

function animateScore(burnButton,scoreText,toasty) {
  burnButton.removeClass("subscribe-active");
  scoreText.removeClass("big-text-active");
  burnButton.addClass("subscribe-active");
  scoreText.addClass("big-text-active");
  if(clickSpeed==1000) toasty.addClass("toasty-lit-click-speed");
  setTimeout(function(){
    burnButton.removeClass("subscribe-active");
    toasty.removeClass("toasty-lit-click-speed");
    scoreText.removeClass("big-text-active");
  },250);
}

function endGame(burnButton,scoreText,toasty,dim) {
  playable = false;
  burnButton.removeClass("subscribe-active");
  dim.removeClass("lit-click-speed");
  scoreText.removeClass("big-text-active");
  toasty.removeClass("toasty-lit-click-speed");
  $("#toaster").removeClass("toasting");
  toasty.attr("src","img/toasty.png");
  $("#rules").hide();
  $(".cover-game").show();
  var timer = $("#timer");
  timer.html("time's up");
  timer.attr("style","z-index:6");
  setTimeout(function(){
    $(".cover-game").hide();
    timer.hide();
  },2000);
}
