import LoginContext from "./LoginContex";
import React, {useState} from "react";



const LoginState = (props) => {

    const [user, setUsers] = useState([]);
const token=localStorage.getItem("auth-token")
    const setUser= async()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'auth-token': token},
        };
        const response = await fetch('http://127.0.0.1:5000/auth/getuser', requestOptions)
        const json = await response.json()
        setUsers([{
      firstname:json.firstname,
      lastname:json.lastname
        }
        ])
console.log(user)
    }
        
    return (
        <LoginContext.Provider value={{user,setUser}}>
            {props.children};
        </LoginContext.Provider>
    )
}

export default LoginState