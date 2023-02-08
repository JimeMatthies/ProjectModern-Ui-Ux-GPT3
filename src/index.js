import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as data from './data/info';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/App.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App {...data} />);