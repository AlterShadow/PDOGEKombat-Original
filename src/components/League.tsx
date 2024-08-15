
import Top from './Reusable/Top'
import Navigation from './Reusable/Navigation'
import { TbChevronRight } from 'react-icons/tb'
import { IoMdShare } from "react-icons/io";

const League = () => {

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
        }
    ]

    const friendslist = [
        {
            img: "/images/john.svg",
            name: "John",
            username: "@username",
            bal: "456,78,000",
            coin: "/images/coin.svg",
            score: "Current Score"
        },
        {
            img: "/images/thom.svg",
            name: "Thomas",
            username: "@username",
            bal: "456,78,000",
            coin: "/images/coin.svg",
            score: "Current Score"
        },
        {
            img: "/images/jerry.svg",
            name: "Jerry",
            username: "@username",
            bal: "456,78,000",
            coin: "/images/coin.svg",
            score: "Current Score"
        }
    ]

    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11]" >
            <Top />
            <div className='px-[4%] flex flex-col z-[100] h-[72vh] overflow-scroll'>
                <div className="flex flex-col items-center">
                    <p className="fighting uppercase text-[32px] font-bold text-[#FCEE21]">Invite friends!</p>
                    <p className="text-[12px] text-white">you adn your friends will receive bonuses</p>
                </div>
                <div className="flex flex-col gap-4 mt-3">
                    {
                        data.map((d, i) => (
                            <div key={i} className="flex flex-row items-center ">
                                <div className="bg-[url(/images/left.svg)] h-[47px] w-full bg-no-repeat flex flex-row items-center">
                                    <img src={d.img} alt="" />
                                    <div className="text-[8px] ml-1">
                                        <p className="text-white">{d.details}</p>
                                        <span className="flex flex-row items-center text-[#935EDB] text-[8px] ">
                                            <p>{d.reward} </p>
                                            <TbChevronRight />

                                        </span>
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
                    <div className='flex w-full justify-center items-center'>
                        <button className='flex flex-row items-center gap-2 border-[1px] rounded-3xl border-[#E88E1C] bg-[#935EDB] px-4 py-2 text-white'>
                            <IoMdShare />
                            <p>Share Link</p>
                        </button>
                    </div>

                    <div className='w-full items-center flex flex-col gap-2'>
                        <p className='fighting text-[32px] font-bold text-[#FCEE21]'>Your Friend List</p>
                        <div className='bg-[#252423] flex flex-col gap-6 p-2 w-full rounded-lg'>
                            {
                                friendslist.map((f, i) => (
                                    <div key={i} className='flex flex-row justify-between w-full'>
                                        <div className='flex items-center gap-1'>
                                            <img src={f.img} alt="" />
                                            <span className='flex flex-col leading-none'>
                                                <p className='text-[12px] text-white'>{f.name}</p>
                                                <p className='text-[8px] text-[#FCEE21]'>{f.username}</p>
                                            </span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='flex flex-col leading-none'>
                                                <p className='text-[12px] font-semibold text-white'>{f.bal}</p>
                                                <p className='text-[8px] text-[#FCEE21]'>{f.score}</p>
                                            </span>
                                            <img src={f.coin} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Navigation />
        </div >
    )
}

export default League