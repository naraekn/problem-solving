/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution1(n, words) {
  const wrongAnswer = (i) => 
    words[i-1][words[i-1].length-1] !== words[i][0] ||
    words.slice(0,i).includes(words[i]);

  const endGame = (i) => i === words.length;

  let turn = 1;

  while(!endGame(turn)) {
    if(wrongAnswer(turn)) break;
    turn++;
  }
  
  return endGame(turn) 
    ? [0,0] 
    : [turn % n + 1, parseInt(turn/n) + 1];
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(3, 
          ["tank", "kick", "know", "wheel", "land", 
          "dream", "mother", "robot", "tank"]))
        .toEqual([3,3]); 

      expect(
        solution(5, 
          ["hello", "observe", "effect", "take", 
          "either", "recognize", "encourage", "ensure", 
          "establish", "hang", "gather", "refer", 
          "reference", "estimate", "executive"]))
        .toEqual([0,0]); 

      expect(
        solution(2, 
          ["hello", "one", "even", "never", 
          "now", "world", "draw"]))
        .toEqual([1,3]); 
  });
});