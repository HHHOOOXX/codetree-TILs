const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let middle = Number(input[0]);
let Final = Number(input[1]);

if (middle >= 90 && Final >= 95) {
    console.log(100000);
}
else if (middle >= 90 && Final >= 90) {
    console.log(50000);
}
else {
    console.log(0);
}