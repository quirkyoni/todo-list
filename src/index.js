import './style.css';
import { Project, Task } from './classes'
import { projects, createProject } from './newProject'
import { renderProject } from './renderProject'
import { tasks, createTask } from './newTask'
import { renderTask } from './renderTask'

const main = document.querySelector("main")
const todo = document.querySelector(".to-do")
const submitProject = document.querySelector(".submit-project")
const submitTask = document.querySelector(".submit-task")
const projectSection = document.querySelector(".project-section")
const taskSection = document.querySelector(".task-section")

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

let projectIndex;

projectSection.addEventListener("click", (e) => {
    let selectProject = e.target
    console.log(selectProject)
    if (selectProject.classList.contains("project")) {
        projectIndex = selectProject.getAttribute("data-id")
    }
})

export { main, todo, projectSection, taskSection }