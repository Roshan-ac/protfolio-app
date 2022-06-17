import {Link,useNavigate } from "react-router-dom"
import React, {useState} from 'react';
import { useForm, useWatch } from "react-hook-form";
function SignUp() {
    // var url = "http://127.0.0.1:5000/"
    var url ="https://cybergeek-backend.netlify.app/"
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });
    let navigate=useNavigate()
    const [credential, setCredential] = useState({ fullname: "",email:"",password:"",cpassword:""})
    const handlesubmit = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname:credential.fullname,email:credential.email,password:credential.password })
        };
        const response = await fetch(`${url}auth/signup`, requestOptions)
       const json= await response.json()
       if(json.success){
           localStorage.setItem('auth-token',json.authtoken)
           window.location.reload(false)
           navigate('/dashboard')

       }else {
        alert("Signup failed")

    }

    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div className="bg-slate-700  md:p-4 text-white">
            <div className="loginbtn flex justify-start ">
          
            </div>
            <div className=" signup  flex justify-center">

                <div className="welcome m-8 p-4 flex-col justify-center align-middle">
                    <p className=" text-3xl">Signup to <span className=" text-4xl text-yellow-700">Cyber Geek.</span></p>
                    <p className="text-sm mt-2 ml-10">Explore Something New Regularly</p>
                </div>

            </div>

            <form onSubmit={handlesubmit} action="post" className=" md:flex justify-center">
                <div className="formdata1 flex md:flex-none m-3 justify-center">
                    <div className=" space-y-5">
                        <p className="text-sm md:text-base ml-3">Full Name</p>
                        <input name="fullname" onChange={onChange} value={credential.fullname} className="rounded w-[300px] md:w-70 p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-3 ">Email</p>
                        <input name="email" onChange={onChange}  value={credential.email} className=" rounded p-2 w-[300px] md:w-70 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="md:hidden my-2 sm: w-90" />
                    </div>
                </div>

                <div className="formdata2 mt-3 md:ml-20 flex md:flex-none justify-center pb-20">
                    <div className=" space-y-6">
                        <p className="text-sm md:text-base ml-3">Create Password</p>
                        <input name="password" onChange={onChange}  value={credential.password} className=" rounded w-[300px] md:w-70 p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-3 ">Re-type Password</p>
                        <input name="cpassword" onChange={onChange} value={credential.cpassword} className="rounded w-[300px] md:w-70 p-2 mt-3 bg-slate-600 " type="text" placeholder=" Enter you full name" />
                        <hr className="my-2 sm: w-90" />
                        <p className="text-sm md:text-base ml-5">please choose strong password</p>
                        <div className="flex justify-center">
                            <button className="mt-6 w-[150px] md:w-auto text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-2 px-6 text-xs rounded boder-0 focus:outline-none   hover:bg-green-800  hover:outline-red-500">
                    {
                     isSubmitting?
                        <svg role="status" class="inline w-4 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>:"signup"
                        }
                            </button>
                        </div>
                        <Link to="/login">
                    <button className=" ml-[70px] mt-4 text-center underline hover:text-yellow-500 ">
                        Already have an account
                    </button>
                </Link>

                    </div>
                </div>
            </form>
        </div>
    );

}

export default SignUp;
