// console.log("Hello");
// console.log("ist goog");
// window.alert("i really love pizza");

// let username;
// document.getElementById("myButton").onclick = function(){
// 	username=document.getElementById("myText").value;
// 	console.log(username);
// }
document.getElementById("addButton").onclick = function(){
	a=document.getElementById("aTextBox").value;
	a = Number(a);
	b = document.getElementById("bTextBox").value;
	b=Number(b);

c= (a+b);
document.getElementById("addition").innerHTML =c;
}
document.getElementById("subButton").onclick = function(){
	a=document.getElementById("aTextBox").value;
	a = Number(a);
	b = document.getElementById("bTextBox").value;
	b=Number(b);

c= (a-b);
document.getElementById("subtraction").innerHTML =c;
}
document.getElementById("mulButton").onclick = function(){
	a=document.getElementById("aTextBox").value;
	a = Number(a);
	b = document.getElementById("bTextBox").value;
	b=Number(b);

c= (a*b);
document.getElementById("mult").innerHTML =c;
}
document.getElementById("divButton").onclick = function(){
	a=document.getElementById("aTextBox").value;
	a = Number(a);
	b = document.getElementById("bTextBox").value;
	b=Number(b);

c= (a/b);
document.getElementById("div").innerHTML =c;
}
document.getElementById("remButton").onclick = function(){
	a=document.getElementById("aTextBox").value;
	a = Number(a);
	b = document.getElementById("bTextBox").value;
	b=Number(b);

c= (a%b);
document.getElementById("rem").innerHTML =c;
}
