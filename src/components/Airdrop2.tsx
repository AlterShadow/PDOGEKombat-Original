// import React from 'react'

import Navigation from "./Reusable/Navigation"
import Top from "./Reusable/Top"
import Top2 from "./Reusable/Top2"

const Airdrop2 = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11] relative" >
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <Top2 />
            <div className="px-[6%] z-[500] mt-3">
                <div className="p-4 rounded-xl bg-[#252423] shadow-sm shadow-[#935EDB]">
                    <div className="flex flex-col items-center w-full">
                        <div className='flex flex-col items-center'>
                            <p className='text-[32px] fighting text-[#FCEE21] font-semibold'>AirDrop</p>
                            <p className='text-[12px] text-white'>Get an exclusive reward.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation />
        </div>
    )
}

export default Airdrop2