/**
 * TOPIC: Error Handling
 */

function divide(a, b) {
    if (b === 0) {
        // We can create our own error
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log("Attempting division...");

    // Valid case
    console.log("10 / 2 =", divide(10, 2));

    // Error case
    console.log("10 / 0 =", divide(10, 0));

    // This line will NEVER run because the error happened above
    console.log("This will not print.");

} catch (error) {
    // This block runs ONLY if an error occurs
    console.error("Caught an Error:", error.message);

} finally {
    // This block runs NO MATTER WHAT (success or error)
    console.log("Division attempt finished.");
}

console.log("Program continues safely...");
