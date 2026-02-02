console.log('Check JS ok');

let elementos = document.body.getElementsByTagName('*');//selecciono hijos de body

function colorAleatorio(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}

for (let elemento of elementos){
    elemento.addEventListener('mouseenter', (evento) => {
        evento.target.style.backgroundColor = colorAleatorio();
    });
    elemento.addEventListener('mouseout', (event) =>{
        event.target.style.backgroundColor = 'white';
    });
    elemento.addEventListener('contextmenu', (event1) =>{
        event1.preventDefault();
    });

}
