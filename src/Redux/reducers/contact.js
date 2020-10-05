import actionType from '../actions/actionType';

const initialState = {
  data: [],
  quick: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const contact = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getDataContact + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.getDataContact + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.getDataContact + '_FULFILLED':
      return {
        ...state,
        data: payload.data.data,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
      };
    case actionType.getQuickContact + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.getQuickContact + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.getQuickContact + '_FULFILLED':
      return {
        ...state,
        quick: payload.data.data,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
      };
    default:
      return state;
  }
};

export default contact;
