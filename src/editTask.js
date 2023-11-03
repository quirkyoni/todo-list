const submitEdit = document.querySelector(".submit-edit")

const submitEditTask = () => {
    submitEdit.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("hello")
    })
}

export { submitEditTask }