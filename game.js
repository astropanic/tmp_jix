if(!Array.prototype.last) {
  Array.prototype.last = function() {
    return this[this.length - 1];
  }
}


var canvas = document.getElementById('game');

canvas.width  = 400;
canvas.height = 300;

var ctx = canvas.getContext("2d");

var need_redraw = false;

Key = {

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,

  onKeydown: function(event){
    player.pts.push([player.x, player.y]);
    if(event.keyCode == Key.LEFT) { player.move_left()  };
    if(event.keyCode == Key.RIGHT){ player.move_right() };
    if(event.keyCode == Key.UP)   { player.move_up()    };
    if(event.keyCode == Key.DOWN) { player.move_down()  };
  }
}

clear = function(){
    ctx.fillStyle = "#CCC";
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
}

player = {
  init: function(){
    this.x = 200;
    this.y = 300;
    this.dst_x = this.x;
    this.dst_y = this.y;
    this.speed   = 80;
    this.delta_x = 0;
    this.delta_y = 0;
    this.moved   = false;
    this.pts = [[200,300]];

    return this;
  },
  draw: function(){
    ctx.beginPath();
    ctx.arc(player.x, player.y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();

  },

  move: function(){
    player.dst_x = player.dst_x + player.delta_x * player.distance;
    player.dst_y = player.dst_y + player.delta_y * player.distance;

    var int_x = Math.ceil(player.dst_x);
    var int_y = Math.ceil(player.dst_y);

    var last = player.pts.length -1;

    if(int_x != player.x) {
      player.x = int_x;
      player.pts[last][0] = player.x;
      need_redraw = true;
    }
    if(int_y != player.y) {
      player.y = int_y;
      player.pts[last][1] = player.y;
      need_redraw = true;
    }
  },
  move_up: function(){
    player.delta_y = -1;
    player.delta_x = 0;
  },
  move_down: function(){
    player.delta_y = 1;
    player.delta_x = 0;
  },
  move_left: function(){
    player.delta_y = 0;
    player.delta_x = -1;
  },
  move_right: function(){
    player.delta_y = 0;
    player.delta_x = 1;
  },
  stop: function(){
    player.delta_x = 0;
    player.delta_y = 0;
  }
}


game = {

  timing: function(){
    var now    = Date.now();
    game.delta = (now - game.then) / 1000;
    game.then  = now;
  },

  init: function(){
    this.then   = Date.now();
    this.clock  = new Clock();
    this.player = player.init();
    this.boardSetup();
    this.playerSetup();
    this.keysSetup();
    this.graphicsSetup();

    window.addEventListener('keydown', function(event) {
      Key.onKeydown(event); }, false);
  },

  boardSetup: function(){
    console.log("boardSetup begin");
    game.polygons = [
      [[0,0],[0,300],[400,300],[400,0],[0,0]],
      [[50,50],[50,250],[350,250],[350,50],[50,50]]
      ];
    game.board = {
      draw: function(){
        ctx.beginPath();
        var count = game.polygons.length;
        for(var i = 0 ; i < count ; i++){
          var edges = game.polygons[i].length;
          var x1 = game.polygons[i][0][0];
          var y1 = game.polygons[i][0][1];
          ctx.moveTo(x1,y1);
          var xp = x1;
          var yp = y1;
          for(var j = 1 ; j < edges ; j++){
            var x2 = game.polygons[i][j][0];
            var y2 = game.polygons[i][j][1];
            ctx.lineTo(x2, y2);
            ctx.lineWidth = 1;
          }
            ctx.stroke();
        }
      }
    };
    clear();
    game.board.draw();
    game.player.draw();

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
      game.timing();
      game.player.distance = player.speed * game.delta;
      game.player.move();
      if(need_redraw){
        clear();
        ctx.beginPath();
        ctx.moveTo(player.pts[0][0], player.pts[0][1]);
        for(var i = 0 ; i < player.pts.length; i++) {
          ctx.lineTo(player.pts[i][0], player.pts[i][1]);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        game.board.draw();
        game.player.draw();
        need_redraw = false;
      }
    })();
  },

  redraw: function(){
    game.clock.tick();
    game.player.move_up();
    game.player.move();
  }

}

game.init();
