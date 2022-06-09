import LoginContext from "./LoginContex";
import React, {useState} from "react";




const LoginState = (props) => {
var noteInitial=[]
    const [user, setUsers] = useState(noteInitial);
const token=localStorage.getItem("auth-token")
    const fetchUser= async()=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                 'auth-token': token
                },
        };
        const response = await fetch('http://192.168.1.65:5000/auth/getuser', requestOptions)
        const json = await response.json()
        setUsers(json)
    }
        


    //userSignup /
    
    return (
        <LoginContext.Provider value={{user,fetchUser}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState