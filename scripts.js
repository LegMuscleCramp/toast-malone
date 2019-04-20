var clickSpeed = 250; //
var currentClicks = 0; // used to calculate cliks per 250ms intervals
var totalClicks = 0; // used to determine if user still clicking after 250ms
var allowClickCalc = true; // boolean that prohibits calculation of clickspeed if calculation already ongoing
var score = 0;
var playable = false;
var gameOver = false;

$(document).ready(function() {
  var burnButton = $("#burn-toast");
  var scoreText = $("#user-score");
  var toasty = $("#speed4");
  var speedGaugeBars = $(".speed-gauge-bar");

  $("#start").on("click",function() {
    score = 0;
    $("#user-score").html("");
    $(".cover-game").addClass("hidden");
    setTimeout(function(){
      $("#toast-slice,#toaster").addClass("toasting");
    },1100);
    var timerId = setInterval(countdown, 1000);
    timeLeft = 3;
    var timerDisplay = $("#timer");

    // pre-game countdown and game duration
    function countdown() {
      if (timeLeft==0 && !playable) {
        timerDisplay.html("GO!");
        timeLeft = 1;
        playable = true;
      } else if(timeLeft==0 && playable) {
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
      totalClicks++;
      calculateClickSpeed();
      showClickSpeed(totalClicks);
      animateScore(burnButton,scoreText,toasty);
    }
  });

  var loginForm = $("#login-form");
  var registerForm = $("#register-form");
  var forgotForm = $("#forgot-form");
  var retrieveForm = $("#retrieve-form");
  registerForm.addClass("hidden");
  forgotForm.addClass("hidden");
  retrieveForm.addClass("hidden");

  $("#register-link").on("click",function(){
    loginForm.addClass("hidden");
    forgotForm.addClass("hidden");
    retrieveForm.addClass("hidden");
    registerForm.removeClass("hidden");
  });

  $(".login-link").on("click",function(){
    registerForm.addClass("hidden");
    forgotForm.addClass("hidden");
    retrieveForm.addClass("hidden");
    loginForm.removeClass("hidden");
  });

  $("#forgot-link").on("click",function(){
    loginForm.addClass("hidden");
    registerForm.addClass("hidden");
    retrieveForm.addClass("hidden");
    forgotForm.removeClass("hidden");
  });
});

function calculateClickSpeed() {
  currentClicks++;
  if(allowClickCalc) {
    allowClickCalc = false;
    setTimeout(function(){
      clickSpeed = (currentClicks*250)<=1000 ? currentClicks*250 : 1000;
      currentClicks = 0;
      allowClickCalc = true;
    },250);
  }
}

function showClickSpeed(clickGhost) {
  var clickGauge;
  var currentSpeed = clickSpeed/250;
  score = (currentSpeed<4) ? score+currentSpeed : score+10;
  $("#user-score").html("+"+ score);
  console.log(score +"\t"+ currentSpeed);
  var multiplier = $("#multiplier");
  if(currentSpeed<4 && currentSpeed>1) {
    multiplier.html("x"+ currentSpeed);
  } else if(currentSpeed<=1) {
    multiplier.html("");
  } else {
    multiplier.html("x10");
  }
  switch(true) {
    case (currentSpeed>=4):
      clickGauge = $("#speed4");
      illuminateSpeedGauge(clickGauge,currentSpeed);
      clickGauge.children("img").attr("src","img/flaming-toast-light-multiplier.png");
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
    if(clickGhost==totalClicks) {
      $(".speed-gauge-bar").removeClass("lit-click-speed");
      $("#speed4").attr("src","img/toasty-multiplier.png");
      $("#multiplier").html("");
      clickSpeed=250;
    }
  },clickSpeed);
}

function illuminateSpeedGauge(glow,x) {
  dim = $(".speed-gauge-bar:gt("+(x-1)+")");
  $(".speed-gauge-bar:gt("+(x-1)+")#speed4").children("img").attr("src","img/toasty-multiplier.png");
  dim.removeClass("lit-click-speed");
  glow.addClass("lit-click-speed");
}

function animateScore(burnButton,scoreText,toasty) {
  burnButton.removeClass("toast-active");
  scoreText.removeClass("big-text-active");
  burnButton.addClass("toast-active");
  scoreText.addClass("big-text-active");
  if(clickSpeed==1000) toasty.addClass("toasty-lit-click-speed");
  setTimeout(function(){
    burnButton.removeClass("toast-active");
    toasty.removeClass("toasty-lit-click-speed");
    scoreText.removeClass("big-text-active");
  },250);
}

function endGame(burnButton,scoreText,toasty,dim) {
  playable = false;
  burnButton.removeClass("toast-active");
  dim.removeClass("lit-click-speed");
  scoreText.removeClass("big-text-active");
  toasty.removeClass("toasty-lit-click-speed");
  toasty.children("img").attr("src","img/toasty-multiplier.png");
  var timer = $("#timer");
  timer.html("time's up");
  timer.attr("style","z-index:6");

  var toastSlice = $("#toast-slice");
  switch(true) {
    case (score>=2500):
      toastSlice.addClass("burnt-toast");
      break;
    case (score>=1000):
      toastSlice.addClass("dark-toast");
      break;
    case (score>=500):
      toastSlice.addClass("light-toast");
      break;
  }

  setTimeout(function(){
    timer.addClass("hidden");
  },2000);
  setTimeout(function(){
    $("#toast-slice,#toaster").removeClass("toasting");
    $("#toaster").removeClass("toasting");
    document.getElementById("boii").play();
  },2500);
  setTimeout(function(){
    $("#final-score").html(score);
    $(".form-container").removeClass("hidden");
  },4500);
}
