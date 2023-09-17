import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/rent-car-ukraine">
          <ToastContainer />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
