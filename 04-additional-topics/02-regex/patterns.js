/**
 * TOPIC: Regular Expressions (RegEx)
 * Powerful pattern matching for strings.
 */

const text = "The quick brown fox jumps over the lazy dog. Contact: test@example.com";

console.log("--- 1. Basic Matching (.test) ---");
const regexFox = /fox/i; // 'i' flag means case-insensitive
const hasFox = regexFox.test(text);

console.log(`Contains 'fox'? ${hasFox}`);


console.log("\n--- 2. Extracting Data (.match) ---");
// Pattern for email: word @ word . word
const emailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g;

const emails = text.match(emailPattern);
console.log("Found Emails:", emails);


console.log("\n--- 3. Replacing Text (.replace) ---");
// Replace 'dog' with 'cat'
const newText = text.replace(/dog/g, "cat"); // 'g' flag means replace ALL occurrences

console.log("Original:", text);
console.log("Replaced:", newText);
