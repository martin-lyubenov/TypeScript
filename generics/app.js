// const names = ["Martin", "Lyubenov"];
// generic typev- a type connected to another type - example - Array to string, number, union ( number | string), etc...
var names = [];
names[0].split(",");
var numbers = [];
numbers[0].toFixed(2);
// generic type - promise
var promist = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(15);
    }, 1000);
});
promist.then(function (data) {
    data.toFixed(2); // TS knows the return type because it was spesified with the generic type
});
var users = [];
var user1 = {
    name: "John",
    age: 25,
};
var user2 = {
    name: "Pesho",
};
users.push(user1);
// users.push(user2); - throws an error
