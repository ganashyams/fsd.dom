function validate(){
    let regex = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regex.test(user.value)){
       return true
}else{
    alert("email is inavlid")
    return false
}
}