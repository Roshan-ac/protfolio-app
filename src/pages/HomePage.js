
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
        <div className="md:flex md:justify-start">

            <div className=" md:ml-10 container p-5 md:flex md:flex-wrap">

                {
                    data.map((e) => (

                        <div key={e.id} className="card-body my-6 md:m-3 md:w-[430px]  bg-slate-800 rounded-md" >
                            <div className="image p-3 rounded-md flex-col flex justify-center">
                                <img className="rounded-lg" src={e.image} alt="" />
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
        </div>
    )
}

export default HomePage;