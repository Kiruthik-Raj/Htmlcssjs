const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue === '') {
    setErrorFor(username, 'Please enter Username!!!');
    } else {
    setSuccessFor(username);
    }
    if(emailValue === '') {
    setErrorFor(email, 'Please Enter Email!!!!');
    } 
    else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not Valid!!!!');
    } 
    else {
    setSuccessFor(email);
    }
    if(passwordValue === '') {
    setErrorFor(password, 'Please Enter Password!!!!');
    } 
    else {
    setSuccessFor(password);
    }
    if(password2Value === '') {
    setErrorFor(password2, 'Password Does not Match!!');
    } 
    else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Password Does not Match!!');
    } 
    else{
    setSuccessFor(password2);
    alert('Details Validated SuccessFully!!!');
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}