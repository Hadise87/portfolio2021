

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
var txt = 'HADISEH SHIROUDI'; 
var speed = 150;
let typing_name_inorder = true; 



let typeName = (time, work) =>{
  return new Promise ((resolve, reject) =>{
    if(typing_name_inorder){
      setTimeout(() => {
        resolve(work());
      },time);
    }else{
      reject(console.log("type nothing!"));
    }
  })
}


typeName(1800, () => console.log("HADISEH SHIROUDI"))
.then(() =>{
  return typeName(4000, () => console.log("Front-End Web Developer "))
})

.then(() =>{
  return typeName(4100, () => console.log("with a passion of learning"))
})




// window.onload = () =>  {
//   function typeName() {
//     if (i < txt.length) {
//       document.getElementById("myname").innerHTML += txt.charAt(i);
//       i++;
//       setTimeout(typeName, speed);
//     }
//   }
//   setTimeout(typeName, 1800)
//   // var theDelay2 = 3;
//   // var theDelay3 = 4;
//   setTimeout("showText1()", 4000)
//   setTimeout("showText2()", 4100)
// }
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

() =>{
  console.log("HADISEH!");
}