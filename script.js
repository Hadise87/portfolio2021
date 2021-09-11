

// const text = document.getElementById("text");
// // const speedEl = document.getElementById("speed");
// const prog = "I am Hadiseh!";
// let idx = 1;
// let speed = 300 / getElementById("speed").value;


// writeText();

// function writeText() {
//     text.innerText = prog.slice(0, idx)
	
// 	idx++;
	
// 	if(idx > prog.length){
//       idx = 1;
//     }
	
// 	setTimeout(writeText, speed);
// }

// getElementById("speed").addEventListener('input', (e) => {
// 	speed = 300 / e.target.value;
// });



var i = 0;
var txt = 'Hello !'; 
var speed = 150;

window.onload = function typeName() {
  if (i < txt.length) {
    document.getElementById("myname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeName, speed);
  }
  var theDelay2 = 3;
  var theDelay3 = 4;
  var timer = setTimeout("showText1()",theDelay2*1000)
  var timer = setTimeout("showText2()",theDelay3*1000)
}
function showText1(){
  document.getElementById("delayedTextline2").style.visibility = "visible";

}
function showText2(){
  document.getElementById("delayedTextline3").style.visibility = "visible";

}

function mouseOver() {
  var img = document.querySelector("#photo");
  img.height = 100;
}



setTimeout(() => {
  document.getElementById("loader").style.display = "none"
  document.getElementById("all").style.display = "block"

}, 2000);