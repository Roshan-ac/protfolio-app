import { upload } from "@testing-library/user-event/dist/upload";
import e from "cors";
import React, { useContext, useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import LoginContext from "../Contex/auth/LoginContex";


export default function Modal() {
  let Navigate=useNavigate()
  const location = useLocation()
  const context = useContext(LoginContext)
  const { user,fetchUser } = context
  const {email,fullname,profile}=user
  //state of image preview
  const [previewImage, setPreviewImage] = useState(profile)
  // state of input file 
  const [inputState, setinputState] = useState({
    username:fullname,
    email:email,
    profile:previewImage
  })


  const onChange = (e) => {
    setinputState({ ...inputState, [e.target.name]: e.target.value })
    const file = e.target.files[0]
    previewFile(file)

}
  //Function defination of fileinputchange
  const previewFile = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }

  }

 const [btnstate,setBtnState]=useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!previewImage) return;
    uploadImage(previewImage)
    setTimeout(() => {
      setBtnState(false)
    }, 3000);
  }
  
  const handleCancle =()=>{
Navigate("/dashboard")
  }

  useEffect(() => {
fetchUser()
  }, [user])
  

  const uploadImage = async (base64EncodedImage) => {
    const token=localStorage.getItem('auth-token')
    try {
      await fetch('http://cybergeek-backend.netlify.app/profile/update_profile', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage,username:inputState.username,email:inputState.email}),
        headers: {
          'Content-Type':'application/json',
          'auth-token': token
      },
      })
    } catch (errors) {
      console.log(errors)
    }


  }
const handlefetch=(e)=>{
  e.preventDefault()
  fetchUser()
  Navigate('/dashboard')

}
  return (
    
    <div className="main p-2 text-white outline  bg-slate-900 m-5 h-full">
      <form action="post">
      <div className="primarybtn  px-6 py-1 space-x-4 flex justify-end text-white">
        <div onClick={handleCancle} className="cancle h-5 px-4 outline ">
          <svg  className="h-3 m-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
        </div>
        <div onClick={handlefetch}  className="save px-4 h-5 outline">
          <svg className="h-3 m-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
        </div>
      </div>
      <hr className="my-4" />
      <div className="editSection space-y-8">
        <div className="title flex justify-center">
          <h1>Upadte Your Account</h1>
        </div>

        <div className="profile_picture flex justify-center">
          <img  src={user ? previewImage : ""} alt="" className="h-32 w-32 outline-double rounded-full" />
        </div>
        <div className="changeImage flex justify-center">
          <input name="profile" onChange={onChange} className="ml-20" type="file" />
        </div>
        <div className="usersection flex justify-center">
          <div className="userinfo space-y-3">
            <label htmlFor="">UserName</label><br />
            <input name="username" onChange={onChange} value={inputState.username} className="p-2 text-white bg-slate-900 border" type="text" /><br />
            <label htmlFor="">Email</label><br />
            <input name="email" onChange={onChange} value={inputState.email}  className="p-2 text-white bg-slate-900 border" type="text" /><br />
          </div>
        </div>
<hr />
<div className="flex justify-center p-2">
  <button type="submit" onClick={handleSubmit} className={btnstate?"border px-5 py-1":"px-5 py-1 text-green-500"}>{btnstate?"Save":"successfully updated data"}</button>
</div>
      </div>
        </form>
    </div>

  )

}
