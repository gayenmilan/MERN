const enterTaskInput = document.querySelector('#entertaskinput');

const addtaskbutton = document.querySelector('#addtaskbutton');

const tasklistwrapper = document.querySelector('#tasklistwrapper');

const todo = [];

function checkInputValidation(enterTaskInputValues, todo) {
    if (enterTaskInputValues === '') {
        return false;
    }

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].taskName === enterTaskInputValues) {
            alert('Task Already Exist');
            return false;
        }
    }
    return true;
}

function addTask() {
    const enterTaskInputValues = enterTaskInput.value.trim();

    if (checkInputValidation(enterTaskInputValues, todo)) {
        todo.push(
            {
                taskName: enterTaskInputValues,
                isCompleted: false
            }
        )

        console.log(todo);

        render();
    }

    enterTaskInput.value = '';
}

function render() {
    tasklistwrapper.innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        tasklistwrapper.innerHTML += `
         <div class='listWrapper max-w-full flex justify-between items-center mx-3 my-3 bg-white px-3 py-3'>
            <div class='${todo[i].isCompleted ? "line-through disabled" : ""}'>${todo[i].taskName}</div>
            <div class='ctaButtonWrapper flex gap-1'>
                <button onClick='doneTodo(${i})' class='checkButtom text-white bg-success hover:bg-success-strong cursor-pointer font-medium leading-5 rounded-full text-sm px-4 py-2.5'>Complete</button>
                <button onClick='deleteTodo(${i})' class='delButtom text-white bg-danger hover:bg-danger-strong cursor-pointer font-medium leading-5 rounded-full text-sm px-4 py-2.5'>Delete</button>
            </div>
        </div>
        `
    }
}

function doneTodo(i) {
    console.log(i);

    todo[i].isCompleted = !todo[i].isCompleted;

    console.log(todo);

    render();
}

function deleteTodo(i) {
    todo.splice(i, 1)

    console.log(todo);

    render();
}

addtaskbutton.addEventListener('click', addTask);

enterTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})