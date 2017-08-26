$(document).ready(function(){
  $("form#gameForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#inputs").val());

    var randomNumber1 = Math.floor((Math.random()*10));
    var randomNumber2 = Math.floor((Math.random()*10));
    var randomNumber3 = Math.floor((Math.random()*10));
    var score;
    if (randomNumber1 === randomNumber2 && randomNumber1 === randomNumber3 ){
      score = 100;

    } else if (randomNumber1 === randomNumber2 || randomNumber2 === randomNumber3 || randomNumber1 === randomNumber3 ){
      score = 50;

    }else{
      score = 10;
    }

    if (randomNumber1 === 0){
      $("#userInput1").append("<img src=\"css/images/zero.png\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 1) {
      $("#userInput1").append("<img src=\"css/images/one.png\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 2) {
      $("#userInput1").append("<img src=\"css/images/two.png\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 3) {
      $("#userInput1").append("<img src=\"css/images/three.jpg\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 4) {
      $("#userInput1").append("<img src=\"css/images/four.png\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 5) {
      $("#userInput1").append("<img src=\"css/images/five.png\" height=\"70px\">").fadeIn(2000);
    } else if (randomNumber1 === 6) {
      $("#userInput1").append("<img src=\"css/images/six.jpg\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 7) {
      $("#userInput1").append("<img src=\"css/images/seven.png\" height=\"70px\">").fadeIn(2000);
    }else if (randomNumber1 === 8) {
      $("#userInput1").append("<img src=\"css/images/eight.png\" height=\"70px\">").fadeIn(2000);
    } else {
      $("#userInput1").append("<img src=\"css/images/nine.png\" height=\"70px\">").fadeIn(2000);
    }

    if (randomNumber2 === 0){
      $("#userInput2").append("<img src=\"css/images/zero.png\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 1) {
      $("#userInput2").append("<img src=\"css/images/one.png\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 2) {
      $("#userInput2").append("<img src=\"css/images/two.png\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 3) {
      $("#userInput2").append("<img src=\"css/images/three.jpg\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 4) {
      $("#userInput2").append("<img src=\"css/images/four.png\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 5) {
      $("#userInput2").append("<img src=\"css/images/five.png\" height=\"70px\">").fadeIn(4000);
    } else if (randomNumber2 === 6) {
      $("#userInput2").append("<img src=\"css/images/six.jpg\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 7) {
      $("#userInput2").append("<img src=\"css/images/seven.png\" height=\"70px\">").fadeIn(4000);
    }else if (randomNumber2 === 8) {
      $("#userInput2").append("<img src=\"css/images/eight.png\" height=\"70px\">").fadeIn(4000);
    } else {
      $("#userInput2").append("<img src=\"css/images/nine.png\" height=\"70px\">").fadeIn(4000);
    }


    if (randomNumber3 === 0){
      $("#userInput3").append("<img src=\"css/images/zero.png\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 1) {
      $("#userInput3").append("<img src=\"css/images/one.png\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 2) {
      $("#userInput3").append("<img src=\"css/images/two.png\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 3) {
      $("#userInput2").append("<img src=\"css/images/three.jpg\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 4) {
      $("#userInput3").append("<img src=\"css/images/four.png\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 5) {
      $("#userInput3").append("<img src=\"css/images/five.png\" height=\"70px\">").fadeIn(6000);
    } else if (randomNumber3 === 6) {
      $("#userInput3").append("<img src=\"css/images/six.jpg\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 7) {
      $("#userInput3").append("<img src=\"css/images/seven.png\" height=\"70px\">").fadeIn(6000);
    }else if (randomNumber3 === 8) {
      $("#userInput3").append("<img src=\"css/images/eight.png\" height=\"70px\">").fadeIn(6000);
    } else {
      $("#userInput3").append("<img src=\"css/images/nine.png\" height=\"70px\">").fadeIn(6000);
    }
  
    $("#firstLevelScore").text(score).show();
    $("#scoreSheet").show();
    $("input#inputs").empty();
  });
});
