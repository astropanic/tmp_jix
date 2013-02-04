Video.init('game', 400, 300);

Key = {
  onKeydown: function(event){
    Player.pts.push(new Point(Player.x, Player.y));
    switch(event.keyCode){
      case 37: // left
        Player.dx = -1;
        Player.dy =  0;
        Player.ping();
      break;
      case 39: // right
        Player.dx =  1;
        Player.dy =  0;
        Player.ping();
      break;
      case 38: // up
        Player.dx =  0;
        Player.dy = -1;
        Player.ping();
      break;
      case 40: // down
        Player.dx =  0;
        Player.dy =  1;
        Player.ping();
      break;
    }
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
    this.Player = Player.init();
    this.boardSetup();
    this.PlayerSetup();
    this.keysSetup();
    this.graphicsSetup();

    window.addEventListener('keydown', function(event) {
      Key.onKeydown(event); }, false);
  },

  boardSetup: function(){
    console.log("boardSetup begin");
    game.polygons = [
      new Polygon([[0,0],[0,300],[400,300],[400,0],[0,0]]),
      new Polygon([[50,50],[50,250],[350,250],[350,50],[50,50]])
      ];

    console.log("boardSetup done");
  },

  PlayerSetup: function(){
    console.log("PlayerSetup begin");
    console.log("PlayerSetup done");
  },

  keysSetup: function(){
    console.log("keysSetup begin");
    console.log("keysSetup done");
  },

  graphicsSetup: function(){
    (function animationLoop(){
      window.requestAnimationFrame(animationLoop, Video.canvas);
      game.timing();
      game.Player.distance = Player.speed * game.delta;
      game.Player.move();
      if(Video.need_redraw){
        Video.clear();
        Video.drawPath(Player.pts);
        Video.drawPolygons(game.polygons);
	Video.save();
        Video.drawPlayer(Player.x, Player.y);
        Video.need_redraw = false;
      }
    })();
  }
}
game.init();
