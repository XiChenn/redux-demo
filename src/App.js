import React from "react";
import { connect } from "react-redux";

function App({ count, add, minus }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  add: () => ({ type: "ADD" }),
  minus: () => ({ type: "MINUS" })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
