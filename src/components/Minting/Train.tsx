import { useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import GeneralModal from "../Reusable/Modal";
import Content from "../Reusable/Cotent";

const Traintab = () => {
  const [open, setOpen] = useState(false);
  const tabData = [
    {
      img: "/images/gym.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "Gym",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/sparing.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "Sparring",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/karate.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "Karate",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/kendo.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "Taekwondo",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/braz.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "jiu jitsu",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/muay.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "Muay Thai",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/judo.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "kung fu",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
    {
      img: "/images/sambo.svg",
      levImg: "/images/lev.svg",
      lev: "Lev 1",
      monImg: "/images/money.svg",
      amt: "1.5k",
      title: "MMA",
      coinImg: "/images/coin.svg",
      coin: "500 Coin per hour",
    },
  ];

  const handleopenModal = () => {
    setOpen(!open);
  };
  const close = () => {
    setOpen(false);
  };
  return (
    <div className="grid grid-cols-2 gap-3">
      {tabData.map((t, i) => (
        <div
          key={i}
          className="bg-[#252423] p-2 rounded-[11px] border border-[#3B3838]"
        >
          <div onClick={handleopenModal}>
            <div className="flex flex-row w-full justify-between">
              <img src={t.img} alt="" />
              <div className="border-[#3F3D3A] flex border-[1px] p-2 rounded-md gap-2 items-center">
                <span className="flex flex-row items-center gap-1">
                  <img src={t.levImg} alt="" />
                  <p className="text-white text-[8px]">{t.lev}</p>
                </span>
                <div className="w-[0.5px] bg-[#3F3D3A] h-[20px]"></div>
                <span className="flex flex-row items-center gap-1">
                  <img src={t.monImg} alt="" />
                  <p className="text-white text-[8px]">{t.amt}</p>
                </span>
              </div>
            </div>
            <p className="text-[12px] font-semibold text-white">{t.title}</p>
            <div className="flex flex-row justify-between items-center">
              <span className="flex flex-row items-center gap-1">
                <img src={t.coinImg} alt="" />
                <p className="text-white text-[11px] font-semibold">{t.coin}</p>
              </span>
              <TbArrowRight className="font-bold text-[#FCEE21]" />
            </div>
          </div>
        </div>
      ))}
      <p className="h-[120px]"></p>

      {open && (
        <GeneralModal close={close} handleClose={close} content={<Content />} />
      )}
    </div>
  );
};

export default Traintab;
