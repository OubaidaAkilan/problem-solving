"use strict";

// 1) ---------------------
//
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//
// ------------------------

const findMax = (arr) => {
    let max = 0;
    // write your code here
    for (let index = 0; index < arr.length; index++) {
        if (max < arr[index]) {
            max = arr[index];
        }
    }
    return max;
}

// 2) ---------------------
//
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//
// ------------------------

const sumNums = (arr) => {
    let sum = 0;
    // write your code here

    for (let index = 0; index < arr.length; index++) {
        let type = typeof arr[index];

        if (type === "number") {
            sum = sum + arr[index];
        }
    }

    return sum;
}

// 3) ---------------------
//
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
//
// ------------------------
const reverseArray = (arr) => {
    // write your code here

    let reverseArry = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        reverseArry.push(arr[index]);
    }
    return reverseArry;
}

module.exports = { findMax, sumNums, reverseArray };