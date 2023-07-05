// TS can infer the type of return value - number, string, boolean etc...
function add(n1: number, n2: number) {
  return n1 + n2;
}

// if a funciton does not return anything it has the TS type of Void
function printResult(num: number) {
  console.log("Result is " + num);
}

printResult(add(5, 10));

// Function type
let combineResult: Function;

combineResult = add; // you can assign any function
// combineResult = 5; Error

// spesific funciton type
let combineResultFunctionType: (n1: number, n2: number) => number;

combineResultFunctionType = add;
// combineResultFunctionType = printResult; Error, printResultdoes not meet the TS requirement

function addHandler(
  number1: number,
  number2: number,
  cb: (result: number) => void
) {
  const result = number1 + number2;
  cb(result);
}

addHandler(15, 10, (result) => {
  console.log(result);
});
