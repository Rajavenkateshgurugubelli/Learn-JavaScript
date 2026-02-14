/**
 * TOPIC: Fetch API
 * Getting data from real APIs.
 */

async function getUser() {
    try {
        console.log("Fetching user...");

        // fetch() returns a Promise
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // We also need to await converting the response to JSON
        const userData = await response.json();

        console.log("User Name:", userData.name);
        console.log("User Email:", userData.email);

    } catch (error) {
        console.log("Fetch Failed:", error.message);
    }
}

getUser();
