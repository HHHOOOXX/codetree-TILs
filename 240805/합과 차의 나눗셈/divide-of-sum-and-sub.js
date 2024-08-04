const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

// (a + b)의 값을 (a - b)로 나누기
let result = (a + b) / (a - b);

// 소수점 둘째 자리까지 반올림하여 출력
console.log(result.toFixed(2));