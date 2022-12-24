// const xMarksTheSpot = (input) => {
//   let sample = input.flat(Infinity);
//   let err = sample.join("").match(/x/g);
//   if (!err || err.length > 1) {
//     return [];
//   }
//   let row = Math.floor(sample.join("").indexOf("x") / input[0].length);
//   let column = sample.join("").indexOf("x") % input[0].length;
//   return [row, column];
// };

// console.log(
//   xMarksTheSpot([
//     ["o", "o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o", "o"],
//   ])
// );

// let zero = (sign) => {
//   return `0 ${sign}`;
// };
// let one = () => {
//   1;
// };
// let two = () => {
//   2;
// };
// let three = (num) => {
//   return eval(`3 ${num || ""}`);
// };
// let four = () => {
//   4;
// };
// let five = (sign) => {
//   return +eval(`5 ${sign || ""}`);
// };
// let six = () => {
//   6;
// };
// let seven = () => {
//   7;
// };
// let eight = (sign) => {
//   return Math.floor( +eval(`8 ${sign || ""}`))
// };
// let nine = () => {
//   9;
// };

// let plus = () => {};
// let minus = () => {};
// let times = (num) => {
//   return `* ${num}`;
// };
// let divide = (num) => {
//   return `/ ${num}`;
// };

// console.log(eight(divide(three())));

// function isPangram(string) {
//   string = string.split(" ");
//   let index = 0,
//     newArr = [];

//   for (var i = 0; i < string.length; i++) {
//     ls = string[i].length;
//     for (let m = 0; m < ls - 1; m++) {
//       for (let l = m + 1; l < ls; l++) {
//         if (string[i][m] === string[i][l]) {
//           newArr[index] = string[i][m];
//           index++;
//         }
//       }
//     }
//   }
//   if (index>0) {
//     return false
//   }else{
//     return true
//   }
//   //   console.log(index);
// }
// console.log(isPangram("abcdefghijklmopqrstuvwxyz"));
