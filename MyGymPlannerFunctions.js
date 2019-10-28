function AddExercise(){
var Ref1=document.getElementById("Ex");
var Ref2=document.getElementById("MID");
	Ref1.value="";
	Ref2.value="";
var refadd= document.getElementById("AddForm");
refadd.style.visibility="visible";
var refedit= document.getElementById("EditForm");
refedit.style.visibility="hidden";
var refdelete= document.getElementById("DeleteForm");
refdelete.style.visibility="hidden";
refadd.style="width:275px;height:315px;position:fixed;border-radius:25px;background-color:grey;border:2px solid #A22F16;top:50%;left:50%;margin-top: -100px;margin-left: -100px";
}

function EditExercise(){
var refadd= document.getElementById("AddForm");
refadd.style.visibility="hidden";
var refedit= document.getElementById("EditForm");
refedit.style.visibility="visible";
var refdelete= document.getElementById("DeleteForm");
refdelete.style.visibility="hidden";
refedit.style="width:275px;height:225px;position:fixed;border-radius:25px;background-color:grey;border:2px solid #A22F16;top:50%;left:50%;margin-top: -100px;margin-left: -100px";
}

function DeleteExercise(){
var refadd= document.getElementById("AddForm");
refadd.style.visibility="hidden";
var refedit= document.getElementById("EditForm");
refedit.style.visibility="hidden";
var refdelete= document.getElementById("DeleteForm");
refdelete.style.visibility="visible";
refdelete.style="width:275px;height:175px;position:fixed;border-radius:25px;background-color:grey;border:2px solid #A22F16;top:50%;left:50%;margin-top: -100px;margin-left: -100px";
}

function CloseMenu(){
	var refadd= document.getElementById("AddForm");
	refadd.style.visibility="hidden";
	var refedit= document.getElementById("EditForm");
	refedit.style.visibility="hidden";
	var refdelete= document.getElementById("DeleteForm");
	refdelete.style.visibility="hidden";
	window.alert("Form Closed");
}

function checkValues1(){
	var Ref1=document.getElementById("Ex");
	var Ref2=document.getElementById("MID");
	if(Ref1.value==""){
		alert("Exercise is Missing");
		return false;
	}
	if(Ref2.value==""){
		alert("Muscle ID is Missing");
		return false;
	}
	
	var refadd= document.getElementById("AddForm");
	refadd.style.visibility="hidden";
	window.alert("Exercise Added");
	location.reload(true);
}

function checkValues2(){
	var Ref1=document.getElementById("Ex1");
	var Ref2=document.getElementById("MID1");
	if(Ref1.value==""){
		alert("Exercise is Missing");
		return false;
	}
	if(Ref2.value==""){
		alert("Muscle ID is Missing");
		return false;
	}
	var refedit= document.getElementById("EditForm");
	refedit.style.visibility="hidden";
	window.alert("Exercise Altered");
	location.reload(true);
}

function checkValues3(){
	var Ref1=document.getElementById("ExID");
	if(Ref1.value==""){
		alert("Enter the Exercise ID you wish to Delete");
		return false;
	}
	else {
	var refdelete= document.getElementById("DeleteForm");
	refdelete.style.visibility="hidden";
	location.reload(true);
	window.alert("Deletion Confirmed");
	}
}

function clearText(T){
	T.value="";
}

function reload(){
	location.reload(true);
}

function postData(form){
	for (let inputty of form){
	console.log(inputty.value);
	}
	return false;
}