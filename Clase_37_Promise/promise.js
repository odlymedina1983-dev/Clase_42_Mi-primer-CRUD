console.log('ok');
let p = new Promise((resolve,reject) => {
    console.log('Ejecutando mi promesa.')
    resolve(5);
});
let p2 = new Promise((resolve, reject) =>{
    console.log('Ejecutando mi promesa 2.')
    setTimeout(() => {
        resolve('La promesa se ha ejecutado de forma correcta.');
    }, 3000);    
});

// let p3 = new Promise((resolve, reject) =>{
//     reject('La promesa NO se ha ejecutado de forma correcta.');   
// });

// p3.then(
//     (valorDevuelto) => {
//         console.log(valorDevuelto);
//     },
//     (valorSiError) => {
//         console.log('Error',valorSiError);
//     }
// );
p.then((valor) => {
    return valor;
}).then((valor2) => {
    console.log(valor2);
},
valorSiError => {
    console.log('Error', valorSiError);
}
).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Ejecutando finally');
});
