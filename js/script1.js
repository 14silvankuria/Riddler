$(document).ready(function(){
  $("form#gameForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#inputs").val());

    var randomNumber = Math.floor((Math.random()*100));

    $("label#userInput").append("The lucky number is: " + randomNumber);

    var difference = Math.abs(randomNumber - userInput);
    var score;
    if (difference <=10) {
      score = 100
    } else if (difference>10 && difference<=20){
      score = 50
    } else {
      score = 10
    }
    $(".score").text(score).show();
  });
});
