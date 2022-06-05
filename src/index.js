import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import SignUp from './pages/Authentication';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Service from "./pages/Service";

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

