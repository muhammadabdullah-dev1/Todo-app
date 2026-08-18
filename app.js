let todoInput = document.querySelector("#todoInput")
let addBtn = document.querySelector("#addBtn")
let todoList = document.querySelector("#todoList")
// const li = document.createElement("li")

addBtn.addEventListener("click", function (dets) {
    // dets.preventDefault()

    if (todoInput.value !== "") {
        const li = document.createElement("li")
        li.textContent = todoInput.value
        todoList.appendChild(li)
         todoInput.value = ""

    } else {
       
    }


    // appendchild(todoList.textContent = todoInput.value)

})