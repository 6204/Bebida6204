import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import UserProvider from './contexts/User'
ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <Routes/>
    </React.StrictMode>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
