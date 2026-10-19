const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const count = document.getElementById("task-count");

let nextId = 1;

function renderTasks() {
    list.replaceChildren();

    tasks.forEach(task => {
        const item = document.createElement("li");
        item.className = task.completed ? "task done" : "task";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const title = document.createElement("span");
        title.textContent = task.title;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
