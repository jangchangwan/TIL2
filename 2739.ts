let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
//const input = fs.readFileSync("./input.txt").toString().split(" ");
let num: number = parseInt(input);

for (let i: number = 1; i < 10; i++) {
  let sum_num = num * i;
  console.log(`${num} * ${i} = ${sum_num}`);
}
