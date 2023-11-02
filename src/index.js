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
const editTask = document.querySelector(".edit-task")
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
        renderTasks()
        console.log(projects)
        console.log(tasks)
    }
    if (targetProject.className === "delete-button") {
        let targetProjectToDelete = targetProject.parentElement.getAttribute("data-id")
        console.log(targetProjectToDelete)
        let tasksToDelete = []
        tasks.filter((task, index) => {
            if (projects[targetProjectToDelete].title == task.projectId) {
                console.log(projects[targetProjectToDelete].title)
                tasksToDelete.push(index)
            }
        })
        for (let i = tasksToDelete.length - 1; i >= 0; i--) {
            tasks.splice(tasksToDelete[i], 1)
        }
        tasksToDelete = []
        projects.filter((project, index) => {
            if (index == targetProjectToDelete) {
                projects.splice(index, 1)
                projectSection.textContent = ""
                renderAllProjects()
            }
        })
        taskSection.textContent = ""
        console.log(projects)
        console.log(tasks)
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
        editTask.style.display = "block"
        console.log("hello")
    }
})



export { main, todo, projectSection, taskSection, projectDataId, taskId }