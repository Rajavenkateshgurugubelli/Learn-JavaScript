/**
 * TOPIC: Function Basics
 */

console.log("--- 1. Function Declaration ---");
// Standard way to define a function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob"));


console.log("\n--- 2. Function Parameters & Defaults ---");
function calculateArea(width, height = 10) { // Default height is 10
    return width * height;
}

console.log("Area (5x20):", calculateArea(5, 20));
console.log("Area (5xDefault):", calculateArea(5)); // Uses default height


console.log("\n--- 3. Function Expression ---");
// Storing a function in a variable (anonymous function)
const multiply = function (a, b) {
    return a * b;
};

console.log("2 * 4 =", multiply(2, 4));
