console.log('Comienza el ejercicio')

let buttonSubmit = document.getElementById('buttonSubmit');
let buttonReset =  document.getElementById('buttonReset');
let primerForm = document.forms[0];


buttonSubmit.addEventListener('click', (event)=>{
    event.preventDefault();//elimina el evento por defecto
    console.log('Boton de enviar pulsado');
    if (primerForm.elements[0].value.includes('@')){
        //primerForm.submit();
        console.log('El formulario ha sido enviado');
    } else {
        alert('El formato no es el correcto');
    }
});

buttonReset.addEventListener('click', (event)=>{
    event.preventDefault();//elimina el evento por defecto
    console.log('Boton de Reset pulsado');
    primerForm.reset();
});

//-------------------------Segundo Formulario--------------

let buttonSubmit2 = document.getElementById('buttonSubmit2');
let buttonReset2 =  document.getElementById('buttonReset2');
let segundoForm = document.forms[1];

segundoForm.addEventListener('submit',(e)=>{
    console.log('Enviando Formulario');
    e.preventDefault();
    let edad = document.getElementById('age').value;
    if (edad>18 && edad<30){
        alert('Edad en el rango correcto');
    } else {
        alert('La edad no esta en el rango correcto');
    }
});


buttonSubmit2.addEventListener('click', (event)=>{
    event.preventDefault();//elimina el evento por defecto
    console.log('Boton de enviar pulsado');    
    //segundoForm.submit();
    // if (segundoForm.elements[0].value.includes('@')){
    //     
    //     console.log('El formulario ha sido enviado');
    // } else {
    //     alert('El formato no es el correcto');
    // }
});

buttonReset2.addEventListener('click', (event)=>{
    event.preventDefault();//elimina el evento por defecto
    console.log('Boton de Reset pulsado');
    segundoForm.reset();
});