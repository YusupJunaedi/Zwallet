import actionType from '../actions/actionType';
import {DateTime} from 'luxon';

const initialState = {
  data: {},
  historyHome: {},
  thisWeek: {},
  thisMonth: {},
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

      const startDateWeek = DateTime.local().startOf('week').toISODate();
      const endDateWeek = DateTime.local()
        .startOf('week')
        .plus({days: 7})
        .toISODate();
      const getThisMonth = DateTime.local().month;

      const thisWeek = data.filter((item) => {
        return (
          DateTime.fromISO(item.date).toISODate() >= startDateWeek &&
          DateTime.fromISO(item.date).toISODate() <= endDateWeek
        );
      });

      const thisMonth = data.filter((item) => {
        return DateTime.fromISO(item.date).month === getThisMonth;
      });

      return {
        ...state,
        data: data,
        historyHome: homeHistory,
        thisWeek: thisWeek,
        thisMonth: thisMonth,
      };
    default:
      return state;
  }
};

export default history;
