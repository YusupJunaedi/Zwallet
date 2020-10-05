import {
  getDataContact,
  searchDataContact,
  getQuickContact,
} from '../../utils/http';
import actionType from './actionType';

export const getQuickContactCreator = (id) => {
  return {
    type: actionType.getQuickContact,
    payload: getQuickContact(id),
  };
};

export const getDataContactCreator = (id) => {
  return {
    type: actionType.getDataContact,
    payload: getDataContact(id),
  };
};

export const searchDataContactCreator = (name, id) => {
  return {
    type: actionType.getDataContact,
    payload: searchDataContact(name, id),
  };
};
