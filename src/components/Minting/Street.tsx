

import { TbArrowRight } from "react-icons/tb"

const Street = () => {
    const tabData = [
        {
            img: "/images/PDOGE/Rect1.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. local gang",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect2.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. country boss",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect3.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. hidden expert",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect4.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. former champion",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect5.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. dark forces",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect6.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. gang boss",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect7.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. former fighting champion",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },
        {
            img: "/images/PDOGE/Rect8.svg",
            levImg: "/images/lev.svg",
            lev: "Lev 1",
            monImg: "/images/money.svg",
            amt: "+1k",
            title: "VS. national championship champion",
            coinImg: "/images/coin.svg",
            coin: "1K Coin per hour"
        },

    ]
    return (
        <div className="grid grid-cols-2 gap-3">
            {
                tabData.map((t, i) => (
                    <div key={i} className="bg-[#252423] p-2 rounded-lg">
                        <div>
                            <div className="flex flex-row w-full justify-between">
                                <img src={t.img} alt="" />
                                <div className="border-[#3F3D3A] flex border-1 rounded-md gap-2 items-center">
                                    <span className="flex flex-row items-center gap-1">
                                        <img src={t.levImg} alt="" />
                                        <p className="text-white text-[8px]">{t.lev}</p>
                                    </span>
                                    <div className="w-[1px] bg-white h-[20px]"></div>
                                    <span className="flex flex-row items-center gap-1">
                                        <img src={t.monImg} alt="" />
                                        <p className="text-white text-[8px]">{t.amt}</p>
                                    </span>
                                </div>
                            </div>
                            <p className="text-[12px] text-white">{t.title}</p>
                            <div className="flex flex-row justify-between items-center">
                                <span className="flex flex-row items-center gap-1">
                                    <img src={t.coinImg} alt="" />
                                    <p className="text-white text-[11px]">{t.coin}</p>
                                </span>
                                <TbArrowRight className="font-bold text-[#FCEE21]"/>
                            </div>
                        </div>
                    </div>
                ))
            }
            <p className="h-[30px]"></p>
        </div>
    )
}

export default Street