
console.log("connected!");

const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    html = `<h2 class="card-title" >Card#1</h2>
    <table class="table table-borderless">
      <tbody>
        <tr>
          <td class="fw-bold">Project</td>
          <td id>${name}</td>
        </tr>
        <tr>
          <td class="fw-bold">Description</td>
          <td>${description}</td>
        </tr>
        <tr>
          <td class="fw-bold">Assigned To</td>
          <td >${assignedTo}</td>
        </tr>
        <tr>
          <td class="fw-bold">Due Date</td>
          <td>${dueDate}</td>
        </tr>
        <tr>
          <td class="fw-bold">Status</td>
          <td>${status}</td>
        </tr>
      </tbody>
    </table>`;
    return html;
};

// Create TaskManager class
class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    }
    // Add addTask method
    addTask(name, description, assignedTo, dueDate) {
      const task = {
        id: this.currentId++,
        name,
        description,
        assignedTo,
        dueDate,
        status: 'TODO'
      };
      this.tasks.push(task);
      console.log(this.tasks);
    }
    // Add render method (In Progress)
//     render() {
//       const tasksHtmlList = [];

//       for (let i = 0; i < this.tasks.length; i++) {
//         const task = this.tasks[i];
        
//         const date = new Date(task.dueDate);
//         const formattedDate = date.
//       }
//     }
};



