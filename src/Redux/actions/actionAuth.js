import {authLogin, authRegister, updatePin, updateImg} from '../../utils/http';
import actionType from './actionType';

export const addEmailOTP = (email) => {
  return {
    type: actionType.emailOTP,
    payload: email,
  };
};

export const updateImgCreator = (id, resource) => {
  return {
    type: actionType.updateImg,
    payload: updateImg(id, resource),
  };
};

export const authLoginCreator = (email, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(email, password),
  };
};

export const authLogoutCreator = () => {
  return {
    type: actionType.authLogout,
  };
};

export const authRegisterCreator = (name, email, password) => {
  return {
    type: actionType.authRegister,
    payload: authRegister(name, email, password),
  };
};

export const updatePinCreator = (pin, id_user) => {
  return {
    type: actionType.updatePin,
    payload: updatePin(pin, id_user),
  };
};

export const changePinCreator = (pin) => {
  return {
    type: actionType.changePin,
    payload: pin,
  };
};
