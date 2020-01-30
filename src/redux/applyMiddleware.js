import compose from "./compose";

export default function applyMiddleware(...middlewares) {
  return function enhancedCreateStore(createStore) {
    return function chainMiddleware(...args) {
      const store = createStore(...args);
      const middlewareApi = {
        getState: store.getState,
        dispatch: (...args) => store.dispatch(...args)
      };

      const chain = middlewares.map(middleware => middleware(middlewareApi));
      const dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    };
  };
}
