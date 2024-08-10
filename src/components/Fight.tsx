// import React from 'react'

import { TbChevronRight } from "react-icons/tb"
import Navigation from "./Reusable/Navigation"
import Top from "./Reusable/Top"
import Top2 from "./Reusable/Top2"

const Fight = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[url(/images/background.svg)] bg-no-repeat bg-cover relative" >
            <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
            <Top />
            <Top2 />
            <div className="z-[500] relative">
                <div className="w-full flex items-center justify-center mt-2 ">
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
                <img src="/images/home.svg" className="w-[70%]  absolute top-[18%] left-[13%]" alt="" />
            </div>
            <div className="px-[6%] absolute w-full bottom-[16%]">
                <div className=" justify-between flex w-full ">
                    <div className="flex flex-row items-center gap-2">
                        <img src="/images/bronze.svg" alt="" />
                        <p className="text-white text-[12px] font-semibold">Bronze</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 font-semibold text-[#935EDB]">
                        <img src="/images/level.svg" alt="" />
                        <p className="">Level</p>
                        <p className="text-white">6/11</p>
                    </div>
                </div>
                <div className="bg-[#3F3C35] rounded-lg w-full h-[8px]">
                    <div className="h-[8px] w-[50%] bg-[#FCEE21] rounded-lg"></div>
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

export default Fight