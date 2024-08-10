// import React from 'react'
import CEOTop from './Reusable/CeoTop'
import Navigation from './Reusable/Navigation'
import Top from './Reusable/Top'

const Ceo = () => {
    const ceoimages =
        [
            {
                img: "/images/unlockimg.svg"
            },
            {
                img: "/images/lockitem.svg"
            },
            {
                img: "/images/lockitem.svg"
            },
            {
                img: "/images/lockitem.svg"
            },
            {
                img: "/images/unlockimg.svg"
            },
            {
                img: "/images/lockitem.svg"
            },
            {
                img: "/images/lockitem.svg"
            },
            {
                img: "/images/lockitem.svg"
            },
        ]

    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[url(/images/background.svg)] bg-no-repeat bg-cover relative" >
            <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
            <Top />
            <CEOTop />
            <div className='px-[4%] flex flex-col z-[500]'>
                <img src="/images/ceonew.svg" className='absolute w-[90%] left-2 top-[3%]' alt="" />
                <div className='grid grid-cols-4 w-[90%] gap-5 absolute bottom-[14%] left-5'>
                    {
                        ceoimages.map((c, i)=>(
                            <img key={i} src={c.img} alt="" />
                        ))
                    }
                </div>
            </div>
            <Navigation />
        </div>
    )
}

export default Ceo