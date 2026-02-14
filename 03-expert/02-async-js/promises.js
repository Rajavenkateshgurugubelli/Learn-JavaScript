/**
 * TOPIC: Promises
 * Handling operations that take time (like downloading a file).
 */

console.log("1. Operation Started...");

// Simulating a delay
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("Operation Successful! (Data Received)");
        } else {
            reject("Operation Failed! (Server Error)");
        }
    }, 2000); // Wait 2 seconds
});

// Using .then() to handle success, and .catch() for errors
myPromise
    .then((data) => {
        console.log("2. Then:", data);
    })
    .catch((error) => {
        console.log("2. Error:", error);
    });

console.log("3. This runs BEFORE the promise finishes!");
// Asynchronous means "Don't block the code while waiting".
