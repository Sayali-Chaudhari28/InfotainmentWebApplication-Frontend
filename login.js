var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("Email").value;
var password = document.getElementById("Pass").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
// window.location = "#"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("Email").disabled = true;
document.getElementById("Pass").disabled = true;
document.getElementById("log").disabled = true;
return false;
}
}
}