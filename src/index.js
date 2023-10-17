import { Project, Task } from './classes'
import { createProject } from './newProject'
import { createTask } from './newTask'

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
})

submitTask.addEventListener("click", (e) => {
    e.preventDefault()
    createTask()
})
