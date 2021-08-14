var todos = [];
var list = document.querySelector(".elements");
var input = document.querySelector(".new-todo");

function updateTodos() {
  list.innerHTML = "";
  todos.map((todo) => {
    let textTag = document.createElement("p");
    let text = document.createTextNode(todo);
    textTag.appendChild(text);
    list.appendChild(textTag);
  });
  input.value = "";
}

function addTodo() {
  todos.push(input.value);
  updateTodos();
}

document.querySelector(".form-btn").addEventListener("click", addTodo);
