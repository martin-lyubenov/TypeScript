// adding custom types
type Combinable = number | string; // you can use any non key word
type LiteralType = "string1" | "string2";

function combine(
  input1: Combinable,
  input2: Combinable,
  literalType: LiteralType // literal type, we can force a param tobe one of 2 ( or more) values and types
) {
  // adding a '|' makes atype union

  // with union types you have to add a runtime check as well

  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toLocaleString();
  }
}

const combinedAges = combine(30, 230, "string1");
console.log(combinedAges);

const combinedNames = combine("Max", "Pesho", "string1");
console.log(combinedNames);


type User = { name: string; age: number };
     
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}