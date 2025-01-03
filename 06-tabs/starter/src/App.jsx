import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./components/JobInfo";
import { useMemo } from "react";
import Companies from "./components/Companies";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const companies = jobs.map((job) => job.company);
  const [currentJob, setCurrentJob] = useState(null);

  const filterCompanyJob = (company) => {
    setCurrentJob(jobs.find((job) => job.company === company));
  };

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setCurrentJob(newJobs[0]);

      console.log(newJobs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <section className="jobs-center">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <>
          <Companies
            companies={companies}
            filterCompanyJob={filterCompanyJob}
            currentJob={currentJob}
          />
          <JobInfo currentJob={currentJob} />
        </>
      )}
    </section>
  );
};
export default App;
