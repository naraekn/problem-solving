// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution1(clothes) {
  const hash = {};
  
  clothes.forEach((cloth) => {      
      hash[cloth[1]] = hash[cloth[1]] === undefined
          ? [cloth[0]]
          : [...hash[cloth[1]], cloth[0]];       
  });
  
  const counts = Object.values(hash).map((list) => list.length);
  
  const reducer = (accumulator, currentValue) => accumulator * currentValue;

  const result = counts.map((count) => count + 1).reduce(reducer) - 1;
  
  return result;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
          solution([
            ["yellow_hat", "headgear"], 
            ["blue_sunglasses", "eyewear"], 
            ["green_turban", "headgear"]
          ]))
          .toEqual(5);

      expect(
          solution([
            ["crow_mask", "face"], 
            ["blue_sunglasses", "face"], 
            ["smoky_makeup", "face"]
          ]))
          .toEqual(3);         
  });
});