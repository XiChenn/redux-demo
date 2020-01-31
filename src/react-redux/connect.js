import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "../redux";

export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => WrapComponent => {
  return class extends Component {
    static contextTypes = {
      store: PropTypes.object
    };

    constructor(props, context) {
      super(props, context);
      this.state = {};
    }

    componentDidMount() {
      const { store } = this.context;
      store.subscribe(() => this.update());
      this.update();
    }

    update() {
      const { store } = this.context;

      this.setState({
        ...this.state,
        ...mapStateToProps(store.getState()),
        ...bindActionCreators(mapDispatchToProps, store.dispatch)
      });
    }

    render = () => <WrapComponent {...this.state} />;
  };
};
