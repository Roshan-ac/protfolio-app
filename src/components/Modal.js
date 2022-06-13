import React, { useContext, useState } from "react";
import LoginContext from "../Contex/auth/LoginContex";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(LoginContext)
  const { user, fetchUser, profile, fetchimg } = context
  const hello =()=>{
    console.log('hello world')
  }
  return (
    <>
      {
        localStorage.getItem('auth-token') ?
          <img onClick={setShowModal} className=" rounded-3xl" src={profile} alt="" srcSet="" /> :
          <img className=" rounded-3xl" src={profile} alt="" srcSet="" />
      }
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" p-4 space-y-5 text-white border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none">
                <form onSubmit={hello} className="p-4 space-y-5 text-white" action="post">
                    <label htmlFor="">Choose image</label>
                  <div className="form  ">
                    <input className="bg-slate-700 text-white" type="file" name="image"  />
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancle
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;