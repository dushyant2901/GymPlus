import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import AppReducer from "../reducers/reducers";

const store = createStore(AppReducer, applyMiddleware(thunk));

export default store;
