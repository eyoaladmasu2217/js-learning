document.addEventListener('DOMContentLoaded', function() {
    const todoAdd = document.getElementById("addButton");
    const todoInput = document.getElementById("inputField");
    const todoList = document.getElementById("todo-lists"); 

    todoAdd.addEventListener('click', function() {
        const task = todoInput.value.trim();
        if (task !== "") {
            const li = document.createElement('li');
            li.textContent = task;
            todoList.appendChild(li);
            todoInput.value = "";
        }
    });

    // Optional: Add task on Enter key
    todoInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            todoAdd.click();
        }
    });
});