import { createStore, applyMiddleware, compose }  from "redux"
import tasksReducer from "../reducers/index"
import apiSaga from "../sagas/api-sagas";
import createSagaMiddleware from "redux-saga";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware()
const store = createStore(tasksReducer, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)))
initialiseSagaMiddleware.run(apiSaga)
export default store