
function FormValidate()
{
let x = document.getElementById("username").value;
let y = document.getElementById("pwd").value;
let z = document.getElementById("confirmpwd").value;
if(x.length<8||x.length>20)
{
window.alert("Username is invalid!");
}
else
{
window.alert("Username is valid!");
}
if(y.length<8||y.length>20)
{
window.alert("Password is invalid!");
}
else
{
window.alert("Password is valid");
}
if(z.length<8||z.length>20)
{
window.alert("Confirm password is invalid!");
}
else
{
window.alert("Confirm Password is valid");
}
if(y==z)
{
window.alert("Passwords Match!");
}
else
{
window.alert("Passwords Dont Match");
}

}
