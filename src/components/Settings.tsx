// import React from 'react'

import { TbChevronRight } from "react-icons/tb"
import Navigation from "./Reusable/Navigation"
import SettinsTop from "./Reusable/SettinsTop"
import Top from "./Reusable/Top"
import { Link } from "react-router-dom"
// import { IoMdShare } from "react-icons/io"

const Settings = () => {
    const data = [
        {
            img: "/images/lang.svg",
            details: "Choose Your Langauge",
            reward: "Selected  Language",
            amt: "English",
            coin: "/images/lang/eng.svg",
            link:"language"
        },
        {
            img: "/images/purse.svg",
            details: "Get to Get daily reward",
            reward: "Get reward",
            amt: "Binance",
            coin: "/images/Binance.svg",
            link:"exchange"
        },
        {
            img: "/images/delAcct.svg",
            details: "Want to Delete your account?",
            reward: "Delete Account",
            amt: "Delete",
            coin: "/images/del.svg",
            link:""
        }
    ]
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11]" >
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <SettinsTop />
            {/* <div className="flex flex-col gap-4 mt-3"> */}
                <div className="flex flex-col gap-4 mt-3 px-[4%] z-[500]">
                    {
                        data.map((d, i) => (
                            <div key={i} className="flex flex-row items-center ">
                                <div className="bg-[url(/images/left.svg)] h-[47px] w-full bg-no-repeat flex flex-row items-center">
                                    <img src={d.img} alt="" />
                                    <div className="text-[8px] ml-1">
                                        <p className="text-white">{d.details}</p>
                                        <Link to={d.link} className="flex flex-row items-center text-[#935EDB] text-[8px] ">
                                            <p>{d.reward} </p>
                                            <TbChevronRight />

                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-[url(/images/rightt.svg)] w-[53%] h-[47px] items-center justify-center flex bg-no-repeat pl-4">
                                    <span className="flex flex-row items-center gap-1">
                                        <p className="font-semibold">{d.amt}</p>
                                        <img src={d.coin} alt="" />
                                    </span>
                                </div>
                            </div>

                        ))
                    }
                </div>

            {/* </div> */}
            <Navigation />
        </div>
    )
}

export default Settings