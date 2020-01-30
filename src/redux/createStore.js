export default function createStore(reducer, initState, enhancer) {
  if (typeof initState === "function" && typeof enhancer === "undefined") {
    enhancer = initState;
    initState = undefined;
  }

  if (enhancer) {
    return enhancer(createStore)(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
    return action;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  }

  dispatch({ type: Symbol() }); // Symbol does not match any action.type so it gets the initial state tree

  return { getState, dispatch, subscribe, replaceReducer };
}
