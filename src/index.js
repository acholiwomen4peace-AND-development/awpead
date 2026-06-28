import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import 'tachyons';
/*import ProjectGrid from './ProjectGrid';*/


import reportWebVitals from './reportWebVitals';

/*import './1.jpg'*/

import './Container/MainGrid.css'



import Header1 from './Container/Header1';
import HomePage from './Container/HomePage';
import MainGrid from './Container/MainGrid';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn';
import {BrowserRouter} from "react-router-dom";
/*import { Route, Routes } from "react-router-dom";*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

		
  <React.StrictMode>
  <div>
 <BrowserRouter>
   <MainGrid/>
 </BrowserRouter>
  </div>
</React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
