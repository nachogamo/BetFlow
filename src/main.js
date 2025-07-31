import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // El componente principal de la app
import './index.css';  // Si tienes algún archivo CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Este es el div donde React renderiza la app
);
