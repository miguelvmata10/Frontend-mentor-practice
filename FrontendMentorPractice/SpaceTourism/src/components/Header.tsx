import { useState } from "react";
import logo from "/assets/shared/logo.svg";
import iconHamburguer from "/assets/shared/icon-hamburger.svg";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [isHeaderOpen, setisHeaderOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-full lg:items-center h-[88px] md:h-24 lg:h-[136px] overflow-hidden">
        <div className="p-6 z-30">
          <img src={logo} alt="logo" />
        </div>

        <div className="w-full flex justify-end">
          <button
            onClick={() => setisHeaderOpen(true)}
            className="p-6 hover:scale-105 duration-100 cursor-pointer md:hidden"
          >
            <img src={iconHamburguer} alt="header" />
          </button>
          
          <Navbar
            isHeaderOpen={isHeaderOpen}
            setisHeaderOpen={setisHeaderOpen}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
