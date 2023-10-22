import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { store } from './app/store';

import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
