const Homepage = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row lg:items-end p-6 md:p-32">
      <div className="text-center lg:text-left lg:justify-start flex-1 flex flex-col gap-6">
        <h2 className="font-barlow tracking-widest uppercase text-lg md:text-2xl">
          so, you want to travel
        </h2>
        <h1 className="font-bellefair uppercase text-7xl md:text-8xl">space</h1>
        <p className="font-barlow text-[16px] md:text-lg lg:max-w-[540px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center lg:justify-end">
        <button
          className="font-bellefair bg-white text-black rounded-full w-36 h-36 md:w-64 md:h-64 md:text-2xl 
            hover:shadow-[0_0_0_40px_rgba(255,255,255,0.2)] transition-shadow duration-200 cursor-pointer"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Homepage;
