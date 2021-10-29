console.log("connected!");
class TaskManager {
    constructor() {
    this.tasks = [];
    this.currentId = 0;
    }
    addTask(name, description, assignedTo, dueDate, status = "TODO") {
        this.currentId ++;
        this.tasks.push(this.currentId, name, description, assignedTo, dueDate, status);
    }
}
const testTask = new TaskManager();
console.log(testTask.tasks);
testTask.addTask("finish project", 'adsfdsf', 'Nat5', '10-28-2021');