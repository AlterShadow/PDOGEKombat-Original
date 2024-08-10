
import Top from './Reusable/Top'
import Navigation from './Reusable/Navigation'

const League = () => {
    return (
        <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[url(/images/background.svg)] bg-no-repeat bg-cover" >
            <div className="w-full h-full bg-black inset-0 bg-opacity-[0.6] absolute"></div>
            <Top/>
            <Navigation/>
        </div >
    )
}

export default League