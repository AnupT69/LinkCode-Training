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

async function generate() {
  let input = document.getElementById("todo-step-input");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task to generate steps!");
    return;
  }

  let steps = await generateSteps(taskText);
  let list = document.getElementById("generated-response");
  list.innerHTML = "";
  steps.forEach((step) => {
    let li = document.createElement("li");
    li.textContent = step;
    list.appendChild(li);
  });

  input.value = "";
}

async function generateSteps(task) {
  const apiKey = "AIzaSyDHBAdk4DFQcCWh-HG4CoT_CbzSWBvtsgc";

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `Break down the task '${task}' into exactly 5 clear and concise steps. No extra explanations, no special formatting, just plain text.`,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch response from Gemini API");
    }

    const data = await response.json();
    console.log("API RESPONSE:", data);

    const textResponse = data.candidates[0]?.content?.parts[0]?.text || "";

    let steps = textResponse.split("\n").filter((step) => step.trim() !== "");

    return steps;
  } catch (error) {
    console.log("Error generating steps: ", error);
    return ["Failed to generate steps. Please try again."];
  }
}
