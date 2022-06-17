import LoginContext from "./LoginContex";
import React, {useState} from "react";




const LoginState = (props) => {
    // var url = "http://127.0.0.1:5000/"
    var url ="https://cybergeek-backend.netlify.app/"


var noteInitial=[]
    const [user, setUsers] = useState(noteInitial);
    const [data,setData]=useState(noteInitial)
const token=localStorage.getItem("auth-token")
const fetchData= async()=>{
    const hello = await fetch(`${url}auth/tutorials`)
        const file = await hello.json()
        setData(file.youtube)
       
    }

    const fetchUser= async()=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'auth-token': token
            },
        };

        if(token){
            const response = await fetch(`${url}auth/getuser`, requestOptions)
            const json = await response.json()
            setUsers(json)
        }
        
        
    }


    //userSignup /
    
    return (
        <LoginContext.Provider value={{user,fetchUser,data,fetchData}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState
