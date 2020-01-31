import { Component } from "react";
import PropTypes from "prop-types";

export default class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext = () => ({ store: this.props.store });

  render = () => this.props.children;
}
