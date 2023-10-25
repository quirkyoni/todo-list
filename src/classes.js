class Project {
    constructor(title, active) {
        this.title = title
        this.active = active
    }
}

class Task {
    constructor(title, description, dueDate, priority, projectId) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.projectId = projectId
    }
}

export {
    Project,
    Task
}