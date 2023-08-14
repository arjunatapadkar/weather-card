import React from "react";

import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const App = () => {


    return (

        <div className="bg-[#B4D7FE] w-[100vw] h-[100vh]  flex items-center justify-center">
             
            <div className="w-[900px] h-[600px] rounded-[5%] overflow-hidden flex relative">
                    
                <LeftSection  />
                <RightSection  />

            </div>
        </div>
    )


};

export default App;
