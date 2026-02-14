/**
 * TOPIC: Variables in JavaScript
 * 
 * In modern JavaScript (ES6+), we have three ways to declare variables:
 * 1. let   -> For data that can change (re-assignable).
 * 2. const -> For data that CANNOT change (read-only).
 * 3. var   -> The old way (function-scoped, try to avoid).
 */

console.log("--- 1. Using 'let' ---");
let studentName = "Alice";
console.log("Original Name:", studentName);

// We can change the value of a 'let' variable
studentName = "Bob";
console.log("Updated Name:", studentName);


console.log("\n--- 2. Using 'const' ---");
const birthYear = 2000;
console.log("Birth Year:", birthYear);

// UNCOMMENTING THE LINE BELOW WILL CAUSE AN ERROR:
// birthYear = 2001; // TypeError: Assignment to constant variable.
// usage: Use const by default. Only use let if you KNOW the value will change.


console.log("\n--- 3. Using 'var' (Legacy) ---");
var city = "New York";
console.log("City:", city);

// 'var' behaves differently with scoping (it ignores block scope), 
// which can lead to bugs in larger programs.
{
    var city = "London"; // This changes the outer variable too!
}
console.log("City after block:", city); // Output: London (Surprise!)

// Compare with let:
let country = "USA";
{
    let country = "UK"; // This is a completely new variable, only exists inside {}
    console.log("Inside block:", country); // UK
}
console.log("Outside block:", country); // USA (Safe!)
