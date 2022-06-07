import * as React from 'react';
function Contact() {
    return (
        <div className="Contact_container text-white bg-slate-700 rounded-lg p-5 md:p-10">
            <p className=" md:text-center text-emerald-50 text-2xl p-5 mb-10 tracking-wider uppercase">Contact Us</p>
            <form className="w-full max-w-lg md:ml-96" action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" className="hidden" name="access_key" value="4bb8a8b8-c7d1-4de6-8f1f-a3264bffa65d" />
                <input type="hidden" className="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} className="hidden" />
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                            Full Name
                        </label>
                        <input name="name" id="name" className="appearance-none block w-full bg-slate-600 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-500" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-slate-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500" type="email" name="email" id="email" />
                        <p className="text-white text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-slate-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500 h-48 resize-none" name="message" id="message"></textarea>

                    </div>
                </div>
                <div className="md:flex md:items-center text-center items-center">
                    <div className="md:w-1/3 flex">
                        <button  className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                    </div>
                    <p className=" md:w-60 md:ml-10 text-sm text-center text-gray-400" id="result"></p>
                    <div className=" md:w-2/3 "></div>
                </div>
            </form>

        </div>

    );
}
export default Contact;