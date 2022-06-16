import Skill from "./Skill";
function About(){
  
    return(
<>
<div className="AboutPage bg-slate-700 pb-14 justify-center">
<div className="flex Intro_container text-white bg-slate-700 rounded-lg md:p-10">
            <img className=" hidden md:block rounded-full h-28 my-20 md:h-64 md:w-64 md:my-16" src="https://res.cloudinary.com/cybergeek/image/upload/v1655187892/samples/people/kitchen-bar.jpg" alt="img"/>
            <div className="md:p-7 w-full">
                <div className="intro w-1/2">
                    <p className="typewriter mt-7 md:mt-16 text-md md:text-xl ml-16">My self Roshan acharya </p>
                    <p></p>
                </div>
                <p className=" tracking-wide animate-pulse my-7 mx-5 md:mx-auto text-xs px-10 md:text-base">I'm delegent hardworker as well as intelligent .Currently doing project for build my strong resume</p>
                <a target="_blank"  rel="noreferrer" className="inline-flex text-center   bg-pink-800 text-stone-50
                py-1 px-3 text-xs rounded boder-0 focus:outline-none m-4 md:mt-0 ml-[9rem] hover:bg-green-800  hover:outline-red-500" href="https://www.youtube.com/channel/UC_1mF6oERItz1UUrA0RzOdQ">Subscribe</a>
            </div>
        </div>
        <Skill/>
</div>
</>
    );
}
export default About;