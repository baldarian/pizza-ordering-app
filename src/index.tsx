import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'store/configureStore';
import './index.css';
import App from './App';
import { saveState, loadState } from './persist';

const store = configureStore(loadState());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
