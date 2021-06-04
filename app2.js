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
            
            todo.appendChild(addTrash);
            addTrash.innerHTML = `<i class=" delete far fa-trash-alt"></i>`;
            todo.classList.toggle("complete");
            addTrash.style.color = "red"; 
            console.log(todo);
        })
    }
    
}


btn.addEventListener("click", function(){
    if(input.value == "" || input.value == null){
        alert("Insira uma tarefa!");
        input.focus();
    }else{
        addTodo();
        input.value = "";
        input.focus();
        addToList();    
    }
    
})