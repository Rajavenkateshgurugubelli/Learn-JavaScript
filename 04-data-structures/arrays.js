/**
 * TOPIC: Arrays
 */

const colors = ["Red", "Green", "Blue"];

console.log("--- 1. Basic Operations ---");
colors.push("Yellow"); // Add to end
console.log("After push:", colors);

const last = colors.pop(); // Remove from end
console.log("Popped:", last);
console.log("Current:", colors);


console.log("\n--- 2. High Order Methods (Essential) ---");
const numbers = [10, 20, 30, 40, 50];

// MAP: Transform each element
// Example: Convert to currency string
const prices = numbers.map(num => `$${num}.00`);
console.log("Map (Prices):", prices);

// FILTER: Keep only elements that match a condition
// Example: Keep numbers greater than 25
const bigNumbers = numbers.filter(num => num > 25);
console.log("Filter (>25):", bigNumbers);

// FIND: Get the FIRST match
const found = numbers.find(num => num === 30);
console.log("Find (30):", found);

// REDUCE: Accumulate a value
// Example: Sum of all numbers
// 0 is the starting value of 'sum'
const total = numbers.reduce((sum, current) => sum + current, 0);
console.log("Reduce (Total):", total);
