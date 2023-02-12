import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


let vh = window.innerHeight * 0.01;
document.querySelector('body').style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
