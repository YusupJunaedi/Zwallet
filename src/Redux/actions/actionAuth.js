import {authLogin, authRegister, updatePin} from '../../utils/http';
import actionType from './actionType';

export const authLoginCreator = (name, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(name, password),
  };
};

export const authRegisterCreator = (name, email, password) => {
  return {
    type: actionType.authLogin,
    payload: authRegister(name, email, password),
  };
};

export const logoutCreator = () => {
  return {
    type: actionType.logout,
  };
};

export const updatePinCreator = (pin, id_user) => {
  return {
    type: actionType.updatePin,
    payload: updatePin(pin, id_user),
  };
};
