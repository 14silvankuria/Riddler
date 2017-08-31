
$(document).ready(function(){

  var canvas = document.getElementById("gameCanvas");
  var canvasContext = canvas.getContext("2d");
  var gameImage = document.getElementById("hiddenImage");
  canvasContext.drawImage(gameImage, 0, 0, 1080, 650);
//SPRITE ANIMATION
  var fishImage = new Image();
  fishImage.src = "css/images/fish.gif";

  var fish = sprite({
    context: canvas.getContext("2d"),
    width: 300,
    height: 300,
    image: fishImage
  });

  function sprite (options) {

    var that = {};

    frameIndex = 0,
    tickCount = 0,
    ticksPerFrame = options.ticksPerFrame || 0;

    that.update = function () {

        tickCount += 1;

        if (tickCount > ticksPerFrame) {

        	tickCount = 0;

            // Go to the next frame
            frameIndex += 1;
        }
    };

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    that.render = function () {
        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           200,
           that.width,
           that.height);
    };


    return that;
}
fish.render();


/*
  var gamePiece = document.getElementById("hiddenImage1");
  canvasContext.drawImage(gamePiece, 20, 300, 30, 30);
  */
  $("#startGame2").click(function(){


  });

});
