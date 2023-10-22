import './style.css';
import { Project, Task } from './classes'
import { projects, createProject } from './newProject'
import { projectSection, renderProject } from './renderProject'
import { tasks, createTask } from './newTask'
import { taskSection, renderTask } from './renderTask'

const main = document.querySelector("main")
const submitProject = document.querySelector(".submit-project")
const submitTask = document.querySelector(".submit-task")

submitProject.addEventListener("click", (e) => {
    e.preventDefault()
    createProject()
    projectSection.textContent = ""
    renderProject()
})

submitTask.addEventListener("click", (e) => {
    e.preventDefault()
    createTask()
    taskSection.textContent = ""
    renderTask()
})

export { main }