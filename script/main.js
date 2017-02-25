function plusOneSecond(){
	var elem = document.getElementById("life");
	var second = elem.innerHTML;
	//alert (second);
	second++;
	elem.innerHTML=second
}
setInterval(plusOneSecond,1000);

function safeMode(){
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		links[i].href = "";
	}
	alert("安全模式开启，所有链接失效");
}
