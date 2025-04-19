const Filters = ({
  activeStates,
  setActiveStates,
}: {
  setActiveStates: React.Dispatch<React.SetStateAction<string[]>>;
  activeStates: string[];
}) => {
  const clearList = () => {
    setActiveStates([]);
  };

  const deleteListState = (state: string) => {
    setActiveStates((prev) => prev.filter((p) => p !== state));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-between gap-4 bg-[#fefeff] shadow-2xl p-4 rounded-lg">
        <div className="flex items-center gap-2 flex-wrap max-w-[600px]">
          {activeStates.map((state) => (
            <div className="flex items-center h-7 font-bold text-sm md:text-base rounded-md">
              <span className="bg-[#eff6f5] h-full text-[#66a0a1] py-1 px-2">
                {state}
              </span>
              <button
                onClick={() => deleteListState(state)}
                className="p-2 text-white h-full bg-[#66a0a1] cursor-pointer flex items-center justify-center hover:bg-[#4a7172] duration-200"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div>
          <span
            onClick={() => clearList()}
            className="font-medium text-[#848f8c] hover:text-black hover:underline duration-200 cursor-pointer"
          >
            Clear
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
