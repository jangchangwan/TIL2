/*
문제
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.


5
20 10 35 30 7

7 35
*/

let fs = require("fs");
// const [N, input] = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, input] = fs.readFileSync("./input.txt").toString().split("\n");
let inputArray: string[] = input.trim().split(" ");
let minNum: number = parseInt(inputArray[0]);
let maxNum: number = parseInt(inputArray[0]);
let curNum: number;
for (let i = 0; i < inputArray.length; i++) {
  curNum = parseInt(inputArray[i]);
  if (curNum < minNum) {
    minNum = curNum;
  }

  if (curNum > maxNum) {
    maxNum = curNum;
  }
}

console.log(`${minNum} ${maxNum}`);
