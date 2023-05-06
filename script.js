// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions

// ADD TODO
function addTodo(event) {
  // Prevent form from Submitting
  event.preventDefault();
  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //   Create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // ADD TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.values)

  // CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton);
  // CHECK TRASH BUTTON
  const TrashButton = document.createElement('button');
  TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
  TrashButton.classList.add("trash-btn")
  todoDiv.appendChild(TrashButton);
  // APPEND TO LIST 
  todoList.appendChild(todoDiv);
  // CLear Todo INPUT VALUE
  todoInput.value= "";
}

// DELETE AND CHECK FUnctions
function deleteCheck(e){
  const item = e.target;
  // DELETE TODO
  if(item.classList[0]==='trash-btn'){
    // Animation
    item.parentElement.classList.add('fall');
    // remove Function
    item.parentElement.addEventListener('transitionend', function(){
      item.parentElement.remove();
    })
  }
  // CHECKMARK TODO
  if(item.classList[0]==='complete-btn'){
    item.parentElement.classList.toggle('completed');
  }
}

// filterOption function
function filterTodo(e){
  const todos=todoList.childNodes;
  todos.forEach(function(key){
    switch(e.target.value){
      case "all":
        key.style.display = "flex"
        break;
      case "completed":
       if(key.classList.contains('completed')){
        key.style.display = "flex"}
      else{
        key.style.display ="none"}
        break;
      case "uncompleted":
       if(!key.classList.contains('completed')){
          key.style.display = "flex"}
      else{
          key.style.display ="none"}
          break;
    }
  });


}

// LOCAL STORAGE TODOS

function saveLocalTodos(todo){
  // CHECK ---HEY dDo I already have thing in there?

  let todos;
  if(localStorage.getItem('todos')===null){
    todos =[];
  }else{
      todos=JSON.parse(localStorage.getItem('todos'));

  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));

}

function getTodos(){
  // CHECK ---HEY dDo I already have thing in there?
  let todos;
  if(localStorage.getItem('todos')===null){
    todos =[];
  }else{
      todos=JSON.parse(localStorage.getItem('todos'));

  }
  todos.forEach(function(todo){
    // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //   Create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton);
  // CHECK TRASH BUTTON
  const TrashButton = document.createElement('button');
  TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
  TrashButton.classList.add("trash-btn")
  todoDiv.appendChild(TrashButton);
  // APPEND TO LIST 
  todoList.appendChild(todoDiv);

  });

}

function removeLocalTodos(todo){
  // CHECK ---HEY dDo I already have thing in there?
  let todos;
  if(localStorage.getItem('todos')===null){
    todos =[];
  }else{
      todos=JSON.parse(localStorage.getItem('todos'));
  }


}