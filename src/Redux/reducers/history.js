import actionType from '../actions/actionType';

const initialState = {
  data: {},
  historyHome: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const history = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getDataHistory + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.getDataHistory + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.getDataHistory + '_FULFILLED':
      const data = payload.data.data;
      const homeHistory = data.slice(0, 4);

      return {
        ...state,
        data: data,
        historyHome: homeHistory,
      };
    default:
      return state;
  }
};

export default history;
