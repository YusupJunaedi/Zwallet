import actionType from '../actions/actionType';

const initialState = {
  data: [],
  createPin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.authLogin + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.authLogin + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.authLogin + '_FULFILLED':
      // console.log(payload.data);
      return {
        ...state,
        data: payload.data.data,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
        isLogin: true,
      };
    case actionType.logout:
      return {
        ...state,
        data: {},
        isAdmin: false,
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    case actionType.updatePin + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.updatePin + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.updatePin + '_FULFILLED':
      console.log(payload.data.success);
      if (payload.data.success) {
        return {
          ...state,
          createPin: true,
        };
      } else {
        return {
          ...state,
          createPin: false,
        };
      }
    default:
      return state;
  }
};

export default auth;
