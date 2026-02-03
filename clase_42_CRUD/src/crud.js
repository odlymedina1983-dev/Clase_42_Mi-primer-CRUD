import { getUsers } from './api.js';

//console.log("crud de clase_42");


let usersArray = [];
let usersCurrentFunction = null;

let myForm = document.getElementById('mainForm');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let userList = document.getElementById('userList');
let editUser = null;

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
    
    const user = usersArray[i];// tomamos un usuario del array    
    const li = document.createElement("li");// creamos el li que contendrá todo
    // creamos un span para el texto
    const span = document.createElement("span");
    span.textContent = `${user.id} - Name: ${user.name}     email: ${user.email}`; // nombre y email

    // creamos el botón editar
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar"; // texto del botón
    btnEdit.dataset.id = user.id; // guardamos el id en data-id
    btnEdit.classList.add("edit"); // agregamos la clase "edit"

    // creamos el botón eliminar
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar"; // texto del botón
    btnDelete.dataset.id = user.id; // guardamos el id en data-id
    btnDelete.classList.add("delete");

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

const selectUserToEdit = (user) => {
  editUser = user;
  inputName.value = user.name;
  inputEmail.value = user.email;  
}
const resetForm = () => {
  myForm.reset();
  editUser = null;
}
 const saveUser = (name,email) => {
  if (editUser) {
    editUser.name = name;
    editUser.email = email;
    } else {
      usersArray.push({id : Date.now(), name, email});
    }

    renderUsers();

    resetForm();
 }
const addNewUser = (event) => {
  event.preventDefault(); // evita recarga
  let name = inputName.value.trim();
  let email = inputEmail.value.trim();
  if (name && email) {
    saveUser(name, email);
  } else {
    alert('No se han introducido correctamente los datos del usuario.');
  }
};
const editUserListHandler = (e) => {
  const target = e.target; // elemento exacto que recibió el click
  
  if (!target.classList.contains("edit")) return;// si NO es un botón "Editar", no hacemos nada
  
  const id = target.dataset.id;// leemos el id desde data-id (viene del renderUsers)
  
  const user = usersArray.find((u) => String(u.id) === String(id));// buscamos el usuario real dentro del array (fuente de verdad)
  
  if (!user) return;// si por alguna razón no se encontró, salimos
  
  selectUserToEdit(user);// activamos modo edición (rellena inputs y guarda editUser)
};
const deleteUserFromList = (e) => {

};
myForm.addEventListener('submit', addNewUser);
userList.addEventListener('click',(e) => {
  if (e.target.classList.contains('edit')){
    editUserListHandler();
  }
  if (e.target.classList.contains('delete')){
    deleteUserFromList();
  }
});

