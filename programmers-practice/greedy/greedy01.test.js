// function solution1(n, lost, reserve) {
//   const notReserved = [...reserve]; 
//   const participants = [...Array(n).keys()]
//     .map(v => v+1)
//     .filter(s => !lost.includes(s));

//   const canBorrow = (id) => notReserved.includes(id); 

//   lost.forEach((id) => {
//     if(canBorrow(id-1)) {
//       const index = notReserved.indexOf(id-1);
//       notReserved.splice(index, 1);
//       console.log(`${id} : ${notReserved}`);
//       participants.push(id);
//     } else if(canBorrow(id+1)) {
//       const index = notReserved.indexOf(id+1);
//       notReserved.splice(index, 1);
//       console.log(`${id} : ${notReserved}`);
//       participants.push(id);
//     }
//   })
  
//   // const notLost = (id) => !lost.includes(id);
//   // const canBorrow = (id) => notReserved.includes(id-1) || notReserved.includes(id+1);

//   // for (let i = 1; i <= n; i++) {
//   //   if (notLost(i)) {
//   //     students.push(i);
//   //     console.log(`notLost: ${i}`);
//   //   } else if(canBorrow(i)) {
//   //     students.push(i);
//   //     notReserved.splice(notReserved.indexOf(i-1) || notReserved.indexOf(i+1));
//   //     console.log(`canBorrow: ${i}`);
//   //     console.log(notReserved);
//   //   }
//   // }

//   return participants.length;
// }

// test('sample', () => {
//   [solution1].forEach(solution => {
//       // expect(
//       //   solution(5, [2, 4], [1, 3, 5]))
//       //   .toEqual(5); 

//       // expect(
//       //   solution(5, [2, 4], [3]))
//       //   .toEqual(4); 

//       // expect(
//       //   solution(3, [3], [1]))
//       //   .toEqual(2);    
        
//       expect(
//         solution(5, [2,4], [1]))
//         .toEqual(2);      
//   });
// });
