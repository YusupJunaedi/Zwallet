import Axios from 'axios';

export const getHistory = (id) => {
  const URI = `http://192.168.43.116:8000/history/${id}`;
  return Axios.get(URI);
};

export const addHistory = (data) => {
  const URI = `http://192.168.43.116:8000/history`;
  return Axios.post(URI, data);
};

export const getDataContact = (id) => {
  const URI = `http://192.168.43.116:8000/contact/${id}`;
  return Axios.get(URI);
};

export const getDataUser = (id_user) => {
  const URI = `http://192.168.43.116:8000/user/${id_user}`;
  return Axios.get(URI);
};

export const authLogin = (email, password) => {
  const URI = `http://192.168.43.116:8000/auth/login`;
  return Axios.post(URI, {
    email: email,
    password: password,
  });
};

export const authRegister = (name, email, password) => {
  const URI = `http://192.168.43.116:8000/auth/register`;
  return Axios.post(URI, {
    username: name,
    email: email,
    password: password,
  });
};

export const updatePin = (pin, id_user) => {
  const URI = `http://192.168.43.116:8000/auth/setpin`;
  return Axios.patch(URI, {
    pin: pin,
    id_user: id_user,
  });
};
