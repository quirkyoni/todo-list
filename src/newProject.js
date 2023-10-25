import { Project } from './classes'

const projectTitle = document.querySelector(".form-project-title")

let projects = []

const createProject = () => {
    projects.forEach(project => {
        project.active = 'false'
    })
    const newProject = new Project(projectTitle.value, 'true')
    projects.push(newProject)
    console.log(projects)
}

export { projects, createProject }
