import * as React from 'react';
function Header(){
    return(
<>
<header class="text-white bg-slate-800">
        <div class="container mx-auto flex flex-wrap flex-col items-center p-4 md:flex-row">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="https://cdn.imgbin.com/2/8/12/imgbin-security-hacker-computer-security-certified-ethical-hacker-white-hat-hacker-2zFhKR82nuSnP2Da9ZF61txgL.jpg" class="w-10 h-10 text-white bg-yellow-500 p-1 rounded-full">
                </img>
                <span class="ml-3 text-xl text-white">Cyber-Geek</span>
            </a>
            <nav class=" md:mr-auto md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href="/" class="mr-6 cursor-pointer hover:text-gray-400 hover:transi">Home</a>
                <a href="About" class="mr-6 cursor-pointer hover:text-gray-400 hover:transi">About</a>
                <a href="#" class="mr-6 cursor-pointer hover:text-gray-400 hover:transi">Service</a>
                <a href="/contact" class="mr-6 cursor-pointer hover:text-gray-400 hover:transi">Contact</a>
            </nav>
            <a href="/signup">
                <button class="text-center md:ml-auto md:mr-auto bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none mt-4 md:mt-0 hover:bg-green-800  hover:outline-red-500">
                Sign up
            </button>
            </a>
        </div>
    </header>
</>
    );
}
export default Header;