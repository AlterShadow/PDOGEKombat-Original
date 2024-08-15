// import React from 'react'

import { TbChevronRight } from "react-icons/tb"
import Navigation from "./Reusable/Navigation"
import Top from "./Reusable/Top"
import { ReactNode, useState } from "react"
import Traintab from "./Minting/Train"
import Ufc from "./Minting/Ufc"
import Street from "./Minting/Street"
import Amature from "./Minting/Amature"

interface tabitems{
    [key:string]:ReactNode
}

const Train = () => {

    const [active, setActive] = useState("train")
    const tabs = [
        {
            img:"",
            title:"Training",
            act:"train"
        },
        {
            img:"",
            title:"Street",
            act:"street"
        },
        {
            img:"",
            title:"Amature Fighting",
            act:"amature"
        },
        {
            img:"",
            title:"UFC",
            act:"ufc"
        },
    ]

    const tabitems:tabitems={
        train:<Traintab/>,
        street:<Street/>,
        ufc:<Ufc/>,
        amature:<Amature/>
    }

    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11]" >
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <div className="px-[6%] z-[500] h-[76vh] overflow-y-scroll">
                <button className="border-[2px] py-1 w-full backdrop-blur-sm rounded-lg px-2 flex justify-between border-[#E1AF54]">
                    <div className="flex flex-row items-center gap-2">
                        <button className="w-[43px] h-[43px] flex items-center justify-center bg-[#252423] rounded-lg">
                            <img src="/images/ceo.svg" alt="" />
                        </button>
                        <span>
                            <p className="text-white text-[10px]">John Watson (CEO)</p>
                            <span className="flex items-center gap-2">
                                <img src="/images/money.svg" alt="" />
                                <p className="text-[14px] text-[#FCEE21]">109 343</p>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-1">
                            <img src="/images/bronze.svg" alt="" />
                            <p className="text-white text-[10px]">Bronze</p>
                            <p className="text-[#935EDB] text-[10px]">Level</p>
                            <p className="text-white text-[10px]">6/11</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="flex flex-row items-center gap-2 bg-[#935EDB] rounded-lg text-white p-1">
                                <img src="/images/bina.svg" alt="" />
                                <p className="text-[8px]">Binance</p>
                                <TbChevronRight />
                            </button>
                        </div>
                    </div>
                </button>
                <div className="flex w-full justify-between gap-3 mt-2">
                    {
                        tabs.map((tab, index)=>(
                            <button key={index} className={`py-1 w-full rounded-lg px-2 items-center justify-center flex ${tab.act === active? 'bg-[#935EDB]' : 'bg-[#252423]'}`} onClick={()=>setActive(tab.act)}>
                                <p className={`text-white text-[8px] ${tab.act === active? 'text-white' : 'text-[#978E8E]'}`}>{tab.title}</p>
                            </button>
                        ))
                    }
                </div>
                <div className="mt-3">
                    {
                        tabitems[active]
                    }
                </div>
            </div >
            <Navigation />
        </div >
    )
}

export default Train