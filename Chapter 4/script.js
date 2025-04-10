// // CHAPTER 4 EXERCISES

// EXERCISE 1 (The Sum Of A Range)

// // Creating an array of the range between 2 numbers
// function range(start, end, step = 1) {
//     //VALIDATION CHECKS
//     // If start or end aren't numbers, tell off the user (additional check for step presence)
//     if (typeof start !== "number" || isNaN(start) || typeof end !== "number" || isNaN(end) || step === 0) {
//         return "C'mon man, give me a number. Not whatever the fuck you just gave me. Please.";
//     }

//     // Implementation for a present step (defaults to step = 1)
//     let result = [];
//     if ((step > 0 && start > end) || (step < 0 && start < end)) {
//         return [];
//     } else {
//         for (let i = start; step < 0 ? i >= end : i <= end; i += step) {
//             result.push(i);
//         }
//         return result;
//     }
// };

// //range() testing -- WORKS OK
// let test = range(10, 2, -2);
// console.log(test);

// // Creating function that returns the sum of the array's contents
// function sum(numbers) {
//     let result = 0;
//     for (let num of numbers) {
//         result += num;
//     }
//     return result;
// };

// //sum() testing -- WORKS OK
// let sumResult = sum(test);
// console.log(sumResult);

// ------------------------------------------   EXERCISE 1 WORKS   ---------------------------------------------------------//

// EXERCISE 2 (Reversing an Array)

// // Returning a new array
// function reverseArray(arrayToReverse) {
//    let count = arrayToReverse.length - 1;
//    let result = [];
//    for (let i = count; i >= 0; i--) {
//         result.push(arrayToReverse[i]);
//    } 
//    return result;
// }

// //reverseArray() testing -- WORKS OK
// let test = [1, 3, 5, 7, 9, 11];
// // console.log(reverseArray(test));

// // Modifying original array
// function reverseArrayInPlace(arrayToModify) {    
//     for (let i = 0; i < Math.floor(arrayToModify.length / 2); i++) {
//         let temp = arrayToModify[i];
//         arrayToModify[i] = arrayToModify[arrayToModify.length - 1 - i];
//         arrayToModify[arrayToModify.length - 1 - i] = temp;
//     }
//     return arrayToModify;
// }

// //reverseArrayInPlace() testing -- WORKS OK
// console.log(reverseArrayInPlace(test));

// ------------------------------------------   EXERCISE 2 WORKS   ---------------------------------------------------------//