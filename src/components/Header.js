import * as React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return(
<>
<header className="text-white bg-slate-800">
        <div className="container mx-auto flex flex-wrap flex-col items-center p-4 md:flex-row">
            
                <img src="https://cdn.imgbin.com/2/8/12/imgbin-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-2zFhKR82nuSnP2Da9ZF61txgL.jpg" className="w-10 h-10 text-white bg-yellow-500 p-1 rounded-full">
                </img>
                <span className="ml-3 text-xl text-white">Cyber-Geek</span>
         
            <nav className=" md:mr-auto md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/" className="mr-6 cursor-pointer hover:text-gray-400 hover:transi">Home</Link>
                <Link to="About" className="mr-6 cursor-pointer hover:text-gray-400 hover:transi">About</Link>
                <Link to="/service" className="mr-6 cursor-pointer hover:text-gray-400 hover:transi">Service</Link>
                <Link to="/contact" className="mr-6 cursor-pointer hover:text-gray-400 hover:transi">Contact</Link>
            </nav>
            <Link to="/signup">
                <button className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                Sign up
            </button>
            </Link>
        </div>
    </header>
</>
    );
}
export default Header;