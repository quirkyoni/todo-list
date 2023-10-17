import { Project, Task } from './classes'
import { createProject } from './newProject'

const main = document.querySelector("main")
const submitProject = document.querySelector(".submit-project")

const testProject = new Project("hello world")
console.log(testProject)

const testTask = new Task("Task", "Hello World", "never", "high")
console.log(testTask)

submitProject.addEventListener("click", (e) => {
    e.preventDefault()
    createProject()
})

