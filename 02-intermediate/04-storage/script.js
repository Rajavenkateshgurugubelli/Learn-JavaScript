/**
 * TOPIC: LocalStorage
 * Persisting data in the browser. All keys and values are Strings.
 */

const input = document.getElementById("username");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const display = document.getElementById("display-name");

// 1. Check if name exists on load
const savedName = localStorage.getItem("myAppName");
if (savedName) {
    display.innerText = savedName;
}

// 2. Save Name
saveBtn.addEventListener("click", () => {
    const name = input.value;
    if (name) {
        // Syntax: localStorage.setItem(key, value)
        localStorage.setItem("myAppName", name);
        display.innerText = name;
        alert("Name Saved!");
    }
});

// 3. Clear Name
clearBtn.addEventListener("click", () => {
    // Syntax: localStorage.removeItem(key)
    localStorage.removeItem("myAppName");
    display.innerText = "No name saved";
    input.value = "";
    alert("Name Cleared!");
});

/**
 * TIP: Storing Objects
 * localStorage can ONLY store strings. To store an object, convert it to a JSON string.
 * 
 * Saving:
 * const user = { id: 1, theme: 'dark' };
 * localStorage.setItem('userConfig', JSON.stringify(user));
 * 
 * Loading:
 * const data = localStorage.getItem('userConfig');
 * const userObj = JSON.parse(data);
 */
