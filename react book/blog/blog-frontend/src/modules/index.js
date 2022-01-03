import { combineReducers } from 'redux';
import { allowUnknownOption } from '../../node_modules/commander/typings/index';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}
export default rootReducer;
