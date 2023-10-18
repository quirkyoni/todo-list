import { Task } from "./classes";

const taskTitle = document.querySelector(".form-task-title")
const taskDescription = document.querySelector(".form-task-description")
const taskDueDate = document.querySelector(".form-task-due-date")
const taskPriority = document.querySelector(".form-task-priority")

let tasks = []

const createTask = () => {
    const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value, taskPriority.value)
    tasks.push(newTask)
    console.log(tasks)
}

export { tasks, createTask }