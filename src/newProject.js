import { Project } from './classes'

const projectTitle = document.querySelector(".form-project-title")

let projects = []

const createProject = () => {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
    console.log(projects)
}

export { projects, createProject }
