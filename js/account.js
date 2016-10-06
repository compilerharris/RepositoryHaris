
var usernameAlloted = ['salman','haris','shahrukh'];

function checkUsername(e) {
	var element = e.target;
	var message = document.getElementById('userErr');
	var flag = 0; 
	for (var i = 0; i < usernameAlloted.length; i++) {
		if( usernameAlloted[i] == element.value){
			message.textContent = 'Username Unavailabe...';
		}
	}
	if(flag == 0 && message.textContent == ''){
		message.textContent = 'Username Availabe!';
	}
}

function setActive(e) {
	var element = e.target;
	var prevElement = document.getElementsByClassName('active');
	
	if(prevElement.length == 1 ){
		prevElement[0].setAttribute('class','');
	}
	element.setAttribute('class','active');
}

var elements = document.getElementsByTagName('input');
for (var i = 0; i < elements.length; i++) {
	if (elements[i].type != 'submit' && elements[i].type != 'reset' ) {
		elements[i].addEventListener('focus',setActive,false);
	}
}

var username = document.getElementById('username');
username.addEventListener('blur',checkUsername,false);