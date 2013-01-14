describe("New Polygon", function() {
    it("Sets polygon points", function() {
        expect(new Polygon([0,0],[1,0],[1,1],[0,1]).coords).toEqual([0,0],[1,0],[1,1],[0,1]);
    });
});
