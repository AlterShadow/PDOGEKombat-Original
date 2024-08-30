// import React from 'react'

import { TbChevronRight } from "react-icons/tb"
import Navigation from "./Reusable/Navigation"
import Top from "./Reusable/Top"

const Quest = () => {
    const data = [
        {
            img: "/images/yout.svg",
            details: "Winklevoss twins: watch video to earn",
            reward: "Get reward",
            amt: "+100,000",
            coin: "/images/coin.svg"
        },
        {
            img: "/images/gft.svg",
            details: "Get to Get daily reward",
            reward: "Get reward",
            amt: "+100,000",
            coin: "/images/coin.svg"
        },
        {
            img: "/images/teleg.svg",
            details: "Join our telegram channel",
            reward: "Get reward",
            amt: "+100,000",
            coin: "/images/coin.svg"
        },
        {
            img: "/images/twitt.svg",
            details: "Join our X account to get more update",
            reward: "Get reward",
            amt: "+100,000",
            coin: "/images/coin.svg"
        },
        {
            img: "/images/ceo.svg",
            details: "Choose  Our exchange",
            reward: "Get reward",
            amt: "+100,000",
            coin: "/images/coin.svg"
        },
        {
            img: "/images/connet.svg",
            details: "Invite 3 friends",
            reward: "Get reward",
            amt: "+100,000",
            coin: "/images/coin.svg"
        },
    ]
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11]" >
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <div className="px-[4%] flex flex-col z-[500]">
                <div className="flex flex-col items-center">
                    <p className="fighting uppercase text-[32px] font-bold text-[#FCEE21]">Earn more coins</p>
                    <p className="text-[12px] text-white">Make our tasks to get more coins</p>
                </div>

                <div className="flex flex-col gap-4 mt-3">
                    {
                        data.map((d, i) => (
                            <div key={i} className="flex flex-row items-center ">
                                <div className="bg-[#232224] h-[47px] rounded-l-lg clip-slant2 w-full  flex flex-row items-center">
                                    <img src={d.img} alt="" />
                                    <div className="text-[8px] ml-1">
                                        <p className="text-white">{d.details}</p>
                                        <span className="flex flex-row items-center text-[#935EDB] text-[8px] ">
                                            <p>{d.reward} </p>
                                            <TbChevronRight/>

                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#FCEE21] w-[50%] rounded-lg clip  h-[47px] items-center justify-center flex bg-no-repeat pl-4">
                                    <span className="flex flex-row items-center gap-1">
                                        <p className="font-semibold">{d.amt}</p>
                                        <img src={d.coin} alt="" />
                                    </span>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
            <Navigation />
        </div >
    )
}

export default Quest