console.log("connected!");
const task = new TaskManager();
console.log(task.tasks);
const btn = document.getElementById('addTask');

function addNewTask(){
    tname = document.getElementById('task-name').value;
    //console.log(tname);
    description=document.getElementById('description').value;
    //console.log(description);
    assignedTo=document.getElementById('assigned-to').value;
    //console.log(assignedTo);
    taskStatus=document.getElementById('taskStatus').value;
    //console.log(taskStatus);
    dueDate=document.getElementById('dueDate').value;
    //console.log(dueDate);
    task.addTask(tname, description, assignedTo, dueDate);
    console.log(task.tasks);
    return false;
    //document.getElementById("taskForm").reset();
}

btn.addEventListener('click', addNewTask);
document.getElementById("taskForm").onsubmit = function() {return false;}