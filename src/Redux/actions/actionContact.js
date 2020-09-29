import {getDataContact} from '../../utils/http';
import actionType from './actionType';

export const getDataContactCreator = (id) => {
  return {
    type: actionType.getDataContact,
    payload: getDataContact(id),
  };
};
