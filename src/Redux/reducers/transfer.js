import actionType from '../actions/actionType';

const initialState = {
  id_contact: '',
  name: '',
  image: '',
  no_hp: '',
  amount: '20000',
  note: 'Beli UC FF',
};

const transfer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.addDataTransfer:
      return {
        ...state,
        id_contact: payload.id_contact,
        name: payload.name,
        image: payload.image,
        no_hp: payload.no_hp,
        amount: '',
        note: '',
      };
    case actionType.adddDataTransferAmountNote:
      return {
        ...state,
        amount: payload.amount,
        note: payload.note,
      };
    default:
      return state;
  }
};

export default transfer;
