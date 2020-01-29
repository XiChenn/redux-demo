import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const intialState = {
  count: 0
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1
      };
    case "MINUS":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

const store = createStore(countReducer, intialState,  applyMiddleware(thunk));

export default store;
