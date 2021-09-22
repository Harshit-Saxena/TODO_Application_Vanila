/* function doneTask(checkboxElem) { //! Strike through the task that has been done [css-- text-decoration: line-through]
    debugger;
    let taskComplete = $('.cbStrike:checked').val();
    console.log(taskComplete);
    if (checkboxElem.checked) {
    var taskStrike = 'pointer-events: none; text-decoration: line-through; padding-left: 5px; cursor: pointer;';
    } else {
    var taskStrike = 'pointer-events: none; padding-left: 5px; cursor: pointer;';
    }
} */

//*Selectors
const todoInput = document.querySelector('.inputTask');
const todoButton = document.querySelector('.addIcon');
const todoList = document.querySelector('.taskList');
const todoDelete = document.querySelector('.trashBtn');
//* Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteTodoTask);

//*  Functions

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
        //* clearing the Input value to blank
        todoInput.value = '';
    }

function deleteTodoTask(event) {
    const item = event.target;
    // To Delete the selected list
    if (item.classList[0] === 'trashBtn'){
        const todoDelParent = item.parentElement;
        //Animation for Trashing the task
        todoDelParent.classList.add("fall");
        todoDelParent.addEventListener('transitionend' , function(){
            todoDelParent.remove(); 
        });
        
    }
    //check the completed task
    if (item.classList[0] === 'checkedBtn') {
        const todoChkParent = item.parentElement;
        todoChkParent.classList.toggle('checked');
    }
   /*  if (item.classList[0] === 'editBtn') {
        const todoEditParent = item.parentElement;
        todoEditParent.classList;
    } */
 
}