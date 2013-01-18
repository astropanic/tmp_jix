var Video = {}

Video.init = function(documentId, width, height){
  this.canvas        = document.getElementById(documentId);
  this.canvas.width  = 400;
  this.canvas.height = 300;
  this.ctx           = this.canvas.getContext("2d");
  this.need_redraw   = false;
}

Video.clear = function(){
  this.ctx.fillStyle = "#CCC";
  this.ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
}

Video.drawPlayer = function(x, y){
  this.ctx.beginPath();
  this.ctx.arc(player.x, player.y, 5, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = 'red';
  this.ctx.fill();
  this.ctx.lineWidth = 2;
  this.ctx.strokeStyle = 'black';
  this.ctx.stroke();
}

Video.drawPath = function(pts){
  this.ctx.beginPath();
  this.ctx.moveTo(pts[0][0], pts[0][1]);
  for(var i = 0 ; i < pts.length; i++) {
    this.ctx.lineTo(pts[i][0], pts[i][1]);
  }
  this.ctx.lineWidth = 2;
  this.ctx.strokeStyle = 'black';
  this.ctx.stroke();

}

Video.drawPolygons = function(polygons){
  this.ctx.beginPath();
  var count = polygons.length;
  for(var i = 0 ; i < count ; i++){
    var edges = polygons[i].length;
    var x1 = polygons[i][0][0];
    var y1 = polygons[i][0][1];
    this.ctx.moveTo(x1,y1);
    var xp = x1;
    var yp = y1;
    for(var j = 1 ; j < edges ; j++){
      var x2 = polygons[i][j][0];
      var y2 = polygons[i][j][1];
      this.ctx.lineTo(x2, y2);
      this.ctx.strokeStyle = 'red';
      this.ctx.lineWidth = 2;
    }
    this.ctx.stroke();
  }
}
