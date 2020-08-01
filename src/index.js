import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

/* Estamos colocando o JSX da função APP dentro do elemento
com id="root" em index.html */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);