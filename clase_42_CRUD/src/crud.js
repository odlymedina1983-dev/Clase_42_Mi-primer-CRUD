import { getUsers } from './api.js';

console.log("crud de clase_42");


let usersArray = [];
let usersCurrentFunction = null;

let myForm = document.getElementById('mainForm');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
//let buttonSubmit = document.getElementById('submit');

//load users
const loadUsers = async () => {
  usersArray = await getUsers();
  console.log(usersArray);
};

 loadUsers();

