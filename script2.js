

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

let list=document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.textContent=task.text;

if(task.completed){
li.classList.add("completed");
}

li.onclick=function(){
tasks[index].completed=!tasks[index].completed;
saveTasks();
renderTasks();
};

let del=document.createElement("button");

del.textContent="X";
del.className="delete";

del.onclick=function(e){
e.stopPropagation();
tasks.splice(index,1);
saveTasks();
renderTasks();
};

li.appendChild(del);

list.appendChild(li);

});

}

function addTask(){

let input=document.getElementById("taskInput");

let text=input.value.trim();

if(text===""){
alert("Enter task");
return;
}

tasks.push({
text:text,
completed:false
});

input.value="";

saveTasks();
renderTasks();

}


/* Dark Mode */

document.getElementById("darkBtn").onclick=function(){
document.body.classList.toggle("dark");
};


/* Contact Form */

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("message").value.trim();

let error=document.getElementById("error");

if(name==="" || email==="" || message===""){
error.innerText="All fields required";
error.style.color="red";
return;
}

error.innerText="Message sent successfully";
error.style.color="green";

this.reset();

});

renderTasks();