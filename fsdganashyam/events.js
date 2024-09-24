function popup(){
    alert("you have clicked me!!")
}
var btn = document.getElementById("myBtn")
btn.addEventListener("click",function(){
    btn.textContent="changed"
})
var text= document.getElementById("text")
function chan(){
    text.style.backgroundColor="yellow";
}
function hide(){
    text.style.backgroundColor="white";
}