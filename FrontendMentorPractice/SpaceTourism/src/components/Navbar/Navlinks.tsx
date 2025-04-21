import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const { pathname } = useLocation();

  const isActive = (urlPathname: string) => pathname === urlPathname;

  const getLinkClasses = (path: string) =>
    `${
      isActive(path) ? "md:border-b-4 border-r-4" : ""
    } md:border-r-0 hover:scale-102 duration-150 text-md font-barlow tracking-widest`;

  return (
    <div className="flex w-full flex-col md:flex-row md:justify-between md:mx-14 lg:mx-7 pl-8 md:pl-0 gap-8">
      <Link to="/" className={getLinkClasses("/")}>
        <strong>00</strong> HOME
      </Link>
      <Link to="/destination" className={getLinkClasses("/destination")}>
        <strong>01</strong> DESTINATION
      </Link>
      <Link to="/crew" className={getLinkClasses("/crew")}>
        <strong>02</strong> CREW
      </Link>
      <Link to="/technology" className={getLinkClasses("/technology")}>
        <strong>03</strong> TECHNOLOGY
      </Link>
    </div>
  );
};

export default Navlinks;
