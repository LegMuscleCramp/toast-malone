var clickSpeed = 250; // determines how much of the song to play
var clickCount = 0; // use to calculate cliks per 250ms intervals
var subCount = 0; // displays number of clicks; used to determine if user still clicking
var allowClickCalc = true; // boolean that prohibits calculation of clickspeed if calculation already ongoing
var score = 0;

$(document).ready(function() {
  // var tGayAudio = document.getElementById("t-gay");
  $("#subscribe").on("click",function(){
    subCount++;
    calculateClickSpeed();
    showClickSpeed(subCount);
    // playPauseSong(tGayAudio,subCount);
    animateSubs();
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
      clickGauge.attr("src","img/flaming-toast.png");
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

// function playPauseSong(tGay,clickGhost) {
//   tGay.play();
//   setTimeout(function(){
//     if(clickGhost==subCount){
//       tGay.pause();
//     }
//   },clickSpeed);
// }

function animateSubs() {
  var subButton = $("#subscribe");
  var subCountText = $("#sub-count");
  var brofist = $("#speed4");
  subButton.removeClass("subscribe-active");
  subCountText.removeClass("big-text-active");
  subButton.addClass("subscribe-active");
  subCountText.addClass("big-text-active");
  if(clickSpeed==1000) brofist.addClass("brofist-lit-click-speed");
  setTimeout(function(){
    subButton.removeClass("subscribe-active");
    brofist.removeClass("brofist-lit-click-speed");
    subCountText.removeClass("big-text-active");
  },250);
}
