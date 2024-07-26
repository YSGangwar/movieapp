import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Radom } from './pages/Radom';
// import { Game } from './pages/Game';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Radom />
  </React.StrictMode>
);