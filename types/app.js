"use strict";
function addApp(num1, num2, showResult, phrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
}
const number1 = 5;
const number2 = 2.8;
const printResultApp = true;
const phrase = "Result is: ";
addApp(number1, number2, printResultApp, phrase);
// object
const person = {
    name: "John",
    age: 30,
    role: [2, 'admin']
};
console.log(person.name);
// array
let hobbies;
hobbies = ['sports', 'athletes'];
// better autocomplete
for (const item of hobbies) {
    console.log(item.toLocaleLowerCase());
    // item.map(item => item) GIVES error when you try to use an unsupported method
}
// tuple
const personTwo = {
    name: "John",
    age: 30,
    role: [2, 'admin'] // tuple
};
// personTwo.role[1] = 10; Error of type wrong assignment
personTwo.role.push('hello'); // push is an exception, you should not be able to add more items to a Tuple
// personTwo.role = [1, 'admin', 'hello']  Error - too many items assign
// enum - exists only in TS
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // authomatically assigns numbers to the roles ADMIN = 0, READ_ONLY = 1, etc
var RoleTest;
(function (RoleTest) {
    RoleTest[RoleTest["ADMIN"] = 5] = "ADMIN";
    RoleTest[RoleTest["READ_ONLY"] = 6] = "READ_ONLY";
    RoleTest[RoleTest["AUTHOR"] = 7] = "AUTHOR";
})(RoleTest || (RoleTest = {}));
; // change the initial starting number ADMIN = 5, READ_ONLY = 6, etc
var RoleTestTwo;
(function (RoleTestTwo) {
    RoleTestTwo["ADMIN"] = "Hello";
    RoleTestTwo[RoleTestTwo["READ_ONLY"] = 5] = "READ_ONLY";
    RoleTestTwo["AUTHOR"] = "Author";
})(RoleTestTwo || (RoleTestTwo = {}));
; // you can assign unique value to each role
const personThree = {
    name: "John",
    age: 30,
    role: Role.ADMIN,
};
if (personThree.role === Role.ADMIN) {
    console.log('is admin');
}
// any type - allows all types to be stored, not recommended as you lose the benefits of TS
let anyArray;
anyArray = [1, 'admin', null];
