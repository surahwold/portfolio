import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ensure default theme is dark
document.body.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
