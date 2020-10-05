import Axios from 'axios';

const linkApi = `http://192.168.43.116:8000/`;

export const updateImg = (id, sourceImg) => {
  let formData = new FormData();
  formData.append('id_user', parseInt(id));
  formData.append('image', {
    uri: sourceImg.uri,
    type: sourceImg.type,
    name: sourceImg.fileName,
    size: sourceImg.fileSize,
  });

  const configHeader = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };

  console.log(formData);

  const URI = `${linkApi}user/updateImg`;
  return Axios.patch(URI, formData, configHeader);
};

export const getQuickContact = (id) => {
  const URI = `${linkApi}contact/quick?id=${id}&limit=3`;
  return Axios.get(URI);
};

export const searchDataContact = (name, id) => {
  const URI = `${linkApi}contact?name=${name}&id=${id}`;
  return Axios.get(URI);
};

export const getHistory = (id) => {
  const URI = `${linkApi}history/${id}`;
  return Axios.get(URI);
};

export const addHistory = (data) => {
  const URI = `${linkApi}history`;
  return Axios.post(URI, data);
};

export const getDataContact = (id) => {
  const URI = `${linkApi}contact/${id}`;
  return Axios.get(URI);
};

export const getDataUser = (id_user) => {
  const URI = `${linkApi}user/${id_user}`;
  return Axios.get(URI);
};

export const authLogin = (email, password) => {
  const URI = `${linkApi}auth/login`;
  return Axios.post(URI, {
    email: email,
    password: password,
  });
};

export const authRegister = (name, email, password) => {
  const URI = `${linkApi}auth/register`;
  return Axios.post(URI, {
    username: name,
    email: email,
    password: password,
  });
};

export const updatePin = (pin, id_user) => {
  const URI = `${linkApi}auth/setpin`;
  return Axios.patch(URI, {
    pin: pin,
    id_user: id_user,
  });
};
