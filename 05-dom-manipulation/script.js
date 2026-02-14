/**
 * TOPIC: DOM Manipulation
 * The "Document Object Model" allows JS to change HTML and CSS.
 */

// 1. Selecting Elements
const title = document.getElementById("main-title");
const paragraph = document.querySelector(".description");
const box = document.querySelector(".box");
const listItems = document.querySelectorAll("li"); // Returns a NodeList (like an array)


// 2. Changing Content
console.log("Old Title:", title.innerText);
title.innerText = "JavaScript is Awesome!";
paragraph.innerHTML = "This paragraph was <strong>updated</strong> by JS.";


// 3. Changing Styles
box.style.backgroundColor = "lightblue";
box.style.borderColor = "blue";


// 4. Changing Classes
// Adding a CSS class dynamically
box.classList.add("highlight");

// 5. Creating & Adding Elements
const newItem = document.createElement("li");
newItem.innerText = "Item 4 (Added by JS)";
document.querySelector("ul").appendChild(newItem);

console.log("DOM updated successfully!");
