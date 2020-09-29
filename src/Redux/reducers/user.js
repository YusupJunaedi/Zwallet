import actionType from '../actions/actionType';

const initialState = {
  data: {
    username: 'Loading...',
    image: 'http://192.168.43.116:8000/images/user.png',
    amount: 'Loading...',
    no_hp: 'Loading...',
  },

  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getDataUser + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.getDataUser + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.getDataUser + '_FULFILLED':
      return {
        ...state,
        data: payload.data.data,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default user;
