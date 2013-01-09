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
    this.boardSetup();
    this.playerSetup();
    this.keysSetup();
    this.graphicsSetup();
  },

  boardSetup: function(){
    clear();
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
    console.log("graphicSetup begin");
    console.log("graphicSetup done");
  }

}

game.init();
