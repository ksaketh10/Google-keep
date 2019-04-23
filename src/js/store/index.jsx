import { createStore, applyMiddleware, compose }  from "redux"
import tasksReducer from "../reducers/index"
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(tasksReducer, storeEnhancers(applyMiddleware(thunk)))
export default store