let todoInput = document.querySelector("#todoInput")
let addBtn = document.querySelector("#addBtn")
let todoList = document.querySelector("#todoList")
// const li = document.createElement("li")

addBtn.addEventListener("click", function (dets) {
    // dets.preventDefault()

    if (todoInput.value !== "") {
        const li = document.createElement("li")
        const span =document.createElement("span")
        const delbtn =document.createElement("button")
        const addbtn =document.createElement("button")
        li.textContent = todoInput.value
        todoList.appendChild(li)
        li.appendChild(addbtn)
        li.appendChild(addbtn)
         todoInput.value = ""

    } 


    // appendchild(todoList.textContent = todoInput.value)

})