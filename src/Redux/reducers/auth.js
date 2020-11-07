import actionType from '../actions/actionType';

const initialState = {
  data: {
    amount: 100000,
    id_user: 1,
    image: 'http://34.205.65.98:8000/images/user.png',
    name: 'Yusup Junaedi',
    no_hp: '085795070707',
    pin: 123456,
    email: 'yusup.junaedi97@gmail.com',
  },
  createPin: false,
  createUser: false,
  msgInvalid: '',
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  emailOTP: '',
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
      if (payload.data.success) {
        return {
          ...state,
          data: payload.data.data,
          msgInvalid: '',
          isFulfilled: true,
          isPending: false,
          isRejected: false,
          isLogin: true,
        };
      } else {
        return {
          ...state,
          msgInvalid: 'Email or Password Invalid',
        };
      }
    case actionType.authRegister + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.authRegister + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.authRegister + '_FULFILLED':
      if (payload.data.success) {
        return {
          ...state,
          data: payload.data.data,
          createUser: true,
        };
      } else {
        return {
          ...state,
          msgInvalid: 'email is ready',
        };
      }
    case actionType.authLogout:
      return {
        data: {
          amount: 100000,
          id_user: 1,
          image: 'http://34.205.65.98:8000/images/user.png',
          name: 'Yusup Junaedi',
          no_hp: '085795070707',
          pin: 123456,
          email: 'yusup.junaedi97@gmail.com',
        },
        createPin: false,
        createUser: false,
        msgInvalid: '',
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        emailOTP: '',
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
    case actionType.updateImg + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.updateImg + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.updateImg + '_FULFILLED':
      const newImg = {...state.data, image: payload.data.data};
      return {
        ...state,
        data: newImg,
      };

    case actionType.addHistory + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.addHistory + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionType.addHistory + '_FULFILLED':
      if (payload.data.success) {
        const newData = {...state.data, amount: payload.data.data.balanceLeft};
        return {
          ...state,
          data: newData,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionType.changePin:
      const newData = {...state.data, pin: payload};
      return {
        ...state,
        data: newData,
      };
    case actionType.emailOTP:
      return {
        ...state,
        emailOTP: payload,
      };
    default:
      return state;
  }
};

export default auth;
