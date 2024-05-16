// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');



    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++){

            taskContainer.innerHTML += `
                                
                                <div id="${i}" class="task">
                                <li><span>${localStorage.getItem(i)}</span></li>
                                <button class="checkTask"> ✔ </button>
                                <button class="deleteTask"> 🗑 </button>
                                </div>
                                
            `
        }  
        
        document.addEventListener('click', function (e) {
            e.preventDefault();
            let target = e.target
            if (target.classList == 'checkTask') {
                console.log(target.parentElement)
                target.parentElement.style.backgroundColor = "rgb(17, 188, 17)";
                target.style.backgroundColor = "rgb(17, 188, 17)";
                target.parentElement.querySelector('li').style.textDecoration = "line-through";                
                
            } else if (target.classList == 'deleteTask') {
                localStorage.removeItem(target.parentElement.getAttribute('id'))
                target.parentElement.remove()
            }

        })

    }


// Events

// addTask Event

addTask.addEventListener('click', function (e) {
    e.preventDefault()

    let task = document.createElement('div');
    task.setAttribute('id', localStorage.length);
    task.classList.add('task');

    li = document.createElement('li');
    span = document.createElement('span');

    span.innerHTML = inputTask.value;
    
    li.appendChild(span);
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = ' ✔ ';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = ' 🗑 ';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // Regex for whitespaces

    let spaceReg = /\w+/g;

    if (!spaceReg.test(inputTask.value)) {
        alert('Enter a task.')
        inputTask.value = "";
    } else {
        localStorage.setItem(task.getAttribute("id"), inputTask.value)
        taskContainer.appendChild(task)
        inputTask.value = "";

    };


});