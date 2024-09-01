// import React from 'react'

import { Link } from "react-router-dom"
import Top from "./Reusable/Top"

const Onboarding = () => {
  return (
    <div className="h-[100vh] w-full overflow-y-hidden overflow-x-hidden flex flex-col bg-black">
      <Top />
      <div className="z-[500] flex flex-col items-center h-[80vh] relative">
        <img src="/images/doge_line.svg" className="absolute top-[-3%]" alt="" />
        <img src="/images/toprectangle.svg" className="absolute left-[-10%] top-[-10%]" alt="" />
        <img src="/images/sun.svg" className="absolute left-1 top-[3rem]" alt="" />
        <img src="/images/leftimg.svg" className="absolute left-[-20px] top-[12rem]" alt="" />
        <img src="/images/right_img.svg" className="absolute right-1" alt="" />
        <img src="/images/blur.svg" className="absolute top-[40%] right-1" alt="" />
      </div>
      <div className="flex flex-col items-center">

        <img src="/images/cartoon1.svg" className="w-[60%] z-[300]" alt="" />
        <div className="flex flex-col bg-[#232224] gap-1 items-center text-center z-[500] w-full pt-[2%] pb-[10%]">
          <p className="fighting text-[#FCEE21] text-[35px] leading-none">Meet Hero</p>
          <p className="fighting text-[#FFFFFF] text-[35px] leading-none">Your own Kombat</p>
          <p className="text-[#C6C6C6] text-[12px]">Train and nurture your PDOGE to become the ultimate battle king!</p>
          <Link to="/fight">
            <button className="bg-[#935EDB] fighting w-[347px] h-[51px] rounded-[48px] text-[#FCEE21] border-[1px] border-[#FCEE21] mt-3 items-center justify-center">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Onboarding