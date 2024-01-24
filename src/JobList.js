import "./JobList.css"
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import LoadingSpinner from "./LoadingSpinner";
import JoblyApi from "./api";

/** JobList component for page to show list of jobs with search
 *
 * Props:
 * -None
 *
 * States:
 * - jobs [{ jobData }, { jobData }, ...]
 * - showLoading (true/false)
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }
 */

function JobList () {
  const [jobs, setJobs] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  console.log("JobList rendered, jobs=", jobs);

  /** Get job list (optional search) */
  async function getJobs(titleSearch=null) {
    const jobsResult = await JoblyApi.getJobs(titleSearch);
    console.log('', jobsResult)

    setJobs(jobsResult);
    setShowLoading(false);
  }

  /** Get all jobs  on initial render. */
  useEffect(function getJobsOnMount() {
    console.log('useEffect called')
    getJobs();
  },[]);


  return (
    <div className="JobList">
      <SearchForm handleSave={getJobs}/>
      {showLoading
        ? <LoadingSpinner />
        : <JobCardList jobs={jobs}/>
      }
    </div>
  );
}

export default JobList;