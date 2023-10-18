import { Project } from "./classes";
import { projects, createProject } from "./newProject";
import { main } from ".";


const renderProject = () => {

    projects.forEach((element, index) => {
        const project = document.createElement("div")
        project.className = "project"

        const projectTitle = document.createElement("div")
        projectTitle.className = "project-title"
        projectTitle.textContent = element.title
        project.appendChild(projectTitle)

        main.appendChild(project)
    })

}

export { renderProject }
