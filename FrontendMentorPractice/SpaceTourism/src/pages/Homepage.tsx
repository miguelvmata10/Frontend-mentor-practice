const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center p-6 md:p-0 md:px-10 md:py-32 lg:p-32">
      <div className="flex flex-col gap-5 items-center flex-1 lg:justify-start lg:items-start">
        <h2 className="font-barlow tracking-widest text-lg md:text-2xl uppercase">
          So, you want to travel to
        </h2>
        <h1 className="font-bellefair text-8xl md:text-9xl uppercase">Space</h1>
        <p className="text-center text-lg md:text-xl font-barlow lg:max-w-lg lg:text-start">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex flex-1 items-center lg:justify-end">
        <button
          className="text-center text-lg md:text-3xl font-bellefair uppercase bg-white text-black 
          rounded-full w-32 h-32 md:w-[200px] md:h-[200px] 
          cursor-pointer hover:shadow-[0_0_0_60px_rgba(255,255,255,0.2)] transition duration-250"
        >
          Explore
        </button>
      </div>
    </div>
  );
};
export default Homepage;
