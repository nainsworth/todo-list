function loadTaskModal() {
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

  function createDateTimeInput() {
    const dateTime = document.createElement("input");
    dateTime.id = "task-dateTime";
    dateTime.type = "dateTime-local";

    modalForm.appendChild(dateTime);
  }

  function createSubmitBtn() {
    const submit = document.createElement("button");
    submit.id = "submit-task";
    submit.type = "submit";
    submit.textContent = "Add Task";

    modalForm.appendChild(submit);
  }

  function render() {
    const body = document.querySelector("body");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    body.appendChild(taskModal);
    body.appendChild(overlay);

    taskModal.appendChild(modalForm);
    createTitle();
    createTaskInput();
    createDropDown();
    createDateTimeInput();
    createSubmitBtn();
  }

  render();

  return taskModal;
}

export default loadTaskModal;
