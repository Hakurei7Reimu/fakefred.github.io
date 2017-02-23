//USER INPUT
var a = prompt("");
var b = prompt("");
var c = prompt("");

//CALCULATION
var delta = b*b-4*a*c;
document.write(delta + "<br/>");

if(delta>=0){
var x1 = (-b+sqrt(delta))/(2*a);
var x2 = (-b-sqrt(delta))/(2*a);
document.write("x1=")
document.write(x1)
document.write("<br/>x2=")
document.write(x2)
}