const API_url = 'https://jsonplaceholder.typicode.com/users';


//get users
export const getUsers = async () => {
  const users = await fetch(API_url)
    .then((response) => response.json());
    return users;    
}
//edit users -> addUser
export const updateUser = async (user) => {
  const url = user.id ? `${API_url}/${user.id}` : API_url;
  const method = user.id ? "PUT" : "POST";

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
};
//delete users
export const deleteUser = async (id) => {
  const responser = await fetch(`${API_url}/${id}`, {
    method: "DELETE",
  });

  return await responser.json();
};




