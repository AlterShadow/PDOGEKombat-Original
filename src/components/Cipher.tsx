// import React from 'react'

// const Cipher = () => {
//   return (
//     <div>Cipher</div>
//   )
// }

// export default Cipher
// import React from 'react'

import { TbChevronRight } from "react-icons/tb"
import Navigation from "./Reusable/Navigation"
import Top from "./Reusable/Top"
import Top2 from "./Reusable/Top2"

const Cipher = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-black bg-no-repeat bg-cover relative" >
            <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
            <Top />
            <Top2 />
            <div className="z-[500] relative">
                <div className="w-full flex items-center justify-center mt-2">

                    <div className="flex flex-row w-full items-start gap-2 justify-center">
                        <img src="/images/money.svg" className="mt-3" width={"10%"} alt="" />
                        <span className="">
                            <p className="text-[37px] font-bold text-white tracking-widest">109 343</p>
                            <div className="flex flex-row items-center gap-3">
                                <button className="flex flex-row items-center gap-2 bg-gradient-to-tr from-[#9E6CE2] to-[#935EDB] rounded-lg text-white p-2">
                                    <img src="/images/key.svg" alt="" />
                                    <p className="text-[8px]">10</p>
                                    <TbChevronRight />
                                </button>
                                <button className="flex flex-row items-center gap-2 bg-[#935EDB] rounded-lg text-white p-2">
                                    <img src="/images/bina.svg" alt="" />
                                    <p className="text-[8px]">Binance</p>
                                    <TbChevronRight />
                                </button>
                            </div>
                        </span>
                    </div>
                </div>
                <img src="/images/cipher.svg" className="w-[30%] absolute left-[35%]" alt="" />
            </div>
            <div className="px-[6%] absolute w-full bottom-[15%]">
                <div className="bg-[#3F3C35] rounded-xl w-full h-[36px] flex justify-end px-2 py-1">
                    {/* <div className="h-[8px] w-[50%] bg-[#FCEE21] rounded-lg"></div> */}
                    <button className="bg-[#9C60ED] border-[1px] border-[#FCEE21] rounded-2xl">
                        <img src="" alt="" />
                        <p className="text-white text-[10px] px-3 py-2">+1,000,000</p>
                    </button>
                </div>
                <div className="w-full flex items-center justify-center mt-2">
                    <div className="flex flex-row items-center gap-2">
                        <img src="/images/level.svg" alt="" />
                        <p className="text-[18px] font-semibold text-white">1000/1000</p>
                        <button className="bg-[#8CCD23] border-[1px] border-[#FCEE21] rounded-lg p-2 gap-2 flex items-center">
                            <img src="/images/boost.svg" alt="" />
                            <p className="font-semibold text-white text-[10px]" >Boost</p>
                        </button>
                    </div>

                </div>
            </div>
            <Navigation />
        </div >
    )
}

export default Cipher