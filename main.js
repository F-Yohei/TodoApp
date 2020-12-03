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

        idTd.textContent = id;
        comment.textContent = todo.task;

        stateTd.appendChild(createStateButton(id));
        deleteTd.appendChild(createDeleteButton(id));
    });
};

//状態を管理する為のボタンを作成する関数
const createStateButton = (id) => {
    const workingBtn = document.createElement('button');
    workingBtn.textContent = todos[id].state;
    workingBtn.addEventListener('click', () => {
        if (todos[id].state === '作業中') {
            todos[id].state = '完了';
        } else {
            todos[id].state = '作業中';
        }
        addTask();
    });
    return workingBtn;
};

//ToDoを削除するボタンを作る為の関数
const createDeleteButton = (id) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', () => {
        if (id > -1) {
            todos.splice(id, 1);
        }
        addTask();
    });
    return deleteBtn;
};