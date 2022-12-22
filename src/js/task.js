// Create Task

// Create Task Objects
class Task {
  constructor(description, priority, dateTime) {
    this.description = description;
    this.priority = priority;
    this.dateTime = dateTime;
  }
}

class List {
  constructor() {
    this.allList = [];
  }

  addToList(newTask) {
    this.allList.push(newTask);
  }
}

const list = new List();

// Generate Task Section with HTML DOM

function loadTaskSection() {
  const taskSection = document.querySelector(".task-section");
  const taskContainer = document.createElement("div");
  const taskModal = document.querySelector(".task-modal");

  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", closeModal);

  const addDescription = document.querySelector("#task-desc");
  const addPriority = document.querySelector("#task-priority");
  const addDateTime = document.querySelector("#task-dateTime");
  const addNewTaskBtn = document.querySelector("#submit-task");
  addNewTaskBtn.addEventListener("click", addTaskToList);

  // DOM List Title
  function createTitle(list) {
    const title = document.createElement("h1");
    title.textContent = list;

    taskSection.appendChild(title);
  }

  // DOM Tasks Card
  function createTaskCard(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const description = document.createElement("p");
    description.classList.add("task-desc");
    description.textContent = task.description;

    const date = document.createElement("p");
    date.classList.add("task-date");
    if (task.dateTime === "") {
      date.textContent = "No Date";
    } else {
      date.textContent = task.dateTime;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "✖";

    // Add if statement to display priority
    if (task.priority === "High") {
      taskCard.classList.add("high");
    } else if (task.priority === "Medium") {
      taskCard.classList.add("medium");
    } else if (task.priority === "Low") {
      taskCard.classList.add("low");
    }

    taskContainer.appendChild(taskCard);
    taskCard.appendChild(checkbox);
    taskCard.appendChild(description);
    taskCard.appendChild(date);
    taskCard.appendChild(deleteBtn);
  }

  // Add Task Button Displays New Task Modal

  // DOM Task Button
  function createNewTaskBtn() {
    const newTaskBtn = document.createElement("button");
    newTaskBtn.classList.add("add-task");
    newTaskBtn.textContent = "+ Add Task";

    taskSection.appendChild(newTaskBtn);

    newTaskBtn.addEventListener("click", openModal);
  }

  //open modal
  function openModal() {
    taskModal.classList.add("active");
    overlay.classList.add("active");
  }

  //close modal
  function closeModal() {
    taskModal.classList.remove("active");
    overlay.classList.remove("active");
    clearModalInputs();
  }

  // Modal Input
  function modalInputs() {
    const description = addDescription.value;
    const priority = addPriority.value;
    const dateTime = addDateTime.value;
    return new Task(description, priority, dateTime);
  }

  // Clear Input
  function clearModalInputs() {
    addDescription.value = "";
    addPriority.value = "No Priority";
    addDateTime.value = "";
  }

  // update list
  function updateList() {
    taskContainer.textContent = "";
    for (let task of list.allList) createTaskCard(task);
  }

  // Add task to list
  function addTaskToList() {
    const newTask = modalInputs();

    if (addDescription.value !== "") {
      list.addToList(newTask);
      updateList();
      closeModal();
    }
  }

  // Render Task Container
  function render() {
    createTitle("All");
    taskSection.appendChild(taskContainer);
    updateList();
    createNewTaskBtn();
  }

  render();
}

// Load Tasks Section
export default loadTaskSection;
