		var idUP;
		
		//Visibility of Add Form

function AddExercise(){
var Ref1=document.getElementById("Ex");
var Ref2=document.getElementById("MID");
	Ref1.value="";
	Ref2.value="";
var refadd= document.getElementById("AddForm");
refadd.style.visibility="visible";
var refedit= document.getElementById("EditForm");
refedit.style.visibility="hidden";
refadd.style="width:325px;height:315px;position:fixed;border-radius:25px;background-color:grey;border:2px solid #A22F16;top:50%;left:50%;margin-top: -100px;margin-left: -100px";
}

		//Visibility of Edit Form

		

function EditExercise(){
var refadd= document.getElementById("AddForm");
refadd.style.visibility="hidden";
var refedit= document.getElementById("EditForm");
refedit.style.visibility="visible";
refedit.style="width:375px;height:225px;position:fixed;border-radius:25px;background-color:grey;border:2px solid #A22F16;top:50%;left:50%;margin-top: -100px;margin-left: -100px";
}

		//Menu Close Button Function

function CloseMenu(){
	var refadd= document.getElementById("AddForm");
	refadd.style.visibility="hidden";
	var refedit= document.getElementById("EditForm");
	refedit.style.visibility="hidden";
	window.alert("Form Closed");
}

		// Error Messages for Empty Fields (Add Form)

function checkValues1(){
	var Ref1=document.getElementById("Ex");
	var Ref2=document.getElementById("MID");
	if(Ref1.value==""){
		alert("Exercise is Missing");
		return false;
	}
	if(Ref2.value==""){
		alert("Muscle Group is Missing");
		return false;
	}
	
	var refadd= document.getElementById("AddForm");
	refadd.style.visibility="hidden";
	window.alert("Exercise Added");
	return true;
}

		// Error Messages for Empty Fields (Edit Form)

function checkValues2(){
	var Ref1=document.getElementById("Update");
	var Ref2=document.getElementById("Ed");
	if(Ref1.value==""){
		alert("What You Want To Change Is Missing");
		return false;
	}
	if(Ref2.value==""){
		alert("You Haven't Entered A Change");
		return false;
	}
	var refedit= document.getElementById("EditForm");
	refedit.style.visibility="hidden";
	window.alert("Exercise Altered");
	return true;
}

		// Clear Text on Form when Clicked

function clearText(T){
	T.value="";
}

		//Reload Function

function reload(){
	location.reload(true);
}

		// Show All Records Function

function getexistingrecs(){
	const Http = new XMLHttpRequest();
	const url="http://localhost:6464/exercise";
	Http.open("GET", url);
	Http.onreadystatechange = function(e){
	   if (Http.readyState==4){
		   var maintable = document.getElementById("AllExBody");
		    maintable.innerHTML="";
	   data=JSON.parse(Http.responseText);
	   data.forEach(function(item){
		  var weekday=document.getElementById(item.weekday+"Body");
		   var musclegroup=document.createElement("td");
		   var exercise=document.createElement("td");
		   var exerciseid=document.createElement("td");
		   var buttonDel = document.createElement("td");
		   var buttonUpd = document.createElement("td");
		   musclegroup.innerHTML=item.musclegroup;
		   exercise.innerHTML=item.exercise;
		   exerciseid.innerHTML=item.exerciseid;

		   let button = document.createElement("button");
		   button.innerHTML= "X";
		   button.type="button";
		   button.className = "btn tableDel";
		   button.addEventListener("click", function() {
			   deleteData(item.exerciseid);
		   });
		   buttonDel.appendChild(button);

		   let buttonU = document.createElement("button");
		   buttonU.innerHTML= "Edit";
		   buttonU.type="button";
		   buttonU.className = "btn tableUpd";
		   buttonU.addEventListener("click", function() {
			   EditExercise();
			   idUP = item.exerciseid;
		   });
		   buttonUpd.appendChild(buttonU);
		  
		   let mainRow=document.createElement("tr");
		   
		   mainRow.appendChild(musclegroup);
			mainRow.appendChild(exercise);
		   mainRow.appendChild(exerciseid);
			mainRow.appendChild(buttonDel);
			mainRow.appendChild(buttonUpd);
		   maintable.appendChild(mainRow);
		   
		   let x=mainRow.cloneNode(true);
		   weekday.appendChild(x);


	   });
	}
	}
	Http.send();
	}
	window.onload=getexistingrecs();

			// Delete Function

	function deleteData(id){
		var Http=new XMLHttpRequest();
		Http.open("DELETE", "http://localhost:6464/exercise/" + id);
		Http.setRequestHeader("Content-Type", "application/json");

		Http.onload=function(){
			getexistingrecs();
		}

		Http.send();
		return false;
	}

function postData(form){
    if (checkValues1()){
        var body= {};
        for(var inputty of form){
            if(inputty.name){

				if(inputty.type=="radio"){
					if(inputty.checked){
						body [inputty.name]= inputty.value;
					}
				}else{
					body [inputty.name]= inputty.value;
				}
            }
        
		}

		var data = JSON.stringify(body);
		var Http= new XMLHttpRequest();
        Http.open("POST", 'http://localhost:6464/exercise');
        Http.setRequestHeader("Content-Type", "application/json");
        Http.onload= function(){
            getexistingrecs();
        }
            
        
		Http.send(data);
	}
        return false;
	}

function editData(){

    var url ;
	var upD;
	
	if(checkValues2()){
	if(document.getElementById("Update").value=="Exercise"){
        upD=document.getElementById("Ed").value;
        url="http://localhost:6464/exerciseedit1/"+idUP+"/"+upD;
        
    }
    if(document.getElementById("Update").value=="Muscle Group"){
        upD=document.getElementById("Ed").value;
        url="http://localhost:6464/exerciseedit2/"+idUP+"/"+upD;
        
    }
	
    var Http = new XMLHttpRequest();
        Http.open("PUT", url);
        Http.setRequestHeader("Content-Type", "application/json");
        Http.onload= function(){
            getexistingrecs();
		}
	
		Http.send();
	}
        return false;
	
}
	
	