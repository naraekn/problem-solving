// /**
//  * [problem]
//  * Solve 0-1 knapsack problem with brute force, greedy algorithm, dynamic programming, and branch and bound.
//  * Assume it is a fractional knapsack problem when I use greedy approach.
//  * The range of benefit value is between $1 and $500 and that of weight is between 1 and 100.
//  */

// function generateItems(n) {
//   return {
//     W: n * 25,
//     items: [...Array(n)].map((_) => [
//       Math.floor((Math.random() * 500) + 1),
//       Math.floor((Math.random() * 100) + 1),
//     ]),
//   };
// }

// const items = generateItems(10);

// console.log(items);

// function bruteforce({ W, items }) {
//   const getValueSum = () => {
//     if(ddd) {
//       // 모든 경우의 수를 구한다.
//     } else  {
//       // 끝에 다 왔을 때는 sum을 한다. 
//     }
//   };

//   const maxValue = getValueSum();

//   return maxValue;
// }

// function solution1(s) {
//   return 0;
// }



// test('sample', () => {
//   [solution1].forEach(solution => {
//       expect(
//         solution("abcde"))
//         .toEqual("c");   

//       expect(
//         solution("qwer"))
//         .toEqual("we");        
//   });
// });