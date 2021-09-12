var taskStrike = 'pointer-events: none; text-decoration: line-through; padding-left: 5px; cursor: pointer;';
function addTaskToPending(event)
{
    debugger;
   // let tsk = document.getElementById('addTask').createElement(table, [tr]);
}
function doneTask(checkboxElem) { //! Strike through the task that has been done [css-- text-decoration: line-through]
    debugger;
    let taskComplete = $('.cbStrike:checked').val();
    console.log(taskComplete);
    if (checkboxElem.checked) {
    var taskStrike = 'pointer-events: none; text-decoration: line-through; padding-left: 5px; cursor: pointer;';
    } else {
    var taskStrike = 'pointer-events: none; padding-left: 5px; cursor: pointer;';
    }
}
function editTask(event) {//! Edit the task in line [NO MODAL]
    debugger;
}
function deleteTask(event) {//! Delete the task and move the task count decriment 1
    debugger; 
}