$(document).ready(function(){
  var canvas = document.getElementById("gameCanvas");
  var canvasContext = canvas.getContext("2d");
  var gameImage = document.getElementById("hiddenImage");
  canvasContext.drawImage(gameImage, 0, 0, 800, 600);

  $("#startGame2").click(function(){
    //construcctor
    function component(width, height, color, x, y, type) {
        this.type = type;
        this.score = 0;
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.gravity = 0;
        this.gravitySpeed = 0;
        this.update = function() {
            ctx = myGameArea.context;
            if (this.type == "text") {
                ctx.font = this.width + " " + this.height;
                ctx.fillStyle = color;
                ctx.fillText(this.text, this.x, this.y);
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        this.newPos = function() {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;
            this.hitBottom();
        }
        this.hitBottom = function() {
            var rockbottom = myGameArea.canvas.height - this.height;
            if (this.y > rockbottom) {
                this.y = rockbottom;
                this.gravitySpeed = 0;
            }
        }
        this.crashWith = function(otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var crash = true;
            if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                crash = false;
            }
            return crash;
        }
    }

  })

});
