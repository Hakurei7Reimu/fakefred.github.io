function print(str){
	document.write(str);
}

var a = prompt("A=");
var b = prompt("B=");
var c = prompt("C=");

var delta = b*b-4*a*c;
//print(delta);

if(delta>0){
	var sqrtDelta = Math.sqrt(delta);
	var x1 = (-b+sqrtDelta)/(2*a);
	var x2 = (-b-sqrtDelta)/(2*a);
	print("x1=");
	print(x1);
	print("<br/>");
	print("x2=");
	print(x2);
}else if(delta<0){
	print("原方程无实数根");
}else{
	var x = -b/(2*a);
	print("x1=x2=");
	print(x);
}
