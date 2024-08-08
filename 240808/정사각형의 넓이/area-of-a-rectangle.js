const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);

let Area = n * n;

console.log(Area);
if (n < 5) {
    console.log("tiny");
}