import {MdLocationOn} from "react-icons/md";
import {AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {

  const {company_name,id,logo,job_title,location,remote_or_onsite, job_type,salary} = job;

  return (
    <div className="card card-compact w-auto p-10 bg-base-100 shadow-xl">
    <figure><img src={logo} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{job_title}</h2>
      <p>{company_name}</p>
      <div className=''>
        <button className='px-4 py-2 font-extrabold border rounded-xl border-[#7E90FE] mr-4'>{remote_or_onsite}</button>
        <button className='px-4 py-2 font-extrabold border rounded-xl mr-4 border-[#7E90FE]'>{job_type}</button>
      </div>
      <div className=" flex gap-2 mt-3">
        <h2 className="flex gap-1"><MdLocationOn className="text-xl"></MdLocationOn>{location}</h2>
        <h2 className="flex gap-1"><AiOutlineDollar className="text-xl"></AiOutlineDollar>{salary}</h2>
      </div>
      <div className="card-actions">

        <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button></Link>
      
      </div>
    </div>
  </div>
  );
};

export default Job;