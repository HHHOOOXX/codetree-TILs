const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let a = input;

if (a === 5) {
    console.log("A");
}
if (a % 2 === 0) {
    console.log("B");
}