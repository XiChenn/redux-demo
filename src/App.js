import React from "react";
import { connect } from "react-redux";
import { add, minus, asyncAdd } from "./actions/countAction";

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
  count: state.counter.count
});

const mapDispatchToProps = { add, minus, asyncAdd };

export default connect(mapStateToProps, mapDispatchToProps)(App);
