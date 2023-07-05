"use strict";
function combine(input1, input2, literalType // literal type, we can force a param tobe one of 2 ( or more) values and types
) {
    // adding a '|' makes atype union
    // with union types you have to add a runtime check as well
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toLocaleString();
    }
}
const combinedAges = combine(30, 230, "string1");
console.log(combinedAges);
const combinedNames = combine("Max", "Pesho", "string1");
console.log(combinedNames);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
