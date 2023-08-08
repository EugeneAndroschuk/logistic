import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyles from "./styles/GlobalStyles";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
)
