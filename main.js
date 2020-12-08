const allTodo = document.getElementById('allTodo')
const workingTodo = document.getElementById('workingTodo')
const doneTodo = document.getElementById('doneTodo')
const todoList = document.getElementById('todoList');
const addTaskButton = document.getElementById('addTaskButton');
const textBox = document.getElementById('todoInput');

const todos = [];
let taskId = 0;


addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const todoInput = { task: textBox.value, state: '作業中' };
    todoInput.id = taskId;
    textBox.value = '';
    if (todoInput.task.match(/\S/g)) {
        //空白以外の文字に一致したら配列に追加
        todos.push(todoInput);
        textBox.focus();
        taskId++;
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
        tr.setAttribute('data-id', todo.id)
        todoList.appendChild(tr);

        const idTd = document.createElement('td');
        const comment = document.createElement('td');
        const stateTd = document.createElement('td');
        const deleteTd = document.createElement('td');

        tr.appendChild(idTd);
        tr.appendChild(comment);
        tr.appendChild(stateTd);
        tr.appendChild(deleteTd);

        idTd.textContent = todo.id;
        comment.textContent = todo.task;

        stateTd.appendChild(createStateButton(id));
        deleteTd.appendChild(createDeleteButton(id));
    });

    workingTodocheck();
    doneTodoCheck();
};


//状態を管理する為のボタンを作成する関数
const createStateButton = (id) => {
    const workingBtn = document.createElement('button');
    workingBtn.textContent = todos[id].state;
    workingBtn.classList.add('state');
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


//作業中のラジオボタンがチェックされているか評価する関数
const workingTodocheck = () => {
    if (workingTodo.checked) {
        const tr = document.querySelectorAll('tr[data-id]');
        tr.forEach((todo) => {
            const stateBtn = (todo.querySelector('.state'));
            if (stateBtn.textContent === '完了') {
                todo.classList.add('hide');
            } else {
                todo.classList.remove('hide');
            }
        });
    }
}


//完了のラジオボタンがチェックされているか評価する関数
const doneTodoCheck = () => {
    if (doneTodo.checked) {
        const tr = document.querySelectorAll('tr[data-id]');
        tr.forEach((todo) => {
            const stateBtn = (todo.querySelector('.state'));
            if (stateBtn.textContent === '作業中') {
                todo.classList.add('hide');
            } else {
                todo.classList.remove('hide');
            }
        });
    }
}


//作業中のラジオボタン押すと完了済みのTASKを隠す関数
workingTodo.addEventListener('click', () => {
    workingTodocheck();
});

//完了のラジオボタンを押すと作業中のTASKを隠す関数
doneTodo.addEventListener('click', () => {
    doneTodoCheck();
});

//すべてのラジオボタンを押すと全てのTASKが表示される関数
allTodo.addEventListener('click', () => {
    const tr = document.querySelectorAll('tr[data-id]');
    tr.forEach((todo) => {
        todo.classList.remove('hide');
    });
});