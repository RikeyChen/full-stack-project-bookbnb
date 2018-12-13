import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store, windowHeight }) => (
  <Provider store={store}>
    <HashRouter>
      <App windowHeight />
    </HashRouter>
  </Provider>
);

export default Root;
