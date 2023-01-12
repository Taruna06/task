import React from 'react';
import BasicExample from './Component/login';
import BasicExample2 from './Component/sign';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactDOM } from 'react-dom/client';
import layout from './Component/layout';
import Home from './Component/home';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import FetchApi from './Component/fetchApi';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<layout/>} />
        <Route index element = {<Home/>} />
        <Route path = "login" element={<BasicExample/>}/>
        <Route path = "sign" element={<BasicExample2/>}/>
        <Route path = "fetchapi" element={<FetchApi/>}/>
      </Routes>
    </BrowserRouter>

 
    </>
  );
}

export default App;