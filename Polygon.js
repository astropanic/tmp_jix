var Polygon = function(coords){
  this.coords = coords;
};

Polygon.prototype.lines = function(){
  var size = this.coords.length;
  var out = [];
  for(var i = 0; i < size-1; i++){
    console.log(this.coords[i]);
    out.push(new Line([this.coords[i][0], this.coords[i][1]], [this.coords[i+1][0], this.coords[i+1][1]]));
  }
  out.push(new Line([this.coords[size-1][0],this.coords[size-1][1]],[this.coords[0][0], this.coords[0][1]]));
  return out;
};

