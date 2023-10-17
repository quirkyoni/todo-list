import { Task } from "./classes";

const taskTitle = document.querySelector(".task-title")
const taskDescription = document.querySelector(".task-description")
const taskDueDate = document.querySelector(".task-due-date")
const taskPriority = document.querySelector(".task-priority")

const tasks = []

const createTask = () => {
    const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value, taskPriority.value)
    tasks.push(newTask)
    console.log(tasks)
}

export { createTask }