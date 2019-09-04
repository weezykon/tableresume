// errorName = false;
// errorEmail = false;
// errorTitle = false;
// errorMessage = false;

// validate email
const  validateEmail = (e) => {
    var email = document.getElementById('email').value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkEmail =  re.test(String(email).toLowerCase());
    if(!checkEmail){
        document.querySelector('#emailError').classList.remove('hide');
        return true;
    }else{
        document.querySelector('#emailError').classList.add('hide');
        return false;
    }
}
const log = document.getElementById('email');
log.addEventListener('keyup', validateEmail);

// validate name
const validateFullname = (e) => {
    var fullname = document.getElementById('fullname').value;
    if(fullname.length < 4){
        document.querySelector('#fullnameError').classList.remove('hide');
        return true;
    }else{
        document.querySelector('#fullnameError').classList.add('hide');
        return false;
    }
}
const fullName = document.getElementById('fullname');
fullName.addEventListener('keyup', validateFullname);

// validate title
const validateTitle = (e) => {
    var title = document.getElementById('title').value;
    if(title.length < 4){
        document.querySelector('#titleError').classList.remove('hide');
        return true;
    }else{
        document.querySelector('#titleError').classList.add('hide');
        return false;
    }
}
const titleEvent = document.getElementById('title');
titleEvent.addEventListener('keyup', validateTitle);

// validate message
const validateMessage = (e) => {
    var message = document.getElementById('message').value;
    if(message.length < 20){
        document.querySelector('#messageError').classList.remove('hide');
        return true;
    }else{
        document.querySelector('#messageError').classList.add('hide');
        return false;
    }
}
const messageEvent = document.getElementById('message');
messageEvent.addEventListener('keyup', validateMessage);

function validate(){
    if(validateFullname || validateEmail || validateTitle || validateMessage){
        alert('fix errors');
    }else{
        alert('Loading....');
        console.log('yes');
    }
}