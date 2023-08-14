import React from "react";
// import Card from "./Card";

import water from "../assets/water.png"
import air from "../assets/air.png"
import rain from "../assets/rain.png"
import sun from "../assets/sun.png"
import tmp from "../assets/tmp.png"

const Cards = () =>{

    return (

    
            <div className="flex gap-3 gap-y-6  justify-between flex-wrap ">



                <div className="card-1 bg-white h-full p-4 justify-between items-center rounded-2xl flex flex-col" >

                    <div className="flex gap-16 justify-between">
                        <p className=" text-xs font-[500]">Humidity</p>
                        <div className="bg-[#5C9CE5] w-5 h-5 rounded-md flex justify-center items-center">
                            <img src={water} className="w-3 invert "/>
                        </div>
                    </div>

                    <div className="text-[10px] font-semibold">
                       <span className=" text-base font-bold"> 82%</span> bad
                    </div>

                    <div className="flex w-full gap-2">
                        <div className="w-full">
                            <p className="text-[10px]">good</p>
                            <div className="h-2 w-full  rounded-md bg-[#5C9CE5]" ></div>
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">normal</p>
                            <div className="h-2  w-full rounded-md bg-[#5C9CE5]"></div>
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">bad</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]">
                                <div className="h-2 w-3 rounded-l-md absolute bg-[#5C9CE5] "></div>
                            </div>
                        </div>
                    </div>

                </div>




                <div className="card-2 bg-white p-4 items-center justify-between rounded-2xl flex flex-col" >

                    <div className="flex gap-24 justify-between">
                        <p className=" text-xs font-[500]">Wind</p>
                        <div className="bg-[#5C9CE5] w-5 h-5 rounded-md flex justify-center items-center">
                            <img src={air} className="w-3 invert "/>
                        </div>
                    </div>

                    <div className="text-md font-semibold">
                        8 km/h
                    </div>

                    

                </div>



                <div className="card-3 bg-white p-4 justify-between items-center rounded-2xl flex flex-col" >

                    <div className="flex gap-16 justify-between">
                        <p className=" text-xs font-[500]">Precipitation</p>
                        <div className="bg-[#5C9CE5] w-5 h-5 rounded-md flex justify-center items-center">
                            <img src={rain} className="w-3 invert "/>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">
                       1.4 cm
                    </div>

                    <div className="flex w-full space-x-1 justify-between">
                        <div className="w-full">
                            <p className="text-[10px]">0 </p>

                            <div className="h-2 relative  w-full rounded-md bg-[#5C9CE5]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">10</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#5C9CE5]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">20</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">30</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">40</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">50</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">60</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">70</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">80</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">90</p>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]"></div>  
                            
                        </div>
                    </div>

                </div>



                <div className="card-4 bg-white p-4 justify-between items-center rounded-2xl flex flex-col" >

                    <div className="flex gap-16 justify-between">
                        <p className=" text-xs font-[500]">UV index</p>
                        <div className="bg-[#5C9CE5] w-5 h-5 rounded-md flex justify-center items-center">
                            <img src={sun} className="w-3 invert "/>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">
                       4 medium
                    </div>

                    <div className="flex w-full items-center gap-2">
                        <div className="w-full">
                            <p className="text-[10px]">0-2</p>
                            <div className="h-2 w-full  rounded-md bg-[#5C9CE5]" ></div>
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">3-5</p>
                            <div className="h-2 w-full relative rounded-md bg-[#5C9CE5]" >
                                <div className="w-3 rounded-r-md absolute right-0 h-2 bg-[#dbdbdb]"></div>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">6-7</p>
                            <div className="h-2 w-full  rounded-md bg-[#dbdbdb]" ></div>
                        </div>
                        <div className="w-full">
                            <p className="text-[9px]">8-10</p>
                            <div className="h-2 w-full  rounded-md bg-[#dbdbdb]" ></div>
                        </div>
                        <div className="w-full">
                            <p className="text-[10px]">11+</p>
                            <div className="h-2 w-full  rounded-md bg-[#dbdbdb]" ></div>
                        </div>
                        
                    </div>

                </div>




                <div className="card-5 flex bg-white p-4 justify-between items-center rounded-2xl  flex-col" >

                    <div className="flex gap-20 justify-between">
                        <p className=" text-xs font-[500]">Feels like</p>
                        <div className="bg-[#5C9CE5] w-5 h-5 rounded-md flex justify-center items-center">
                            <img src={tmp} className="w-3 invert "/>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">
                       30°
                    </div>

                    <div className="flex w-full">
                        
                        <div className="w-full">

                            <div className="flex w-full  justify-between">
                                <p className="text-[10px]">0°</p>
                                <p className="text-[10px]">25°</p>
                                <p className="text-[10px]">50°</p>
                            </div>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]">
                                <div className="h-2 w-20 rounded-l-md absolute bg-[#5C9CE5] "></div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="card-6 bg-white p-4 justify-between items-center rounded-2xl flex flex-col" >

                    <div className="flex gap-12 justify-between">
                        <p className=" text-xs font-[500]">Chance of rain</p>
                        <div className="bg-[#5C9CE5] w-5 h-5 rounded-md flex justify-center items-center">
                            <img src={rain} className="w-3 invert "/>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">
                       42%
                    </div>

                    <div className="flex w-full">
                        
                        <div className="w-full">

                            <div className="flex w-full  justify-between">
                                <p className="text-[10px]">0%</p>
                                <p className="text-[10px]">25%</p>
                                <p className="text-[10px]">50%</p>
                                <p className="text-[10px]">75%</p>
                                <p className="text-[10px]">100%</p>
                            </div>

                            <div className="h-2 relative  w-full rounded-md bg-[#dbdbdb]">
                                <div className="h-2 w-20 rounded-l-md absolute bg-[#5C9CE5] "></div>
                            </div>
                        </div>
                    </div>

                </div>







            </div>
       

        
            

       

    )

}

export default Cards;

