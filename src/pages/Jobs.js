import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../features/job/jobApi";
const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery();
  // console.log(data);
  return (
    <div className="pt-14 mx-32">
      <div className="bg-primary/10 p-5 rounded-2xl my-5 text-center">
        <h1 className="font-semibold text-violet-700 text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-5 ">
        {data?.data?.map((item, index) => (
          <JobCard jobData={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
