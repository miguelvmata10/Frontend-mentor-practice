import { useState } from "react";
import data from "../../public/data/data.json";

interface TechnologyInterface {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState<
    TechnologyInterface | undefined
  >(data.technology[0]);

  return (
    <div className="flex-1 flex flex-col gap-6 lg:p-10">
      <h2 className="uppercase font-barlow tracking-widest text-center md:text-start md:text-lg p-6">
        03 space launch 101
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-6 mt-10">
        <picture className="lg:order-last">
          <source
            media="(min-width: 1024px)"
            srcSet={currentTechnology?.images.portrait}
          />
          <img
            src={currentTechnology?.images.landscape}
            alt={currentTechnology?.name}
            className="w-full object-cover"
          />
        </picture>

        <div className="flex lg:flex-col justify-center gap-6 px-6">
          {data.technology.map((technology, index) => (
            <button
              onClick={() => setCurrentTechnology(technology)}
              key={technology.name}
              className={`w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border-1 rounded-full cursor-pointer ${
                currentTechnology?.name === technology.name
                  ? "bg-white text-black"
                  : "hover:border-2 hover:bg-gray-500 duration-50"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 items-center px-6 pb-6">
          <h2 className="uppercase font-bellefair text-gray-400 text-xl md:text-2xl">
            the terminology...
          </h2>
          <h1 className="uppercase font-bellefair text-3xl md:text-5xl">
            {currentTechnology?.name}
          </h1>
          <p className="text-center font-barlow max-w-lg md:text-lg">
            {currentTechnology?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Technology;
