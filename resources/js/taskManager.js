console.log("connected!");
class TaskManager {
    constructor() {
    this.tasks = [];
    this.currentId = 0;
    }
    addTask(name, description, assignedTo, dueDate, status = "TODO") {
        this.currentId ++;
        const task = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };
        this.tasks.push(task);
}
    }
const testTask = new TaskManager();
console.log(testTask.tasks);
testTask.addTask("finish project", 'adsfdsf', 'Nat5', '10-28-2021');    
console.log(testTask.tasks);
