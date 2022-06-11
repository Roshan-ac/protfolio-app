import { Link,useLocation} from "react-router-dom";


function Header(){
   let location=useLocation()
    return( 
<>
<header className="text-white bg-slate-800">
        <div className="container mx-auto flex flex-wrap flex-col items-center p-4 md:flex-row">
            
                <img src="https://cdn.imgbin.com/2/8/12/imgbin-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-2zFhKR82nuSnP2Da9ZF61txgL.jpg" alt="" className="w-10 h-10 text-white bg-yellow-500 p-1 rounded-full">
                </img>
                <span className="ml-3 my-4 text-xl text-white">Cyber-geek</span>
         
            <nav className=" md:mr-auto md:ml-auto flex flex-wrap items-center text-sm justify-center">
                <Link to="/" className={`mr-5 cursor-pointer hover:text-gray-400  ${location.pathname==='/' ? 'activecolor':''}`}>Home</Link>
                <Link to="/about" className={`mr-5 cursor-pointer hover:text-gray-400  ${location.pathname==='/about' ? 'activecolor':''}`}>About</Link>
                <Link to="/service" className={`mr-5 cursor-pointer hover:text-gray-400  ${location.pathname==='/service' ? 'activecolor':''}`}>Service</Link>
                <Link to="/contact" className={`mr-5 cursor-pointer hover:text-gray-400  ${location.pathname==='/contact' ? 'activecolor':''}`}>Contact</Link>
              <Link to="/dashboard" className={`mr-5 cursor-pointer hover:text-gray-400  ${location.pathname==='/dashboard' ? 'activecolor':''}`}>Dashboard</Link>
            </nav>
        </div>
    </header>
</>
    );
}
export default Header;