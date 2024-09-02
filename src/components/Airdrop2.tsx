// import React from 'react'

import { TbChevronRight } from "react-icons/tb";
import Navigation from "./Reusable/Navigation";
import Top from "./Reusable/Top";
import Top2 from "./Reusable/Top2";
import { useState } from "react";
import GeneralModal from "./Reusable/Modal";
import TodoContent from "./TodoContent";
import { useTonWallet } from "@tonconnect/ui-react";

interface Item {
  img: string;
  name: string;
  link: string;
}
const Airdrop2 = () => {
  const wallet = useTonWallet();
  const [showmodal, setShowModal] = useState(false);
  const data: Item[] = [
    {
      img: "/images/passive.svg",
      name: "Passive Income",
      link: "/passive",
    },
    {
      img: "/images/earn.svg",
      name: "Earn Task",
      link: "/earn",
    },
    {
      img: "/images/friends.svg",
      name: "Friends",
      link: "/friends",
    },
    {
      img: "/images/archievement.svg",
      name: "Achievement",
      link: "/achievement",
    },
    {
      img: "/images/telegram.svg",
      name: "Telegram Subscription",
      link: "/telegram",
    },
    {
      img: "/images/key2.svg",
      name: "Keys",
      link: "/passive",
    },
  ];
  const handleclick = (item: Item) => {
    if (item.name === "Earn Task") {
      // console.log("hello world")
      setShowModal(true);
    }
  };
  const close = () => {
    setShowModal(false);
  };
  return (
    <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11] relative">
      {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
      <Top />
      <Top2 />
      <div className="px-[6%] z-[500] mt-5">
        <div className="p-4 rounded-xl bg-[#252423] shadow-sm shadow-[#935EDB]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <p className="text-[32px] fighting text-[#FCEE21] font-semibold">
                AirDrop
              </p>
              <p className="text-[12px] fighting text-[#2d84a7] font-semibold">
                {wallet?.account.address}
              </p>
              <p className="text-[12px] text-white">Get an exclusive reward.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {data.map((d, i) => (
              <div
                key={i}
                onClick={() => handleclick(d)}
                className="flex flex-row items-center justify-between p-1 px-2 rounded-[32px] gap-4 w-full border-white border-opacity-20  border-[1px] r"
              >
                <div className="flex flex-row items-center gap-3">
                  <img src={d.img} alt="" className="w-[20px] h-[20px]" />
                  <p className="text-[14px] text-white">{d.name}</p>
                </div>
                <TbChevronRight className="text-white text-opacity-20 font-bold" />
              </div>
            ))}
          </div>
        </div>
        {showmodal && (
          <GeneralModal
            close={close}
            handleClose={close}
            content={<TodoContent />}
          />
        )}
      </div>
      <Navigation />
    </div>
  );
};

export default Airdrop2;
