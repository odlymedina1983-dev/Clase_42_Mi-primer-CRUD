import { getUsers } from './api.js';

//console.log("crud de clase_42");


let usersArray = [];
let usersCurrentFunction = null;

let myForm = document.getElementById('mainForm');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let userList = document.getElementById('userList');

// render users
const renderUsers = () => {

  // limpiamos la lista para evitar duplicados
  userList.innerHTML = "";

  // si el array está vacío, mostramos un mensaje
  if (usersArray.length === 0) {
    const li = document.createElement("li"); // creamos un li
    li.textContent = "No hay usuarios para mostrar"; // texto informativo
    userList.appendChild(li); // lo agregamos al ul
    return; // salimos de la función
  }

  // recorremos el array con un for clásico
  for (let i = 0; i < usersArray.length; i++) {

    // tomamos un usuario del array
    const user = usersArray[i];

    // creamos el li que contendrá todo
    const li = document.createElement("li");

    // creamos un span para el texto
    const span = document.createElement("span");
    span.textContent = `${user.id} - Name: ${user.name}     email: ${user.email}`; // nombre y email

    // creamos el botón editar
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar"; // texto del botón
    btnEdit.dataset.id = user.id; // guardamos el id en data-id

    // creamos el botón eliminar
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar"; // texto del botón
    btnDelete.dataset.id = user.id; // guardamos el id en data-id

    // agregamos los elementos al li
    li.appendChild(span);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    // agregamos el li al ul
    userList.appendChild(li);
  }
}

//load users
const loadUsers = async () => {
  usersArray = await getUsers();
  renderUsers();
};

 loadUsers();

