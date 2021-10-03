// !This is something I tried to solve for myself and getting better at javascript.

//*Selectors
const todoInput = document.querySelector('.inputTask');
const todoButton = document.querySelector('.addIcon');
const todoList = document.querySelector('.taskList');
const todoDelete = document.querySelector('.trashBtn');
const todoLi = document.querySelector('.newTodoItem');
const inputVal = document.querySelector('.inputTask').value; 
const filterOption = document.querySelector('.filter-todo');
//* Event Listners
document.addEventListener("taskReloaded", getTasks);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteTodoTask);
filterOption.addEventListener('click', filterTodo); 
//*Global Variables
var newTodoItemVal;
//*  Functions
function inputValChange(event) {
        let inputValue = event.target;
        //console.log(inputValue);
       // inputValue = '';
}
function addTodo(event)
{
        event.preventDefault(); //! prevnet form from reloading again
        //* Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //* Todo checked button 
        const todoChecked = document.createElement('button');
        todoChecked.innerHTML = '<i class="fas fa-check"</i>';
        todoChecked.classList.add('checkedBtn');
        todoDiv.appendChild(todoChecked);
        //* new list for Todo
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('newTodoItem');
        newTodoItemVal = newTodo.innerText;
        todoDiv.appendChild(newTodo);
        //*  Saving Task to the local storage
        saveLocalTask(todoInput.value);
        //* Todo edit button
        const todoEdit = document.createElement('button');
        todoEdit.classList.add('editBtn');
        todoEdit.innerHTML = '<i class="fas fa-edit"></i>';
        todoDiv.appendChild(todoEdit);
        //* Todo trash button
        const todoTrash = document.createElement('button');
        todoTrash.classList.add('trashBtn');
        todoTrash.innerHTML = '<i class="fas fa-trash"</i>';
        todoDiv.appendChild(todoTrash);
        todoList.appendChild(todoDiv);
        //* clearing the Input value to blank
        todoInput.value = '';
    
}

function deleteTodoTask(event) {
        const item = event.target;
        // To Delete the selected list
        if (item.classList[0] === 'trashBtn'){
            const todoDelParent = item.parentElement;
            todoDelParent.remove();
            removeTaskFromLocalStorage(todoDiv);
           // removeTaskFromLocalStorage(todo);

            //Animation for Trashing the task
            /* todoDelParent.classList.add("fall");  todoDelParent.addEventListener('transitionend' , function(){   todoDelParent.remove()}; */
        
    }
    //check the completed task
   else if (item.classList[0] === 'checkedBtn') {
            const todoChkParent = item.parentElement;
            todoChkParent.classList.toggle('checked');
    }
        else if (item.classList[0] === 'editBtn') { //* This is the edit functionality
            debugger;   
            const todoEditParent = item.parentElement;
            console.log(newTodoItemVal);
            todoInput.value = newTodoItemVal;
            todoEditParent.remove();
        }
 }
function filterTodo(event) { //! this is the option to filter out the task depending upon the class of the button
    const todos = todoList.childNodes;
    todos.forEach(function (todo)
    {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('checked')) {
                   todo.style.display = "flex";
                } else {
                     todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('checked')) {
                   todo.style.display = "flex";
                } else {
                    todo.style.display = 'none';
                }
                break;
       }
    });
    
}
function saveLocalTask(todo) {
    // This will store the task in the local storage
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(todo);
    localStorage.setItem("tasks", JSON.stringify(tasks));
   
}
function getTasks()
{
    debugger;
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(todo)
    {
        //* Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //* Todo checked button 
        const todoChecked = document.createElement('button');
        todoChecked.innerHTML = '<i class="fas fa-check"</i>';
        todoChecked.classList.add('checkedBtn');
        todoDiv.appendChild(todoChecked);
        //* new list for Todo
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('newTodoItem');
        newTodoItemVal = newTodo.innerText;
        todoDiv.appendChild(newTodo);
        //* Todo edit button
        const todoEdit = document.createElement('button');
        todoEdit.classList.add('editBtn');
        todoEdit.innerHTML = '<i class="fas fa-edit"></i>';
        todoDiv.appendChild(todoEdit);
        //* Todo trash button
        const todoTrash = document.createElement('button');
        todoTrash.classList.add('trashBtn');
        todoTrash.innerHTML = '<i class="fas fa-trash"</i>';
        todoDiv.appendChild(todoTrash);
        todoList.appendChild(todoDiv);
        
    });
    
}
function removeTaskFromLocalStorage(todoDiv) {
    debugger;
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    console.log(todoDiv);
    
}