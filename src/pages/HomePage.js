import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import LoginContext from '../Contex/auth/LoginContex';
import About from "./About"

function HomePage() {
    let location = useLocation()
    const User = useContext(LoginContext)
    const { user, fetchUser } = User

    useEffect(() => {
        fetchUser()
    }, [location])
    return (
        <About/>
    )
    
}
export default HomePage;