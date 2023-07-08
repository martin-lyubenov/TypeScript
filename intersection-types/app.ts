type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is a type guard with the use of typeof
    return a.toString() + b.toString();
  }
  return a + b;
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

// discriminated union - when you have one common property in every type/interface of our union
type Animal = Bird | Horse;

const birdie: Animal = {
  type: "bird",
  flyingSpeed: 25,
};

moveAnimal(birdie);

function moveAnimal(animal: Animal) {
  let speed;

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
