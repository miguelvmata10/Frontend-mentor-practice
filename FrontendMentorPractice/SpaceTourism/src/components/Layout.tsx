import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const { pathname } = useLocation();
  const path = pathname.toLowerCase();

  // mapeia cada rota para a string de classes do background
  const bgClassesMap: Record<string,string> = {
    "/": `
      bg-[url('/assets/home/background-home-mobile.jpg')]
      md:bg-[url('/assets/home/background-home-tablet.jpg')]
      lg:bg-[url('/assets/home/background-home-desktop.jpg')]
    `,
    "/destination": `
      bg-[url('/assets/destination/background-destination-mobile.jpg')]
      md:bg-[url('/assets/destination/background-destination-tablet.jpg')]
      lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]
    `,
    "/crew": `
      bg-[url('/assets/crew/background-crew-mobile.jpg')]
      md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
      lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]
    `,
    "/technology": `
      bg-[url('/assets/technology/background-technology-mobile.jpg')]
      md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
      lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]
    `,
  };

  // se não existir, usa o da homePage como fallback
  const bgClass = bgClassesMap[path] ?? bgClassesMap["/"];

  return (
    <div className={`min-h-screen bg-cover bg-center bg-no-repeat ${bgClass}`}>
      <main className="w-screen h-screen flex flex-col text-white">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
