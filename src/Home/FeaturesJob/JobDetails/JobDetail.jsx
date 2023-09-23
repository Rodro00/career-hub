import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/AppliedJob";

const JobDetail = () => {
  const jobs = useLoaderData()
  // console.log(jobs)
  const {id} = useParams();
  const intId = parseInt(id);
  const job = jobs.find(job=>job.id == intId);
  // console.log(job,intId)
  const handleApply= ()=>{
    saveJobApplication(id);
     toast('done')
  }
  return (
    <div>
      <h1 className="text-4xl text-center p-4 font-bold">Job Details:{id}</h1>
      <div className="md:flex gap-4 m-4 ">
        <div className=" border w-2/3 bg-state-500 rounded-lg shadow-xl">
          <h1 className="py-4 p-4"><span className="font-bold">Job Description</span>: {job.job_description}</h1>
          <p className="py-4 p-4"><span className="font-bold">Job Responsability</span>: {job.job_responsibility}</p>
          <p className="py-4 p-4"><span className="font-bold">Edication Requirement</span>: {job.educational_requirements}</p>
          <p className="p-4 py-4"><span className="font-bold">Experience</span>:   {job.experiences}</p>
        </div>
        <div className=" border w-1/3 rounded-lg  bg-[#8833ff]">
          <div className="mt-40 ">
          <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetail;