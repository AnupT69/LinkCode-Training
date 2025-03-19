function addTask() {
  let input = document.getElementById("todo-input");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    <span onClick="toggleTask(this)">${taskText}</span>
    <button onclick="removeTask(this)">X</button>
    `;

  document.getElementById("todo-list").appendChild(li);
  saveTask();
  input.value = "";
}

function toggleTask(task) {
  task.classList.toggle("Completed");
  saveTask();
}

function removeTask(button) {
  button.parentElement.remove();
  saveTask();
}

function saveTask() {
  let tasks = [];
  document.querySelectorAll("#todo-list li").forEach((li) => {
    tasks.push({
      text: li.children[0].textContent,
      completed: li.children[0].classList.contains("completed"),
    });
  });
}
