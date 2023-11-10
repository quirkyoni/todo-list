import './style.css';
import { Project, Task } from './classes'
import { projects, createProject } from './newProject'
import { renderAllProjects } from './renderProject'
import { tasks, createTask } from './newTask'
import { renderAllTasks, renderTasks, renderIndividualTasks } from './renderTask'
import { submitEditTask } from './editTask';

const main = document.querySelector("main")
const todo = document.querySelector(".to-do")
const submitProject = document.querySelector(".submit-project")
const addTaskButton = document.querySelector(".add-task-button")
const taskModal = document.querySelector(".task-modal")
const closeTaskForm = document.querySelector(".close-task-form")
const taskPriority = document.querySelectorAll(".form-task-priority")
const lowPriority = document.querySelector(".form-task-priority.low")
const mediumPriority = document.querySelector(".form-task-priority.medium")
const highPriority = document.querySelector(".form-task-priority.high")
const submitTask = document.querySelector(".submit-task")

const editTask = document.querySelector(".edit-task")
const editTaskForm = document.querySelector(".edit-task-form")
const closeEditTaskForm = document.querySelector(".close-edit-task-form")
const editFormTaskTitle = document.querySelector(".edit-form-task-title")
const editFormTaskDescription = document.querySelector(".edit-form-task-description")
const editFormTaskDueDate = document.querySelector(".edit-form-task-due-date")
const editFormTaskPriority = document.querySelectorAll(".edit-form-task-priority")
const editFormTaskPriorityLow = document.querySelector(".edit-form-task-priority.low")
const editFormTaskPriorityMedium = document.querySelector(".edit-form-task-priority.medium")
const editFormTaskPriorityHigh = document.querySelector(".edit-form-task-priority.high")
const submitEdit = document.querySelector(".submit-edit")

const projectSection = document.querySelector(".project-section")
const taskSection = document.querySelector(".task-section")

let projectDataId;
let taskId;

submitProject.addEventListener("click", (e) => {
    e.preventDefault()
    createProject()
    // localStorage.setItem("projects", JSON.stringify(projects))
    projectSection.textContent = ""
    taskSection.textContent = ""
    renderAllProjects()

})

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault()
    taskModal.style.display = "block"
})

closeTaskForm.addEventListener("click", (e) => {
    e.preventDefault()
    taskModal.style.display = "none"
})

closeEditTaskForm.addEventListener("click", (e) => {
    e.preventDefault()
    editTask.style.display = "none"
})

submitTask.addEventListener("click", (e) => {
    e.preventDefault()
    taskModal.style.display = "none"
    createTask()
    // localStorage.setItem("tasks", JSON.stringify(tasks))
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
    } else if (targetTask.className == "edit-button") {
        editTask.style.display = "block"
        editFormTaskTitle.value = tasks[taskId].title
        editFormTaskDescription.value = tasks[taskId].description
        editFormTaskDueDate.value = tasks[taskId].dueDate
        // editFormTaskPriority.value = tasks[taskId].priority
        if (tasks[taskId].priority == "Low") {
            console.log(lowPriority.value)
            editFormTaskPriorityLow.checked = true
        } else if (tasks[taskId].priority == "Medium") {
            console.log(mediumPriority.value)
            editFormTaskPriorityMedium.checked = true
        } else if (tasks[taskId].priority == "High") {
            console.log(highPriority.value)
            editFormTaskPriorityHigh.checked = true
        }
        submitEditTask()
    }
})

// window.addEventListener("load", (e) => {

//     projects = JSON.parse(localStorage.getItem('projects'))
//     renderAllProjects()
//     tasks = JSON.parse(localStorage.getItem('tasks'))
//     renderTasks()

// })

export { main, todo, projectSection, taskSection, projectDataId, taskId }