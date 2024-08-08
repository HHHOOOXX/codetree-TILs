const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
//변수 두 개를 선언해서 두 정수를 입력받음
let a = Number(input[0]);
let b = Number(input[1]);
//두 수의 크기를 비교하고 큰 수에서 작은 수를 뺀 값을 출력
if (a >= b) {
    console.log(a - b);
}

if (a < b) {
    console.log(b - a);
}