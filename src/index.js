import { Project, Task } from './classes'

const main = document.querySelector("main")

const testProject = new Project("hello world")
console.log(testProject)

const testTask = new Task("Task", "Hello World", "never", "high")
console.log(testTask)