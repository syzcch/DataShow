import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';

import MainPage from './pages/MainPage';
import history from './history';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>Quantiful simple test</h1>
          <MainPage />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
