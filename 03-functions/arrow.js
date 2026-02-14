/**
 * TOPIC: Arrow Functions (ES6)
 * 
 * Arrow functions provide a shorter syntax for writing function expressions.
 */

console.log("--- 1. Converting to Arrow Function ---");

// Old Way:
const addOld = function (a, b) {
    return a + b;
};

// New Way (Arrow):
const addNew = (a, b) => {
    return a + b;
};

console.log("Add:", addNew(10, 5));


console.log("\n--- 2. Implicit Return (One-Liners) ---");
// If the function logic is just one line returning a value, 
// we can remove the {} and the 'return' keyword!
const subtract = (a, b) => a - b;

console.log("Subtract:", subtract(10, 5));


console.log("\n--- 3. Single Parameter Shortcut ---");
// If there's only one parameter, we can remove the ()
const square = x => x * x;

console.log("Square of 5:", square(5));


console.log("\n--- 4. Real World Example (Array Mapping) ---");
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
