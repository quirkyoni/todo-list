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

let projectDataId;

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

projectSection.addEventListener("click", (e) => {
    taskSection.textContent = ""
    let targetProject = e.target
    projectDataId = targetProject.getAttribute("data-id")
    if (targetProject.className === "project") {
        projects.forEach((project, index) => {
            project.active = 'false'
        })
        projects[projectDataId].active = 'true'
        console.log(projects)
        tasks.filter((task, index) => {
            if (projectDataId == task.projectId) {
                console.log(task)
                console.log('hello world')
                
            }
        })
    }
})

export { main, todo, projectSection, taskSection, projectDataId }