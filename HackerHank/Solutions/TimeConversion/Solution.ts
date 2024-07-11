"use strict";

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
  // Write your code here

  let end: string = s.slice(8, 10).toUpperCase();
  let start: number = Number(s.slice(0, 2));

  if (end === "AM") {
    if (start == 12) {
      return "00" + s.slice(2, 8);
    }
    return s.slice(0, 8);
  } else if (start == 12) {
    return s.slice(0, 8);
  } else {
    return start + 12 + s.slice(2, 8);
  }
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
