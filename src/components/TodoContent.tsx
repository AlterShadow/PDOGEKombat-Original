// import React from 'react'

import { Link } from "react-router-dom"

const TodoContent = () => {
    return (
        <div className='flex flex-col items-center justify-center pb-3'>
            <img width={100} height={100} src="/images/earn.svg" alt="" />
            <p className='text-[32px] font-bold text-[#FCEE21] fighting'>Earn Task</p>
            <p className="text-[12px] text-white text-center">We are grateful for boosting our communities, and we hope that you like our educational content. Earn tasks help us grow and are, of course, rewarded</p>
            <Link to={"#"} className='w-full'>
                <button className="w-full text-[14px] fighting py-3 mt-2 text-[#FCEE21] bg-[#A36CEE] rounded-xl">
                    Connect Wallet
                </button>
            </Link>
        </div>
    )
}

export default TodoContent