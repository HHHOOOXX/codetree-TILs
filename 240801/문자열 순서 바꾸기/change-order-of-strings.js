const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 문자열 순서 변경
let s = String(input[0]);
let t = String(input[1]);

// 출력
console.log(t);
console.log(s);