// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const mergedObj = merge({ name: "Martin" }, { age: 33 }); //TS cannot tell the what properties are merged together you will not have type support for name or age
// // you can use type case but it is cumbersome
// const mergedObjTwo = merge({ name: "Martin" }, { age: 33 }) as {
//   name: string;
//   age: number;
// };
// mergedObjTwo.age;
// generic merge
function merge(objA, objB) {
    // return Object.assign(objA, objB)
    return __assign(__assign({}, objA), objB);
}
var mergedObj3 = merge({ name: "Martin", hobbies: ["Sports"] }, { age: 33 });
// keyof - you can use it to determine weather a generic type is the object key of another generic type
function extratAndConvert(obj, key) {
    console.log(obj[key]);
}
extratAndConvert({ name: 'Pesho' }, 'name');
