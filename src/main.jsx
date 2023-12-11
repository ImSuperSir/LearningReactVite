import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { Helloworld } from './Helloworld.jsx'
import {MyFirstApp} from './MyFirstApp.jsx'
import { CounterApp }  from './CounterApp.jsx'

import './styles.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyFirstApp  title="Software Engineer" subtitle="Lauro Ramirez H."/> */}
    {/* <MyFirstApp /> */}
    <CounterApp value={2} />
  </React.StrictMode>
);