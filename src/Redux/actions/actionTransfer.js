import {getDataUser} from '../../utils/http';
import actionType from './actionType';

export const addDataTransferCreator = (data) => {
  return {
    type: actionType.addDataTransfer,
    payload: data,
  };
};

export const addDataTransferAmountNotesCreator = (data) => {
  return {
    type: actionType.adddDataTransferAmountNote,
    payload: data,
  };
};
