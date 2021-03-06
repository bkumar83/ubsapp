import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
let store=createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App /> </Provider>,
  document.getElementById('root')
);

reportWebVitals();
