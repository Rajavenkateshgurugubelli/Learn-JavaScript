/**
 * TOPIC: Spread & Rest Operators (...)
 * Three dots that change behavior based on context.
 */

console.log("--- 1. Spread Operator (Expand) ---");

// Combining Arrays
const groupA = [1, 2, 3];
const groupB = [4, 5, 6];
const combined = [...groupA, ...groupB];
console.log("Combined:", combined);

// Cloning Objects
const original = { a: 1, b: 2 };
const clone = { ...original, c: 3 }; // Copy and add property
console.log("Clone:", clone);


console.log("\n--- 2. Rest Operator (Gather) ---");

// In Function Arguments: "Accept any number of arguments"
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum (1, 2):", sumAll(1, 2));
console.log("Sum (1, 2, 3, 4, 5):", sumAll(1, 2, 3, 4, 5));
