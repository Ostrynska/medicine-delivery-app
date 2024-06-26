import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { App } from './components/App';
import Loader from './components/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
     <Suspense fallback={<Loader />}>
      <App />
     </Suspense>
    </BrowserRouter>
   </PersistGate>
  </Provider>
 </React.StrictMode>
);
