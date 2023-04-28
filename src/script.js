const dom = {
  new: document.querySelector("#new"),
  add: document.querySelector("#add"),
  tasks: document.querySelector("#tasks"),
};

// const dom = {
//   new: document.getElementById("new"),
//   add: document.getElementById("add"),
//   tasks: document.getElementById("tasks"),
// };

//массив задач
const tasks = [];

dom.add.onclick = () => {
  const newTaskText = dom.new.value;
  if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
    addTask(newTaskText, tasks);
    dom.new.value = "";
    taskRender(tasks);
  }
};

function addTask(text, array) {
  const timeStamp = Date.now();

  const task = {
    id: timeStamp,
    text: text,
    isComplele: false,
    isEdit: false,
  };

  array.push(task);
  console.log(tasks);
}

function isNotHaveTask(text, array) {
  let isNotHave = true;

  array.forEach((task) => {
    if (task.text === text) {
      alert("Задача уже существует");
      isNotHave = false;
    }
  });

  return isNotHave;
}

function taskRender(array) {
  let htmlList = "";

  array.forEach((task) => {
    let classToDoTask = "";
    let checkboxChecked = "";
    let editTask = "";
    let editImage = "";

    if (task.isComplele) {
      classToDoTask = "todo_task todo_task_task_complete";
    } else {
      classToDoTask = "todo_task";
    }

    if (task.isComplele) {
      checkboxChecked = "checked";
    } else {
      checkboxChecked = "";
    }

    if (task.isEdit) {
      editTask = 'contenteditable ="true"';
      editImage = "save"
    } else {
      editTask = "";
      editImage = "edit"
    }

    const taskHtml = `
    <div id="${task.id}" class="${classToDoTask}">
    <label class="todo_checkbox">
      <input type="checkbox" ${checkboxChecked} />
      <div class="todo_checkbox-div"></div>
    </label>
    <div class="todo_task-text" ${editTask}>${task.text}</div>
    <img class="todo_task-edit" src="images/${editImage}.png" alt="edit" />
    <img class="todo_task-delete" src="images/delete.png" alt="delete"
    />
    </div>
    `;

    htmlList = htmlList + taskHtml;
  });

  dom.tasks.innerHTML = htmlList;
}

//отслеживание клика по элементам
dom.tasks.onclick = (event) => {
  const target = event.target;
  const isCheckboxElement = target.classList.contains("todo_checkbox-div");
  const isDeleteElement = target.classList.contains("todo_task-delete");
  const isEditElement = target.classList.contains("todo_task-edit");

  if (isCheckboxElement) {
    const task = target.parentElement.parentElement;
    const taskId = task.getAttribute("id");
    changeTaskSatatus(taskId, tasks);
    taskRender(tasks);
  }

  if (isDeleteElement) {
    const task = target.parentElement;
    const taskId = task.getAttribute("id");
    deleteTask(taskId, tasks);
    taskRender(tasks);
  }

  if (isEditElement) {
    const task = target.parentElement;
    const taskId = task.getAttribute("id");
    changeEditStatus (taskId, tasks);
    // editTask(taskId, tasks);
    taskRender(tasks);
  }
};

//функция изменения статуса
function changeTaskSatatus(id, array) {
  array.forEach((task) => {
    if (task.id == id) {
      task.isComplele = !task.isComplele;
    }
  });
}

//функция удаления задачи
function deleteTask(id, array) {
  array.forEach((task, index) => {
    if (task.id == id) {
      array.splice(index, 1);
    }
  });
}

//функция редактирования задачи
function editTask(id, array) {
  array.forEach((task) => {
    if (task.id == id) {
      task.text = "изменен";
    }
  });
}

// document.getElementById("name").focus()

//функция изменения ствтуса редактирования
function changeEditStatus(id, array) {
  array.forEach((task) => {
    if (task.id == id) {
      task.isEdit = !task.isEdit;
    }
  });
}