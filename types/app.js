function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = "Result is: ";
add(number1, number2, printResult, phrase);
// object
var person = {
    name: "John",
    age: 30,
    role: [2, 'admin']
};
console.log(person.name);
// array
var hobbies;
hobbies = ['sports', 'athletes'];
// better autocomplete
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var item = hobbies_1[_i];
    console.log(item.toLocaleLowerCase());
    // item.map(item => item) GIVES error when you try to use an unsupported method
}
// tuple
var personTwo = {
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
var personThree = {
    name: "John",
    age: 30,
    role: Role.ADMIN,
};
if (personThree.role === Role.ADMIN) {
    console.log('is admin');
}
