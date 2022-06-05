import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import { HashRouter as Router, Routes, Route, }  from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import SignUp from './pages/Authentication';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
            <Router basename="/">
               <Header/>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
        
            <Footer />
          </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

