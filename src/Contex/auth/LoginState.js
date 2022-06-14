import LoginContext from "./LoginContex";
import React, {useState} from "react";




const LoginState = (props) => {
var noteInitial=[]
    const [user, setUsers] = useState(noteInitial);
    const [data,setData]=useState(noteInitial)
    const [profile, setProfile] = useState("")
const token=localStorage.getItem("auth-token")
const fetchData= async()=>{
    const hello = await fetch("https://cybergeek-backend.netlify.app/auth/tutorials")
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
            const response = await fetch('https://cybergeek-backend.netlify.app/auth/getuser', requestOptions)
            const json = await response.json()
            setUsers(json)
        }
        
        
    }
const fetchimg=async()=>{
  

        const requestOptions = {
            method: 'GET',
            headers: {
              "email":user.email
            },
           
        };
        const response = await fetch('https://cybergeek-backend.netlify.app/profile/getprofile',requestOptions)
    
        const json =await response.json()
        if(json){
            setProfile(json.image)
        }
    }

    //userSignup /
    
    return (
        <LoginContext.Provider value={{user,fetchUser,data,fetchData,profile,fetchimg}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState