import { tasks } from "./newTask"
import { taskSection, taskId } from "."
import { renderTasks } from "./renderTask"

const taskPriority = document.querySelectorAll(".form-task-priority")
const lowPriority = document.querySelector(".form-task-priority.low")
const mediumPriority = document.querySelector(".form-task-priority.medium")
const highPriority = document.querySelector(".form-task-priority.high")

const editTask = document.querySelector(".edit-task")
const submitEdit = document.querySelector(".submit-edit")
const editFormTaskTitle = document.querySelector(".edit-form-task-title")
const editFormTaskDescription = document.querySelector(".edit-form-task-description")
const editFormTaskDueDate = document.querySelector(".edit-form-task-due-date")
const editFormTaskPriority = document.querySelectorAll(".edit-form-task-priority")
const editFormTaskPriorityLow = document.querySelector(".edit-form-task-priority.low")
const editFormTaskPriorityMedium = document.querySelector(".edit-form-task-priority.medium")
const editFormTaskPriorityHigh = document.querySelector(".edit-form-task-priority.high")

const submitEditTask = () => {
    submitEdit.addEventListener("click", (e) => {

        e.preventDefault()
        tasks[taskId].title = editFormTaskTitle.value
        tasks[taskId].description = editFormTaskDescription.value
        tasks[taskId].dueDate = editFormTaskDueDate.value

        if (editFormTaskPriorityLow.checked) {
            tasks[taskId].priority = editFormTaskPriorityLow.value
        } else if (editFormTaskPriorityMedium.checked) {
            tasks[taskId].priority = editFormTaskPriorityMedium.value
        } else if (editFormTaskPriorityHigh.checked) {
            tasks[taskId].priority = editFormTaskPriorityHigh.value
        }

        editTask.style.display = "none"
        taskSection.textContent = ""
        renderTasks()
    })
}

export { submitEditTask }