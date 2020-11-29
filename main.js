const todoList = document.getElementById("todoList");
const addTaskButton = document.getElementById("addTaskButton");
const textBox = document.getElementById("todoInput");

const todos = [];

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  const todoInput = textBox.value;
  textBox.value = "";
  if (todoInput.match(/\S/g)) {
    //空白以外の文字に一致したら配列に追加
    todos.push(todoInput);
    textBox.focus();
  }
  addTask();
});

const addTask = () => {
  while (document.querySelector(".initialize")) {
    todoList.removeChild(document.querySelector(".initialize"));
  }

  todos.forEach((todo, id) => {
    const tr = document.createElement("tr");
    tr.className = "initialize";

    const idTd = document.createElement("td");
    idTd.innerHTML = id;

    const comment = document.createElement("td");
    comment.innerHTML = todo;

    const workTd = document.createElement("td");
    const workingBtn = document.createElement("button");
    workingBtn.innerHTML = "作業中";
    workTd.appendChild(workingBtn);

    const deleteTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "削除";
    deleteTd.appendChild(deleteBtn);

    tr.appendChild(idTd);
    tr.appendChild(comment);
    tr.appendChild(workTd);
    tr.appendChild(deleteTd);
    todoList.appendChild(tr);
  });
};
