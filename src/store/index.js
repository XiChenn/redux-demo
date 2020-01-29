import { createStore } from "redux";

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

const store = createStore(countReducer, intialState);

export default store;