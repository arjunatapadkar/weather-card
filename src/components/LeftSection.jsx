import React from "react";
import assets from "../assets/thrdots.png";
import loc from "../assets/loc.png";
import sun from "../assets/sun.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import bg from "../assets/bg.jpeg";

const LeftSection = () =>{

    return (

        <div className="bg-[#5C9CE5] w-[40%] h-full flex relative justify-start flex-col gap-10  p-5" >
            <div className="flex items-center justify-start gap-8">
                <div className="bg-white text-[#5C9CE5] w-[18px] h-[18px] rounded-md pb-[3px] flex justify-center items-center">
                    <p>+</p>
                </div>
                <div>
                 <img src={assets}  className="invert w-[30px]" alt='' />
                </div>
                <div className="flex text-xs items-center">
                    <p className="mr-1 text-white">°C</p>
                    <input
                        class="mr-1 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]   focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem]  checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                          />
                    <p className="text-white">°F</p>
                </div>
            </div>


            <div className="flex flex-col gap-2">

                <div className="flex justify-start gap-7">
                   <div className="flex">
                        <img src={loc}  className="invert w-[17px] mr-1"/>
                        <p className="invert text-xs font-bold">New York, USA</p>
                   </div>
                   
                   <div className="flex">
                        <img src = {sun} className="invert w-[17px] mr-1" />
                        <p className="invert text-xs font-bold">07:19</p>
                   </div>
                </div>

                <div className="flex justify-start gap-14">
                    <p className="invert text-xs ">Today 28 Sept</p>

                    <div className="flex">
                        <img src = {sun} className="invert w-[17px] mr-1" />
                        <p className="invert text-xs font-bold">19:32</p>
                   </div>
                </div>

            </div>

            <div className="">
                <div className="flex justify-start gap-7 items-center">

                    <img src={left} className="invert w-[30px] cursor-pointer " />

                    <div className="space-y-2">
                        <p className="invert text-6xl">27°</p>
                    </div>

                    <img src={right} className="invert w-[30px] cursor-pointer " />

                </div>
                <div className="flex items-center gap-1 ml-14">
                        <img src={sun} className="invert w-[17px]" />
                        <p className="text-md font-semibold invert" >Sunny</p>
                </div>
            </div>

            <img src={bg} className="absolute left-[-7rem] h-[600px] mix-blend-lighten overflow-hidden bottom-[-3rem]"/>
            
        </div>

    )

}

export default LeftSection;

