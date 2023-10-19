import { Task } from "./classes";
import { tasks, createTask } from "./newTask";
import { main } from ".";


const renderTask = () => {

    tasks.forEach((element, index) => {
        const task = document.createElement("div")
        task.className = "task"

        const taskTitle = document.createElement("div")
        taskTitle.className = "task-title"
        taskTitle.textContent = element.title
        task.appendChild(taskTitle)

        const taskDescription = document.createElement("div")
        taskDescription.className = "task-description"
        taskDescription.textContent = element.description
        task.appendChild(taskDescription)

        const taskDueDate = document.createElement("div")
        taskDueDate.className = "task-due-date"
        taskDueDate.textContent = element.dueDate
        task.appendChild(taskDueDate)

        const taskPriority = document.createElement("div")
        taskPriority.className = "task-priority"
        taskPriority.textContent = element.priority
        task.appendChild(taskPriority)

        const editButton = document.createElement("button")
        editButton.className = "edit-button"
        editButton.textContent = "Edit"
        task.appendChild(editButton)

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-button"
        deleteButton.textContent = "Delete"
        task.appendChild(deleteButton)

        main.appendChild(task)
    })

}

export { renderTask }
