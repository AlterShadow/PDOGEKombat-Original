import Top2 from "./Reusable/Top2";
import Top from "./Reusable/Top";
import Navigation from "./Reusable/Navigation";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Link } from "react-router-dom";

const Airdrop = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden  flex flex-col bg-[#120F11] relative">
      <Top />
      <Top2 />
      <div className="px-[6%] z-[500] mt-8">
        <div className="p-4 rounded-xl bg-[#252423]">
          <div className="flex flex-col items-center w-full">
            <div>
              <img src="/images/airdrop.svg" alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[20px] font-medium text-white">AirDrop</p>
              <p className="text-[10px] text-[#ABA7A7] text-center font-light">
                Connect your wallet to claim airdrop.
                <br />
                More details soon.
              </p>
            </div>
            <Link to={"/airdrop2"} className="w-full">
              <button className="w-full text-[14px] fighting py-3 mt-2 text-[#FCEE21] bg-[#A36CEE] rounded-xl">
                Connect Wallet
              </button>
            </Link>
            <TonConnectButton />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Airdrop;
