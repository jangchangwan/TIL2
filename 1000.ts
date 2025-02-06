let fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("./input.txt").toString().split(" ");
let [A, B] = input.map((num: number) => Number(num));
console.log(typeof A);
console.log(A + B);
