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
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-black bg-no-repeat bg-cover relative" >
            <Top />
            {/* <div className='h-[70vh] bg-red-400 overflow-y-scroll'> */}
                <CEOTop />
                <div className='px-[4%] flex flex-col z-[500]'>
                    <img src="/images/ceonew.svg" className='absolute w-[90%] left-2 top-[3%]' alt="" />
                    <div className='grid grid-cols-4 w-[90%] gap-5 absolute bottom-[17%] left-5'>
                        {
                            ceoimages.map((c, i) => (
                                <img key={i} src={c.img} alt="" />
                            ))
                        }
                    </div>
                </div>
                <div className='h-[30px]'></div>
            {/* </div> */}
            <Navigation />
        </div>
    )
}

export default Ceo