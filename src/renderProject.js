import { Project } from "./classes";
import { projects, createProject } from "./newProject";
import { main, todo, projectSection } from ".";

const renderProject = () => {

    projects.forEach((element, index) => {

        const project = document.createElement("div")
        project.className = "project"
        project.setAttribute('data-id', `${index}`)

        const projectTitle = document.createElement("h3")
        projectTitle.className = "project-title"
        projectTitle.textContent = element.title
        project.appendChild(projectTitle)

        const editButton = document.createElement("button")
        editButton.className = "edit-button"
        editButton.textContent = "Edit"
        project.appendChild(editButton)

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-button"
        deleteButton.textContent = "Delete"
        project.appendChild(deleteButton)

        projectSection.appendChild(project)
    })

}

export { renderProject }
