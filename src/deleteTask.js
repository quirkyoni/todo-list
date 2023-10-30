import { Task } from "./classes";
import { tasks, createTask } from "./newTask";
import { taskId } from ".";

const deleteTask = () => {
    tasks.filter((task, index) => {
        if (taskId == index) {
            tasks.splice(taskId, 1)
        }
    })
}

export { deleteTask }