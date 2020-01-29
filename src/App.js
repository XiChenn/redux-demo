import React, { Component } from 'react';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().count}</p>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => store.dispatch({ type: "MINUS" })}>-</button>
      </div>
    );
  }
}

export default App;
