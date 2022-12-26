import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/login/login"
import Dashboard from "./Components/dashboard/dashboard.js"
import Result from "./Components/result/result"
import User from "./Components/user/user"
import React from 'react';
import History from "./Components/history/history"

function App() {
  return (
    <div>


    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard/>}/>
        <Route path = "/result" element={<Result/>}/>
        <Route path ="/user" element={<User/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
