if(!Array.prototype.last) {
  Array.prototype.last = function() {
    return this[this.length - 1];
  }
}

Video.init('game', 400, 300);

Key = {
  onKeydown: function(event){
    player.pts.push([player.x, player.y]);
    switch(event.keyCode){
      case 37: // left
        player.dx = -1;
        player.dy =  0;
      break;
      case 39: // right
        player.dx =  1;
        player.dy =  0;
      break;
      case 38: // up
        player.dx =  0;
        player.dy = -1;
      break;
      case 40: // down
        player.dx =  0;
        player.dy =  1;
      break;
    }
  }
}

player = {
  init: function(){
    this.x     = 200;
    this.y     = 300;
    this.dst_x = this.x;
    this.dst_y = this.y;
    this.speed = 80;
    this.dx    = 0;
    this.dy    = 0;
    this.moved = false;
    this.pts   = [[200,300]];

    return this;
  },

  move: function(){
    player.dst_x = player.dst_x + player.dx * player.distance;
    player.dst_y = player.dst_y + player.dy * player.distance;

    var int_x = Math.ceil(player.dst_x);
    var int_y = Math.ceil(player.dst_y);

    var last = player.pts.length -1;

    if(int_x != player.x) {
      player.x = int_x;
      player.pts[last][0] = player.x;
      Video.need_redraw = true;
    }
    if(int_y != player.y) {
      player.y = int_y;
      player.pts[last][1] = player.y;
      Video.need_redraw = true;
    }
  },
  stop: function(){
    player.dx = 0;
    player.dy = 0;
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

    Video.clear();
    Video.drawPolygons(game.polygons);
    Video.drawPlayer(player.x, player.y);

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
      window.requestAnimationFrame(animationLoop, Video.canvas);
      game.timing();
      game.player.distance = player.speed * game.delta;
      game.player.move();
      if(Video.need_redraw){
        Video.clear();
        Video.drawPath(player.pts);
        Video.drawPolygons(game.polygons);
        Video.drawPlayer(player.x, player.y);
        Video.need_redraw = false;
      }
    })();
  }
}
game.init();
