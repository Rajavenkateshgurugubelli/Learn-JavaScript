/**
 * TOPIC: Events
 * Responding to user actions (clicks, typing, submitting).
 */

// 1. Click Event
const btn = document.getElementById("click-btn");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
    output.innerText = "Button was clicked!";
    btn.style.backgroundColor = "lightgreen";
});


// 2. Input Event (Typing)
const input = document.getElementById("name-input");
const display = document.getElementById("name-display");

input.addEventListener("input", (e) => {
    // e.target.value gets what is inside the input box
    display.innerText = e.target.value;
});


// 3. Form Submit Event
const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // STOP the page from reloading (default behavior)
    alert("Form Submitted! (Check console for details)");
    console.log("Form submitted!");
});
