import {combineReducers} from 'redux';
import authReducer from './auth';
import userReducer from './user';
import contactReducer from './contact';
import transferReducer from './transfer';
import historyReducer from './history';

const indexReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  contact: contactReducer,
  dataTransfer: transferReducer,
  history: historyReducer,
});

export default indexReducer;
