// import React from 'react'

import { Link } from "react-router-dom"
import Top from "./Reusable/Top"

const Onboarding = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[url(/images/background.svg)]  ">
      <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
      <Top />
      <div className="z-[500] flex flex-col items-center h-[80vh] relative">
        <img src="/images/doge_line.svg" className="absolute top-[-3%]" alt="" />
        <img src="/images/toprectangle.svg" className="absolute left-[-10%] top-[-10%]" alt="" />
        <img src="/images/sun.svg" className="absolute left-1 top-[3rem]" alt="" />
        <img src="/images/right_img.svg" className="absolute right-1" alt="" />
        <img src="/images/blur.svg" className="absolute top-[40%] right-1" alt="" />
        <img src="/images/cartoon.svg" className="w-[90%] absolute top-[-15%]" alt="" />
        <div className="flex flex-col gap-1 items-center text-center absolute bottom-[-8%]">
          <p className="fighting text-[#FCEE21] text-[35px] leading-none">Meet Hero</p>
          <p className="fighting text-[#FFFFFF] text-[35px] leading-none">Your own Kombat</p>
          <p className="text-[#C6C6C6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
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