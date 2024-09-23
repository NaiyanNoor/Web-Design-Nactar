student= ["Naiyan","Mizan","Noyon","Ahad","Naimul","Tony"]
//document.write(s[4]);


for(var x=0;x<=student.length;x++){
    document.write(student[x],"<br>");
}

document.write(student,"<br>")

var y=student.toString()
document.write(y,"<br>")
document.write(y[20],"<br>")
student.push("Naiyan")
document.write(student,"<br>")
student.pop()
student.pop()
student.pop()
document.write(student)

//position
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Appl");
document.write(position)

//lastindexOf

let text = ["Apple", "Orange", "Apple", "Mango"];
let index = text.lastIndexOf("Apple");
document.write(position)


//Array includes


//Array Short

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

document.write("demo").innerHTML = sorted