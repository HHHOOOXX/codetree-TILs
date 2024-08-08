const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = Number(a+b+c);
let average = Number((a+b+c)/3);
let sub = Number(sum - average);

console.log(sum)
console.log(average)
console.log(sub);