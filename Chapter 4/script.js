// // CHAPTER 4 EXERCISES

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

// //sum() testing --
// let sumResult = sum(test);
// console.log(sumResult);

// ------------------------------------------   EXERCISE 1 WORKS---------------------------------------------------------//