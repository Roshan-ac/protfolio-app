import { Link,useLocation,useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import LoginContext from "../Contex/auth/LoginContex";

function Header(){
    const logout=()=>{
        localStorage.removeItem('auth-token')
    }
const context=useContext(LoginContext)
    const {user,fetchUser}=context
    let location=useLocation()
    useEffect(() => {
        fetchUser()
},[])
    return(
<>
<header className="text-white bg-slate-800">
        <div className="container mx-auto flex flex-wrap flex-col items-center p-4 md:flex-row">
            
                <img src="https://cdn.imgbin.com/2/8/12/imgbin-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-2zFhKR82nuSnP2Da9ZF61txgL.jpg" alt="" className="w-10 h-10 text-white bg-yellow-500 p-1 rounded-full">
                </img>
                <span className="ml-3 text-xl text-white">Cyber-Geek</span>
         
            <nav className=" md:mr-auto md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/" className={`mr-6 cursor-pointer hover:text-gray-400  ${location.pathname==='/' ? 'activecolor':''}`}>Home</Link>
                <Link to="/about" className={`mr-6 cursor-pointer hover:text-gray-400  ${location.pathname==='/about' ? 'activecolor':''}`}>About</Link>
                <Link to="/service" className={`mr-6 cursor-pointer hover:text-gray-400  ${location.pathname==='/service' ? 'activecolor':''}`}>Service</Link>
                <Link to="/contact" className={`mr-6 cursor-pointer hover:text-gray-400  ${location.pathname==='/contact' ? 'activecolor':''}`}>Contact</Link>
            </nav>
            {
               localStorage.getItem('auth-token')?<div className="flex mr-56 justify-center"><img className="h-10 w-10 mr-8 rounded-full" src="https://as1.ftcdn.net/v2/jpg/02/15/15/08/1000_F_215150815_D248bPxiY2K1QDO7PixyuGDBVO89TOuW.jpg" alt="" /><div className="flex-col my-2 justify-center">{user.firstname } { user.lastname}</div></div> :""
            }
            
            {!localStorage.getItem('auth-token')?<Link to="/signup">
                <button className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                Sign up
            </button>
            </Link>: <Link to="/login">
          
                <button onClick={logout} className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                Logout 
            </button>
            </Link>}
        </div>
    </header>
</>
    );
}
export default Header;