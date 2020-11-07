import actionType from '../actions/actionType';

const initialState = {
  id_contact: '',
  name: 'JAka Sembung',
  image: 'http://34.205.65.98:8000/images/user.png',
  no_hp: '8787887878',
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
