import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/auth/auth"
import Dashboard from "./Components/dashboard/dashboard.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
