import { JobType } from "../types/jobType";

const JobCard = ({
  jobData,
  setActiveStates,
  activeStates,
}: {
  jobData: JobType;
  setActiveStates: React.Dispatch<React.SetStateAction<string[]>>;
  activeStates: string[];
}) => {
  const handleClickButton = (item: string) => {
    setActiveStates((prev) => (prev.includes(item) ? prev : [...prev, item]));
  };

  const isFilterActive = (filter: string) => {
    return activeStates.includes(filter);
  };

  return (
    <div
      className="relative w-full border-l-5 border-l-transparent flex justify-between items-center bg-[#fefeff] shadow-2xl px-5 py-3 rounded-lg 
                    hover:border-l-[#67a6a6] duration-100"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
          <img
            src={jobData.logo}
            alt={`${jobData.company} logo`}
            className="absolute bottom-10/12 md:static md:bottom-auto w-1/10 md:w-1/6"
          />
          <div className="flex flex-col items-start text-[#66a0a1] gap-3 mt-9 md:mt-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm sm:text-base">
                {jobData.company}
              </span>
              <div className="flex items-center gap-2 text-white text-[10px] md:text-[12px] font-bold">
                {jobData.new && (
                  <span className=" bg-[#66a0a1] rounded-full px-2">NEW!</span>
                )}
                {jobData.featured && (
                  <span className="rounded-full bg-black px-2">FEATURED</span>
                )}
              </div>
            </div>

            <h5 className="font-bold text-black text-sm sm:text-base">
              {jobData.position}
            </h5>

            <div className="w-full justify-between flex items-center text-gray-400 text-sm font-medium gap-2 max-w-2/3 md:max-w-full">
              <span>{jobData.postedAt}</span>
              <span className="text-gray-400">•</span>
              <span>{jobData.contract}</span>
              <span className="text-gray-400">•</span>
              <span>{jobData.location}</span>
            </div>
          </div>

          <hr className="md:hidden w-full text-gray-400 border-1 mb-4" />
        </div>

        <div className="w-full flex items-center justify-end gap-3">
          {[
            jobData.role,
            jobData.level,
            ...jobData.languages,
            ...jobData.tools,
          ].map((item, index) => (
            <button
              onClick={() => handleClickButton(item)}
              key={index}
              className={`font-bold text-sm md:text-base p-1 ${
                isFilterActive(item)
                  ? "bg-[#66a0a1] text-[#eff6f5]"
                  : " bg-[#eff6f5] text-[#66a0a1]"
              } hover:scale-102
                duration-300 cursor-pointer rounded-sm`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default JobCard;
