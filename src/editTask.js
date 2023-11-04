import { tasks } from "./newTask"
import { taskSection, taskId } from "."
import { renderTasks } from "./renderTask"

const editTask = document.querySelector(".edit-task")
const submitEdit = document.querySelector(".submit-edit")
const editFormTaskTitle = document.querySelector(".edit-form-task-title")
const editFormTaskDescription = document.querySelector(".edit-form-task-description")
const editFormTaskDueDate = document.querySelector(".edit-form-task-due-date")
const editFormTaskPriority = document.querySelector(".edit-form-task-priority")

const submitEditTask = () => {
    submitEdit.addEventListener("click", (e) => {
        e.preventDefault()
        tasks[taskId].title = editFormTaskTitle.value
        tasks[taskId].description = editFormTaskDescription.value
        tasks[taskId].dueDate = editFormTaskDueDate.value
        tasks[taskId].priority = editFormTaskPriority.value
        editTask.style.display = "none"
        taskSection.textContent = ""
        renderTasks()
    })
}

export { submitEditTask }