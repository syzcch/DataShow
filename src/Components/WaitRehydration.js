import React, { Component } from 'react';
import { persistStore } from 'redux-persist';

export default WrappedComponent => {
  return class extends Component {
    constructor() {
      super();
      this.state = { rehydrated: false };
    }

    componentWillMount() {
      // persist store and delay component rendering
      const { store } = this.props;
      persistStore(store, { whitelist: ['auth'] }, () => {
        this.setState({ rehydrated: true });
      });
    }
    render() {
      return <WrappedComponent loaded={this.state.rehydrated} {...this.props} />;
    }
  };
};