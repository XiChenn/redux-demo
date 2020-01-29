import React from "react";
import { connect } from "react-redux";

function App({ count, add, minus, asyncAdd }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={asyncAdd}>Async Add</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  add: () => ({ type: "ADD" }),
  minus: () => ({ type: "MINUS" }),
  asyncAdd: () => dispatch => {
    setTimeout(() => {
      dispatch({ type: "ADD" })
    }, 1000);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
