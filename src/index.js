import './style.css';
import { Project, Task } from './classes'
import { projects, createProject } from './newProject'
import { renderAllProjects } from './renderProject'
import { tasks, createTask } from './newTask'
import { renderAllTasks, renderTasks, renderIndividualTasks } from './renderTask'

const main = document.querySelector("main")
const todo = document.querySelector(".to-do")
const submitProject = document.querySelector(".submit-project")
const submitTask = document.querySelector(".submit-task")
const projectSection = document.querySelector(".project-section")
const taskSection = document.querySelector(".task-section")

let projectDataId;
let taskId;

submitProject.addEventListener("click", (e) => {
    e.preventDefault()
    createProject()
    projectSection.textContent = ""
    taskSection.textContent = ""
    renderAllProjects()
})

submitTask.addEventListener("click", (e) => {
    e.preventDefault()
    createTask()
    taskSection.textContent = ""
    renderTasks()
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
        renderIndividualTasks()
        console.log(projects)
    } else if (targetProject.className === "delete-button") {
        console.log(targetProject.parentElement.getAttribute("data-id"))
        let targetProjectToDelete = targetProject.parentElement.getAttribute("data-id")
        projects.filter((project, index) => {
            if (index == targetProjectToDelete) {
                tasks.forEach((task, index) => {
                    if (index == projectDataId) {
                        tasks.splice(projectDataId, 1)
                        console.log(tasks)
                    }
                })
                projects.splice(index, 1)
                targetProject.parentElement.remove()
            }
        })
        projectSection.textContent = ""
        taskSection.textContent = ""
        renderAllProjects()
        console.log(projects)
    }

})

taskSection.addEventListener("click", (e) => {
    let targetTask = e.target
    taskId = targetTask.parentElement.getAttribute("data-id")
    if (targetTask.className == "delete-button") {
        tasks.filter((task, index) => {
            if (index == taskId) {
                tasks.splice(taskId, 1)
            }
        })
        targetTask.parentElement.remove()
        console.log(tasks)
    } else if (targetTask.className == "edit-button") {
        console.log(targetTask)
    }
})



export { main, todo, projectSection, taskSection, projectDataId, taskId }