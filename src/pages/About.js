import Skill from "./Skill";
import * as React from 'react';
function About(){
    return(
<>
<div className="AboutPage bg-slate-700 pb-14 justify-center">
<div class="flex Intro_container text-white bg-slate-700 rounded-lg md:p-10">
            <img class="hidden md:block rounded-full h-28 my-20 md:h-64 md:my-16" src="https://avatars.githubusercontent.com/u/51825251?v=4" alt="img"/>
            <div class="md:p-7">
                <div class="intro w-[346px] ">
                    <p class="typewriter mt-7 md:mt-16 text-md md:text-xl ml-16">Myself Roshan Acharya </p>
                </div>
                <p class=" tracking-wide animate-pulse my-7 mx-5 md:mx-auto text-xs px-10 md:text-base">I'm self learner well motivated students studying bachelore in Cyber Security in New era institue sydney australia </p>
                <a target="_blank"  rel="noreferrer" class="inline-flex text-center   bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none m-4 md:mt-0 ml-[9rem] hover:bg-green-800  hover:outline-red-500" href="https://www.youtube.com/channel/UC_1mF6oERItz1UUrA0RzOdQ">Subscribe</a>
            </div>
        </div>
        <Skill/>
</div>
</>
    );
}
export default About;