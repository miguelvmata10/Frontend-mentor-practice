import { useEffect, useState } from "react";
import data from "../../public/data/data.json";
import PlanetImage from "../components/PlanetImage";

interface CurrentDestination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const Destination = () => {
  const [chosenDestination, setChosenDestination] = useState<string>("");
  const [currentDestination, setCurrentDestination] = useState<
    CurrentDestination | undefined
  >();

  useEffect(() => {
    setChosenDestination(data.destinations[0].name);
  }, []);

  useEffect(() => {
    const found = data.destinations.find((f) => f.name === chosenDestination);
    setCurrentDestination(found);
  }, [chosenDestination]);

  return (
    <div className="h-full flex flex-col p-6 md:p-10 lg:p-0 lg:py-5 lg:px-40 lg:gap-12">

      <div className="w-full flex flex-col items-center lg:justify-center gap-9 lg:gap-20">
        <h2 className="w-full font-barlow tracking-widest uppercase text-center md:text-start md:text-lg lg:text-2xl">
          01 pick your destination
        </h2>
        <div className="lg:hidden">
          <PlanetImage src={currentDestination?.images.png!} />
        </div>
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 lg:gap-40 lg:mt-10">

        <div className="hidden lg:block ">
          <PlanetImage src={currentDestination?.images.png!} />
        </div>

        <div className="flex flex-col md:max-w-lg md:mx-auto lg:mx-0 lg:max-w-md gap-6">
          
          <div className="w-full flex flex-col items-center lg:items-start gap-6 mt-6">
            <nav className="w-full flex items-center justify-center lg:justify-start gap-8">
              {data.destinations.map((destination) => (
                <button
                  onClick={() => setChosenDestination(destination.name)}
                  key={destination.name}
                  className={`font-barlow uppercase tracking-widest border-b-2 cursor-pointer border-b-transparent md:text-[17px] ${
                    destination.name === chosenDestination
                      ? "border-b-3 border-b-white"
                      : "hover:border-b-gray-400 duration-150"
                  }`}
                >
                  {destination.name}
                </button>
              ))}
            </nav>
            <h1 className="font-bellefair uppercase text-6xl md:text-8xl">
              {currentDestination?.name}
            </h1>
            <p className="text-center lg:text-start font-barlow md:text-[17px] lg:text-xl">
              {currentDestination?.description}
            </p>
            <hr className="w-full border-[1px] border-[#393a43]" />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between gap-6">
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-barlow uppercase tracking-widest text-lg">
                avg. distance
              </h2>
              <p className="font-bellefair uppercase text-4xl">
                {currentDestination?.distance}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <h2 className="font-barlow uppercase tracking-widest text-lg">
                est. travel time
              </h2>
              <p className="font-bellefair uppercase text-4xl">
                {currentDestination?.travel}
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};
export default Destination;
