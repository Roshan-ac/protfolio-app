import { useContext, useEffect } from "react";
import LoginContext from "../Contex/auth/LoginContex";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"




function Dashboard() {
    const location = useLocation();
    const Navigate=useNavigate()
    const context = useContext(LoginContext)
    const { user, fetchUser} = context

    const logout = () => {
        localStorage.removeItem('auth-token')
        Navigate('/dashboard')
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className="main p-1 bg-slate-900 m-5 h-full">
            {
                localStorage.getItem('auth-token') &&
                <div className="usersection  p-5 space-y-5 bg-gray-800 rounded-md">
                    <div className="editprofile  h-10 flex justify-end">
                        <Link to="/profile_edit">
                    <svg  className="h-5 fill-orange-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg>
                        </Link>
                    </div>
                    <div className="image">
                        <div className="justify-center flex">
                            <img src={user ? user.profile : ""} alt="" className="  cursor-pointer h-32 w-32 outline-double rounded-full" />
                        </div>
                    </div>
                    <div className="btn flex justify-center">
                        <div className="name md:space-y-5 text-white text-lg">
                            <div className="accoutname">
                            <p>{user.fullname}</p>
                            </div>
                            <div className="btn flex justify-center">
                                <button onClick={logout} className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !localStorage.getItem('auth-token') &&
                <div className="usersection p-5 space-y-5 bg-gray-800 rounded-md">
                    <div className="image">
                        <div className="justify-center flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/800px-Circle-icons-profile.svg.png" alt="" className="  cursor-pointer h-32 w-32 outline-double rounded-full" />
                        </div>
                    </div>
                    <div className="btn flex justify-center">
                        <div className="name text-white text-lg">
                            <div className="chooseimg">
                            </div>
                            <div className="btn flex justify-center">
                                <Link to="/signup">
                                    <button className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                                        Signup
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Dashboard