// import React from 'react'

import { TbChevronRight } from "react-icons/tb";
import Navigation from "./Reusable/Navigation";
import Top from "./Reusable/Top";
import Top2 from "./Reusable/Top2";

const Fight = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11] relative">
      <div className="h-[65vh] bg-[#232224] clip-slant absolute"> </div>
      <Top />
      <Top2 />
      <div className="z-[500] ">
        <div className="w-full flex items-center justify-center mt-2">
          <div className="flex flex-row w-full items-start gap-3 justify-center">
            <img
              src="/images/money.svg"
              width={"10%"}
              alt=""
              className="mt-[10px]"
            />
            <span className="">
              <p className="text-[37px] font-bold text-white leading-normal">
                109 343
              </p>
              <div className="flex flex-row items-center gap-[5px]">
                <button className="h-[27px] w-[54px] flex flex-row items-center gap-1 bg-gradient-to-tr from-[#9E6CE2] to-[#935EDB] rounded-[7px] text-white pl-3 pr-[11px] pt-[9px] pb-2 border-[0.5px] border-[#E88E1C]">
                  <img src="/images/key.svg" alt="" />
                  <p className="text-[8px]">10</p>
                  <TbChevronRight />
                </button>
                <button className="h-[27px] w-[79px] flex flex-row items-center gap-[2px] bg-[#935EDB] rounded-lg text-white border-[0.5px] border-[#E88E1C] pl-[13px] pr-3 pt-[7px] pb-2">
                  <img
                    src="/images/bina.svg"
                    alt="binance"
                    className="w-3 h-3"
                  />
                  <p className="text-[8px]">Binance</p>
                  <TbChevronRight />
                </button>
              </div>
            </span>
          </div>
        </div>
        <img
          src="/images/home.svg"
          className="w-[70%] absolute z-[500] md:top-[2%] top-[17%] left-[13%]"
          alt=""
        />
        <div className="bg-[#935EDB] md:w-[700px] md:h-[700px] sm:h-[450px] sm:w-[450px] rounded-full opacity-5 blur-lg "></div>
      </div>
      <div className="px-[6%] absolute w-full bottom-[16%]">
        <div className="justify-between flex w-full pr-[5px]">
          <div className="flex flex-row items-center gap-[3px]">
            <img
              src="/images/bronze.svg"
              alt=""
              className="w-[15px] h-[15px]"
            />
            <p className="text-white text-[12px] font-semibold">Bronze</p>
          </div>
          <div className="flex flex-row items-center gap-[3px] text-[12px] font-semibold text-[#935EDB]">
            <img src="/images/level.svg" alt="" />
            <p className="">Level</p>
            <p className="text-white text-[12px]">6/11</p>
          </div>
        </div>
        <div className="bg-[#3F3C35] rounded-lg w-full h-[8px] mt-[7px]">
          <div className="h-[8px] w-[50%] bg-[#FCEE21] rounded-lg"></div>
        </div>
        <div className="w-full flex items-center justify-center mt-[18px]">
          <div className="flex flex-row items-center gap-[13px]">
            <div className="flex flex-row gap-1">
              <img src="/images/level.svg" alt="" />
              <p className="text-[18px] font-semibold text-white">1000/1000</p>
            </div>
            <button className="bg-[#8CCD23] border-[1px] border-[#FCEE21] rounded-full px-3 py-[6px] gap-[5px] flex items-center">
              <img src="/images/boost.svg" alt="" />
              <p className="font-semibold text-white text-[10px]">Boost</p>
            </button>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Fight;
