/*
function addition (a,b){

    //var sum=a+b;
    //var sum=a-b;
    //var sum=a/b;

     var sum=a*b*c;
    document.write(sum,"<br>");
}
 addition(4,5,1);
 addition(5,9,2);
 addition(7,8,2);
 addition(10,15,1);

 */


//function return

/*
 function multiplication(a,b){
 var x=a*b
 return x;
 }

 function divisibleby5(a){
    if (a%5==0)
        return true;

    else
        return false;
 }

 var x=multiplication(4,5);

 var t=divisibleby5(x);

 document.write(t)

 */



/*
function even(x){
    document.write(x+"is even","<br>")   
}

function odd(x){
    document.write(x+"is odd","<br>")   
}

for (var x=0;x<=9; x++){
        if(x%2==0)
    {
        even(x)
    }
        else
    {
        odd()
    }
}

*/

let count=0
function printeven(){
    count++;
    if(count>100) return;
    document.write("Hello Sir", "<br>")
    printeven()
}
    printeven()
