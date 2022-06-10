import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import LoginContext from '../Contex/auth/LoginContex';
import About from "./About"
import { Link } from "react-router-dom"


function HomePage() {
useEffect(() => {
const response=fetch('/youtube.js');
console.log(response)
}, [])

    return (
        <div className="container p-10 flex-col space-y-2 ">
            <div className="card-body space-x-10 md:flex md:w-full bg-slate-800 rounded-md">
                <div className="image p-5 flex-col space-y-5">
                    <img src="https://i.ytimg.com/vi/_v_TF8t3uOw/maxresdefault.jpg" alt="" />
                <hr />
                </div>
                <div className="post text-center py-4 my-3 text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ex!</p>
                    <Link to="/link ">
                        <p className='mt-5 text-red-400'>Follow link</p>
                    </Link>
                </div>
            </div>
            <div className="card-body space-x-10 md:flex md:w-full bg-slate-800 rounded-md">
            <div className="image p-5 flex-col space-y-5">
                    <img src="https://i.ytimg.com/vi/yfvAJ1DeTRY/maxresdefault.jpg" alt="" />
                    <hr />
                </div>
                <div className="post text-center py-4 my-3 text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ex!</p>
                    <Link to="/link ">
                        <p className='mt-5 text-red-400'>Follow link</p>
                    </Link>
                </div>
            </div>
            <div className="card-body space-x-10 md:flex md:w-full bg-slate-800 rounded-md">
            <div className="image p-5 flex-col space-y-5">
                    <img src="https://i.ytimg.com/vi/CJ3hfxxlF2Q/maxresdefault.jpg" alt="" />
                    <hr />
                </div>
                <div className="post text-center py-4 my-3 text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ex!</p>
                    <Link to="/link ">
                        <p className='mt-5 text-red-400'>Follow link</p>
                    </Link>
                </div>
            </div>
            <div className="card-body space-x-10 md:flex md:w-full bg-slate-800 rounded-md">
            <div className="image p-5 flex-col space-y-5">
                    <img src="https://i.pinimg.com/550x/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="" />
                    <hr />
                </div>
                <div className="post text-center py-4 my-3 text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ex!</p>
                    <Link to="/link ">
                        <p className='mt-5 text-red-400'>Follow link</p>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default HomePage;