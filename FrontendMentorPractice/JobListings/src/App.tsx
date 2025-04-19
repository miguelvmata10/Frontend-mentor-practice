import { useState } from "react";
import JobListings from "./components/JobListings";

function App() {
  const [activeStates, setActiveStates] = useState<string[]>([]);

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <header
        className="relative w-full bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)] 
          bg-[#5ca5a5] bg-cover h-16 md:h-24"
      />
      <main className="w-full absolute left-1/2 top-3 md:top-13 transform -translate-x-1/2 flex flex-col max-w-5xl mx-auto items-center p-3">
        <JobListings
          setActiveStates={setActiveStates}
          activeStates={activeStates}
        />
      </main>
    </div>
  );
}

export default App;
