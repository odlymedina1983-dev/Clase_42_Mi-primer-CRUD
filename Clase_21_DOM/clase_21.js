let divConID = document.getElementById("divimportante");

const primerParrafo = document.createElement('p');
primerParrafo.textContent = "Este es el contenido para el <strong>parrafo 1</strong>";//textContent solo sirve para agregar contenido texto

const segundoParrafo = document.createElement('p');
segundoParrafo.innerHTML = "Este es el contenido para el <strong>parrafo 1</strong>";//sobreeescribe el contenido si ya existe

const primerDiv = document.createElement('div');
const miPrinerComment = document.createComment("Este es un comentario");
const miPrimerNodoText = document.createTextNode('Este es el contenido del nodo de texto');

let otroDivConID = divConID.cloneNode(true);//si utilizo flase solo clona el nodo(no el contenido)

console.log(divConID.isConnected);
console.log(otroDivConID.isConnected);//false no esta attached a la pagina

//Primera aproximacion al contenido
divConID.appendChild(primerParrafo);
divConID.appendChild(segundoParrafo);

const tercerParrafo = document.createElement('p');
const contenidoP = document.createTextNode('Contenido de texto para tercer parrafo');
tercerParrafo.appendChild(contenidoP);
primerParrafo.appendChild(tercerParrafo);






