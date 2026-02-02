let primerProducto = document.querySelector('.producto');
/*
console.log(primerProducto.textContent);//evuelve todos los textos
console.log(primerProducto.innerText);//devuelve solo los textos que son visibles en el documento

console.log(primerProducto.innerHTML);//devuelve todo el contenido html
*/
//primerProducto.innerHTML = '<h5>Hola que tal</h5>';
console.log(primerProducto.outerHTML);//devuleve a partir de la etiqueta que contiene el selector

//Insertar elementos en el DOM. API de nodos
let newP = document.createElement('p');
newP.textContent = 'Este es el contenido del parrafo nuevo.';
primerProducto.appendChild(newP);//agrega el nodo al final del padre
primerProducto.removeChild(newP);

let newH2 = document.createElement('h2');
newH2.textContent = 'Soy el nuevo H2';

let actualH3=primerProducto.querySelector('h3');
//primerProducto.insertBefore(newH2, actualH3);//inserta el nodo antes del indicado

//primerProducto.replaceChild(newH2,actualH3);
actualH3.before(newH2);
//primerProducto.prepend(newH2);//mismo resultado que los anteriores, inserta como primer hijo
//primerProducto.append(newH2);//inserta como ultimo hijo
//primerProducto.replaceChildren(newH2);//elimina los hijos y los sustituye por el nuevo valor
//actualH3.replaceWith(newH2);
newH2.remove();

//API de insercion adyacente
//primerProducto.insertAdjacentElement("afterbegin", div);

















