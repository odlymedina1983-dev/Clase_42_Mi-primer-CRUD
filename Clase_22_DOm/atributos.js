//Acceso a atributos basicos
let primerDiv = document.querySelector('div');

primerDiv.id = 'divConID';

console.log(`Contenido del atributo: ${primerDiv.id}`);

primerDiv.className = 'importante';//aplasta el valor del atributo
primerDiv.style = 'background-color: beige; color: blue; padding: 10px;'

//Atributos especificos
//console.log(primerDiv.hasAttribute());
console.log(primerDiv.hasAttribute('class'));
console.log(primerDiv.getAttributeNames());
console.log(primerDiv.getAttribute('style'));//devuelve el valor de los atributos
primerDiv.setAttribute('style','background-color: beige; padding: 10px; color: olive;');//hay que setear todos los valores
//primerDiv.removeAttribute('style');

//Atributos booleanos(required, checked, etc)
let input = document.getElementById('name');
//input.required = true;
//input.setAttribute('required',true);
input.toggleAttribute('required');


