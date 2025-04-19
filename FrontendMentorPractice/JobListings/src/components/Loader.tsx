import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <FaSpinner className="h-9 w-9 text-[#5ca5a5] animate-spin" />
    </div>
  );
};

export default Loader;
