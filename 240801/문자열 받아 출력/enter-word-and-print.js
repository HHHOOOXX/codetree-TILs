const fs = require("fs");
let cat = fs.readFileSync(0).toString().trim();
console.log(cat);