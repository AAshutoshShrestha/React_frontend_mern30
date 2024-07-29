// import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/main.css"


import { RouterConfig } from './config/router.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootElem = ReactDOM.createRoot(document.getElementById('root') as any);
rootElem.render(
  // <React.StrictMode>
    <RouterConfig/>
  // </React.StrictMode>
)