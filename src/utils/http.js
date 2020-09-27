import Axios from 'axios';

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
