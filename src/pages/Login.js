import { Link } from "react-router-dom";
import * as React from 'react';
function Login(){
    return(
<div className="bg-slate-700 p-9  text-white">
            <div className=" signup my-10  flex justify-center">
                <div className="welcome md:m-auto md:p-auto flex-col justify-center align-middle">
                    <p className=" text-2xl md:text-3xl">Welcome to <span className=" md:text-4xl text-3xl text-yellow-700">Cyber Geek.</span></p>
                    <p className="text-sm mt-2 ml-10">Best of luck for your career</p>
                    
                </div>
                
            </div>
            
            <form action="post" className="flex justify-center">

                <div className="formdata1 space-y-4 m-3">
                    <p className="text-md ml-3">Username</p>
                    <input className=" w-[300px] md:w-70  rounded p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                    <hr className="my-2"/>
                    <p className="text-md ml-3 ">Password</p>
                    <input className=" w-[300px] md:w-70 rounded p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />

                    <Link to={"#"}>
                    <p className="mt-2 text-center md:text-left text-orange-400 underline text-sm">Forgot password</p>
                    </Link>
                    <div className="flex justify-center">
                    <button class="mt-6 w-[7rem] text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-2 px-6 text-xs rounded boder-0 focus:outline-none   hover:bg-green-800  hover:outline-red-500">
                Login
            </button>
             
                    </div>
                </div>
            </form>

</div>
    );
}
export default Login;