import './style.css';
import { Project, Task } from './classes'
import { projects, createProject } from './newProject'
import { renderProject } from './renderProject'
import { tasks, createTask } from './newTask'
import { taskSection, renderTask } from './renderTask'

const main = document.querySelector("main")
const submitProject = document.querySelector(".submit-project")
const submitTask = document.querySelector(".submit-task")

const testProject = new Project("hello world")
console.log(testProject)

const testTask = new Task("Task", "Hello World", "never", "high")
console.log(testTask)

submitProject.addEventListener("click", (e) => {
    e.preventDefault()
    createProject()
    renderProject()
})

submitTask.addEventListener("click", (e) => {
    e.preventDefault()
    createTask()
    renderTask()
})

export { main }