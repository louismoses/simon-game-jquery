"use strict";
const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
const audioMap = {
  green: new Audio("sounds/green.mp3"),
  yellow: new Audio("sounds/yellow.mp3"),
  red: new Audio("sounds/red.mp3"),
  blue: new Audio("sounds/blue.mp3"),
};

let gameStarted = false;

function nextSequence() {
  let randomNumber = Math.trunc(Math.random() * 4);
  let randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// $(document).on("keydown", function () {
//   nextSequence();
//   gameStarted = true;
// });
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

$(".btn").on("click", function () {
  let userChosenColor = $(this).attr("id");
  $(`#${userChosenColor}`).fadeOut(100).fadeIn(100);
  userClickedPattern.push(userChosenColor);

  if (audioMap.hasOwnProperty(userChosenColor)) {
    audioMap[userChosenColor].play();
  }
});
