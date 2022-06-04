import * as React from 'react';
function Skill(){
    return(
        <div class="Skill_container flex md:p-10 h-[70vh]">
        <img class="rounded-full hidden md:block h-28 my-20 md:h-64 md:my-28 mt-44" src="https://as1.ftcdn.net/v2/jpg/02/15/15/08/1000_F_215150815_D248bPxiY2K1QDO7PixyuGDBVO89TOuW.jpg" alt="" srcset=""/>
        <div class="Skill m-5 md:m-20">
            <p class="md:hidden block text-emerald-50 text-lg p-5 ml-24 tracking-wider">MY SKILLS</p>
            <div class="container flex">
                <div class="Html">
                    <p class="text-white">Html</p>
                    <div class="progressbar bg-white w-72 md:w-96 h-2 mt-2 rounded-full">
                        <div class="animate-html text-white h-2 bg-red-500"><span class="text-white bg-slate-800 border-solid border-2 rounded-full border-red-500 text-[9.5px] float-right -mt-3 w-[30px] text-center justify-items-center h-[30px] pt-1.5  ">70%</span></div>
                    </div>

                </div>
            </div>
            <div class="container flex mt-2">
                <div class="Css">
                    <p class="text-white">CSS</p>
                    <div class="progressbar bg-white w-72 md:w-96 h-2 mt-2 rounded-full">
                        <div class="animate-css text-white  h-2 bg-purple-500"><span class="text-white bg-slate-800 border-solid border-2 rounded-full border-red-500 text-[9.5px] float-right ml-64 -mt-3 w-[30px] text-center justify-items-center h-[30px] pt-1.5 ">64%</span></div>
                    </div>

                </div>
            </div>
            <div class="container flex mt-2">
                <div class="Js">
                    <p class="text-white">JS</p>
                    <div class="progressbar bg-white w-72 md:w-96 h-2 mt-2 rounded-full">
                        <div class="animate-js text-white w-60 h-2 bg-yellow-500"><span class="text-white bg-slate-800 border-solid border-2 rounded-full border-red-500 text-[9.5px] float-right ml-60 -mt-3 w-[30px] text-center justify-items-center h-[30px] pt-1.5 ">60%</span></div>
                    </div>

                </div>
            </div>
            <div class="container flex mt-2">
                <div class="Nodejs">
                    <p class="text-white">Node Js</p>
                    <div class="progressbar bg-white w-72 md:w-96 h-2 mt-2 rounded-full">
                        <div class="animate-nodejs text-white w-40 h-2 bg-green-500"><span class="text-white bg-slate-800 border-solid border-2 rounded-full border-red-500 text-[9.5px] float-right ml-36 -mt-3 w-[30px] text-center justify-items-center h-[30px] pt-1.5 ">36%</span></div>
                    </div>

                </div>
            </div>
            <div class="container flex mt-2">
                <div class="React">
                    <p class="text-white">React</p>
                    <div class=" bg-white w-72 h-2 md:w-96 mt-2 rounded-full">
                        <div class="animate-react text-white w-72 h-2 bg-blue-500"><span class="text-white bg-slate-800 border-solid border-2 rounded-full border-red-500 text-[9.5px] float-right ml-72 -mt-3 w-[30px] text-center justify-items-center h-[30px] pt-1.5 ">75%</span></div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}
export default Skill;