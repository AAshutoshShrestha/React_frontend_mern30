// import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/main.css"


import { RouterConfig } from './config/router.config';
import { Provider } from 'react-redux';
import store from './config/store.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootElem = ReactDOM.createRoot(document.getElementById('root') as any);
rootElem.render(
  // <React.StrictMode>
    <Provider store={store}>

      <RouterConfig/>
    </Provider>
  // </React.StrictMode>
)