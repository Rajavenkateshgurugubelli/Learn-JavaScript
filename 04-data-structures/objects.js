/**
 * TOPIC: Objects
 */

console.log("--- 1. Creating Objects ---");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["Coding", "Reading"],
    // Object Method
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log("Name:", person.firstName);
console.log("Full Name:", person.fullName());


console.log("\n--- 2. Object Destructuring (ES6) ---");
// Extract properties into variables
const { firstName, age } = person;

console.log(`Extracted: ${firstName} is ${age} years old.`);


console.log("\n--- 3. Spread Operator (...) ---");
// Great for copying objects or updating properties immutably (common in React)

const updatedPerson = {
    ...person,        // Copy all properties from person
    age: 31,          // Overwrite age
    city: "New York"  // Add new property
};

console.log("Original Age:", person.age);
console.log("Updated Age:", updatedPerson.age);
console.log("New Property:", updatedPerson.city);
