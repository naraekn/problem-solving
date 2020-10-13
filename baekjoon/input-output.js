const fs = require("fs");

// 문자 하나
const input1 = fs.readFileSync("/dev/stdin").toString();

// 한 칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
const input2 = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");

// 줄바꿈으로 구분
const input3 = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

// 만약 인풋값이 숫자라면
const input4 = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((a) => +a);