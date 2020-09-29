import {getDataUser} from '../../utils/http';
import actionType from './actionType';

export const getDataUserCreator = (id) => {
  return {
    type: actionType.getDataUser,
    payload: getDataUser(id),
  };
};
