import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/auth/auth"
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
        <Route path="/auth" element={<Auth />} />
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
