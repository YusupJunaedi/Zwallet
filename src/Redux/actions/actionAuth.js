import {authLogin, authRegister, updatePin} from '../../utils/http';
import actionType from './actionType';

export const authLoginCreator = (email, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(email, password),
  };
};

export const authRegisterCreator = (name, email, password) => {
  return {
    type: actionType.authRegister,
    payload: authRegister(name, email, password),
  };
};

export const logoutCreator = () => {
  return {
    type: actionType.authLogout,
  };
};

export const updatePinCreator = (pin, id_user) => {
  return {
    type: actionType.updatePin,
    payload: updatePin(pin, id_user),
  };
};
