const input = document.getElementById("newTodo");
const btn = document.getElementById("btn");
const todoList = document.getElementById("todoList");
btnDelete = `<a href="#" class="tasks"><i class="fas fa-check"></a>`;
let todoText = "";
let taskID = 1;
let tarefas = [];

function addTodo(){
    todoText = input.value;
    if(todoText){
        const todoEl = document.createElement("li");
            
        todoList.appendChild(todoEl);
        todoEl.dataset.id = taskID;
        
        todoEl.innerHTML = todoText;
        tarefas.push(todoText);
    }
    
    input.value = "";
    taskID++;

    for(item of tarefas){
        console.log(item);
    }
}

function addDel(){
    let delBtn = document.createElement("span");
    let iconDel = document.createTextNode("\f2ed");
    delBtn.className = "delete";
    delBtn.appendChild(iconDel);
    this.appendChild(iconDel);
}

btn.addEventListener("click", ()=>{
    addTodo();
})

