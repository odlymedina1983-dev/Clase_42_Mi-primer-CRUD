//https://jsonplaceholder.typicode.com/users

// const URL = 'https://jsonplaceholder.typicode.com/users/1';

// fetch(URL)
//     .then(response => {
//         if (response.ok){
//             console.log(response);
//             return response.json()
//         } else {
//             return Promise.reject('No se ha encontardo el usuario con este identificador');
//         }
       
//     })
//     .then(user => console.log(user))
//     .catch(error => console.log(error));


const URLcars = 'https://myfakeapi.com/api/cars/';

const URLuniqueCar = 'https://myfakeapi.com/api/cars/5'

const getCars = async(year = 2010) => {
    const cars = await fetch(URLcars)
    .then((response) => response.json())
    .then(cars => cars['cars'].filter(car => car.car_model_year == year));
    console.log(cars);
}
getCars(2011);

// fetch(URLcars)
// .then(response => response.json())
// .then(cars => console.log(cars['cars'][0].car_model_year));