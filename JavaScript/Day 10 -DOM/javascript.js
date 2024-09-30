var htag=document.getElementById("hid")
htag.innerHTML="Change Heading by Javascript"
var ptag=document.getElementsByClassName("pera")
var ptags=document.getElementsByTagName("p");
ptag[0].innerHTML="Hchanged by JS"
htag.style.color="Green"
console.log(ptag)
console.log(ptags);

function receivedata(){
    var fname=document.getElementById("fname")
    var lname=document.getElementById("lname")
    alert(fname.value+" "+lname.value)
}
function changePic(){
    var pic=document.getElementById("imageshow")
    pic.src="p2.jpg"
}