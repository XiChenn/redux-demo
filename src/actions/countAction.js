export const add = () => ({ type: "ADD" });

export const minus = () => ({ type: "MINUS" });

export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "ADD" });
  }, 1000);
};