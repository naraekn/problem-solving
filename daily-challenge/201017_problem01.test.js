/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 * 
 * [느낀 점]
 * 오늘은 코드가 구려서 마음에 안든다.
 */

function solution1(board, moves) {
  const basket = [];
  const removed = [];

  const changeRowsToColumns = (_, idx, arr) => [...Array(arr.length)]
      .map((_,i)=> arr[i][idx])
      .filter((value) => value!==0);

  const boardByColumns = board
      .map(changeRowsToColumns);


  moves.forEach((move) => {
    if(boardByColumns[move-1].length !== 0) {
      const doll = boardByColumns[move-1].shift();
      
      if(basket[basket.length-1] === doll) {
        const inside = basket.pop();
        removed.push(doll, inside);
      } else {
        basket.push(doll);
      }
    }
  });

  return removed.length;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(
          [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], 
          [1,5,3,5,1,2,1,4]
        ))
        .toEqual(4); 
  });
});