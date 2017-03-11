function plusOneSecond(){
var elem = document.getElementById("life");
var second = elem.innerHTML;
//alert (second);
second++;
elem.innerHTML=second
}
setInterval(plusOneSecond,1000);