class Project {
    constructor(name) {
        this.name = name
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