        //Examples

// describe("leapYear", function(){
//   it("returns false for a year that is not divisible by 4, 100, or 400", function() {
//     expect(leapYear(1993)).to.equal("false");
//   });
// });
//
//
// describe("triangleTracker", function(){
//   it("return equilateral if all sides are equal", function() {
//     expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
//   });
// });
describe("pigLatin", function(){
  it("adds 'ay' to the end of a word that starts with a vowel", function(){
    expect(pigLatin('apple')).to.equal('appleay');
  });
});
