function combine(input1, input2) {
    // adding a '|' makes atype union
    // with union types you have to add a runtime check as well
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toLocaleString();
    }
}
var combinedAges = combine(30, 230);
console.log(combinedAges);
var combinedNames = combine("Max", "Pesho");
console.log(combinedNames);
