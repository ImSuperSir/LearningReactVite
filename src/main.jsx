import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { Helloworld } from './Helloworld.jsx'
import {MyFirstApp} from './MyFirstApp.jsx'

import './styles.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyFirstApp title='Hola, soy Lauro' subtitle="& I'm a Software Engineer"/>
  </React.StrictMode>
);