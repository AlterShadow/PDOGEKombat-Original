import React, { useState } from 'react';
import { TbX } from "react-icons/tb";
import SettinsTop from "./Reusable/SettinsTop";
import Top from "./Reusable/Top";
import Navigation from './Reusable/Navigation';

const Exchange: React.FC = () => {
    const [active, setActive] = useState<number | null>(0);

    const exchange = [
        {
            img: "/images/Binance.svg",
            exchangeName: "Binance"
        },
        {
            img: "/images/Huobi.svg",
            exchangeName: "Huobi"
        },
        {
            img: "/images/okx.svg",
            exchangeName: "OKX"
        },
        {
            img: "/images/up.svg",
            exchangeName: "UpBit"
        },
        {
            img: "/images/coinbase.svg",
            exchangeName: "CoinBase"
        },
        {
            img: "/images/kucoin.svg",
            exchangeName: "KuCoin"
        },
        {
            img: "/images/bybit.svg",
            exchangeName: "ByBit"
        },
        {
            img: "/images/gatecrypto.svg",
            exchangeName: "Gate"
        },
    ];

    const handleButtonClick = (index: number) => {
        setActive(index);
    };

    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11]">
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <SettinsTop />
            <div className="px-[6%] z-[500] mt-3">
                <div className="p-4 rounded-xl bg-[#252423]">
                    <div className="flex flex-row w-full justify-between">
                        <div className="flex flex-col leading-none">
                            <div className="flex flex-row items-center">
                                <img src="/images/purse.svg" alt="" />
                                <p className="text-[20px] font-semibold text-white">Exchange</p>
                            </div>
                            <p className="text-[#ABA7A7] text-[10px]">You can change the exchange.</p>
                        </div>
                        <button className="w-[20px] h-[20px] bg-[#FCEE21] flex items-center justify-center rounded-md">
                            <TbX />
                        </button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {exchange.map((e, i) => (
                            <button
                                key={i}
                                className={`w-full px-4 py-3 rounded-3xl border-2 flex flex-row justify-between items-center ${active === i ? "border-[#935EDB]" : "border-[#8E8383]"}`}
                                onClick={() => handleButtonClick(i)}
                            >
                                <div className="flex flex-row items-center gap-3">
                                    <img src={e.img} alt={e.exchangeName} />
                                    <p className="text-white text-[12px]">{e.exchangeName}</p>
                                </div>

                                {active===i ?
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
            <Navigation/>
        </div>
    );
};

export default Exchange;
