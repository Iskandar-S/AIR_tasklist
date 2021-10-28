console.log("connected!");

class TaskManager {
    constructor(project, tasks, description, assignedTo, status, dueDate, currentId){
        this.project = project;
        this.tasks = [];
        this.description = description;
        this.assignedTo = assignedTo;
        this.status = status;
        this.dueDate = dueDate;
    }

}