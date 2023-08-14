import React from "react";

import BigCard from "./BigCard";
import Cards from "./Cards";

import thr from '../assets/thrdots.png';
import profile from '../assets/profile.png';



const data = [
    { name: '23%', value: 23 },
    { name: '29%', value: 29 },
    { name: '58%', value: 58 },
    { name: '75%', value: 75 },
    { name: '33%', value: 33 },
    { name: '20%', value: 20 },
    { name: '73%', value: 73 },
    { name: '49%', value: 49 },
    // ...add more data points as needed
  ];



const RightSection = () =>{

    return (
        <div className="bg-[#E4F1FF] w-[75%] h-full p-5 pl-10 pr-10 flex flex-col gap-4 rounded-tl-[5%] rounded-bl-[5%] absolute right-0">

            <div className="flex justify-between">
                <div>
                    <h4 className="text-sm font-[700]">Welcome back Isabella!</h4>
                    <h5 className="text-xs">Check out today's weather information</h5>
                </div>

                <div className="flex gap-4 items-center">
                    <img src={thr} alt="" className="w-7 h-6"/>
                    <img src={profile} className="w-[40px] h-[40px] rounded-lg" alt=""/>
                </div>
            </div>


            <div>
                <BigCard data = {data} />
            </div>

            <div>
                <p className="text-xs font-[700]">More details of today's weather</p>
            </div>

            <div>
                <Cards className="" />
            </div>
        </div>
    )
}

export default RightSection;

