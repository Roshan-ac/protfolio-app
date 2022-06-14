
import React, { useContext, useEffect, } from 'react';
import LoginContext from '../Contex/auth/LoginContex';


function HomePage() {
    const contex = useContext(LoginContext)
    const { data, fetchData } = contex
    useEffect(() => {
            fetchData()
            
            //eslint-disable-next-line
    }, [])

    return (
        <div className="container p-2 md:flex space-y-4 ">
           
            {
                data.map((e) => (

                    <div key={e.id} className="card-body md:flex md:w-full bg-slate-800 rounded-md" >
                        <div className="image p-3 rounded-md flex-col flex justify-center space-y-5">
                            <img className="rounded-lg" src={e.image}  alt="" />
                            <hr />
                        </div>
                        <div className="post py-2 text-center text-white">
                            <p>{e.title}</p>
                            <a href={e.link} target="_blank" rel='noreferrer'>
                                <p className=' border-red-800  mt-5 text-red-400'>Watch tutorials</p>
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default HomePage;