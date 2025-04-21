import xButton from "/assets/shared/icon-close.svg";
import Navlinks from "./Navlinks";

const MobileNavbar = ({
  isHeaderOpen,
  setisHeaderOpen,
}: {
  isHeaderOpen: boolean;
  setisHeaderOpen: (value: boolean) => void;
}) => {
  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`${
          isHeaderOpen ? "flex flex-col" : "hidden"
        } h-full w-2/3 md:hidden fixed bg-gradient-to-r from-black/5 to-black/20 backdrop-blur-2xl z-30`}
      >
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setisHeaderOpen(false)}
            className="cursor-pointer hover:scale-105 duration-150 mb-12 p-7"
          >
            <img src={xButton} alt="x_button" />
          </button>
        </div>
        <Navlinks />
      </nav>
    </>
  );
};
export default MobileNavbar;
