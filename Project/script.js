// Array to store todos
const todos = []

// Function to add todo in an array
function addTodo() {
    const todo = document.querySelector("#todoInput")
    const todoData = todo.value 
    // console.log(todoData)
    if(todoData !== ""){
        todos.push({
            text : todoData,
            completed : false
        })
        todo.value = ""
        // console.log(todos)
        updateTodo()
    }

}

// Function to update todos in client side
function updateTodo() {
    let todoList = document.querySelector('#todoList')
    // console.log(todoList)
    todoList.innerHTML = ""
    todos.forEach(function(todo){
        let todoUpdate = document.createElement('li')
        todoUpdate.textContent = todo.text
        todoUpdate.className = todo.completed ? 'completed' : ''
        todoUpdate.onclick = function() {
            todoCompleted(todo)
        }
        todoList.appendChild(todoUpdate)
        countTodo()
    })
}

// Function to mark the completed todos
function todoCompleted(todo) {
    todo.completed = !todo.completed
    updateTodo()
}

// Function to count to total and completed todos
function countTodo() {
    const totalTodo = document.querySelector('#totalTasks')
    const completedTodo = document.querySelector('#completedTasks')
    totalTodo.textContent = todos.length
    completedTodo.textContent = todos.reduce(function(accumulator, todo){
        todo.completed ? accumulator++ : accumulator
        // if(todo.completed == true){
        //     accumulator++
        // }
        // else{

        // }
        return accumulator
    },0)
}

// Function to search the todos
function searchTodo(){
    searchInput = document.querySelector('#searchTodo')
    const searchInputValue = searchInput.value
    const filteredTodos = todos.filter(function(todo){
        // return todo.text.includes(searchInputValue)
        return todo.text.includes(searchInputValue)
    })
    updateTodoListAfterFiltered(filteredTodos)
}

// Function to upadate the todo list after filtering
function updateTodoListAfterFiltered(filteredTodos) {
    let todoList = document.querySelector('#todoList')
    todoList.innerHTML = ""
    filteredTodos.forEach(function(todo){
        let todoUpdate = document.createElement('li')
        todoUpdate.textContent = todo.text
        todoUpdate.className = todo.completed ? 'completed' : ''
        todoUpdate.onclick = function() {
            todoCompleted(todo)
        }
        console.log(todoUpdate)
        todoList.appendChild(todoUpdate)
    })
}