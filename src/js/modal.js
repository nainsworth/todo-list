function createTaskModal() {
  const taskModal = document.createElement("div");
  taskModal.classList.add("task-modal");

  const modalForm = document.createElement("form");

  function createTitle() {
    const title = document.createElement("h2");
    title.textContent = "New Task";

    modalForm.appendChild(title);
  }

  function createTaskInput() {
    const description = document.createElement("input");
    description.id = "task-desc";
    description.type = "text";
    description.placeholder = "Task";
    description.required = true;

    modalForm.appendChild(description);
  }

  function createDropDown() {
    const priority = ["No Priority", "Low", "Medium", "High"];

    const select = document.createElement("select");
    select.id = "task-priority";

    for (let i = 0; i < priority.length; i++) {
      const option = document.createElement("option");
      option.textContent = priority[i];
      option.value = priority[i];
      select.add(option);
    }

    modalForm.appendChild(select);
  }

  function createDatetimeInput() {
    const datetime = document.createElement("input");
    datetime.id = "task-datetime";
    datetime.type = "datetime-local";

    modalForm.appendChild(datetime);
  }

  function createSubmitBtn() {
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Add Task";

    modalForm.appendChild(submit);
  }

  function render() {
    taskModal.appendChild(modalForm);
    createTitle();
    createTaskInput();
    createDropDown();
    createDatetimeInput();
    createSubmitBtn();
  }

  render();

  return taskModal;
}

function loadModal() {
  const body = document.querySelector("body");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  body.appendChild(createTaskModal());
  body.appendChild(overlay);
}

export default loadModal;
