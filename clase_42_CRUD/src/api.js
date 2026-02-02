const API_url = 'https://jsonplaceholder.typicode.com/users';


//get users
const getUsers = async () => {
  const users = await fetch(API_url)
    .then((response) => response.json());
    return users;    
}

//delete users

//edit users -> addUser

//una condicion que me diga si estoy editando o no un usuario

export { getUsers };