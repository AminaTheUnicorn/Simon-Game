var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function() {
  if(!started) {
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
})

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id"); 
  userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour); 

});

function nextSequence() {
  
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

  
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
      $("#" + currentColour).removeClass("pressed");
    }, 150);
  }

