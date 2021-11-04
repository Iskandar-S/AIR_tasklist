console.log("connected!");

// const testTask = new TaskManager;
// console.log(testTask.tasks);


// task.addTask("final project", 'adasdafsfdsf', 'Nat5', '10-10-1010')
// console.log(task);

const taskHtml = createTaskHtml('asd', 'asd', 'asd', 'asd', 'asd');
console.log(taskHtml);


const newTaskForm = document.querySelector('#newTaskForm');

const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const assignedToInput = document.querySelector("#assignedTo");
const dueDateInput = document.querySelector("#dueDate");
const statusInput = document.querySelector("#status");
const errorMessage = document.querySelector("#alertMessage");

const name = nameInput.value;
const description = descriptionInput.value;
const assignedTo = assignedToInput.value;
const dueDate = dueDateInput.value;
const status = statusInput.value;

// Validate (In progress)
function validate() {
if (name.length < 4){
    errorMessage.innerHTML = "Name must be longer than 4 characters";
    errorMessage.style.display = "block";
    } else {
    errorMessage.style.display = "none";
    return true;
};
if (description.length < 6) {
    errorMessage.innerHTML = "Description must be longer than 6 characters";
    errorMessage.style.display = "block";
} else {
    errorMessage.style.display = "none";
    return true;
};
if (assignedTo.length < 2) {
    errorMessage.innerHTML = "Invalid must be longer than 2 characters";
    errorMessage.style.display = "block";
} else {
    errorMessage.style.display = "none";
    return true;
};

// Due Date input checks for data type by default, but we have to check for valid date. Date can't be from past or far future.

// if(dueDate == NaN) {
//     errorMessage.innerHTML = "Invalid due date input.";
//     errorMessage.style.display = "block";
// } else {
//     errorMessage.style.display = "none";
//     return true;
// }
};

const newTask = new TaskManager;

// Submit form
newTaskForm.addEventListener('submit', (event) => {

    // Prevent default submit
    event.preventDefault();

    // Get input values
    const name = nameInput.value;
    const description = descriptionInput.value;
    const assignedTo = assignedToInput.value;
    const dueDate = dueDateInput.value;
    const status = statusInput.value;
    // validate(name, description, assignedTo, dueDate, status);

    // Add task
    newTask.addTask(name, description, assignedTo, dueDate, status);

    // We should add form clear function
    // newTaskForm.;
});
