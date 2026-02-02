//ejercico 1
// let imgUrls = ['https://picsum.photos/300/200?r=1',
//                 'https://picsum.photos/300/200?r=2',
//                 'https://picsum.photos/300/200?r=3',
//                 'https://picsum.photos/300/200?r=4',
//                 'https://picsum.photos/300/200?r=5',
//                 'https://picsum.photos/300/200?r=6',
//                 'https://picsum.photos/300/200?r=7',
//                 'https://picsum.photos/300/200?r=8',
//                 'https://picsum.photos/300/200?r=9',
//                 'https://picsum.photos/300/200?r=10'
// ];
/*
let imgCambiante = document.getElementById('imgCambiante');

document.body.addEventListener('keydown',(event) =>{
    let keyNum = parseInt(event.key);
    if (keyNum>=0 && keyNum<=9){
        imgCambiante.setAttribute('src',imgUrls[keyNum]);
    } else {
        alert('No has pulsado un numero entre 0 y 9');
    }
});
*/
//ejercicio 2
/*
let box = document.getElementById('box');
document.body.addEventListener('keydown', (event)=>{
    switch (event.key){
        case 'ArrowUp': {
            console.log('Tecla Arrow Up pulsada');
            let currentTop = box.style.top ? parseInt(box.style.top): 0;
            let newTop = currentTop - 10;
            box.style.top = `${newTop}px`;
            break;
        }
        case 'ArrowDown': {
            console.log('Tecla Arrow Down pulsada');
            let currentBottom = box.style.top? parseInt(box.style.top): 0;
            let newBottom = currentBottom + 10;
            box.style.top = `${newBottom}px`;
            break;
        }
        case 'ArrowLeft': {
            console.log('Tecla Arrow Left pulsada');
            let currentLeft = box.style.left ? parseInt(box.style.left): 0;
            let newLeft = currentLeft - 10;
            box.style.left = `${newLeft}px`;
            break;
        }
        case 'ArrowRight': {
            console.log('Tecla Arrow Right pulsada');
            let currentRight = box.style.left ? parseInt(box.style.left): 0;
            let newRight = currentRight + 10;
            box.style.left = `${newRight}px`;
            break;
        }
        default:
            console.log('No ha presionado una de las flechas');
    }

});
*/

//-----Ejercicio 3
/*
let lista = document.getElementById('items');
let items = lista.querySelectorAll('li');
let itemsText = [];

for (let item of items) {
    itemsText.push(item.textContent);
}

for (let item of items) {
    let newButton = document.createElement('button');
    newButton.textContent = 'X';
    item.appendChild(newButton);
    newButton.addEventListener('click',(event) => {
        event.target.parentNode.remove();
    });
}
let newElement = document.getElementById('newElement');
newElement.addEventListener('click', () => {
    let texto = prompt('Introduce el nuevo elemento');
    let newLi = document.createElement('li');
    newLi.textContent = texto;
            let newButton = document.createElement('button');
            newButton.textContent = 'X';
            newLi.appendChild(newButton);
       lista.append(newLi);
       newButton.addEventListener('click',(event) => {
            event.target.parentNode.remove();
        }); 

});

//console.log(itemsText);

let sortButton = document.getElementById('sortButton');

sortButton.addEventListener('click',() => {
    itemsText = [];
    items = lista.querySelectorAll('li');
    for (let item of items) {
        itemsText.push(item.childNodes[0].textContent);
    }
    itemsText.sort();
    //console.log(itemsText);
    lista.innerHTML = '';
    itemsText.map(item =>{
       let newLi = document.createElement('li');
       newLi.textContent = item;
            let newButton = document.createElement('button');
            newButton.textContent = 'X';
            newLi.appendChild(newButton);
       lista.append(newLi);
       newButton.addEventListener('click',(event) => {
            event.target.parentNode.remove();
        });       
    });
});
*/

//Ejercicio 4
/*
let dinamicP = document.getElementById('dinamicP');
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
dinamicP.appendChild(deleteButton);

deleteButton.addEventListener('click',() =>{
    if (dinamicP.childNodes.length === 1) return false;
    
        dinamicP.childNodes[0].remove();
    
    
});

document.body.addEventListener('keydown',(event) =>{
    if (dinamicP.childNodes.length === 1) {
        let newTextNode = document.createTextNode(event.key);
        dinamicP.prepend(newTextNode);
    } else {
        dinamicP.childNodes[0].textContent = dinamicP.childNodes[0].textContent+event.key;
    }
});
*/

//----ejercicio 5
/*
let box5  = document.getElementById('box5');
box5.addEventListener('mouseover',() => {
    let maxWidth = window.innerWidth-150;
    let maxHeight = window.innerHeight-150;
    let randomLeft = Math.floor(Math.random()*maxWidth);
    let randomTop = Math.floor(Math.random()*maxHeight);

    box5.style.top = `${randomTop}px`;
    box5.style.left = `${randomLeft}px`;
});
*/
