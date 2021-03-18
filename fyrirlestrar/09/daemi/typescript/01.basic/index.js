/*
 * Setja þarf upp typescript globally
 * npm install -g typescript
 *
 * og túlka í javascript
 * tsc index.ts
 */
function greet(name) {
    return "hello, " + name;
}
var worldGreeting = greet('world');
var greeting = greet('óli');
console.log(worldGreeting);
console.log(greeting);
// TypeScript bannar okkur þetta ef við setjum type á `name` argument í greet
var invalidGreeting = greet(1);
console.log(invalidGreeting);
function add(x, y) {
    return x + y;
}
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (x, y) { return x + y; }, 0);
}
var result = add(1, 2);
var summed = sum(1, 2, 3, 4);
console.log(result);
console.log(summed);
var person = {
    name: 'nn'
};
if (Math.random() < 0.5) {
    person = null;
}
console.log(person.name);
