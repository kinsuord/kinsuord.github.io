// TODO LIST DATABASE ACCESS SIMULATION
// by Chun-You Yang, 2017.12.14

var ID = 0
var CONTENT = 1
var DUE = 2

// Read all todo list items
function readTodosArray(){
	if(typeof(localStorage.TodoContent) != "undefined" && typeof(localStorage.TodoDue) != "undefined" && typeof(localStorage.TodoId) != "undefined"){
		var count = localStorage.TodoCount;
		var idList = JSON.parse(localStorage.TodoId);
		var contentList = JSON.parse(localStorage.TodoContent);
		var dueList = JSON.parse(localStorage.TodoDue);
	}
	else{
		var count = 0;
		var idList = [];
		var contentList = [];
		var dueList = [];
	}

	var listLength = idList.length;
	var obj = [];

	for(index = 0; index < listLength; index++){
		obj[index] = [parseInt(idList[index]),contentList[index],dueList[index]];
	}

	return obj;
}

// Write all todo list items
function writeTodosArray(count, todoArr){
	var listLength = todoArr.length;
	var idList = [];
	var contentList = [];
	var dueList = [];

	for(i = 0; i < listLength; i++){
		idList.push(todoArr[i][ID]);
		contentList.push(todoArr[i][CONTENT]);
		dueList.push(todoArr[i][DUE]);
	}

	localStorage.TodoCount = count;
	localStorage.TodoId = JSON.stringify(idList);
	localStorage.TodoContent = JSON.stringify(contentList);
	localStorage.TodoDue = JSON.stringify(dueList);

	return;
}

function readCount(){
	if(typeof(localStorage.TodoCount) != "undefined"){
		return parseInt(localStorage.TodoCount);
	}
	else{
		return 0;
	}
}

// Read specific todo item by ID
function readTodo(id){
	var listArr = readTodosArray();
	var listLength = listArr.length;

	for(index = 0; index < listLength; index++){
		if(listArr[index][ID] == id){
			return listArr[index];
		}
	}
	return -1;
}

// Create a todo item and return created item ID
function createTodo(content, due){
	var count = readCount();
	var listArr = readTodosArray();

	listArr.push([count+1, content, due]);

	writeTodosArray(count+1, listArr);

	return count+1;
}

// Edit a todo item by selecting the ID and send in the new content
function editTodoContent(content, id){
	var count = readCount();
	var listArr = readTodosArray();
	var listLength = listArr.length;

	for(index = 0; index < listLength; index++){
		if(listArr[index][ID] == id){
			listArr[index][CONTENT] = content;
			writeTodosArray(count, listArr);
			return 0;
		}
	}

	return -1;
}

// Edit a todo item's due date by selecting the ID and send in the new due date
function editTodoDue(due, id){
	var count = readCount();
	var listArr = readTodosArray();
	var listLength = listArr.length;

	for(index = 0; index < listLength; index++){
		if(listArr[index][ID] == id){
			listArr[index][DUE] = due;
			writeTodosArray(count, listArr);
			return 0;
		}
	}
	
	return -1;
}

// Delete a todo item by selecting the ID
function deleteTodo(id){
	console.log("delete todo : " + id)
	
	var count = readCount();
	var listArr = readTodosArray();
	var listLength = listArr.length;
	
	var found_id = -1;
	
	for(index = 0; index < listLength; index++){
		if(listArr[index][ID] == id){
			found_id = index;
		}
		if(found_id!=-1){
			listArr[index][ID]--;
		}
	}
	
	if(found_id==-1){
		return -1;
	}

	listArr.splice(found_id, 1);
	console.log("count " + readCount());
	writeTodosArray(readCount() - 1, listArr);
	console.log("count " + readCount());
	
	return 0;
	
}

// add new todo item
function addTodo(){
	console.log("add todo");
	
	var add_form = document.forms[0];
	createTodo(add_form.elements[0].value,add_form.elements[1].value);
	updateTodo();
}
//
function finishTodo(id){
	console.log("finish todo : " + id);
	deleteTodo(id);
	updateTodo();
}

// change the value of modal
function openEdit(id){
	console.log("edit todo : " + id);
	var todoArr = readTodosArray();
	console.log(todoArr);
	var content_input = document.getElementById("content-input");
	content_input.value = todoArr[id-1][CONTENT];
	var due_input = document.getElementById("due-input");
	due_input.value = todoArr[id-1][DUE];
	var due_input = document.getElementById("id-input");
	due_input.value = todoArr[id-1][ID];
}

function editTodo(){
	var id = document.getElementById("id-input").value;
	var content = document.getElementById("content-input").value;
	var due = document.getElementById("due-input").value;
	console.log(content);
	editTodoContent(content,id);
	editTodoDue(due,id);
	updateTodo();
}

// update todo list to screen
function updateTodo(){
	console.log("update todo");

	var todo_table = document.getElementById("todo-list-table");	
	
	// if todo list is empty
	var empty_message = document.getElementById("empty-message");
	if(readCount() == 0){
		if(todo_table.rows.length==3){
			todo_table.deleteRow(1);
		}
		empty_message.removeAttribute("style");
		return;
	}
	// if todo list is not empty
	empty_message.style.display = "none";
	var todoArr = readTodosArray();
	
	// clean all list
	var table_length = todo_table.rows.length;
	for(var i=1; i<table_length-1; i++){
		todo_table.deleteRow(1);
	}
	
	// put new list
	for(var i=0; i<readCount(); i++){
		var row = todo_table.insertRow(i+1);
		var cell_id = row.insertCell(0);
		var cell_content = row.insertCell(1);
		var cell_due = row.insertCell(2);
		var cell_btn = row.insertCell(3);
		
		cell_id.innerHTML = todoArr[i][ID];
		cell_content.innerHTML = todoArr[i][CONTENT];
		cell_due.innerHTML = todoArr[i][DUE];
		cell_btn.innerHTML = '<a href="#" class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#editModal" onclick="openEdit('+todoArr[i][ID]+')">Edit</a>';
		cell_btn.innerHTML += '<a href="#" class="btn btn-sm btn-outline-success" onclick="finishTodo('+todoArr[i][ID]+')">Finish</a>';
	}

}

// clear all localStorage  
function clearLocalStorage(){
	localStorage.removeItem("TodoCount");
	localStorage.removeItem("TodoId");
	localStorage.removeItem("TodoContent");
	localStorage.removeItem("TodoDue");	
}

// when page is loaded
function loadPage(){
	updateTodo();
	//clearLocalStorage();
}
