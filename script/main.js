function plusOneSecond(){
	var elem = document.getElementById("life");
	var second = elem.innerHTML;
	//alert (second);
	second++;
	elem.innerHTML=second
}
var interval = setInterval(plusOneSecond,1000);

function stopPlus(){
	clearInterval(interval);
}

function safeMode(){
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		links[i].href = "";
	}
	alert("安全模式开启，所有链接失效");
}

function laYanJingMode(){
	//alert("lyjm");
	var changeColorInterval = setInterval(changeColor,100);
	//changeColor();
}

function changeColor(){
	//alert("changeColor()");
	var bodyElem = document.getElementById("bodyId");
	
	//alert(bodyElem);
	
	var bgc = bodyElem.style.backgroundColor;
	//alert(bgc);
	
	switch(bgc){
		case "white":
		bodyElem.style.backgroundColor="red";
		break;
		case "red":
		bodyElem.style.backgroundColor="orange";
		break;
		case "orange":
		bodyElem.style.backgroundColor="yellow";
		break;
		case "yellow":
		bodyElem.style.backgroundColor="green";
		break;
		case "green":
		bodyElem.style.backgroundColor="blue";
		break;
		case "blue":
		bodyElem.style.backgroundColor="purple";
		break;
		case "purple":
		bodyElem.style.backgroundColor="black";
		break;
		case "black":
		bodyElem.style.backgroundColor="white";
		break;
	}
}

function stopLaYanJingMode(){
	clearInterval(changeColorInterval);
}