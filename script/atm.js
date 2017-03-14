function addMoney(noteType,quantity){
	switch(noteType){
		case 100:
			for(i=0;i<quantity;i++){
				document.write("<img src=\"atm/100.jpg\"/>");
			}
		break;
		case 50:
			for(i=0;i<quantity;i++){
				document.write("<img src=\"atm/50.jpg\"/>")
			}
		break;
		case 20:
			for(i=0;i<quantity;i++){
				document.write("<img src=\"atm/20.jpg\"/>")
			}
		break;
		case 10:
			for(i=0;i<quantity;i++){
				document.write("<img src=\"atm/10.jpg\"/>")
			}
		break;
		case 1:
			for(i=0;i<quantity;i++){
				document.write("<img src=\"atm/1.png\"/>")
			}
		break;
	}
}

var total = prompt("请输入取款金额：");
if(total>1000){
	alert("数值过大");
}else if(total>0 && total<=1000){
	var oneHundredNotes = Math.floor(total/100);
	addMoney(100,oneHundredNotes);
	var fiftyNotes = Math.floor((total-oneHundredNotes*100)/50);
	addMoney(50,fiftyNotes);
	var twentyNotes = Math.floor((total-oneHundredNotes*100-fiftyNotes*50)/20);
	addMoney(20,twentyNotes);
	var tenNotes = Math.floor((total-oneHundredNotes*100-fiftyNotes*50-twentyNotes*20)/10);
	addMoney(10,tenNotes);
	var coin = Math.floor(total-oneHundredNotes*100-fiftyNotes*50-twentyNotes*20-tenNotes*10)
	addMoney(1,coin);
}else{
	alert("数值无效");
}
