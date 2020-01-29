export const countReducer = (state = {}, action) => {
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
