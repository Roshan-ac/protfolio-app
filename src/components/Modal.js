import { upload } from "@testing-library/user-event/dist/upload";
import { useForm, useWatch } from "react-hook-form";
import e from "cors";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginContext from "../Contex/auth/LoginContex";
import { Button } from "@material-ui/core";
export default function Modal() {

  var url = "http://127.0.0.1:5000/"
  // var url ="https://cybergeek-backend.netlify.app/"

  //All state defination
  let Navigate = useNavigate()
  const location = useLocation()
  const context = useContext(LoginContext)
  const { user, fetchUser } = context
  const { email, fullname, profile } = user
  //state of image preview
  const [previewImage, setPreviewImage] = useState(profile)
  // state of input file 
  const [inputState, setinputState] = useState({
    username: fullname,
    email: email,
    profile: previewImage
  })
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = React.useState("");
  // const [isSubmitting,SetIsSubmitting]=useState(false)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  //End of state


  // function defination
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




  const handleCancle = () => {
    Navigate("/dashboard")
  }

  useEffect(() => {
    fetchUser()
  }, [])



  const onSubmit = async (data, e) => {
    e.preventDefault()
    if (!previewImage) return;
    let token = localStorage.getItem('auth-token')
    await fetch(`${url}profile/update_profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({ data: data, image: previewImage }),
    })
      .then(async (response) => {
        let json = await response.json();
        console.log(json)
        if (json.success) {
          console.log(json.success)
          fetchUser()
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };



  const handlefetch = (e) => {
    e.preventDefault()
    Navigate('/dashboard')

  }

  return (

    <div className="main p-2 text-white outline  bg-slate-900 m-5 h-full">
      <div className="primarybtn  px-6 py-1 space-x-4 flex justify-end text-white">
        <div onClick={handleCancle} className="cancle h-5 px-4 outline ">
          <svg className="h-3 m-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
        </div>
        <div onClick={handlefetch} className="save px-4 h-5 outline">
          <svg className="h-3 m-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
        </div>
      </div>
      <hr className="my-4" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="editSection space-y-8">
              <div className="title flex justify-center">
                <h1>Upadte Your Account</h1>
              </div>

              <div className="profile_picture flex justify-center">
                <img src={user ? previewImage : ""} alt="" className="h-32 w-32 outline-double rounded-full" />
              </div>
              <div className="changeImage flex justify-center">
                <input onChange={onChange} name="profile" className="ml-20" type="file" />
              </div>
              <div className="usersection flex justify-center">
                <div className="userinfo space-y-3">
                  <label htmlFor="">UserName</label><br />
                  <input name="username"
                    onChange={onChange} value={inputState.fullname}
                    {...register("fullname", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                    className="p-2 text-white bg-slate-900 border" type="text" /><br />
                  <label htmlFor="">Email</label><br />
                  <input name="email" onChange={onChange} className="p-2 text-white bg-slate-900 border" type="text"
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },

                    })}
                  /><br />
                </div>
              </div>
              <hr />
              <div className="flex justify-center p-2">
                {
                  isSubmitting ? (

                    <div className="circle">
{console.log(isSubmitSuccessful,isSuccess)}
                      {

isSubmitSuccessful && isSuccess ? <p className="text-green-500 text-lg">Successfully updated</p>:
                        <svg
                          className="w-8 h-8 mx-auto text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>


                      }
                    </div>
                  )
                    : <button
                      type="submit"
                      className="border px-8 py-1">
                      Save
                    </button>
                }
              </div>
            </div>
          </form>
        
      {/* {
        isSubmitSuccessful && isSuccess && (
          <p>success</p>
        )
      } */}
    </div>

  )

}
