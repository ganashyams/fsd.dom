var a=document.getElementById("user");
var a=document.getElementById("pwd");
var btn=document.getElementById("btn");
var error=document.getElementById("error")
function validate()
    {
    if(user.value.trim()==""||pwd.value.trim()=="") {
        alert("field cannot be empty");
        return false;
    }else if(pwd.value.length<5){
        // alert("password should be grater than 5");
        pwd.style.border="2px solid red";
        error.textContent="password should be grater than 5";
        return false
    }
    else{
        pwd.style.border="2px solid green";


        return true;
    }
        
    }
