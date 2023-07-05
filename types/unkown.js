"use strict";
// can hold any type but there is still some type checks, better than any but overall should be avoided
let userInput;
let userName;
userInput = 5;
userInput = "Hey";
// userName = userInput; Error
// you need to perform a runtime check to avoid TS errors
if (userInput === "string") {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError("An error occurred", 500);
