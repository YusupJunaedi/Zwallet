import {addHistory, getHistory} from '../../utils/http';
import actionType from './actionType';

export const addHistoryCreator = (data) => {
  return {
    type: actionType.addHistory,
    payload: addHistory(data),
  };
};

export const getDataHistoryCreator = (id) => {
  return {
    type: actionType.getDataHistory,
    payload: getHistory(id),
  };
};
