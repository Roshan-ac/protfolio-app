import React,{useEffect,useState,useContext} from 'react';
import {useLocation } from 'react-router-dom';
import LoginContext from '../Contex/auth/LoginContex';

function HomePage() {
    let location=useLocation()
    const User=useContext(LoginContext)
    useEffect(() => {
        User.setUser()
        // setUsers([{
        //     firstname:User.user[0].firstname,
        //     lastname:User.user[0].lastname
        //       }
        //       ])
        console.log(User.users[0])
    }, [location])

    return(
        <div className=" flex container bg-slate-600">
            <img className="hidden md:block rounded-full h-28 my-20 md:h-64 md:my-16" src="https://avatars.githubusercontent.com/u/51825251?v=4" alt="img"/>
   
            <div className="p">Full Name : </div>
       
        </div>
    )
}
export default HomePage;