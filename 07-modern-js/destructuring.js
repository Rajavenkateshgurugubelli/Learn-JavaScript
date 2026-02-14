/**
 * TOPIC: Destructuring
 * Unpacking values from arrays or properties from objects into distinct variables.
 */

console.log("--- 1. Array Destructuring ---");
const numbers = [10, 20, 30];

// Old way:
// const first = numbers[0];
// const second = numbers[1];

// New way:
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);


console.log("\n--- 2. Object Destructuring ---");
const user = {
    username: "jdoe",
    email: "jdoe@example.com",
    role: "Admin"
};

// Extract properties by name
const { username, email } = user;
console.log(`User: ${username} (${email})`);

// Renaming variables during extraction
const { role: userRole } = user;
console.log("Role:", userRole);
