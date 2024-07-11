"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  // Write your code here

  const elements: number = arr.length;
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;

  for (let i = 0; i < elements; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      zero++;
    }
  }

  const proportionPositive: string = (positive / elements).toFixed(6);
  const proportionNegative: string = (negative / elements).toFixed(6);
  const proportionZero: string = (zero / elements).toFixed(6);

  console.log(proportionPositive);
  console.log(proportionNegative);
  console.log(proportionZero);
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
