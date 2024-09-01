// import React from 'react'

// const Languages = () => {
//   return (
//     <div>Languages</div>
//   )
// }

// export default Languages

import React, { useState } from 'react';
import { TbX } from "react-icons/tb";
import SettinsTop from "./Reusable/SettinsTop";
import Top from "./Reusable/Top";
import Navigation from './Reusable/Navigation';

const Languages: React.FC = () => {
    const [active, setActive] = useState<number | null>(0);

    const languages = [
        {
            img: "/images/lang/eng.svg",
            lang: "English"
        },
        {
            img: "/images/lang/italian.svg",
            lang: "Italian"
        },
        {
            img: "/images/lang/bulgarian.svg",
            lang: "Bulgarian"
        },
        {
            img: "/images/lang/japanese.svg",
            lang: "Japanese"
        },
        {
            img: "/images/lang/china.svg",
            lang: "Chinese"
        },
        {
            img: "/images/lang/korean.svg",
            lang: "Korean"
        },
        {
            img: "/images/lang/czech.svg",
            lang: "Czech"
        },
        {
            img: "/images/lang/portugal.svg",
            lang: "Portugese"
        },
        {
            img: "/images/lang/danish.svg",
            lang: "Danish"
        },
        {
            img: "/images/lang/polish.svg",
            lang: "Polish"
        },
        {
            img: "/images/lang/finland.svg",
            lang: "Finish"
        },
        {
            img: "/images/lang/russian.svg",
            lang: "Russian"
        },
        {
            img: "/images/lang/french.svg",
            lang: "French"
        },
        {
            img: "/images/lang/romanian.svg",
            lang: "Romanian"
        },
        {
            img: "/images/lang/germany.svg",
            lang: "German"
        },
        {
            img: "/images/lang/slovakia.svg",
            lang: "Slovakian"
        },
        {
            img: "/images/lang/greek.svg",
            lang: "Greek"
        },
        {
            img: "/images/lang/swedish.svg",
            lang: "Swedish"
        },
        {
            img: "/images/lang/hindi.svg",
            lang: "Hindi"
        },
        {
            img: "/images/lang/turkey.svg",
            lang: "Turkish"
        },
        {
            img: "/images/lang/indonesian.svg",
            lang: "indonesian"
        },
        {
            img: "/images/lang/ukrain.svg",
            lang: "Ukrainian"
        },
    ];

    const handleButtonClick = (index: number) => {
        setActive(index);
    };

    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11]">
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <div className='flex flex-col h-[73vh] overflow-scroll'>
                <SettinsTop />
                <div className="px-[6%] z-[500] mt-3">
                    <div className="p-4 rounded-xl bg-[#252423]">
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex flex-col leading-none">
                                <div className="flex flex-row items-center">
                                    <img src="/images/lang.svg" alt="" />
                                    <p className="text-[20px] font-semibold text-white">Languages</p>
                                </div>
                                <p className="text-[#ABA7A7] text-[10px]">You can change the language.</p>
                            </div>
                            <button className="w-[20px] h-[20px] bg-[#FCEE21] flex items-center justify-center rounded-md">
                                <TbX />
                            </button>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            {languages.map((e, i) => (
                                <button
                                    key={i}
                                    className={`w-full px-2 py-3 rounded-3xl border-2 flex flex-row justify-between items-center ${active === i ? "border-[#935EDB] text-white" : "border-[#8E8383] text-[#8E8383]"}`}
                                    onClick={() => handleButtonClick(i)}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        <img src={e.img} alt={e.lang} />
                                        <p className='text-[12px]'>{e.lang}</p>
                                    </div>

                                    {active === i ?
                                        <div className='w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#935EDB]'>
                                            <div className='w-[10px] h-[10px] rounded-full bg-[#7B48BF]' ></div>
                                        </div>
                                        :

                                        <div className='w-[20px] h-[20px] rounded-full bg-[#8E8383]'></div>

                                    }

                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className='h-[30px]'></div> */}
            </div>
            <Navigation />
        </div>
    );
};

export default Languages;
