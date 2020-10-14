// function solution1(input) {
//   const parsed = input.split('\n').map(v => v.split(' '));
  
//   const n = parseInt(parsed[0]);

//   const balloons = parsed[1].map((v, i) => [parseInt(v), i+1]);

//   const orders = [];

//   const isEmpty = (arr) => arr.length === 0;

//   let index = 0;
  
//   while(!isEmpty(balloons)) {
//     const balloon = balloons[index];
//     orders.push(balloon[1]);
//     balloons.splice(index, 1);

//     index = balloon[0] > 0 
//       ? (((index-1)+balloon[0])%balloons.length)
//       : (((index)+balloons.length+balloon[0])%balloons.length);
//   }

//   return orders.join(' ');
// }  

// test('sample', () => {
//   [solution1].forEach(solution => {
//       expect(
//         solution(`5
// 3 2 1 -3 -1`))
//         .toEqual('1 4 5 3 2'); 
        
//       expect(
//         solution(`5
// -5 -5 -5 -5 -5`))
//         .toEqual('1 5 3 2 4');     
//   });
// });