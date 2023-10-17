import { Project } from './classes'

const projectTitle = document.querySelector(".project-title")

const projects = []

const createProject = () => {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
    console.log(projects)
}

export { createProject }
