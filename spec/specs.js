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
  it("adds 'ay' to the end of a word that starts with the letter a", function(){
    expect(pigLatin('apple')).to.equal('appleay');
  });
  it("adds 'ay' to the end of a word that starts with any vowel", function(){
    expect(pigLatin('english')).to.equal('englishay');
  });
  it("takes a single consonant at the beginning of a word and moves it to the end", function(){
    expect(pigLatin('cat')).to.equal('atcay');
  });
  it("takes two consonants from the beginning of a word and moves them to the end", function(){
    expect(pigLatin('cricket')).to.equal('icketcray');
  });
});

describe("vowelCheck", function(){
  it("returns true if a word has a vowel in the specified spot", function(){
    expect(vowelCheck("peanut", 1)).to.equal(true);
  });
});
