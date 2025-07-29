import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Si tienes archivos CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Este es el contenedor donde React se renderiza
);
