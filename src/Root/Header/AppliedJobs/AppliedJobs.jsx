import { useEffect, useState } from "react";




const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs)
  useEffect(()=>{
    const storedJobIds = getStoredJobApplication();
    if(jobs.length > 0){
      const jobsApplied  = jobs.filter(job=> storedJobIds.includes(job.id))
    }
  },[])
  return (
    <div>
      <p>Jobs I applied</p>
    </div>
  );
};

export default AppliedJobs;