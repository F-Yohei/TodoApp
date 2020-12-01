const todoList = document.getElementById('todoList');
const addTaskButton = document.getElementById('addTaskButton');
const textBox = document.getElementById('todoInput');

const todos = [];

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const todoInput = { task: textBox.value, state: '作業中' };
    textBox.value = '';
    if (todoInput.task.match(/\S/g)) {
        //空白以外の文字に一致したら配列に追加
        todos.push(todoInput);
        textBox.focus();
    }
    addTask();
});

//配列に格納されたToDoをHTMLに表示させる為の関数
const addTask = () => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    todos.forEach((todo, id) => {
        const tr = document.createElement('tr');
        todoList.appendChild(tr);

        const idTd = document.createElement('td');
        const comment = document.createElement('td');
        const stateTd = document.createElement('td');
        const deleteTd = document.createElement('td');

        tr.appendChild(idTd);
        tr.appendChild(comment);
        tr.appendChild(stateTd);
        tr.appendChild(deleteTd);

        idTd.innerHTML = id;
        comment.innerHTML = todo.task;

        stateTd.appendChild(createStateButton());
        deleteTd.appendChild(createDeleteButton());
    });
};

//状態を管理する為のボタンを作成する関数
const createStateButton = () => {
    const workingBtn = document.createElement('button');
    workingBtn.innerHTML = '作業中';
    return workingBtn;
};

//ToDoを削除するボタンを作る為の関数
const createDeleteButton = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '削除';
    return deleteBtn;
};