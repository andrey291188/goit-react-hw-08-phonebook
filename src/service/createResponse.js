import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function signUp(body) {
  const response = await axios.post('/users/signup/', body);
  setAuthHeader(response.data.token)
  return response.data;
}

export async function logIn(body) {
  const { data } = await axios.post('/users/login/', body);
  setAuthHeader(data.token)
  return data;
}

export async function logOut() {
   await axios.post('/users/logout');
 
}

export async function currentUser(token) {
  const { data } = await axios.get('/users/current', token);
  return data;
}

export async function getRequest() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postRequest({ name: names, phone }) {
  return await axios.post('/contacts', { name: names, number: phone });
}

export async function deleteRequest(id) {
  return await axios.delete(`/contacts/${id}`);
}

// export async function editRequest(id, body) {
//   return await axios.patch(`/contacts/${id}`, body);
// }
