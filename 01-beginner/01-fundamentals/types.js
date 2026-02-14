/**
 * TOPIC: Data Types
 * 
 * JavaScript has a few core data types. It is "dynamically typed", 
 * meaning you don't have to specify type (like int or String in Java).
 */

console.log("--- 1. Strings (Text) ---");
const firstName = "John"; // Double quotes
const lastName = 'Doe';   // Single quotes
const message = `Hello, ${firstName}!`; // Backticks (Template Literal) - allows variables inside!

console.log(message);
console.log("Type:", typeof message); // string


console.log("\n--- 2. Numbers ---");
const age = 25;
const price = 99.99; // Decimals are also just "number"

console.log("Age:", age);
console.log("Price:", price);
console.log("Type:", typeof age); // number


console.log("\n--- 3. Booleans (True/False) ---");
const isLoggedIn = true;
const hasPaid = false;

console.log("Is Logged In:", isLoggedIn);
console.log("Type:", typeof isLoggedIn); // boolean


console.log("\n--- 4. Null & Undefined ---");
// Undefined: A variable declared but not assigned a value.
let user;
console.log("User:", user); // undefined

// Null: Intentionally empty. "This variable is empty right now".
let selectedProduct = null;
console.log("Selected Product:", selectedProduct); // null
