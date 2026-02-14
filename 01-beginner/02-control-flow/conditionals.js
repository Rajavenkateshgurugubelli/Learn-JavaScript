/**
 * TOPIC: Conditionals (Making Decisions)
 */

const age = 20;

console.log("--- 1. If / Else ---");
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}


console.log("\n--- 2. The Ternary Operator (?) ---");
// Syntax: condition ? valueIfTrue : valueIfFalse
// Great for quick assignments!
const status = (age >= 18) ? "Allowed" : "Denied";
console.log("Access Status:", status);


console.log("\n--- 3. Switch Statement ---");
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break; // Don't forget break, or it falls through!
    case "Friday":
        console.log("Weekend is coming!");
        break;
    default:
        console.log("Just another day.");
}


console.log("\n--- 4. Truthy and Falsy Values ---");
// In JS, values can be "truthy" or "falsy" in a boolean context.
// Falsy values: false, 0, "", null, undefined, NaN
const username = ""; // Empty string is falsy

if (username) {
    console.log("Welcome,", username);
} else {
    console.log("Please enter a username."); // This runs
}
