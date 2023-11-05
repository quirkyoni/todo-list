import { projects } from "./newProject";
import { Task } from "./classes";

const taskTitle = document.querySelector(".form-task-title")
const taskDescription = document.querySelector(".form-task-description")
const taskDueDate = document.querySelector(".form-task-due-date")
const taskPriority = document.querySelectorAll(".form-task-priority")

let tasks = []

const createTask = () => {
    let activeProject;
    let priorityValue;

    for (let i = 0; i < taskPriority.length; i++) {
        if (taskPriority[i].checked === true) {
            priorityValue = taskPriority[i].value
        }
    }

    projects.filter((project, index) => {
        if (project.active == 'true') {
            activeProject = project.title;
        }
    })

    const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value, priorityValue, activeProject)
    tasks.push(newTask)
}

export { tasks, createTask }