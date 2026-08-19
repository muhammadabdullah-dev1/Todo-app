let todoInput = document.querySelector("#todoInput")
let addBtn = document.querySelector("#addBtn")
let todoList = document.querySelector("#todoList")
// const li = document.createElement("li")

addBtn.addEventListener("click", function (dets) {
    // dets.preventDefault()

    if (todoInput.value === "") {
        alert("first enter text")

    } else {
        const li = document.createElement("li")
        const span = document.createElement("span")
        const delbtn = document.createElement("button")
        delbtn.innerHTML = "Delete"


        const updbtn = document.createElement("button")
        updbtn.innerHTML = "Update"

        li.textContent = todoInput.value
        todoList.appendChild(li)
        li.appendChild(span)
        li.appendChild(delbtn)
        li.appendChild(updbtn)
        todoInput.value = ""



        updbtn.addEventListener("click", function () {
            let newText = prompt("Update tex")
            li.textContent = newText.value
        })
    }


    // appendchild(todoList.textContent = todoInput.value)

})

