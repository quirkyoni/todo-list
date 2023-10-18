class Project {
    constructor(title) {
        this.title = title
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

export {
    Project,
    Task
}