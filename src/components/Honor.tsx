// import React from 'react'

import Navigation from "./Reusable/Navigation"
import Top from "./Reusable/Top"

const Honor = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[url(/images/background.svg)] bg-no-repeat bg-cover" >
            <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
            <Top/>
            <Navigation/>
        </div >
    )
}

export default Honor