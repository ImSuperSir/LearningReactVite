import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { Helloworld } from './Helloworld.jsx'
// import { MyFirstApp } from './MyFirstApp.jsx'
import { CounterApp } from './CounterApp.jsx'

import './styles.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <MyFirstApp title='Lauro Ramirez H.'/> */}
  </React.StrictMode>
);