import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import GlobalStyles from "./styles/GlobalStyles";
import App from './App.jsx'
import './i18n';
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Suspense fallback="loading...">
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
