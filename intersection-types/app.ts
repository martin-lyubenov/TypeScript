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

// Type casting

const userInputElement = document.getElementById(
  "userInput"
)! as HTMLInputElement; // we specify the type of element beforehand so TS knows what to expect

userInputElement.value = "Hi There";

// Index types

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Hulqlqlql",
  username: "Hey, this is wrong and stuff!",
};

// function overloads

function addTogheter(a: number, b: number): number;
function addTogheter(a: string, b: string): string;
function addTogheter(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is a type guard with the use of typeof
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addTogheter(5, 5);
const stringResult = addTogheter("Hi", "There");
stringResult.toLocaleLowerCase();

// optional chaining 

const fetchedUserData ={
    id: 'u1',
    name: 'Pesho',
    job: {title: 'Gosho', desc: 'Gosho is the best and he knows it all'}
}


// we can add ? to tell TS that a property may not exsists and that it should be accesed only if it does
console.log(fetchedUserData.job?.title);
