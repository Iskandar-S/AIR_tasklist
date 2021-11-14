const TaskManager = require('../resources/js/TaskManager').TaskManager;
const {assert} = require('chai');

describe('TaskManager', () => {
    describe('.addTask', () => {
        it('should add a new task', () => {
            const task = new TaskManager();
            task.addTask('Final Project', 'Create Tasklist', 'Alla', '11/08/2021', 'TO DO');
            assert.ok(task.tasks.length == 1)
        })
    })

    describe('.deleteTask', () => {
        it('should delete a task from tasks', () => {
            task = new TaskManager();
            task.addTask('Final Project', 'Create Tasklist', 'Iskandar', '11/08/2021', 'TO DO');
            task.deleteTask(0);
            assert.ok(task.tasks.length == 0);
        })
    })

    describe('.getTaskById', () => {
        it('should return current task from tasks', () => {
            const task = new TaskManager()
            task.addTask('Final Project', 'Test Tasklist', 'Rashmi', '11/08/2021', 'TO DO');
            const resultId = task.getTaskById(0);

            task.addTask('Final Project', 'Test Tasklist', 'Alla', '11/08/2021', 'TO DO');
            const expectedId = task.getTaskById(1)
            assert.ok(resultId, expectedId)
        })
    })
})