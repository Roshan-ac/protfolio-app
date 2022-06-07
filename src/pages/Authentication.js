import { Link } from "react-router-dom";
import * as React from 'react';

function SignUp() {
    return (
        <div className="bg-slate-700  md:p-4 text-white">
            <div className="loginbtn flex justify-start ">
                <Link to="/login">
                    <button className="text-center  bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 ml-2 md:ml-0 hover:bg-green-800  hover:outline-red-500">
                        login
                    </button>
                </Link>
            </div>
            <div className=" signup  flex justify-center">

                <div className="welcome m-8 p-4 flex-col justify-center align-middle">
                    <p className=" text-3xl">Signup to <span className=" text-4xl text-yellow-700">Cyber Geek.</span></p>
                    <p className="text-sm mt-2 ml-10">Explore Something New Regularly</p>
                </div>

            </div>

            <form action="post" className=" md:flex justify-center">
                <div className="formdata1 flex md:flex-none m-3 justify-center">
                    <div className=" space-y-5">
                        <p className="text-sm md:text-base ml-3">First Name</p>
                        <input className="rounded w-[300px] md:w-70 p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-3">Last Name</p>
                        <input className="rounded w-[300px] md:w-70 p-2  mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-3 ">Email</p>
                        <input className=" rounded p-2 w-[300px] md:w-70 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="md:hidden my-2 sm: w-90" />
                    </div>
                </div>

                <div className="formdata2 mt-3 md:ml-20 flex md:flex-none justify-center pb-20">
                    <div className=" space-y-6">
                        <p className="text-sm md:text-base ml-3">Create Password</p>
                        <input className=" rounded w-[300px] md:w-70 p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-3 ">Re-type Password</p>
                        <input className="rounded w-[300px] md:w-70 p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-5">please choose strong password</p>
                        <div className="flex justify-center">
                            <button className="mt-6 w-[150px] md:w-auto text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-2 px-6 text-xs rounded boder-0 focus:outline-none   hover:bg-green-800  hover:outline-red-500">
                                Sign up
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );

}

export default SignUp;