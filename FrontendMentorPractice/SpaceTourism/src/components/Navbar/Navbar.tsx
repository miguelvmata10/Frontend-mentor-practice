import MobileNavbar from "./MobileNavbar";
import DesktopTabletNavbar from "./DesktopTabletNavbar";

const Navbar = ({
  isHeaderOpen,
  setisHeaderOpen,
}: {
  isHeaderOpen: boolean;
  setisHeaderOpen: (value: boolean) => void;
}) => {
  return (
    <>
      {/* Mobile Navbar */}
      <MobileNavbar isHeaderOpen={isHeaderOpen} setisHeaderOpen={setisHeaderOpen} />

      {/* desktop and tablet Navbar */}
      <DesktopTabletNavbar />
    </>
  );
};
export default Navbar;
