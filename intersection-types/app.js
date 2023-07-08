var _a;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        // this is a type guard with the use of typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
var birdie = {
    type: "bird",
    flyingSpeed: 25,
};
moveAnimal(birdie);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
// Type casting
var userInputElement = document.getElementById("userInput"); // we specify the type of element beforehand so TS knows what to expect
userInputElement.value = "Hi There";
var errorBag = {
    email: "Hulqlqlql",
    username: "Hey, this is wrong and stuff!",
};
function addTogheter(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        // this is a type guard with the use of typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = addTogheter(5, 5);
var stringResult = addTogheter("Hi", "There");
stringResult.toLocaleLowerCase();
// optional chaining 
var fetchedUserData = {
    id: 'u1',
    name: 'Pesho',
    job: { title: 'Gosho', desc: 'Gosho is the best and he knows it all' }
};
// we can add ? to tell TS that a property may not exsists and that it should be accesed only if it does
console.log((_a = fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
