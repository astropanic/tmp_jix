var canvas = document.getElementById('game');

canvas.width  = 800;
canvas.height = 600;

var ctx = canvas.getContext("2d");

clear = function(){
    ctx.fillStyle = "#CCC";
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
}

game = {

  init: function(){
    this.clock = new Clock();
    this.boardSetup();
    this.playerSetup();
    this.keysSetup();
    this.graphicsSetup();
  },

  boardSetup: function(){
    clear();
    ctx.beginPath();
    ctx.rect(0,0,800,600);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(400, 600, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    console.log("boardSetup begin");
    console.log("boardSetup done");
  },

  playerSetup: function(){
    console.log("playerSetup begin");
    console.log("playerSetup done");
  },

  keysSetup: function(){
    console.log("keysSetup begin");
    console.log("keysSetup done");
  },

  graphicsSetup: function(){
    (function animationLoop(){
      window.requestAnimationFrame(animationLoop, canvas);
      game.redraw();
    })();
  },

  redraw: function(){

    game.clock.tick();
  }

}

game.init();
