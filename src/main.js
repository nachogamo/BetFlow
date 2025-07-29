import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Asegúrate de que App.js está en la carpeta src
import './index.css';  // Si tienes un archivo CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Este es el div donde React va a renderizar la app
);
