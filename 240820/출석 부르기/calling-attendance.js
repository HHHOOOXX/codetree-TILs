const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let a = input;

if (a === 1) {
    console.log("John");
}
else if (a === 2) {
    console.log("Tom");
}
else if (a === 3) {
    console.log("Paul");
}
else {
    console.log("Vacancy");
}