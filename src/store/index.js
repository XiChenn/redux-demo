import { createStore, combineReducers, applyMiddleware } from "../redux";
import thunk from "../redux-thunk";
import logger from "redux-logger";

import { countReducer } from "../reducers/countReducer";

const intialState = {
  counter: {
    count: 100
  }
};

const store = createStore(
  combineReducers({ counter: countReducer }),
  intialState,
  applyMiddleware(logger, thunk)
);

export default store;
