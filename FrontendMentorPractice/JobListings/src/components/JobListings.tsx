import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import JobCard from "./JobCard";
import { JobType } from "../types/jobType";
import Filters from "./Filters";

const JobListings = ({
  activeStates,
  setActiveStates,
}: {
  setActiveStates: React.Dispatch<React.SetStateAction<string[]>>;
  activeStates: string[];
}) => {
  const [jobListings, setJobListings] = useState<JobType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<JobType[]>("/data/data.json"); // mock API
        setJobListings(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // simular loading da API
    setLoading(true);
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <Loader />
      </div>
    );
  }
  if (error) return <p>Erro: {error.message}</p>;

  const filteredJobs = jobListings.filter((job) => {
    return activeStates.every((filter) =>
      [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
    );
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {activeStates.length > 0 && (
          <Filters
            activeStates={activeStates}
            setActiveStates={setActiveStates}
          />
        )}
      </div>
      <div
        className={`w-full flex flex-col gap-10 ${
          activeStates.length > 0 ? "mt-10" : "mt-20"
        }`}
      >
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            jobData={job}
            setActiveStates={setActiveStates}
            activeStates={activeStates}
          />
        ))}
      </div>
    </div>
  );
};
export default JobListings;
