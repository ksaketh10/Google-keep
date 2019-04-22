import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import store from './js/store/index'
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
