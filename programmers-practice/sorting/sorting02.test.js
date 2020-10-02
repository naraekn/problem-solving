// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution1(numbers) {
  const arr = [...numbers]
    .map((value) => String(value))
    .sort((a, b) => parseInt(b+a) - parseInt(a+b));

  return arr.every((value) => value === '0') ? '0' : arr.join('');
}


test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([6, 10, 2]))
        .toEqual("6210"); 

      expect(
        solution([3, 30, 34, 5, 9]))
        .toEqual("9534330");  
      
      expect(
        solution([3, 30, 31, 34, 33, 5, 9]))
        .toEqual("95343333130"); 

      expect(
        solution([3, 30, 31, 5, 9]))
        .toEqual("9533130"); 

      expect(
        solution([3044, 304]))
        .toEqual("3044304"); 
        
      expect(
        solution([3044, 304]))
        .toEqual("3044304");  

      expect(
        solution([404, 40]))
        .toEqual("40440");      

      expect(
        solution([40, 404]))
        .toEqual("40440");      
      
      expect(
        solution([40, 403]))
        .toEqual("40403"); 

      expect(
        solution([0, 0]))
        .toEqual("0");   
  });
});
