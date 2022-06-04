import * as React from 'react';
import Footer from "../components/Footer"
import {
    BrowserRouter as Router,
    Routes,
    Route,
   
} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header"
import SignUp from "../pages/Authentication";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
function MainComponet() {
    return (

        <div className="container bg-slate-900 h-[100vh]">
            <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}
export default MainComponet;