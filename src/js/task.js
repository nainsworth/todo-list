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

const taskSection = document.querySelector(".task-section");
const taskContainer = document.createElement("div");

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
        date.textContent = task.dateTime;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "✖";

        // Add if statement to display priority
        if (task.priority = "High") {
            taskCard.classList.add("high");
        } else if (task.priority = "Medium") {
            taskCard.classList.add("medium");
        } else if (task.priority = "low") {
            taskCard.classList.add("low");
        } else {
            return
        }

        taskContainer.appendChild(taskCard);
        taskCard.appendChild(checkbox);
        taskCard.appendChild(description);
        taskCard.appendChild(date);
        taskCard.appendChild(deleteBtn);
       
     }
    

        // DOM Task Button
        function createNewTaskBtn() {
            const newTaskBtn = document.createElement("button");
            newTaskBtn.classList.add("add-task");
            newTaskBtn.textContent = "+ Add Task";
        }


        // update list
        function updateList() {
            taskContainer.textContent = "";
            for (let task of list.allList) createTaskCard(task);
        }

     // Add Task Button Displays New Task Modal


    // Render Task Container
    function render() {
        createTitle("All");
        taskSection.appendChild(taskContainer);
        updateList()
        createNewTaskBtn();
    }


    render();

     // Load Tasks Section