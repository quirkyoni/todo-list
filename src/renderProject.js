import { Project } from "./classes";
import { projects, createProject } from "./newProject";
import { main, todo, projectSection } from ".";

const renderAllProjects = () => {

    projects.forEach((project, index) => {
        const newProject = document.createElement("div")
        newProject.className = "project"
        newProject.setAttribute('data-id', `${index}`)

        const newProjectTitle = document.createElement("h3")
        newProjectTitle.className = "project-title"
        newProjectTitle.textContent = project.title
        newProject.appendChild(newProjectTitle)

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-button"
        deleteButton.textContent = "Delete"
        newProject.appendChild(deleteButton)

        projectSection.appendChild(newProject)
    })

}

export { renderAllProjects }
