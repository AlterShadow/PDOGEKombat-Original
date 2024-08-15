// import React from 'react'
import Top2 from './Reusable/Top2'
import Top from './Reusable/Top'
import Navigation from './Reusable/Navigation'
// import { TbX } from 'react-icons/tb'

const Airdrop = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11] relative" >
            {/* <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div> */}
            <Top />
            <Top2 />
            <div className="px-[6%] z-[500] mt-3">
                <div className="p-4 rounded-xl bg-[#252423]">
                    <div className="flex flex-col items-center w-full">
                        {/* <button className="w-[20px] h-[20px] bg-[#FCEE21] flex items-center justify-center rounded-md">
                            <TbX />
                        </button> */}
                        <div>
                            <img src="/images/airdrop.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-[20px] font-semibold text-white'>AirDrop</p>
                            <p className='text-[10px] text-[#ABA7A7]'>You can change the language.</p>
                        </div>
                        <button className="w-full text-[14px] fighting py-3 mt-2 text-[#FCEE21] bg-[#A36CEE] rounded-xl">
                           Connect Wallet
                        </button>
                    </div>
                </div>

            </div>
            <Navigation />
        </div>
    )
}

export default Airdrop