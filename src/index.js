document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("#new-task-description");
    const task = input.value;
    buildToDo(task); // create the new list item
  });
});

function buildToDo(task) {
  const newItem = document.createElement("li");
  newItem.textContent = task;

  const list = document.querySelector("#list");
  list.appendChild(newItem);
}
