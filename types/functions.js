"use strict";
// TS can infer the type of return value - number, string, boolean etc...
function add(n1, n2) {
    return n1 + n2;
}
// if a funciton does not return anything it has the TS type of Void
function printResult(num) {
    console.log("Result is " + num);
}
printResult(add(5, 10));
// Function type
let combineResult;
combineResult = add; // you can assign any function
// combineResult = 5; Error
// spesific funciton type
let combineResultFunctionType;
combineResultFunctionType = add;
// combineResultFunctionType = printResult; Error, printResultdoes not meet the TS requirement
function addHandler(number1, number2, cb) {
    const result = number1 + number2;
    cb(result);
}
addHandler(15, 10, (result) => {
    console.log(result);
});
