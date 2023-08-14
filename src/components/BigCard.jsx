import React from "react";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';

import sun from "../assets/sun.png";
import cld from "../assets/cld.png";

const BigCard = ({data}) =>{
    // const chartHeight = data.length * 30; 

    return (

        <div className="bg-[#FFFFFF] space-y-3 rounded-3xl h-full p-4">

            <div className="flex justify-between mb-1">

                <p className="text-xs">Upcomig hours</p>

                <div className="flex gap-5">
                    <select className="text-xs rounded-lg cursor-pointer bg-[#f1f1f1]">
                        <option className="text-sm">Rain precipitation</option>
                    </select>
                    <p className="text-xs cursor-pointer rounded-xl bg-[#e2e2e2] px-2 py-1">Next days ></p>
                </div>
                
            </div>

            <div className="flex mx-2 justify-between ">

                <div className="flex flex-col gap-[1px] items-center">
                    <p className="text-[10px]">Now</p>
                    <img src={sun} alt='' className="w-[15px]" />
                    <p className="text-xs">27°</p>
                </div>
                
                <div className="flex flex-col gap-[1px]  items-center">
                    <p className="text-[10px]">11:00</p>
                    <img src={sun} alt='' className="w-[15px]" />
                    <p className="text-xs">28°</p>
                </div>

                <div className="flex flex-col gap-[1px]  items-center">
                    <p className="text-[10px]">12:00</p>
                    <img src={cld} alt='' className="w-[15px]" />
                    <p className="text-xs">28°</p>
                </div>

                <div className="flex flex-col gap-[1px]  items-center">
                    <p className="text-[10px]">13:00</p>
                    <img src={cld} alt='' className="w-[15px]" />
                    <p className="text-xs">29°</p>
                </div>

                <div className="flex flex-col gap-[1px]  items-center">
                    <p className="text-[10px]">14:00</p>
                    <img src={sun} alt='' className="w-[15px]" />
                    <p className="text-xs">30°</p>
                </div>

                <div className="flex flex-col gap-[1px]  items-center">
                    <p className="text-[10px]">15:00</p>
                    <img src={cld} alt='' className="w-[15px]" />
                    <p className="text-xs">29°</p>
                </div>

                <div className="flex flex-col gap-[1px]  items-center">
                    <p className="text-[10px]">16:00</p>
                    <img src={cld} alt='' className="w-[15px]" />
                    <p className="text-xs">29°</p>
                </div>

                <div className="flex flex-col gap-[1px]      items-center">
                    <p className="text-[10px]">17:00</p>
                    <img src={sun} alt='' className="w-[15px]" />
                    <p className="text-xs">28°</p>
                </div>

            </div>

            <ResponsiveContainer className=" bg-[#FFFFFF] " width="100%" height={90}>
                <AreaChart data={data} margin={{  right: 15, left: 15, bottom: 0 }}>
                    
                    <XAxis dataKey="name"  className="text-xs text-center "/>
                    <YAxis domain={[0, 140]} hide />
                    <Tooltip />

                    <Area type="linear" dataKey="value" stroke="#8884d8" fill="#0b73e2" >
                        <Label content={({ value }) => `${value}`} position="top" />
                    </Area>

                    {data.map((entry) => (
                        <ReferenceLine key={entry.name} x={entry.name} stroke="gray" />
                    ))}
            </AreaChart>
            </ResponsiveContainer>
        </div>
      );
}

export default BigCard;


