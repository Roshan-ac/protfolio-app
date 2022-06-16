
import * as React from 'react';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import SignUp from './pages/Authentication';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Service from "./pages/Service";
import Dashboard from "./pages/Dashboard"

import LoginState from './Contex/auth/LoginState';
import Modal from './components/Modal';
function App(){
    return(
      <LoginState>
        <div className="Main bg-slate-900">
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/profile_edit" element={<Modal/>} />
          </Routes>
          <Footer />
        </div>
      </LoginState>
    );

}
export default App;