const dom = {
  new: document.querySelector("#new"),
  add: document.querySelector("#add"),
  tasks: document.querySelector("#tasks"),
};

console.log(dom);

// const dom = {
//   new: document.getElementById("new"),
//   add: document.getElementById("add"),
//   tasks: document.getElementById("tasks"),
// };

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

    const taskHtml = `
    <div id="${task.id}" class="${classToDoTask}">
    <label class="todo_checkbox">
      <input type="checkbox" ${checkboxChecked} />
      <div></div>
    </label>
    <div class="todo_task-text">${task.text}</div>
    <img class="todo_task-edit" src="images/edit.png" alt="edit" />
    <img
      class="todo_task-delete"
      src="images/delete.png"
      alt="delete"
    />
    </div>
    `;

    htmlList = htmlList + taskHtml;
  });

  dom.tasks.innerHTML = htmlList;
}
