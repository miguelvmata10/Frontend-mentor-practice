import { useEffect, useState } from "react";
import data from "../../public/data/data.json";

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
    <div className="w-full h-full flex flex-col p-6 md:p-10 gap-6">
      <div className="flex w-full justify-center md:justify-start">
        <h2 className="font-barlow tracking-widest uppercase text-lg md:text-xl">
          01 Pick your destination
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <img
            src={currentDestination?.images.png}
            alt="planet"
            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
          />
        </div>

        <div className="flex flex-col gap-6 items-center justify-center">
          <nav className="flex items-center justify-center mt-2 gap-10">
            {data.destinations.map((destination) => (
              <button
                onClick={() => setChosenDestination(destination.name)}
                className={`font-barlow border-b-2 border-b-transparent ${
                  destination.name === chosenDestination
                    ? "border-b-white"
                    : "hover:border-b-gray-400 duration-150"
                } text-lg uppercase cursor-pointer`}
              >
                {destination.name}
              </button>
            ))}
          </nav>

          <h1 className="font-bellefair text-7xl uppercase">
            {currentDestination?.name}
          </h1>

          <p className="text-center font-barlow text-lg md:max-w-lg">
            {currentDestination?.description}
          </p>

          <hr className="w-full border-[1px] border-[#393a43]" />

          <div className="flex flex-col md:flex-row md:justify-between gap-6">

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
