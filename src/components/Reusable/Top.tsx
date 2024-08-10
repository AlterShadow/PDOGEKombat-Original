// import React from 'react'
import { RiVerifiedBadgeLine } from "react-icons/ri";

const Top = () => {
    return (
        <div className="px-[6%] flex flex-row items-center justify-between z-[500] py-4">
            <p className="text-white">Close</p>
            <div className="flex flex-col items-center gap-1">
                <span className="flex flex-row items-center gap-1">
                    <p className="text-white">Game Name</p>
                    <RiVerifiedBadgeLine className="text-[#2568EF] " />
                </span>
                <p className="text-[8px] text-[#ACA4A4]">mini app</p>
            </div>
            <img src="/images/dots.svg" alt="" />
        </div>
    )
}

export default Top