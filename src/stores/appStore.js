import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initiatState = {};
const middleware = [thunk];
const appStore = createStore(rootReducer, initiatState, applyMiddleware(...middleware));

export default appStore;