for (n=0; n<=32; n++){
	document.write(n + "<br/>");
}
alert("Lines written!");

var feedback = prompt("How many lines did JavaScript write?");

if (feedback=="32"){
	alert("Right!");
}else if (feedback=="fuck you"){
	alert("Yeah, fuck you too");
}else{
	alert("Let's reveal the answer!");
}