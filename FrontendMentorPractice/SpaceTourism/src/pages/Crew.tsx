import { useState } from "react";
import data from "../../public/data/data.json";

interface CrewInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const Crew = () => {
  const [currentCrewMember, setCurrentCrewMember] = useState<
    CrewInterface | undefined
  >(data.crew[0]);

  const handleButtonClick = (member: CrewInterface) => {
    setCurrentCrewMember(member);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row justify-between gap-6 p-6 md:p-10 lg:p-0 lg:py-8 lg:px-36">

      <div className="flex-1 flex flex-col lg:justify-between lg:items-start gap-6">
        <h2 className="uppercase font-barlow tracking-widest text-center mb-4 md:text-start md:text-lg">
          02 meet your crew
        </h2>

        <div className="text-center lg:text-start md:max-w-lg mx-auto lg:mx-0">
          <h2 className="uppercase font-bellefair text-lg text-gray-400 md:text-xl lg:text-2xl">
            {currentCrewMember?.role}
          </h2>
          <h1 className="uppercase font-bellefair text-2xl md:text-4xl lg:text-5xl">
            {currentCrewMember?.name}
          </h1>
          <p className="font-barlow mt-6 lg:text-lg">{currentCrewMember?.bio}</p>
        </div>

        <div className="flex gap-6 mt-4 justify-center">
          {data.crew.map((member) => (
            <button
              onClick={() => handleButtonClick(member)}
              key={member.name}
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer ${
                currentCrewMember?.name === member.name
                  ? "bg-white"
                  : "bg-gray-500 hover:bg-gray-300 duration-150"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={currentCrewMember?.images.png}
          alt={`${currentCrewMember?.name} photo`}
          className="object-contain max-w-6/9 lg mask-b-from-70%"
        />
      </div>

    </div>
  );
};
export default Crew;
