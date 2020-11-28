const todoList = document.getElementById("todoList");
const addTaskButton = document.getElementById("addTaskButton");
const workingBtn = document.createElement("button");
workingBtn.innerHTML = "作業中";
const deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "削除";
const li = document.createElement("li");

const todos = [];

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  const todoInput = document.getElementById("todoInput").value;
  todos.push(todoInput);
  console.log(todos);

  todos.forEach(function (todo, i) {
    li.innerHTML = todo;
    li.appendChild(workingBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
});
