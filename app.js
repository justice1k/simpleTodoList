// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const form = document.querySelector(".form");


// Events

// addTask Event

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let task = document.createElement('div');
    task.classList.add('task');

    li = document.createElement('li');
    span = document.createElement('span');
    span.innerHTML = `${inputTask.value}`;
    li.appendChild(span);
    task.appendChild(li);


    let checkButton = document.createElement('button');
    checkButton.removeAttribute("type");
    checkButton.innerHTML = ' ✔ ';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button');
    deleteButton.removeAttribute("type");
    deleteButton.innerHTML = ' 🗑 ' ;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // Regex for whitespaces

    let spaceReg = /\w+/g;

    if (!spaceReg.test(inputTask.value)) {
        alert('Enter a task wai🙄')
        inputTask.value = "";
    } else {
        taskContainer.appendChild(task)
        inputTask.value = "";
    };

    // Check button Event
    checkButton.addEventListener('click', function (e) {
        e.preventDefault()
        checkButton.parentElement.style.backgroundColor = "rgb(17, 188, 17)";
        checkButton.style.backgroundColor = "rgb(17, 188, 17)";
        checkButton.parentElement.querySelector('li').style.textDecoration = "line-through"
    });

    // Delete Button Event

    deleteButton.addEventListener('click', function (e) {
        let target = e.target;

        // targeting grandparent which is the task container
        target.parentElement.remove();
    });


})
