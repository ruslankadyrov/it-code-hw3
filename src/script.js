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

const tasks = [];

dom.add.onclick = () => {
  const newTaskText = dom.new.value;
  if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
    addTask(newTaskText, tasks);
    dom.new.value = "";
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
