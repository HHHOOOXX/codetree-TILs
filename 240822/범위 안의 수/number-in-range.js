const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if (10 <= a && a <= 20) {
    console.log("yes");
}
else {
    console.log("no");
}