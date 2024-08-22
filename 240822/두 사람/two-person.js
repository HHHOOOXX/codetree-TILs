const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let person1 = input[0].split(" ");
let person2 = input[1].split(" ");

let age1 = Number(person1[0]);
let gender1 = person1[1];

let age2 = Number(person2[0]);
let gender2 = person2[1];

if ((age1 >= 19 && gender1 === "M") || (age2 >= 19 && gender2 === "M")) {
    console.log(1);
} else {
    console.log(0);
}