// import React from 'react'

import SettinsTop from "./Reusable/SettinsTop"
import Top from "./Reusable/Top"

const Settings = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[url(/images/background.svg)] bg-no-repeat bg-cover relative" >
            <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
            <Top/>
            <SettinsTop/>
        </div>
    )
}

export default Settings