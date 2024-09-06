const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
// Const to constantly respond to these tasks above- All HTML elements are on a constant repeat
loadTasks();
//2 Functions at work

function addTask() {  //1st Function to take care of Adding the tasks of the task

    const task = taskInput.value.trim(); //2nd function Removes the cursurs empty fields in the input field for typing

    if (task) {
        
        createTaskElement(task);

        taskInput.value = ''; //clears the input field, works with 2nd function
// task value is ' ' to write a new task
        saveTasks(); //new function to save the task in local storage, by freshing will delete on screen tasks.

    } else { //If the user does not add a task and just push the button, the log will show in the BOM
        alert('Please enter a task!')
    }

}


addButton.addEventListener('click', addTask);


function createTaskElement(task){

    const listItem = document.createElement('li'); //creates a new element inside of the (li) element, the task will get added to the HTML (li) element

    listItem.textContent = task;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';  //Red in css style to warn user to delete button

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function(){  //Event Lister to Delete button and remove child list item
        taskList.removeChild(listItem);
        saveTasks();
    });

}


function saveTasks() {

    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item) {  //Takes all tasks in (li)element will get pushed to the tasks array and trimmed.
        tasks.push(item.textContent.replace('Delete', '').trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));  //the array will be in a json format in local storage cache

}

function loadTasks() {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(createTaskElement);

}
console.log ("Awesome Keep Going Angela-Marie!");  ///Coding a TO-DO list for my daughter!


////////////////////////////////////////////

