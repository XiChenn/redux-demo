function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args));
}

// bindActionCreators is used in the implementation of react-redux connect function;
// It encapsulates the dispatch and actionCreator
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }

  // actionCreators must be either function or object
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error();
  }

  const boundActionCreations = {};
  Object.keys(actionCreators).forEach(key => {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreations[key] = bindActionCreator(actionCreator, dispatch);
    }
  });
  return boundActionCreations;
}
