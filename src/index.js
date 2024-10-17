import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>

      <App /> 

      </StateProvider>

    
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measurin)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
