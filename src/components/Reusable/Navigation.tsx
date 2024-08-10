import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {

    const location = useLocation();
    const pathname = location.pathname;

    const nav = [
        {
            img: "/images/figt.svg",
            title: "Fight",
            path: "/fight"
        },
        {
            img: "/images/train.svg",
            title: "Train",
            path: "/train"
        },
        {
            img: "/images/league.svg",
            title: "League",
            path: "/league"
        },
        {
            img: "/images/quest.svg",
            title: "Quest",
            path: "/quest"
        },
        {
            img: "/images/honor.svg",
            title: "Honor",
            path: "/airdrop"
        }
    ];

    return (
        <div className='px-[6%] grid grid-cols-5 w-full items-center justify-between z-[500] fixed bottom-[20px]'>
            {
                nav.map((item, index) => (
                    <Link to={item.path} key={index} className={`text-[8px] flex flex-col items-center gap-2 ${pathname === item.path ? "text-white font-bold" : "text-[#CACACA]"}`}>
                        <button className={`w-[40px] h-[40px] rounded-md border-[1px] border-[#935EDB] flex items-center justify-center ${pathname === item.path ? "bg-[#935EDB]" : ""}`}>
                            <img src={item.img} alt={item.title} />
                        </button>
                        <p>{item.title}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navigation;
