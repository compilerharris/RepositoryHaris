
function checkRollNo(e) {
	var element = e.target;
	if(/[^0-9a-zA-Z]/.test(element.value)){
		alert("Invalid rollno...Please enter rollno as character from 0-9, a-z and A-Z.");
		element.value = "";
		return false;
	}	
	if(!/[a-zA-Z]/.test(element.value)){
		alert("Invalid rollno...Please enter rollno as character from 0-9, a-z and A-Z.");
		element.value = "";
		return false;
	}	
	if(!/[0-9]/.test(element.value)){
		alert("Invalid rollno...Please enter rollno as character from 0-9, a-z and A-Z.");
		element.value = "";
		return false;
	}
	if(element.value.length > 8 || element.value.length < 6){
		alert("Enter valid rollno.");
		element.value = "";
		return false;	
	}	
	return true;
}

function checkName(e) {
	var element = e.target;
	if(/[^a-zA-Z ]/.test(element.value)){
		alert("Invalid name...Please enter name as character from a-z and A-Z.");
		element.value = "";
		return false;
	}
	if(element.value.length <= 3){
		alert("Enter valid name.");
		element.value = "";
		return false;	
	}
	return true;
}

function checkAddress(e) {
	var element = e.target;
	if(element.value.length < 50){
		alert("Address is too short!");
		element.value = "";
		return false;
	}
	return true;
}
function checkEmail(e) {
	var element = e.target;
	if(!/[@]/.test(element.value)){
		alert("Invalid email...Please enter email with @.");
		element.value = "";
		return false;
	}
	if(/[^@_a-zA_Z0-9]/.test(element.value)){
		alert("Invalid email...Please enter email with @, a-z, A-Z and 0-9.");
		element.value = "";
		return false;
	}
	if(!/[.]/.test(element.value)){
		alert("Invalid email...Please enter email with '.'.");
		element.value = "";
		return false;
	}
	if(/[^a-zA-Z0-9]/.test(element.value)){
		alert("Invalid email...Please enter email a-z, A-Z and 0-9.");
		element.value = "";
		return false;
	}	
}

var rollno = document.getElementById('rollno');
var sname = document.getElementById('sname');
var address = document.getElementById('address');
var email = document.getElementById('email');

rollno.addEventListener('blur',checkRollNo,false);
sname.addEventListener('blur',checkName,false);
address.addEventListener('blur',checkAddress,false);
email.addEventListener('blur',checkEmail,false);