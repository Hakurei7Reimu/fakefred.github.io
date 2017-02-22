var x1=prompt("X坐标1");
var y1=prompt("Y坐标1");
var x2=prompt("X坐标2");
var y2=prompt("Y坐标2");

var k=(y1-y2)/(x1-x2)
var b=y1-x1*k

//document.write(k);
//document.write(b);
//document.write("y=" + k + "x+" + b);

if(b>0){
document.write("y=");
document.write(k);
document.write("x+");
document.write(b);
}else if(b<0){
document.write("y=");
document.write(k);
document.write("x");
document.write(b);
}else{
document.write("y=");
document.write(k);
document.write("x");
}
