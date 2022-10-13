document.getElementById('form').addEventListener('submit',saveValues);
function saveValues(e){
 var inp= document.getElementById("task").value;
 var dte= document.getElementById("date").value;
if (!inp || !dte){
   alert('please fill in the form');
   return false;
}
   
 var todoObject = {
name : inp,
type : dte
} 
if (localStorage.getItem('todos')===null){
var todos = [];
todos.push(todoObject);
localStorage.setItem('todos', JSON.stringify(todos));
}
else{
todos=JSON.parse(localStorage.getItem('todos'));
todos.push(todoObject);
localStorage.setItem('todos', JSON.stringify(todos));

}
e.preventDefault();
document.getElementById("task").value=null;
document.getElementById("date").value=null;
var input =  document.getElementById("task");
input.focus();
 }


    function addRow() {
 var todos= JSON.parse(localStorage.getItem('todos'));
const ul =document.getElementById("tasklist");   
ul.innerHTML= ' ';    
for (let i=0; i < todos.length; i++){
var inp = todos[i].name;
var dte = todos[i].type;
ul.innerHTML += '<li id="list">' + '<input class="chhh" id="chckbox" type="checkbox"/>'+ inp + '<hr>'+ dte + '<i onclick="removeRow(\''+inp+'\')" class="fas fa-trash-alt">' + '</i>' + '</li>';           

ul.addEventListener('click', function(ev){
   if (ev.target.checked==true ) {
    ev.target.parentNode.style.textDecoration="line-through";
      }
    else if  (ev.target.checked==false) {
    ev.target.parentNode.style.textDecoration="none";
      }
           });
   

}

} 

function removeRow(inp){
var todos= JSON.parse(localStorage.getItem('todos'));
for(var i=0; i < todos.length; i++){
   if(todos[i].name == inp){
   todos.splice(i,1);
}    
}
localStorage.setItem('todos', JSON.stringify(todos));
 addRow();
}

   
  