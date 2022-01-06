import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './views/LandingPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import NavBar from './components/NavBar';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
