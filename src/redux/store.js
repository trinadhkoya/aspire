import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import profileReducer from 'redux/reducers/profile.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  profile: profileReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
