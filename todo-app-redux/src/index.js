import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'; // Thêm đuôi .js rõ ràng để Vite nhận diện tốt hơn
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);