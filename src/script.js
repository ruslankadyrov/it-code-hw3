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
  const task = dom.new.value;
  if (task) {
    addTask(task);
  }
};

function addTask(text) {
  const timeStamp = Date.now();
  const task = {
    id: timeStamp,
    text: text,
    isComplele: false,
  };
  tasks.push(task);
  console.log(tasks);
}
