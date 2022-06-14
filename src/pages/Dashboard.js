import { useContext, useEffect } from "react";
import LoginContext from "../Contex/auth/LoginContex";
import { Link,useLocation } from "react-router-dom"
import Modal from "../components/Modal"



function Dashboard() {
    const location=useLocation();
    const context = useContext(LoginContext)
    const { user,fetchUser,fetchimg } = context

    const logout = () => {
        localStorage.removeItem('auth-token')        
    }
    useEffect(() => {
        fetchUser()
        fetchimg()
    }, [user])

    return (
        <div className="main p-1 bg-slate-700">
            <div className="usersection space-y-4 m-4 p-4 bg-gray-600 rounded-md">
                <div className="image flex justify-center">
                    <div className="image rounded-full h-20 w-20 ">
                        <Modal
                        />
                    </div>
                </div>
                <div className="btn flex justify-center">
                    {
                        localStorage.getItem('auth-token') ?
                            <div className="name text-white text-lg">
                                <p>{user.firstname} {user.lastname}</p>
                                <div className="chooseimg">
                                </div>
                                <div className="btn flex justify-center">
                                    <button onClick={logout} className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                                        Logout
                                    </button>
                                </div>
                            </div>

                            : <Link to="/signup">
                                <button className="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                                    Sign up
                                </button>
                            </Link>
                    }
                </div>
                
            </div>

        </div>
    )
}

export default Dashboard