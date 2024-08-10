// import React from 'react'

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
        <img src="/images/ceo.svg" width={70} alt="" />
        <p className="text-[#FCEE21] text-[30px] fighting">Profit per Hour</p>
        <p className="text-white text-[12px]">Get Maximum Coin</p>
        <div className="flex flex-row gap-4 text-white">
            <span className="flex flex-row items-center gap-1">
                <img src="/images/" alt="" />
                <p className="text-[10px]">Lev 1</p>
            </span>
            <span className="flex flex-row items-center gap-1">
                <img src="/images/money.svg" alt="" />
                <p className="text-[10px]">Lev 1</p>
            </span>
        </div>
        <button className="w-full text-[14px] fighting py-3 mt-2 bg-[#A36CEE] rounded-xl">
            Get Reward
        </button>

    </div>
  )
}

export default Content