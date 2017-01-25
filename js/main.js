var lista=document.getElementById("lista");

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
}