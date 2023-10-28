import { Task } from "./classes";
import { tasks, createTask } from "./newTask";
import { projects } from "./newProject";
import { main, todo, taskSection, projectDataId } from ".";

const renderAllTasks = () => {

    tasks.forEach((task, index) => {
        const newTask = document.createElement("div")
        newTask.className = "task"
        newTask.setAttribute('data-id', `${index}`)

        const newTaskTitle = document.createElement("div")
        newTaskTitle.className = "task-title"
        newTaskTitle.textContent = task.title
        newTask.appendChild(newTaskTitle)

        const newTaskDescription = document.createElement("div")
        newTaskDescription.className = "task-description"
        newTaskDescription.textContent = task.description
        newTask.appendChild(newTaskDescription)

        const newTaskDueDate = document.createElement("div")
        newTaskDueDate.className = "task-due-date"
        newTaskDueDate.textContent = task.dueDate
        newTask.appendChild(newTaskDueDate)

        const newTaskPriority = document.createElement("div")
        newTaskPriority.className = "task-priority"
        newTaskPriority.textContent = task.priority
        newTask.appendChild(newTaskPriority)

        const editButton = document.createElement("button")
        editButton.className = "edit-button"
        editButton.textContent = "Edit"
        newTask.appendChild(editButton)

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-button"
        deleteButton.textContent = "Delete"
        newTask.appendChild(deleteButton)

        taskSection.appendChild(newTask)
    })

}

const renderTasks = () => {
    projects.filter((project, projectIndex) => {
        if (project.active === "true") {
            tasks.filter((task, taskIndex) => {
                if (task.projectId == projectIndex) {
                    console.log(tasks)
                    const newTask = document.createElement("div")
                    newTask.className = "task"
                    newTask.setAttribute('data-id', `${taskIndex}`)

                    const newTaskTitle = document.createElement("div")
                    newTaskTitle.className = "task-title"
                    newTaskTitle.textContent = task.title
                    newTask.appendChild(newTaskTitle)

                    const newTaskDescription = document.createElement("div")
                    newTaskDescription.className = "task-description"
                    newTaskDescription.textContent = task.description
                    newTask.appendChild(newTaskDescription)

                    const newTaskDueDate = document.createElement("div")
                    newTaskDueDate.className = "task-due-date"
                    newTaskDueDate.textContent = task.dueDate
                    newTask.appendChild(newTaskDueDate)

                    const newTaskPriority = document.createElement("div")
                    newTaskPriority.className = "task-priority"
                    newTaskPriority.textContent = task.priority
                    newTask.appendChild(newTaskPriority)

                    const editButton = document.createElement("button")
                    editButton.className = "edit-button"
                    editButton.textContent = "Edit"
                    newTask.appendChild(editButton)

                    const deleteButton = document.createElement("button")
                    deleteButton.className = "delete-button"
                    deleteButton.textContent = "Delete"
                    newTask.appendChild(deleteButton)

                    taskSection.appendChild(newTask)
                }
            })
        }
    })
}

const renderIndividualTasks = () => {

    tasks.filter((task, index) => {
        if (task.projectId == projectDataId) {
            console.log(task)
            const newTask = document.createElement("div")
            newTask.className = "task"
            newTask.setAttribute('data-id', `${index}`)

            const newTaskTitle = document.createElement("div")
            newTaskTitle.className = "task-title"
            newTaskTitle.textContent = task.title
            newTask.appendChild(newTaskTitle)

            const newTaskDescription = document.createElement("div")
            newTaskDescription.className = "task-description"
            newTaskDescription.textContent = task.description
            newTask.appendChild(newTaskDescription)

            const newTaskDueDate = document.createElement("div")
            newTaskDueDate.className = "task-due-date"
            newTaskDueDate.textContent = task.dueDate
            newTask.appendChild(newTaskDueDate)

            const newTaskPriority = document.createElement("div")
            newTaskPriority.className = "task-priority"
            newTaskPriority.textContent = task.priority
            newTask.appendChild(newTaskPriority)

            const editButton = document.createElement("button")
            editButton.className = "edit-button"
            editButton.textContent = "Edit"
            newTask.appendChild(editButton)

            const deleteButton = document.createElement("button")
            deleteButton.className = "delete-button"
            deleteButton.textContent = "Delete"
            newTask.appendChild(deleteButton)

            taskSection.appendChild(newTask)
        }
    })
}

export { renderAllTasks, renderTasks, renderIndividualTasks }
