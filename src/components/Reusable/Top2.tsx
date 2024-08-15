
import { Link } from 'react-router-dom'

const Top2 = () => {
    const tops = [
        {
            img: "/images/tgift.svg",
            title: "Daily reward",
            link: "/reward"
        },
        {
            img: "/images/cypher.svg",
            title: "Daily cipher",
            link: "/cipher"
        },
        {
            img: "/images/combo.svg",
            title: "Daily combo",
            link: "/combo"
        },
        {
            img: "/images/settings.svg",
            title: "Settings",
            link: "/settings"
        },
        {
            img: "/images/ceo.svg",
            title: "CEO",
            link: "/ceo"
        }
    ]
    return (
        <div className='z-[500] flex flex-row w-full px-[6%] justify-between'>
            {
                tops.map((top, index) => (
                    <Link to={top.link} key={index} className="w-full">
                        <div className='flex flex-col items-center '>
                            <button className='w-[43px] h-[43px] border-b-2 border-[#935EDB] flex items-center justify-center bg-[#252423] rounded-lg'>
                                <img src={top.img} alt={top.title} />
                            </button>
                            <p className='text-[8px] text-white'>{top.title}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Top2