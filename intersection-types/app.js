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
