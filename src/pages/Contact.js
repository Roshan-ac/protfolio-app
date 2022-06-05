import * as React from 'react';
function Contact() {
    return (
        <div class="Contact_container text-white bg-slate-700 rounded-lg p-5 md:p-10">
            <p class=" md:text-center text-emerald-50 text-2xl p-5 mb-10 tracking-wider uppercase">Contact Us</p>
            <form class="w-full max-w-lg md:ml-96" action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" class="hidden" name="access_key" value="4bb8a8b8-c7d1-4de6-8f1f-a3264bffa65d" />
                <input type="hidden" class="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} class="hidden" />
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                            Full Name
                        </label>
                        <input name="name" id="name" class="appearance-none block w-full bg-slate-600 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-500" type="text" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>

                </div>
                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input class="appearance-none block w-full bg-slate-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500" type="email" name="email" id="email" />
                        <p class="text-white text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-slate-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500 h-48 resize-none" name="message" id="message"></textarea>

                    </div>
                </div>
                <div class="md:flex md:items-center text-center items-center">
                    <div class="md:w-1/3 flex">
                        <button  class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                    </div>
                    <p class=" md:w-60 md:ml-10 text-sm text-center text-gray-400" id="result"></p>
                    <div class=" md:w-2/3 "></div>
                </div>
            </form>

        </div>

    );
}
export default Contact;