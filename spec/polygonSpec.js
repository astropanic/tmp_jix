describe("New Polygon", function() {
  it("Sets polygon points", function() {
    expect(new Polygon([[0,0],[1,0],[1,1],[0,1]]).coords).toEqual([[0,0],[1,0],[1,1],[0,1]]);
  });
});

describe("polygon.edges", function(){
  it("return all edges", function(){
    p = new Polygon([[0,0],[0,100],[100,100],[100,0]]);
    expects(p.lines()).toEqual([new Line([0,0],[0,100]), new Line([0,100],[100,100]), new Line([100,100],[100,0]), new Line([100,0],[0,0])]);
  }
}
