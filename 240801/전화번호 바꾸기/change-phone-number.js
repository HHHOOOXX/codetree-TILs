const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let z = input[0];
let y = input[1];
let x = input[2];
console.log(`${z}-${x}-${y}`);