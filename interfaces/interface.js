var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Person.prototype.greeting = function (phrase) {
        console.log(phrase);
    };
    return Person;
}());
var user1 = new Person("John", 25, "test@test.com");
user1.age = 26; // should not be able to change the value but still can ??
console.log(user1);
user1.greeting("Kalabanga duuude");
