import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <StrictMode>
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/medicine-delivery-app">
     <App />
    </BrowserRouter>
   </PersistGate>
  </Provider>
 </StrictMode>
);
