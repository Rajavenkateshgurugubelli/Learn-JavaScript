/**
 * TOPIC: Async / Await
 * Modern syntax for Promises. Makes code readable.
 */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runProcess() {
    console.log("Start Process...");

    try {
        // 'await' pauses this function until the promise resolves
        await wait(1000);
        console.log("Step 1 Complete (after 1s)");

        await wait(1000);
        console.log("Step 2 Complete (after another 1s)");

        // Simulating error
        // throw new Error("Something went wrong!");

        console.log("Process Finished!");

    } catch (error) {
        console.log("Caught Error:", error.message);
    }
}

runProcess();
console.log("Main Thread continues...");
