/**
 * TOPIC: Loops (Repetition)
 */

console.log("--- 1. Standard For Loop ---");
// for (start; stop; step)
for (let i = 1; i <= 3; i++) {
    console.log(`Count: ${i}`);
}


console.log("\n--- 2. While Loop ---");
let power = 10;
while (power < 100) {
    console.log("Power is:", power);
    power += 30; // Don't forget to update, or infinite loop!
}


console.log("\n--- 3. Arrays Iteration ---");
const fruits = ["Apple", "Banana", "Cherry"];

// OLD WAY:
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

// MODERN WAY (For...Of): Best for arrays!
console.log("Using for...of:");
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}


console.log("\n--- 4. Object Iteration (For...In) ---");
const user = { name: "Alice", role: "Admin", level: 5 };

console.log("Using for...in:");
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
