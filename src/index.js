import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer, {initialState} from './State/reducer'
import {StateProvider} from './State/StateProvider'


ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
  ,
  document.getElementById('root')
);

