import Navlinks from "./Navlinks";

const DesktopTabletNavbar = () => {
  return (
    <nav className="hidden md:w-6/7 md:flex w-full h-full items-center lg:w-1/2 bg-gradient-to-r from-black/5 to-black/20 backdrop-blur-lg z-20 px-7 py-5 lg:py-8">
      <Navlinks />
    </nav>
  );
};
export default DesktopTabletNavbar;
