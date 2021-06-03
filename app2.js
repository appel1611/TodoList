const input = document.getElementById("input");
const btn = document.getElementById("btn");
let todoList = document.getElementById("todoList");


let tarefas = [];

function addTodo(){
    let newTodo = input.value;
    tarefas.push(newTodo);
}

function addToList(){
    let todo = document.createElement("li");
    for(item of tarefas){
        todo.innerHTML = item;
        todoList.appendChild(todo);
    }
    if(todo){
        todo.addEventListener("click", ()=>{
            let addTrash =  document.createElement("span");
            todo.classList.toggle("complete");
            if(todo.classList.contains("complete")){
                todo.appendChild(addTrash);
                addTrash.innerHTML = `<i class="far fa-trash-alt"></i>`;
                addTrash.style.color = "red"; 
                console.log(todo);
            };
         })
    }
}

btn.addEventListener("click", function(){
    addTodo();
    console.log(tarefas);
    input.value = "";
    addToList();
})