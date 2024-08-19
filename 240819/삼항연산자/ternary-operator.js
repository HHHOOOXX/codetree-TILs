const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


let a = Number(input[0]);

let score = a >= 100 ? 'pass':'failure';
console.log(score)