export default function combineReducers(reducers) {
  return (state = {}, action) => {
    let combinedState = {};
    Object.keys(reducers).forEach(key => {
        let reducer = reducers[key];
        combinedState[key] = reducer(state[key], action);
    });
    return combinedState;
  };
}