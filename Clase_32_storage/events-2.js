//Ejercicio 8


//funcion shuffle
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

let columns = 6;
let rows = 5;
let game = document.getElementById('game');

let randomColors =[];
for (let index = 0;index <columns*rows/2; index++){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let color = `rgb(${red},${green},${blue})`
    randomColors.push(color);
}

randomColors = [...randomColors,...randomColors];
shuffle(randomColors);
//debugger;

for (let fila =0; fila < rows; fila++){
    for (let col = 0; col < columns; col++){
        let box = document.createElement('div');
        let color = randomColors.shift();
        box.classList.add('box');
        box.dataset.col = col;
        box.dataset.row = fila; 
        box.dataset.color = color;
        box.dataset.open = 0;
        box.dataset.free = 0;
        game.appendChild(box); 

        let comprobarColor = (event) => {
             event.target.style.backgroundColor = event.target.dataset.color;
            event.target.dataset.open = 1;
            let boxsOpen = document.querySelectorAll('[data-open="1"]');
            if (boxsOpen.length ==2){
                if (boxsOpen[0].dataset.color === boxsOpen[1].dataset.color){
                    boxsOpen[0].removeEventListener('click', comprobarColor);
                    boxsOpen[1].removeEventListener('click', comprobarColor);
                    boxsOpen[0].dataset.open = 0;
                    boxsOpen[1].dataset.open = 0;
                    boxsOpen[0].dataset.free = 1;
                    boxsOpen[1].dataset.free = 1;
                    let freeBox = document.querySelectorAll('[data-free="1"]');
                    if (freeBox.length==columns*rows){
                        alert('Hemos terminado');
                        stopwatch.stop();
                    }
                } else {
                    setTimeout(() => {
                        boxsOpen[0].style.backgroundColor = 'black';
                        boxsOpen[1].style.backgroundColor = 'black';
                        boxsOpen[0].dataset.open = 0;
                        boxsOpen[1].dataset.open = 0;

                    }, 500);
                    
                }
            }
        }

        box.addEventListener('click', comprobarColor);
    }
} 
//-----------Temporizador
// var min,sec,ms,count, malt, salt, msalt;

// var stopwatch = {
//   start: function(){    
//     ms = 0;
//     sec = 0;
//     min = 0;
//     count = setInterval(function(){
//       if(ms == 100){
//         ms = 0;
//         if(sec == 60){
//           sec = 0;
//           min++;
//         }
//         else{
//           sec++;
//         }
//       }
//       else{
//         ms++;
//       }
      
//       malt = stopwatch.pad(min);
//       salt = stopwatch.pad(sec);
//       msalt = stopwatch.pad(ms);
      
//       stopwatch.update(malt + ":" + salt + ":" + msalt);
//     }, 10);
//     },
//   stop: function(){
//     clearInterval(count);
//   },
  
//   update: function(txt){
//      var temp = document.getElementById("timer");
//   temp.firstChild.nodeValue = txt;
//   },
  
//   pad: function(time){
//     var temp;
//     if(time < 10){
//       temp = "0" + time;
//     }
//     else{
//       temp = time;
//     }
//     return temp;
//   }
// }
// stopwatch.start();
//------------Temporizador
