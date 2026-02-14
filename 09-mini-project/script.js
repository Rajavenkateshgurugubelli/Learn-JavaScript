/**
 * Mini Project: ToDo List
 * Features: Add task, Mark as done, Delete task.
 */

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create LI element
    const li = document.createElement("li");

    // 2. Create Span for text
    const span = document.createElement("span");
    span.innerText = taskText;

    // Toggle 'completed' class on click
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // 3. Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    // Remove task on click
    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
    });

    // 4. Assemble and Add to List
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // 5. Clear Input
    input.value = "";
}

// Event Listeners
addBtn.addEventListener("click", addTask);

// Allow pressing "Enter" key
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
