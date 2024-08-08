const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input[0]);

let Area = Number(n**2);

console.log(Area);
if (n > 5) {
    console.log("tiny");
}