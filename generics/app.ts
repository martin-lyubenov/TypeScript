// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Martin" }, { age: 33 }); //TS cannot tell the what properties are merged together you will not have type support for name or age
// // you can use type case but it is cumbersome
// const mergedObjTwo = merge({ name: "Martin" }, { age: 33 }) as {
//   name: string;
//   age: number;
// };
// mergedObjTwo.age;

// generic merge
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj3 = merge({ name: "Martin", hobbies: ["Sports"] }, { age: 33 });
