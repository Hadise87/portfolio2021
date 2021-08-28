

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
var txt = 'Hadiseh Shiroudi!'; 
var speed = 150;

window.onload = function typeName() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeName, speed);
  }
}
