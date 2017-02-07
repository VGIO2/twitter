var boton=document.getElementById("boton");
boton.setAttribute("onclick","onButtonClick()");

var tareas=[];
// texto
// check

function onButtonClick(){
    var textArea=document.getElementById("texto");
    tareas.push({texto:textArea.value,check:false});
    textArea.value="";
    textArea.focus();
        crearElementos();
}

function crearElementos(){
    var lista= document.getElementById("lista");
    lista.innerHTML="";
    for (var i in tareas){
        var html= "<li class='tarea'><input onclick='onChecked("+i+")' class='check' type='checkbox' "+(tareas[i].check?"checked":"")+">"+"<span "+(tareas[i].check?"style='text-decoration:line-through'":"style='text-decoration:none'")+" id='new'>"+tareas[i].texto+"</span><i onclick='eliminarSpan("+i+")' class='glyphicon glyphicon-trash tacho'></i></li>";
        
        lista.innerHTML+=html;
    }
}

function onChecked(pos){
    tareas[pos].check = !tareas[pos].check;
    crearElementos();
   /* if( tareas[pos].check==false){
        tareas[pos].check=true;
    }else{
        tareas[pos].check=false;
    }
    crearElementos();*/
}
function eliminarSpan(trash){
    tareas.splice(trash,1)
    crearElementos();
}




























/*var lista=document.getElementById("lista");

function anadirTarea(){
	
	var textInput = document.getElementById("textInput");
    
	if(textInput.value.length != 0){
        
		var	tareas = document.createElement("li");
        
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type","checkbox");
        
        
		var	span = document.createElement("span");
		span.innerHTML = textInput.value;
        
        
		var trashes = document.createElement("i");
		trashes.className="glyphicon glyphicon-trash tacho, pull-right";	
		tareas.appendChild(checkbox);
		tareas.appendChild(span);
		tareas.appendChild(trashes);
		lista.appendChild(tareas);		
		trashes.addEventListener("click", deleteTodo);
		checkbox.addEventListener("click", trash);
		textInput.value="";
		textInput.focus();
	}
	else
		alert("Ingresar lista de tareas.")
}

	function deleteTodo(evt)
	{
		var li=evt.target.parentNode;
		lista.removeChild(li);
	}

	function trash(evt)
	{
	var check=evt.target;
	if(check.checked)
	{
		check.nextSibling.setAttribute("style","text-decoration: line-through");
	}
	else
	{
		check.nextSibling.setAttribute("style","text-decoration: none");
	}	
}*/